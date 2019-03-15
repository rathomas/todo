import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TestItems: []
    }
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  clickHandler = (event) => {
    alert(`${this.props.data.name} clicked!`);
  };

  render() {
    return (
      <div className={cn("Test", this.props.classes)} onClick={this.clickHandler}>
        {this.props.data.name}
      </div>
    );
  }
}

Test.propTypes = {
  classes: PropTypes.string,
  data: PropTypes.object.isRequired
};

export default Test;
