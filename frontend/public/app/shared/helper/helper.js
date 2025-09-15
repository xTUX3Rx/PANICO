function $(selector) {
  return document.querySelector(selector);
}

function on(selector, event, handler) {
  const el = $(selector);
  if (el) el.addEventListener(event, handler);
}
