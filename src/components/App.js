import React from 'react';
import Label from './Label';
import Button from './Button';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      votes: 0
    };

    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
  }

  handleUp() {
    this.setState(prevState => {
      return {
        votes: prevState.votes + 1
      };
    });
  }

  handleDown() {
    this.setState(prevState => {
      return {
        votes: Math.max(prevState.votes - 1, 0)
      };
    });
  }

  render() {
    return (
      <div>
        <Label votes={this.state.votes} />
        <Button onUp={this.handleUp} onDown={this.handleDown} />
      </div>
    );
  }
}

export default App;