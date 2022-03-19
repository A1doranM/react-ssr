import React from "react";

function Spinner({active}) {
    return (
        <div
            className={["spinner", active && "spinner--active"].join(" ")}
            role="progressbar"
            aria-busy={active ? "true" : "false"}
        />       
    );
}

export default Spinner;