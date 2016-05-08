"use strict";

import React, { Component, PropTypes } from 'react';

export default class Countup extends Component {
  render() {
    const {counter, countup} = this.props;
    return (
      <div>
                <div>
                    <input type='button' value='countup' onClick={countup} />
                </div>
                <div>
                    {counter}
                </div>
            </div>
      );
  }
}

Countup.proptypes = {
  counter: PropTypes.string.isRequired,
  countup: PropTypes.func.isRequired
};
