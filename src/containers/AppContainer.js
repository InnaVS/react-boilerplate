import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <a
            className="center"
            href="/child">
            <span>to ChildContainer</span>
            <i className="fa fa-fw fa-lg fa-hand-o-right" />
          </a>
        </header>
      </div>
    );
  }
}

export default App;
