import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import {Fragment} from "react";
import ErrorBoundary from "../utils/ErrorBoundary";

function Layout(props) {
    return (
        <Fragment>
            <ErrorBoundary>
                <MainNavigation/>
                <main className={classes.main}>{props.children}</main>
            </ErrorBoundary>
        </Fragment>
    );
}

export default Layout;
