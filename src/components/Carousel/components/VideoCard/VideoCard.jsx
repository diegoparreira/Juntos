import React from "react";
import { VideoCardContainer } from "./styles";
import { getYouTubeId } from "../../../../utils";

function VideoCard({ videoTitle, videoURL, categoryColor }) {

    const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
    return (
        <VideoCardContainer
            url={image}
            href={videoURL}
            target="_blank"
            style={{borderColor: categoryColor || 'red'}}
            title={videoTitle}
        />
    );
}

export default VideoCard;