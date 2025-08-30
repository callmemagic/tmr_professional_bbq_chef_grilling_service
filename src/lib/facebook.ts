// 客戶端事件追蹤
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const trackClientEvent = (eventName: string, eventData: any = {}) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, eventData);
  }
};

// 伺服器端事件追蹤
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const trackServerEvent = async (eventName: string, eventData: any = {}) => {
  try {
    const response = await fetch('/api/facebook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName,
        eventData: {
          source_url: window.location.href,
          client_ip: '', // 這將在伺服器端獲取
          user_agent: navigator.userAgent,
          custom_data: eventData,
        },
      }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error tracking server event:', error);
    return null;
  }
};

// 同時追蹤客戶端和伺服器端事件
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const trackEvent = async (eventName: string, eventData: any = {}) => {
  // 客戶端追蹤
  trackClientEvent(eventName, eventData);
  
  // 伺服器端追蹤
  await trackServerEvent(eventName, eventData);
}; 