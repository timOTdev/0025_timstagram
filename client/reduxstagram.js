import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route path="/" component={App} />
          {/* <Route exact path="/" component={PhotoGrid} /> */}
          {/* <Route path="/view/:postId" component={Single} /> */}
        </div>
      </BrowserRouter>
    </Provider>
  )
}

render (
  <Root />,
  document.getElementById('root')
)
