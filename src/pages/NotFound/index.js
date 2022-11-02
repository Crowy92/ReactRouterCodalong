import React from 'react'
import { useLocation, Link } from 'react-router-dom'

export default function NotFound() {
  const location = useLocation()
  return (
    <>
      <h3>You are lost at sea me hearties! Last known spot from the crows nest was {location.pathname}</h3>
      <Link to="/">Go back to dry land</Link>
    </>
  )
}
