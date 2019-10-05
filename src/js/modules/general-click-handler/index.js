const { someHandler } = require('./handlers/someHandler');

document.addEventListener('click', (event) => {
  let handlerTarget;

  handlerTarget = event.target.closest('.SELECTOR');
  if (handlerTarget) {
    return someHandler.call(handlerTarget, event);
  }
});
