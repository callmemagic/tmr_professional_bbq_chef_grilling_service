import { NextResponse } from 'next/server';

const FB_ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;
const FB_PIXEL_ID = '1373638403962138';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { eventName, eventData } = body;

    // 準備發送到 Facebook 的數據
    const data = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          action_source: 'website',
          event_source_url: eventData.source_url,
          user_data: {
            client_ip_address: eventData.client_ip,
            client_user_agent: eventData.user_agent,
          },
          custom_data: eventData.custom_data || {},
        },
      ],
      access_token: FB_ACCESS_TOKEN,
    };

    // 發送到 Facebook Conversion API
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${FB_PIXEL_ID}/events`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error('Facebook Conversion API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
} 