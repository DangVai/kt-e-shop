import React from "react";
import Square from "./chillren";

function ParentComponent() {
    const size = "100px";
    const color = "red";

    return <Square width={size} bgColor={color} />;
}

export default ParentComponent;