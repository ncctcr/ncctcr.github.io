import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
	background: #2e2e2e;
	backdrop-filter: blur(10px);
	border-radius: 17px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	//padding: 12px;
	display: flex;
	flex-direction: column;
	overflow: hidden;
  color: #d4d4d4
`;

const VideoWidget = () => {
  return (
    <Wrapper>
      <iframe
        src="https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1"
        title="lofi hip hop radio"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        style={{
          borderRadius: 12,
          height: 190
        }}
      />
    </Wrapper>
  );
};

export default VideoWidget;
