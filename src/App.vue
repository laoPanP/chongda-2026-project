<template>
  <!-- 保持原有模板结构不变 -->
  <div class="todo-container">
    <h1 class="title">Todo List</h1>
    <div class="input-group">
      <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new task" class="todo-input" />
      <button @click="addTodo" class="add-button">Add</button>
    </div>

    <ul class="todo-list">
      <li v-for="todo in todos" :key="todo.id" class="todo-item" :class="{ completed: todo.completed }">
        <span class="todo-text" @click="toggleComplete(todo.id)">
          {{ todo.text }}
        </span>
        <button @click="deleteTodo(todo.id)" class="delete-button">×</button>
      </li>
    </ul>

    <p class="counter">Total tasks: {{ todos.length }}</p>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  // 定义类型
  interface TodoItem {
    id: number
    text: string
    completed: boolean
  }

  // 响应式数据
  const newTodo = ref<string>('')
  const todos = ref<TodoItem[]>([])

  // 添加待办事项
  const addTodo = (): void => {
    const text = newTodo.value.trim()
    if (text) {
      todos.value.push({
        id: Date.now(),
        text: text,
        completed: false
      })
      newTodo.value = ''
    }
  }

  // 删除待办事项
  const deleteTodo = (id: number): void => {
    todos.value = todos.value.filter((todo) => todo.id !== id)
  }

  // 切换完成状态
  const toggleComplete = (id: number): void => {
    const todo = todos.value.find((todo) => todo.id === id)
    if (todo) {
      todo.completed = !todo.completed
    }
  }
</script>

<style lang="scss">
  @use 'sass:color';

  // Variables
  $primary-color: #2c3e50;
  $secondary-color: #42b983;
  $danger-color: #ff4757;
  $border-radius: 4px;

  .todo-container {
    padding: 1.5rem;
    margin: 2rem auto;
    max-width: 600px;
    font-family: Avenir, Helvetica, Arial, sans-serif;

    .title {
      margin-bottom: 1.5rem;
      text-align: center;
      color: $primary-color;
    }

    .input-group {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1.5rem;

      .todo-input {
        padding: 0.8rem;
        font-size: 1rem;
        border: 1px solid #ddd;
        border-radius: $border-radius;
        flex: 1;

        &:focus {
          border-color: $secondary-color;
          outline: none;
          box-shadow: 0 0 0 2px rgba($secondary-color, 0.2);
        }
      }

      .add-button {
        padding: 0.8rem 1.5rem;
        color: white;
        background-color: $secondary-color;
        border: none;
        border-radius: $border-radius;
        transition: background-color 0.2s;
        cursor: pointer;

        &:hover {
          background-color: color.adjust($secondary-color, $lightness: -10%);
        }
      }
    }

    .todo-list {
      padding: 0;
      margin: 0;
      list-style: none;

      .todo-item {
        display: flex;
        align-items: center;
        padding: 0.8rem;
        margin-bottom: 0.5rem;
        background-color: #f8f9fa;
        border-radius: $border-radius;
        transition: background-color 0.2s;

        &:hover {
          background-color: #e9ecef;
        }

        &.completed {
          .todo-text {
            text-decoration: line-through;
            color: #6c757d;
          }
        }

        .todo-text {
          flex: 1;
          cursor: pointer;
          user-select: none;
        }

        .delete-button {
          padding: 0 0.5rem;
          font-size: 1.5rem;
          color: $danger-color;
          background: none;
          border: none;
          transition: color 0.2s;
          cursor: pointer;

          &:hover {
            color: color.adjust($danger-color, $lightness: -15%);
          }
        }
      }
    }

    .counter {
      margin-top: 1rem;
      text-align: center;
      color: #6c757d;
    }
  }

  .example {
    position: relative;
    padding: 0;
    margin: 0;
    font-size: 16px; // 按你的配置，font-size 应该在 color 之前
    color: red;
  }
</style>
