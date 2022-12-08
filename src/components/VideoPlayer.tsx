import React, { useEffect, useState } from "react";
import styled from "styled-components";

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Video = styled.video`
  width: 100%;
  max-width: 800px;
`;

const LoadingIndicator = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

interface Props {
  src: string;
  subtitles?: {
    src: string;
    language: string;
  };
}

export const VideoPlayer = (props: Props) => {
  const [isBuffering, setIsBuffering] = useState(false);

  const handleProgress = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    const { currentTime, duration } = event.target as HTMLVideoElement;
    const buffered = duration - currentTime;
    if (buffered < 3) {
      setIsBuffering(true);
    } else {
      setIsBuffering(false);
    }
  };

  const video = document.createElement("video");
  const canPlayMp4 = !!video.canPlayType("video/mp4").replace("no", "");
  const canPlayMov = !!video.canPlayType("video/quicktime").replace("no", "");

  return (
    <VideoContainer>
      <Video onProgress={handleProgress} controls>
        {canPlayMp4 && <source src={props.src} type="video/mp4" />}
        {canPlayMov && <source src={props.src} type="video/quicktime" />}
        {props.subtitles && (
          <track
            src={props.subtitles.src}
            kind="subtitles"
            srcLang={props.subtitles.language}
          />
        )}
      </Video>
      {isBuffering && <LoadingIndicator>Loading...</LoadingIndicator>}
    </VideoContainer>
  );
};

export default VideoPlayer;
