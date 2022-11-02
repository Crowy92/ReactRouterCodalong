import React from 'react'
import { NavLink } from 'react-router-dom'
import BackButton from '../../components/BackButton';
import './style.css';

export default function Header() {
  const activeClass = ({isActive}) => isActive ? 'current' : undefined 
  return (
    <>
      <ul>
        <li><NavLink className={activeClass}
        to="/">Home</NavLink></li>
        <li><NavLink  className={activeClass}
        to="/people">People</NavLink></li>
        <li><NavLink  className={activeClass}
        to="/about">About</NavLink></li>
      </ul>
      <BackButton/>
    </>
  )
}
