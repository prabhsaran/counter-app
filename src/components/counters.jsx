import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {

  constructor(props) {
    super(props);
    console.log('Counters - Constructor');
    console.log('Counters Props', props);
    console.log('\n');
  }

  componentDidMount() {
    console.log('Counters - Mounted');
  }

  render() {
    const { onReset, counters, onDelete, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}>
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
