import React from 'react';

class Label extends React.Component {
  render() {
    return (
      <h4>Votes: {this.props.votes}</h4>
    );
  }
}

export default Label;