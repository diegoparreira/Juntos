import React from "react";
import VideoIframeResponsive from "./components/VideoIframeResponsive";
import {
  BannerMainContainer,
  ContentAreaContainer,
  WatchButton,
} from "./styles";
import { getYouTubeId } from "../../utils";

function BannerMain({ videoTitle, videoDescription, url }) {

  return (
    <BannerMainContainer backgroundColor="var(--secondary)">
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>{videoTitle}</ContentAreaContainer.Title>

          <ContentAreaContainer.Description>
            {videoDescription}
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <VideoIframeResponsive videoId="https://www.youtube.com/embed/1pJiz66-tyk/autoplay=0&mute=1" />
          <WatchButton>Assistir</WatchButton>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}

export default BannerMain;
