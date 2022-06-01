import React,{ memo } from 'react'
import "./style.css"
export default memo(function MyInfo() {
    return (
        <div className='info-content'>
            <div>
                <div><h1>个人信息</h1></div>   
                <div>
                    <div>用户名</div>
                    <input></input>
                </div>
                <div>
                    <div>密码</div>
                    <input></input>
                </div>
                <div>
                    <button>修改</button>
                </div>      
            </div>
        </div>
    )
})