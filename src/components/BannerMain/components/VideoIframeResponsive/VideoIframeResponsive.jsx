import React from 'react';

import { VideoContainer, ResponsiveIframe} from "./styles";

// Resolver ID dinâmico

function VideoIframeResponsive() {
    return (
        <VideoContainer>
            <ResponsiveIframe
                title="Título do Iframe"
                src="https://www.youtube.com/embed/1pJiz66-tyk/autoplay=0&mute=1"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </VideoContainer>
    );
}

export default VideoIframeResponsive;