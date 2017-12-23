import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import { BrowserRouter, Route } from 'react-router-dom';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={Main} />
        <Route exact path="/" component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </div>
    </BrowserRouter>
  )
}

render (
  <Root />,
  document.getElementById('root')
)
