import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        console.log("Error from ErrorBoundary: ", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <>
                    <h1>Something went wrong.</h1>
                    <br/>
                    <div>{this.state.error}</div>
                    <br/>
                    <div>{this.state.errorInfo}</div>
                </>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;