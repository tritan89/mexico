import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const data = req.body
    const id =  createItem(data)
    res.status(200).json({ id })
}

function createItem(data: string) {
    const item = { content: data }
    return item
}
