export {};

declare global {
  interface Window {
    registration:any;
    clients: any;
    skipWaiting: any;
  }
}

declare global {
  interface Event {
    waitUntil: any;
    request: any;
    respondWith:any;
    
    clone:any;
    then:any;
  }
}

type put = any;

