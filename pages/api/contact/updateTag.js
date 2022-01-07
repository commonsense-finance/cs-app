import mailchimp from '@mailchimp/mailchimp_marketing'
import { env } from 'process';

mailchimp.setConfig({
  apiKey: env.MAILCHIMP_APIKEY,
  server: env.MAILCHIMP_SERVER, // e.g. us1
})

const handler = async (req, res) => {
  const { idContact, name } = req.body

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  try {
    const response = await client.lists.updateListMemberTags(
        "list_id",
        "subscriber_hash",
        { tags: [{ name: "name", status: "active" }] }
      );
    await mailchimp.lists.updateListMemberTags(env.MAILCHIMP_LIST, idContact, {
      tags: [{ name: name, status: "active" }],
    })
    
    return res.status(200).json({ error: '' })
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
}

export default handler


