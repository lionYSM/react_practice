import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/signup'>회원가입</NavLink></li>
        <li><NavLink to='/signin'>로그인</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks