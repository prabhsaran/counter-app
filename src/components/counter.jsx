import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 10, //10px
    fontWeight: "bold"
  };

  constructor(props) {
    super(props);
    console.log('Counter - Constructor');
    console.log('Counter Props', props);
    console.log('\n');
    //this.handleIncrement = this.handleIncrement.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log('prevProps', prevProps);
    //console.log('prevState', prevState);
  }

  componentDidMount() {
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    let product = 1;

    return (

      <div className="row">
        <div className="col-1">
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>

        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm mr-2">
            +
            </button>

          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm mr-2 "
            disabled={this.isDisabled()}>
            -
            </button>

          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm">
            Delete 
            </button>

        </div>
      </div>


    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  isDisabled() {
    if (this.props.counter.value === 0) {
      return true;
    }
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
