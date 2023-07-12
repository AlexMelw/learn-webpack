import React from 'react';
import { withCursorPosition } from './withCursorPosition';
import * as module from './withCursorPosition';

console.log(module);

const pointStyles = {
    textAlign: 'center',
    color: 'rgb(153, 4, 128)',
    fontWeight: 'bold',
};

const CursorPointLogger = (props) => {
    const { cursorPosition } = props;

    if (!cursorPosition) {
        return null;
    }

    const { x, y } = cursorPosition;

    const style = {
        ...pointStyles,
        ...props.overrideStyles,
    };

    return (
        <p style={style}>
            ({x}, {y})
        </p>
    );
};

export const CursorPointLoggerWithCursorPosition =
    withCursorPosition(CursorPointLogger, {
        throttleByMilliseconds: 16, // 60fps
    });
