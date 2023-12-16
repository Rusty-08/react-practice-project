import { SetStateAction, createRef, useEffect, useRef, useState } from "react";
import Image from "../components/Image";
import React from "react";
import Button from "../components/Button";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";

type Posts = {
  posts: Props[];
};

type Props = {
  image: string;
  duration: string;
  profile: string;
  title: string;
  name: string;
  views?: string;
  date: string;
  video: string;
};

function PostVideo({ posts }: Posts) {
  const videoRefs = useRef(posts.map(() => createRef<HTMLVideoElement>()));
  const [isPlaying, setIsPlaying] = useState(-1);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  let timeOut = 0;

  const playVideo = (index: number) => {
    const videoElement = videoRefs.current[index].current;
    if (videoElement) {
      timeOut = setTimeout(() => {
        setIsPlaying(index);
        setIsVideoPlaying(true);
        videoElement.play();
      }, 1000);
    }
  };

  const pauseVideo = (index: number) => {
    const videoElement = videoRefs.current[index].current;
    if (videoElement) {
      videoElement.pause();
      setIsPlaying(-1);
      setIsVideoPlaying(false);
      clearTimeout(timeOut);
    }
  };

  useEffect(() => {
    return () => {
      videoRefs.current.forEach((ref, index) => {
        const videoElement = ref.current;
        if (videoElement) {
          videoElement.pause();
        }
      });
    };
  }, []);

  return (
    <div className="grid px-6 pb-3 grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] md:gap-4">
      {posts.map((post, index) => (
        <a
          href={`/watch?v=${index + 1}`}
          key={index}
          className="flex flex-col my-4"
          onMouseEnter={() => playVideo(index)}
          onMouseLeave={() => pauseVideo(index)}
          onClick={(e) => e.preventDefault()}
        >
          <div className="relative min-h-[13rem] w-full">
            <Image
              className={`${
                isVideoPlaying && isPlaying == index && "opacity-0"
              } inset-0 z-20 h-full`}
              src={post.image}
              variant="video"
            />
            <p className="bg-secondary-dark-hover bg-opacity-80 text-white px-1.5 py-0.5 rounded-md absolute text-xs font-medium right-2 bottom-2">
              {post.duration}
            </p>
            <video
              src={post.video}
              className={`${
                isPlaying == index && isVideoPlaying
                  ? "opacity-1 rounded-none"
                  : "opacity-0 rounded-xl"
              } w-full h-full object-cover absolute inset-0 transition-[border-radius] duration-300 delay-200 ease-in`}
              ref={videoRefs.current[index]}
              disablePictureInPicture
              controls
              muted
            />
          </div>
          <div className="flex gap-2 py-3">
            <Image src={post.profile} variant="profile" />
            <div className="flex flex-col">
              <h1 className="text-md mb-0.5 font-medium">{post.title}</h1>
              <div className="flex md:flex-col flex-row">
                <p className="text-sm md:block hidden text-secondary-text">
                  {post.name}
                </p>
                <span className="text-sm md:hidden block text-secondary-text">{`${post.name} • ${post.views} \u00B7 ${post.date}`}</span>
                <span className="text-sm md:block hidden text-secondary-text">{`${post.views} • ${post.date}`}</span>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default PostVideo;
