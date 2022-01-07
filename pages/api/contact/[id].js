import mailchimp from '@mailchimp/mailchimp_marketing'
import { env } from 'process'

mailchimp.setConfig({
  apiKey: env.MAILCHIMP_APIKEY,
  server: env.MAILCHIMP_SERVER, // e.g. us9
})

const handler = async (req, res) => {
  if (!req.query.id) {
    return res.status(400).json({ error: 'Address is required' })
  }
  const response = await mailchimp.searchMembers.search(req.query.id)
  res.status(200).json( response.full_search )
}

export default handler
