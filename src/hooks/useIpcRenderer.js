import { useEffect } from 'react'
const { ipcRenderer } = window.require('electron')

/**
 * ipcRenderer 的事件对象的注册和注销
 * @param keyCallbackMap
 */
const useIpcRenderer = (keyCallbackMap) => {
  useEffect(() => {
    Object.keys(keyCallbackMap).forEach(key => {
      ipcRenderer.on(key, keyCallbackMap[key])
    })
    return () => {
      Object.keys(keyCallbackMap).forEach(key => {
        ipcRenderer.removeListener(key, keyCallbackMap[key])
      })
    }
  })
}

export default useIpcRenderer
