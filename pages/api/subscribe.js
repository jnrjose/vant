import fetch from "isomorphic-unfetch";

require('dotenv').config();

export default async (req, res) => {
  const {email} = req.body;

  if (!email) {
    return res.status(400).json({error: "Email is required"});
  }

  try {
    const LIST_ID = process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID;
    const API_KEY = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY;
    console.log("API_KEY", LIST_ID);

    const DATACENTER = API_KEY.split("-")[1];

    const data = {
      email_address: email,
      status: "subscribed",
    };
const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString('base64')
    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `Basic ${base64ApiKey}`,
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );

    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error subscribing to the newsletter.`,
      });
    }

    return res.status(201).json({error: ""});
  } catch (error) {
    return res.status(500).json({error: error.message || error.toString()});
  }
};
