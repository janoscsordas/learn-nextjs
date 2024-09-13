import Image from "next/image"
import Link from "next/link"

export type Music = {
    pId: string
    name: string
    img: string
    trackUrl: string
    score: number
}

async function getMusicData() {
    const response = await fetch("http://localhost:3000/musics", { next: { revalidate: 18000 } })

    if (!response.ok) {
        return response.statusText
    }

    const data = await response.json()

    return data.tracks as Music[]
}

export default async function MusicTable() {
    const musicData = await getMusicData()

    if (typeof musicData === "string") {
        return <p>{musicData}</p>
    }

    return musicData && musicData.map((music) => (
        <Link href={`/music?id=${music.pId}`} key={music.pId} className="ml-5 space-y-3 w-[250px] group select-none self-center">
            <div className="">
                <div className="overflow-hidden">
                    <img src={music.img} alt={music.name} loading="lazy" className="block mx-auto group-hover:scale-110 transition-transform duration-100" />
                </div>
                <p className="mt-2 text-sm text-center">{music.name.split(" - ")[1]}</p>
                <p className="text-[.8rem] text-gray-500 text-center">{music.name.split(" - ")[0]}</p>
            </div>
        </Link>
    ))
}
