
import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200
  res.json({ text: 'Common Sense to the Moon' })
}

export default handler