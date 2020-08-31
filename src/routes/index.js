import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GetInTouch from 'pages/GetnTouch/GetInTouch';
import LandingPage from 'pages/landing-page/landing-page.page';

export default function Routes() {
  return (
    <div style={{ position: 'relative', top: '0' }}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/get-in-touch" component={GetInTouch} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
