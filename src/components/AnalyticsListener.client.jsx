import {useEffect} from 'react';
import {ClientAnalytics} from '@shopify/hydrogen/client';

function logHandlerGetter(eventName) {
  function logHandler(payload) {
    console.log(eventName, payload);
  }
  return logHandler;
}

let init = false;
export default function AnalyticsListener() {
  useEffect(() => {
    // Set up common page-specific data
    ClientAnalytics.pushToPageAnalyticsData({
      userLocale: navigator.language,
    });
    if (!init) {
      // One-time initialization
      init = true;
      Object.values(ClientAnalytics.eventNames).forEach((eventName) => {
        ClientAnalytics.subscribe(eventName, logHandlerGetter(eventName));
      });
    }
  });
  return null;
}
