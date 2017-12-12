import React, { Component } from 'react';
import { themr } from 'react-css-themr';

@themr('Button')
class Button extends Component {
  render() {
    const { theme, icon, children } = this.props;
    return (
      <button className={theme.container}>
        { icon ? <i>{icon}</i> : null}
        <span>{children}</span>
      </button>
    );
  }
}

export default Button;