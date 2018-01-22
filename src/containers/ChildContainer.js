import React, {Component} from 'react';

class ChildContainer extends Component {
  render() {
    return (
      <div>
        <header>
          <a
            className="center"
            href="/">
            <span>to AppContainer</span>
            <i className="fa fa-fw fa-lg fa-hand-o-left"/>
          </a>
        </header>
      </div>
    );
  }
}

export default ChildContainer;