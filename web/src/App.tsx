import * as React from 'react';
import './assets/css/style.css';

class App extends React.Component {
  render() {
    return (
      <div className="content">
        <h2>Trainer Feedback</h2>
        <div className="main">
          <div className="form-main">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
