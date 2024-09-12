type Music = {
    _id: string
    name: string
    img: string
    trackUrl: string
}

export async function GET() {
    const response = await fetch("https://openwhyd.org/hot/electro?format=json", { next: { revalidate: 0 } })

    if (!response.ok) {
        return Response.json(response.statusText)
    }

    const data: Music[] = await response.json()

    return Response.json(data)
}
