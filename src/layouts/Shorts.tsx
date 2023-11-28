import Image from "../components/Image"

type Shorts = {
  shorts: Props[]
}

type Props = {
  image: string
  title: string
  views: string
}

function Shorts({ shorts }:Shorts) {
  return (
    shorts.map(short => (
      <div className="flex flex-col gap-0">
        <Image variant="video" src={short.image} />
        <p className="mt-3 font-medium">{ short.title }</p>
        <span className="text-secondary-text text-sm">{ short.views }</span>
      </div>
    ))
  )
}

export default Shorts