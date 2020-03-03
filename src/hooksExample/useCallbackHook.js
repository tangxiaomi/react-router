// usecallback 目的是为了缓存方法(useMemo是为了缓存变量)
import React, { useState ,useEffect ,useCallback } from 'react';
function useWinSize(){
  const [ size , setSize] = useState({
      width:document.documentElement.clientWidth,
      height:document.documentElement.clientHeight
  })

  const onResize = useCallback(()=>{
      setSize({
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight
      })
  },[]) 
  useEffect(()=>{
      window.addEventListener('resize',onResize)
      return ()=>{
          window.removeEventListener('resize',onResize)
      }
  },[])

  return size;

}

function CallBack(){

  const size = useWinSize()
  return (
      <div>页面Size:{size.width}x{size.height}</div>
  )
}

export default CallBack; 
