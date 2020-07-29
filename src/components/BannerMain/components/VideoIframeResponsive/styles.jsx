import styled from 'styled-components';

const VideoContainer = styled.div`
    padding-top: 56.25%;
    position: relative;

    @media (max-width: 800px){
        display: none;
    }

`;

const ResponsiveIframe = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
`;

export {VideoContainer, ResponsiveIframe}