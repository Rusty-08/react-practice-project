import Image from "../components/Image"

type Posts = {
  posts: Props[]
}

type Props = {
  image: string
  duration: string
  profile: string
  title: string
  name: string
  views?: string
  date: string
}

function PostVideo({ posts }: Posts) {
  return (
    <div className="grid px-6 pb-3 md:grid-cols-3 grid-cols-1 md:gap-4">
      {posts.map((post, index) => (
        <div key={index} className="flex flex-col my-4">
          <div className="relative">
            <Image src={post.image} variant="video" />
            <p className="bg-secondary-dark-hover bg-opacity-80 text-white px-1.5 py-0.5 rounded-md absolute text-xs font-medium right-2 bottom-2">{ post.duration }</p>
          </div>
          <div className="flex gap-2 py-3">
            <Image src={post.profile} variant="profile" />
            <div className="flex flex-col">
              <h1 className="text-md mb-0.5 font-medium">{ post.title }</h1>
              <div className="flex md:flex-col flex-row">
                <p className="text-sm md:block hidden text-secondary-text">{ post.name }</p>
                <span className="text-sm md:hidden block text-secondary-text">{ `${post.name} \u00B7 ${post.views} \u00B7 ${post.date}` }</span>
                <span className="text-sm md:block hidden text-secondary-text">{ `${post.views} \u00B7 ${post.date}` }</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostVideo