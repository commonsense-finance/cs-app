import mailchimp from '@mailchimp/mailchimp_marketing'
import { env } from 'process'

mailchimp.setConfig({
  apiKey: env.MAILCHIMP_APIKEY,
  server: env.MAILCHIMP_SERVER, // e.g. us9
})

const handler = async (req, res) => {
  const email = req.body

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  const response = await mailchimp.searchMembers.search(email)
  res.status(200).json( response.exact_matches )
}

export default handler


