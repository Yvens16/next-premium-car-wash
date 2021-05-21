import mailchimp from '@mailchimp/mailchimp_marketing'

const apiKey = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY

mailchimp.setConfig({
  apiKey,
  server: 'us1'
})

  const event = {
    name: "Car wash Affiliates"
  };
  
  const footerContactInfo = {
    company: "Premium Car Wash",
    address1: "11 rue d'enghien",
    address2: "",
    city: "Eaubonne",
    state: "Val d'Oise",
    zip: "95600",
    country: "FR"
  };
  
  const campaignDefaults = {
    from_name: "Premium Car Wash",
    from_email: "contact",
    subject: "Gagner de l'argent avec Premium Car Wash",
    language: "FR"
  };
  
  async function run() {
    const response = await mailchimp.lists.createList({
      name: event.name,
      contact: footerContactInfo,
      permission_reminder: "permission_reminder",
      email_type_option: true,
      campaign_defaults: campaignDefaults
    });
  
    console.log(
      `Successfully created an audience. The audience id is ${response.id}.`
    );
  }
  run();