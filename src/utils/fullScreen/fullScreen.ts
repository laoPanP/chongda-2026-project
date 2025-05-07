import type { ExtendedDocument, ExtendedHTMLElement } from './fullScreenType.ts'
export const useFullscreen = () => {
  /**
   * 进入全屏模式
   * @param ele 需要全屏的DOM元素
   */
  const enter = async (ele: ExtendedHTMLElement): Promise<void> => {
    try {
      if (ele.requestFullscreen) {
        await ele.requestFullscreen()
      } else if (ele.mozRequestFullScreen) {
        await ele.mozRequestFullScreen()
      } else if (ele.webkitRequestFullscreen) {
        await ele.webkitRequestFullscreen()
      } else if (ele.msRequestFullscreen) {
        await ele.msRequestFullscreen()
      }
    } catch (err) {
      console.error('全屏请求失败:', err)
    }
  }

  /**
   * 退出全屏模式
   */
  const exit = async (): Promise<void> => {
    const doc = document as ExtendedDocument
    try {
      if (doc.exitFullscreen) {
        await doc.exitFullscreen()
      } else if (doc.mozCancelFullScreen) {
        await doc.mozCancelFullScreen()
      } else if (doc.webkitExitFullscreen) {
        await doc.webkitExitFullscreen()
      } else if (doc.msExitFullscreen) {
        await doc.msExitFullscreen()
      }
    } catch (err) {
      console.error('退出全屏失败:', err)
    }
  }

  /**
   * 检查当前是否全屏
   */
  const isFull = (): boolean => {
    return !!fullEle()
  }

  /**
   * 获取当前全屏元素
   */
  const fullEle = (): Element | null => {
    const doc = document as ExtendedDocument
    return (
      doc.fullscreenElement ||
      doc.mozFullScreenElement ||
      doc.msFullscreenElement ||
      doc.webkitFullscreenElement ||
      null
    )
  }

  /**
   * 切换全屏状态
   * @param ele 需要切换的DOM元素
   */
  const toggle = async (ele: ExtendedHTMLElement): Promise<void> => {
    if (isFull()) {
      await exit()
    } else {
      await enter(ele)
    }
  }

  return {
    enter,
    exit,
    isFull,
    fullEle,
    toggle
  }
}
