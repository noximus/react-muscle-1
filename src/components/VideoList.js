import React from 'react';
import PropTypes from 'prop-types';

const VideoList = props => {
  return (
    <div>
      I have {props.video.length} videos.
    </div>
  );
};

VideoList.propTypes = {
  
};

export default VideoList;