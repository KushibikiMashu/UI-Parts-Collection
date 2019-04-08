export type roomItem = {
    roomName: string,
    description: string,
    time: string,
    newPostCount: string,
    img: string,
}

export type messageItem = {
    id: number,
    userName: string,
    body: string,
    time: string,
    image?: string,
}