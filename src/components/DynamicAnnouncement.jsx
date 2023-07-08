import React from 'react';

export const DynamicAnnouncement = () => {

    return (
        <div style={{
            textAlign: 'center',
            fontSize: '1.5rem',
            color: '#287698',
            fontWeight: 'bold',
        }}>
            <p style={{
                margin: 0,
                marginTop: '1.625rem',
            }}>
                A dynamically loaded advertisement
            </p>
            <p style={ {
                opacity: 0.5,
                margin: 0,
            }}>
                💰💸💲
            </p>
        </div>
    )
};
