import React, { useEffect, useState } from "react";
import throttle from 'lodash/throttle';

const withCursorPosition = (Component, options) => {

    const throttleBySeconds = options?.throttleByMilliseconds || 0;

    const ComponentWithCursorPosition = (props) => {
        const [cursorPosition, setMousePosition] = useState(null);

        const handleMouseMove = throttle(event => {
            setMousePosition({
                x: event.clientX,
                y: event.clientY,
            });
        }, throttleBySeconds);

        useEffect(() => {
            document.addEventListener("mousemove", handleMouseMove);

            return () => document.removeEventListener("mousemove", handleMouseMove);
        }, []);

        return <Component {...props} cursorPosition={cursorPosition} />;
    };

    return ComponentWithCursorPosition;
};

export { withCursorPosition };
