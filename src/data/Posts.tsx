import img1 from '../assets/Posts/1.webp'
import img2 from '../assets/Posts/2.webp'
import img3 from '../assets/Posts/3.webp'
import img4 from '../assets/Posts/4.webp'
import img5 from '../assets/Posts/5.webp'
import img6 from '../assets/Posts/6.webp'

import video1 from '../assets/Posts/video1.mp4'
import video2 from '../assets/Posts/video2.mp4'
import video3 from '../assets/Posts/video3.mp4'
import video4 from '../assets/Posts/video4.mp4'
import video5 from '../assets/Posts/video5.mp4'
import video6 from '../assets/Posts/video4.mp4'

import profile from '../assets/luffy.jpg'

// I just hardcoded duration and date 'cause this project focuses on TS-React and Tailwind basics
// Disclaimer: I don't own the videos and images 
// I used them as a sample video for practice porpuses only

export const videoPosts = [
  {
    image: img1,
    duration: '1:26:21',
    profile: profile,
    title: 'React Hooks Course - All React Hooks Explained',
    name: 'PedroTech',
    views: '949K views',
    date: '2 years ago',
    video: video1
  },
  {
    image: img2,
    duration: '2:17',
    profile: profile,
    title: 'React Native in 100 Seconds',
    name: 'Fireship',
    views: '720K views',
    date: '2 years ago',
    video: video2
  },
  {
    image: img3,
    duration: '15:43',
    profile: profile,
    title: 'The simple way to handle requests in React',
    name: 'Cosden Solutions',
    views: '11K views',
    date: '8 days ago',
    video: video3
  },
  {
    image: img4,
    duration: '30:42',
    profile: profile,
    title: 'Google Frontend Interview With A Frontend Expert',
    name: 'Clément Mihailescu',
    views: '885K views',
    date: '1 year ago',
    video: video4
  },
  {
    image: img5,
    duration: '12:25',
    profile: profile,
    title: '5 Simple Steps for Solving Dynamic Programming Problems',
    name: 'Con D. Oriano',
    views: '888K views',
    date: '3 years ago',
    video: video5
  },
  {
    image: img6,
    duration: '30:42',
    profile: profile,
    title: 'Google Frontend Interview With A Frontend Expert',
    name: 'Clément Mihailescu',
    views: '885K views',
    date: '1 year ago',
    video: video6
  },
]