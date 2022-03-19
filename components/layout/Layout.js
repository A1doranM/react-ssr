import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import {Suspense} from "react";
import ErrorBoundary from "../utils/ErrorBoundary";
import Spinner from "../utils/Fallback";

function Layout(props) {
    return (
        <div>
            <Suspense fallback={Spinner}>
                <ErrorBoundary>
                    <MainNavigation/>
                    <Suspense fallback={Spinner}>
                        <main className={classes.main}>{props.children}</main>
                    </Suspense>
                </ErrorBoundary>
            </Suspense>
        </div>
    );
}

export default Layout;
