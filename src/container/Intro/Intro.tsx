import "./Intro.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { meal, hannibal } from "../../constants";
import { useRef, useState } from "react";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef<HTMLVideoElement>(null);

  const handleVideo = () => {
    setPlayVideo((current) => !current);
    if (playVideo) {
      vidRef.current?.pause();
    } else {
      vidRef.current?.play();
    }
  };
  return (
    <div className="app__video">
      <video
        src={hannibal}
        ref={vidRef}
        // type="video/mp4"
        loop
        controls={false}
        // muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <PauseIcon fontSize="large" sx={{ color: "white" }} />
          ) : (
            <PlayArrowIcon fontSize="large" sx={{ color: "white" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
