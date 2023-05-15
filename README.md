# Electron（v24） + React（v18）
## 技术栈
- Electron v24
- React v18
- bootstrap
- node-sass

## 开发环境
- electron-is-dev：判断是否开发环境
- concurrently：命令联动
  - 进程结束后，主动 kill npm start 占用的端口
  - 适配多平台，命令行提示完整
- wait-on：命令联动，同步串行执行
- cross-env：跨平台设置环境变量
- nodemon：nodejs 代码热更新

## 工具库
- fontawesome：svg 库
- classnames：class 拼接
- electron-store：数据持久化方案，以本地文件的方式存储数据
