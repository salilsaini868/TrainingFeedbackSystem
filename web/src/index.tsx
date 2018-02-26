import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import ManageFeedback from './admin/managefeedback.component';
import FeedbackForm from './trainerfeedback/feedback.component';

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route exact={true} path="/" component={ManageFeedback} />  
        <Route path="/feedback" component={FeedbackForm} />        
      </Switch>
    </App>
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
