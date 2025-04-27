const npmExecPath = process.env.npm_execpath || ''
const isPnpm = npmExecPath.includes('pnpm')

if (!isPnpm) {
  console.warn('\x1b[33m此仓库必须使用 pnpm 作为包管理器。\x1b[0m')
  process.exit(1)
}
