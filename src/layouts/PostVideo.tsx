import { SetStateAction, createRef, useEffect, useRef, useState } from 'react';
import Image from '../components/Image';
import React from 'react';
import Button from '../components/Button';
import { Volume2, VolumeX } from 'lucide-react';

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

  const videoRefs = useRef(posts.map(() => createRef<HTMLVideoElement>()))
  const [isPlaying, setIsPlaying] = useState(-1)
  const [isSoundOn, setIsSoundOn] = useState(false)
  

  const playVideo = (index: number) => {
    const videoElement = videoRefs.current[index].current
    if (videoElement) {
      videoElement.play() 
      setIsPlaying(index)
    }
  }

  const pauseVideo = (index: number) => {
    const videoElement = videoRefs.current[index].current
    if (videoElement) {
      videoElement.pause()
      setIsPlaying(-1)
    }
  }

  useEffect(() => {
    return () => {
      // Pause all videos when component unmounts
      videoRefs.current.forEach((ref, index) => {
        const videoElement = ref.current
        if (videoElement) {
          videoElement.pause()
        }
      })
    }
  }, [])

  return (
    <div className="grid px-6 pb-3 md:grid-cols-3 xl:grid-cols-4 grid-cols-1 md:gap-4">
      {posts.map((post, index) => (
        <a
          href={`/watch?v=${index}`}
          key={index}
          className="flex flex-col my-4"
          onMouseOver={() => playVideo(index)}
          onMouseOut={() => pauseVideo(index)}
          onClick={(e)=>e.preventDefault()}
        >
          <div className="relative min-h-[13rem] w-full">
            <Image className={`${isPlaying == index ? 'opacity-0':'opacity-100'} transition-opacity z-[12] delay-200`} src={post.image} variant="video" />
            <p className="bg-secondary-dark-hover bg-opacity-80 text-white px-1.5 py-0.5 rounded-md absolute text-xs font-medium right-2 bottom-2">{post.duration}</p>
            <video
              src={post.video}
              className={`${isPlaying == index ? 'z-10 rounded-none':'z-[-1] rounded-xl'} w-full h-full object-cover absolute inset-0 transition-all duration-300 delay-200 ease-in`}
              ref={videoRefs.current[index]}
              disablePictureInPicture
              muted={isPlaying == index && isSoundOn ? false:true}
            />  
            {isPlaying == index &&
            <Button 
              className='absolute bg-opacity-20 rounded-md w-9 h-9 z-[15] top-2 right-2' 
              variant="dark" 
              size="icon"
              onClick={(e) => {
                e.preventDefault()
                setIsSoundOn(isSoundOn ? false:true)
              }}
            >
              {
                isSoundOn && isPlaying == index
                ? <Volume2 strokeWidth={1} />
                : <VolumeX strokeWidth={1} />
              }
            </Button>}
          </div>
          <div className="flex gap-2 py-3">
            <Image src={post.profile} variant="profile" />
            <div className="flex flex-col">
              <h1 className="text-md mb-0.5 font-medium">{ post.title }</h1>
              <div className="flex md:flex-col flex-row">
                <p className="text-sm md:block hidden text-secondary-text">{ post.name }</p>
                <span className="text-sm md:hidden block text-secondary-text">{ `${post.name} • ${post.views} \u00B7 ${post.date}` }</span>
                <span className="text-sm md:block hidden text-secondary-text">{ `${post.views} • ${post.date}` }</span>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

export default PostVideo