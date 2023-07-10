import React, { useState, useEffect } from 'react';

export const Loading = () => {
    const [loadingText, setLoadingText] = useState("Loading");

    useEffect(() => {

        let timeoutId = null;

        const setTimer = () => {
            timeoutId = setTimeout(() => {
                setLoadingText(prev => {
                    const loadingText = 'Loading...';

                    if (prev === loadingText) {
                        return '';
                    }

                    return prev + loadingText.charAt(prev.length);
                });

                setTimer();
            }, 100);
        };

        setTimer();

        return () => clearTimeout(timeoutId); // Clean up on component unmount
    }, []);

    return (
        <p style={{
            textAlign: "center",
            fontSize: "1.5rem",
            color: "#287698",
            fontWeight: "bold",
        }}>
            {loadingText}
        </p>
    );
};
