import { Component } from "react";
import React from "react";

const WithLoggingHOC = (WrappedComponent) => {
    const name = WrappedComponent.name;
    class NewComponent extends Component {
        componentDidMount() {
            console.log(`Component ${name} was mounted`);
        }

        componentWillUnmount() {
            console.log(`Component ${name} is going to unmount`);
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    }
    NewComponent.displayName = `WithLogging(${name})`;
    return NewComponent;
}