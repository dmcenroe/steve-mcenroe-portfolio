import { useEffect, useState } from "react";

interface props {
  videoSource: string;
  project: string;
}

export default function VideoPlayer({ videoSource, project }: props) {
  const [videoElement, setVideoElement] = useState<HTMLVideoElement | null>(
    null
  );
  const [playing, setPlaying] = useState<boolean>(true);

  useEffect(() => {
    const vid: HTMLVideoElement = document.getElementById(
      project
    ) as HTMLVideoElement;
    setVideoElement(vid);
  }, [project]);

  useEffect(() => {
    if (videoElement && playing) {
      videoElement.setAttribute("autoPlay", "");
      let playCount = 0;

      const playXTimes = (x: number) => {
        videoElement.load();
        videoElement.playbackRate = 1.5;

        videoElement.onended = function () {
          if (playCount === 2) {
            setPlaying(false);
          }

          while (playCount < 2) {
            videoElement.play();
            playCount++;
          }
        };
      };

      playXTimes(2);
    }
  }, [videoElement, project, playing]);

  console.dir(videoElement);

  return (
    <div className="relative">
      <video
        id={`${project}`}
        muted
        playsInline
        autoPlay
        className="w-170 rounded-xl shadow-lg shadow-slate-800"
      >
        <source src={videoSource} type="video/mp4" />
        <p>Your browser does not support HTML video.</p>
      </video>
      {!playing ? (
        <button
          onClick={() => {
            setPlaying(true);
          }}
          className="flex items-center justify-center absolute w-20 h-20 bg-teal-600 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <span className="pointer-events-none material-symbols-outlined material-icons md-36 text-white">
            play_arrow
          </span>
        </button>
      ) : null}
    </div>
  );
}
