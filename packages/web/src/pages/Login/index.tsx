import React,{ memo } from 'react'
import Demo from './demo';
import './index.css';
export default memo(function Login() {
    return (
        <div className='flex justify-center h-96 my-20 out'>
            <div className='flex flex-col'>
                <div className='tittle'>麦荣MYROOM</div>
                <div className='login'>
                    <Demo></Demo>
                </div>
            </div>
        </div>

    )
})