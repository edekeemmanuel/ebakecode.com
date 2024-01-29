export function sendToAnalytics(metric) {
  //working
  // Replace with whatever serialization method you prefer.
  // Note: JSON.stringify will likely include more data than you need.
  const body = JSON.stringify(metric);

  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
  (navigator.sendBeacon && navigator.sendBeacon('/analytics', body)) ||
    fetch('/analytics', {body, method: 'POST', keepalive: true});
    console.log("sendToAnalytics",body);
    console.log("sendToAnalytics", navigator.sendBeacon);
    console.log("sendToAnalytics", navigator.sendBeacon('/analytics', body));
}