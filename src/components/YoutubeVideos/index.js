

import React from 'react';
import { Carousel } from 'react-responsive-3d-carousel';
import 'react-responsive-3d-carousel/dist/styles.css';
import './index.css';

function YoutubeVideos() {
  const items = [
    <div key="1" className="youtube-video">
      <iframe
        src="https://www.youtube.com/embed/mAyOcgnTCZg?si=pDX1wdiiL56Z-23E"
        title="YouTube Video 1"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
        className="responsive-iframe"
      ></iframe>
    </div>,
    <div key="2" className="youtube-video">
      <iframe
        src="https://www.youtube.com/embed/TwtDF8IMdxM?si=SYZVhxgJKym425TI"
        title="YouTube Video 2"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
        className="responsive-iframe"
      ></iframe>
    </div>,
    <div key="3" className="youtube-video">
      <iframe
        src="https://www.youtube.com/embed/dhqi7fRejis?si=W6Bx0x8Vx_scGC5R"
        title="YouTube Video 3"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
        className="responsive-iframe"
      ></iframe>
    </div>,
    <div key="4" className="youtube-video">
    <iframe
      src="https://www.youtube.com/embed/K64O5WRC2YA?si=ywiU4enHhE3QLtg_"
      title="YouTube Video 4"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      allowFullScreen
      className="responsive-iframe"
    ></iframe>
  </div>,

<div key="5" className="youtube-video">
<iframe
  src="https://www.youtube.com/embed/F7moRp1c7Hg?si=1hDuwAMOTtK9oTp_"
  title="YouTube Video 5"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
  allowFullScreen
  className="responsive-iframe"
></iframe>
</div>,

<div key="6" className="youtube-video">
<iframe
  src="https://www.youtube.com/embed/1mD2iRey_QM?si=SQ18AlrbWST4pJfX"
  title="YouTube Video 6"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
  allowFullScreen
  className="responsive-iframe"
></iframe>
</div>,




  ];

  return (
    <div className="youtube-container">
      <h2 className="youtube-heading">My Youtube Videos</h2>
      <Carousel
        items={items}
        height="500px"
        width="70%"
        containerPadding="1rem"
        align="center"
      />
    </div>
  );
}

export default YoutubeVideos;




