import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/fileup'>파일업로드공부</NavLink></li>
        <li><NavLink to='/create'>출석부작성</NavLink></li>
        <li><NavLink to='/'>로그아웃</NavLink></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">SM</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedInLinks