import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onUp}>Up Vote</button>
        <button onClick={this.props.onDown}>Down Vote</button>
      </div>
    );
  }
}

export default Button;