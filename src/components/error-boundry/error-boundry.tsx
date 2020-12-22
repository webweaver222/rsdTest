import React, { Component } from "react";
import styled from 'styled-components'


const ErrorIndicatior  = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column
`


export default class ErrorBoundry extends Component {
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError)
      return <ErrorIndicatior>
        <h2>Ops.. Something happend</h2>
        <span>Try to reload</span>

      </ErrorIndicatior>

    return this.props.children;
  }
}
