import type { NextApiRequest, NextApiResponse } from 'next'
import fsPromises from 'fs/promises';
import path from 'path';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const data = req.body
    console.log(data)
   
    res.status(200).json({name: 'ok'})
    await fsPromises.writeFile("A:/remotion/mexi/mexico/app/data/tempdates.json", data);
}


