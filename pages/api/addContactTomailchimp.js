// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mailchimp from '@mailchimp/mailchimp_marketing'

const list_id = process.env.NEXT_PUBLIC_MAILCHIMP_LISTID
const apiKey = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY

mailchimp.setConfig({
  apiKey,
  server: 'us1'
})
  
async function addContactToList (user) {
  const response = await mailchimp.lists.addListMember(list_id, {
    email_address: user.email,
    status: 'subscribed',
  })
  const contactAdded = response && response.id ? true : false
  return contactAdded
}

export default async (req, res) => {
  let { body } = req
  body = JSON.parse(body)
  console.log('body:', body)
  const subscriberUSer = {
    email: body.mail
  }
  try {
    const response = await addContactToList(subscriberUSer)
    res.status(200).json({
      contactAdded: true,
      response
    })
  } catch(err) {
    console.log('err:', err)
    res.status(400).json({
      contactAdded: false,
      error: err
    })
  }
}
