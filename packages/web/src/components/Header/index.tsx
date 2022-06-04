import React, { memo, useState } from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'
import { headerDetail } from '../../data/index.'

export default memo(function CHeader() {
  const [isLogin] = useState(true)
  console.log(isLogin)
  return (
    <div className="header">
      {headerDetail.map((item, index) => {
        return (
          <div key={item.title}>
            <NavLink style={{ color: 'beige' }} key={index} to={item.link}>
              {item.title}
            </NavLink>
          </div>
        )
      })}
      {isLogin ? <div style={{ color: 'beige' }}>欢迎XXX回来</div> : null}
    </div>
  )
})
