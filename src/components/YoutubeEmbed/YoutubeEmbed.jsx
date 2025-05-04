import React from 'react';
// Everything in the iframe was ripped from ChatGPT

const YouTubeEmbed = () => {
    return (
        <>
            <h1 style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '40px'
            }}>Video of the Day</h1>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '40px'
                }}
            >
                <iframe
                    width="80%"
                    height="500"
                    src="https://www.youtube.com/watch?v=tYGOwzv-c6k&ab_channel=TalentedBlake"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{ borderRadius: '1rem' }}
                ></iframe>
            </div>
        </>
    );
};

export { YouTubeEmbed };
