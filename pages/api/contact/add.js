import mailchimp from '@mailchimp/mailchimp_marketing'
import { env } from 'process';

mailchimp.setConfig({
  apiKey: env.MAILCHIMP_APIKEY,
  server: env.MAILCHIMP_SERVER, // e.g. us1
})

const handler = async (req, res) => {
  const { email, merge_fields } = req.body

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  try {
    await mailchimp.lists.addListMember(env.MAILCHIMP_LIST, {
      email_address: email,
      merge_fields: {
        FNAME: merge_fields.FNAME,
        ADDRESS: merge_fields.ADDRESS,
        STATUS: merge_fields.STATUS,
      },
      //tags: [merge_fields.ADDRESS !== '' ? 'Connected' : 'Initial'],
      status: 'subscribed',
    })
    //console.log('aux->',aux)

    return res.status(200).json({ error: '' })
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
}

export default handler
