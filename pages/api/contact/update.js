import mailchimp from '@mailchimp/mailchimp_marketing'
import { env } from 'process';

mailchimp.setConfig({
  apiKey: env.MAILCHIMP_APIKEY,
  server: env.MAILCHIMP_SERVER, // e.g. us1
})

const handler = async (req, res) => {
  const { id, email, merge_fields } = req.body

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  try {
    const response = await mailchimp.lists.setListMember(env.MAILCHIMP_LIST, id, {
      email_address: email,
      merge_fields: {
        FNAME: merge_fields.FNAME,
        ADDRESS: merge_fields.ADDRESS,
        STATUS: merge_fields.STATUS,
      },
      //tags: [{ name: "Connected", status: "active" }],
      status_if_new: 'subscribed',
    })
    return res.status(200).json({ error: '' })
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
}

export default handler
