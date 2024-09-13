import { Music } from "@/components/MusicTable";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getMusic() {
    const response = await fetch("http://localhost:3000/musics", { next: { revalidate: 0 } });

    if (!response.ok) {
        return response.statusText
    }

    const data = await response.json()

    return data.tracks as Music[]
}

export default async function MusicPage({ searchParams }: { searchParams: { id: string | undefined } }) {
    if (!searchParams.id) {
        return notFound()
    }

    const musicData = await getMusic()

    if (!musicData) {
        return notFound()
    }

    if (typeof musicData === "string") {
        return <p>{musicData}</p>
    }

    const music = musicData.find((music) => music.pId === searchParams.id)

    if (!music) {
        return notFound()
    }

    return (
        <main className="mx-5 min-h-[calc(100vh-5rem)] flex items-center justify-center relative">
            <Link href="/" className="backBtn"><ArrowLeftIcon /> <span>Vissza a kezdőlapra</span></Link>
            <div className="w-[85%] sm:w-[70%] md:w-[50%] h-[250px] sm:h-[350px] md:h-[500px] border border-gray-500 rounded-xl shadow-md shadow-gray-500">
                <iframe className="w-full h-full rounded-xl" src={`https://www.youtube.com/embed/${music.trackUrl.split("=")[1]}?autoplay=1&rel=0`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                <div className="mt-8 flex items-center justify-between">
                    <h1 className="text-xl">{music.name}</h1>
                    <p className={`text-sm ${music.score < 5 ? "text-red-500" : "text-green-500"}`}>Pont: {music.score} / 10</p>
                </div>
            </div>
        </main>
    )
}
