import React, { useEffect, useState } from 'react'
import './Navigation.css'
import Front from './Front'
import Second from './Second'
export default function Navigation() {
    let [showFront,setShowFront] = useState(true)
    useEffect(()=>{
        
    })
    function tabClick(){
    
    }
  return (
    <>
        <div className="navigate">
            <button onClick={tabClick}>Front</button>
            <button onClick={tabClick}>Second</button>
        </div>
        <div className='content'>
            {showFront ? <Front/>:<Second/>}
        </div>
    </>
  )
}
