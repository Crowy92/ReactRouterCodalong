import React from 'react'
import {Link, Outlet} from 'react-router-dom'

export default function People() {
  return (
    <div>
      <h1>Handy List of Pirates</h1>
      <br/>
      <Link to="Thamiem">Thamiem</Link>
      <br/>
      <Link to="Oli">Oli</Link>
      <br/>
      <Link to="Brendan">Brendan</Link>
      <Outlet/>
    </div>
  )
}
