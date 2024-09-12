import Image from "next/image"
import Link from "next/link"

type Music = {
    _id: string
    name: string
    img: string
    trackUrl: string
}

export default async function MusicTable() {
    const response = await fetch("http://localhost:3000/musics", { next: { revalidate: 18000 } })

    if (!response.ok) {
        return <p>{response.statusText}</p>
    }

    const musicData: Music[] = await response.json()

    if (!musicData) {
        return <p>Nincs zene szám</p>
    }

    return musicData && musicData.map((music) => (
        <Link href={`/music/${music._id}`} key={music._id} className="space-y-3 w-[250px] group select-none">
            <div className="">
                <div className="overflow-hidden">
                    <img src={music.img} alt={music.name} loading="lazy" width={250} className="block mx-auto group-hover:scale-110 transition-transform duration-100" />
                </div>
                <p className="mt-2 text-sm">{music.name.split(" - ")[1]}</p>
                <p className="text-[.8rem] text-gray-500">{music.name.split(" - ")[0]}</p>
            </div>
        </Link>
    ))
}
