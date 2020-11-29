const fetch = require('node-fetch');
const base64 = require('base-64');

require('dotenv').config();

exports.handler = async (event, context,callback) => {


  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
   const { email } = JSON.parse(event.body)
 

  if (!email) {
    return  {
      statusCode:400,
      body: JSON.stringify({error:"Email is required"})
    }
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
    // Authorization: `Basic ${base64ApiKey}`,
    // const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString('base64')
    const creds = `any:${process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY}`;
    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
      {
        body: JSON.stringify(data),
        headers: {
          Accept: '*/*',
          Authorization: `Basic ${base64.encode(creds)}`,
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );
    const datas = await response.json();
    
    console.log("exports.handler -> data", datas.status)
    if (!datas.ok) {
      if (datas.status === 'subscribed') {
        return {
          statusCode: 502,
          body: JSON.stringify({ error: "" })
        }
      } else {

        return {
          statusCode: datas.status,
          body: JSON.stringify({ error: datas.detail })
        }
      }
    }

    if (datas.status >= 400) {
      return  {
        statusCode: 400,
        body: JSON.stringify({ error: `There was an error subscribing to the newsletter.` })
      }
  }


    
      callback(null, {
        statusCode: 201,
        body: JSON.stringify({ error: "" })
      })
    
    
  } catch (error) {
    console.log("exports.handler -> error", error)
    // return { statusCode: 500, body: error.toString() }
    return {
      statusCode:500,
      headers: {
        'Access-Control-Allow-Origin': '*', 
        'Access-Control-Allow-Credentials': "true" 
      },
      body: JSON.stringify({error: error.message || error.toString()})
    }
    // return res.status(500).json({error: error.message || error.toString()});
  }
};
