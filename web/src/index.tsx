import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { I18nextProvider } from 'react-i18next';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import ManageFeedback from './admin/managefeedback.component';
import FeedbackForm from './trainerfeedback/feedback.component';
import i18n from './i18n';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './theme';
import Dnd from 'trainerfeedback/dnd.component';

ReactDOM.render(
  <Router>
    <I18nextProvider i18n={i18n}>
      <MuiThemeProvider theme={theme}>
        <App>
          <Switch>
            <Route exact={true} path="/" component={ManageFeedback} />
            <Route path="/feedback" component={FeedbackForm} />
            <Route path="/dnd" component={Dnd} />
          </Switch>
        </App>
      </MuiThemeProvider>
    </I18nextProvider>
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
