import MusicTable from "@/components/MusicTable";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-5rem)] mx-5">
        <div className="inline-flex gap-2 my-5 h-9 items-center justify-center rounded-lg bg-zinc-800 p-1">
            <Link href="/" className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background bg-black transition-all hover:bg-zinc-600">Zene</Link>
            <button disabled={true} className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background text-gray-400 cursor-not-allowed">Podcast</button>
            <button disabled={true} className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background text-gray-400 cursor-not-allowed">Video</button>
        </div>
        <h1 className="text-2xl font-semibold">Hallgasd Most</h1>
        <p className="text-sm text-gray-500 mt-1">Top listás zenék csak neked. Naponta frissül.</p>
        <div className="shrink-0 bg-gray-600 h-[1px] w-1/2 my-4"></div>
        <section className="w-full h-full scrollbar-thin scrollbar-thumb-gray-500">
            <div className="w-full table">
                <div className="grid gap-y-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 space-x-4 pb-4">
                    <MusicTable />
                </div>
            </div>
        </section>
    </main>
  );
}
