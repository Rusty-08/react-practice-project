import Image from "./Image"

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
    <>
      {posts.map((post, index) => (
        <div className="flex flex-col">
          <Image src={post.image} key={index} variant="video" />
          <div className="flex gap-2 py-3">
            <Image src={post.profile} variant="profile" />
            <div className="flex flex-col">
              <h1 className="text-md font-medium">{ post.title }</h1>
              <p className="text-sm text-secondary-text">{ post.name }</p>
              <span className="text-sm text-secondary-text">{ `${post.views} \u00B7 ${post.date}` }</span>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default PostVideo