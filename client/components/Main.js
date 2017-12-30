import React from 'react'
import { Route, Link } from 'react-router-dom'
import PhotoGrid from './PhotoGrid'
import Single from './Single'

const Main = () => {
  return (
    <div>
      <h1>
        <Link to="/">Timstagram</Link>
      </h1>
      
      <Route exact path="/" component={PhotoGrid} />
      <Route path="/view/:postId" component={Single} />
    </div>
  )
}

export default Main