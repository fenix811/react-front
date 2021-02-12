import * as React from 'react';
import ReactDOM from 'react-dom';

export const portalRoot = document.getElementById("adminMessages") as HTMLElement;

export default class Messages extends React.Component {
  el: HTMLElement = document.createElement("div");

  componentDidMount() {
    portalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    portalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}