import { useState, useEffect, useCallback } from 'react'

/**
 * 监听 keyup keydown 事件，如果为 targetKeyCode 则设置是否触发点击 true false
 * @param targetKeyCode
 * @return {boolean}
 */
const useKeyPress = (targetKeyCode) => {
  const [keyPressed, setKeyPressed] = useState(false)

  const keyDownHandler = useCallback(({ keyCode }) => {
    if(keyCode === targetKeyCode) {
      setKeyPressed(true)
    }
  }, [targetKeyCode])
  const keyUpHandler = useCallback(({ keyCode }) => {
    if(keyCode === targetKeyCode) {
      setKeyPressed(false)
    }
  }, [targetKeyCode])
  useEffect(() => {
    console.log('useEffect')
    document.addEventListener('keydown', keyDownHandler)
    document.addEventListener('keyup', keyUpHandler)
    return () => {
      document.removeEventListener('keydown', keyDownHandler)
      document.removeEventListener('keyup', keyUpHandler)
    }
  }, [keyDownHandler, keyUpHandler])
  return keyPressed
}

export default useKeyPress
