// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mailchimp from '@mailchimp/mailchimp_marketing'

const list_id = process.env.NEXT_PUBLIC_MAILCHIMP_LISTID
const apiKey = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY

mailchimp.setConfig({
  apiKey,
  server: 'us1'
})
  
async function addContactToList (user) {
  const nameArray = user.name.split(' ');
  const response = await mailchimp.lists.addListMember(list_id, {
    email_address: user.email,
    full_name: user.name ? user.name : '',
    status: 'subscribed',
    merge_fields: {
      FNAME: user.name ? nameArray[0] : '',
      LNAME: user.name ? nameArray[1] : '',
      PHONE: user.phone ? user.phone : ''
    }
  })
  const contactAdded = response && response.id ? true : false
  return contactAdded
}

export default async (req, res) => {
  let { body } = req
  body = JSON.parse(body)
  console.log('body:', body)
  const subscriberUSer = {
    email: body.mail,
    phone: body.phone,
    name: body.name
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
