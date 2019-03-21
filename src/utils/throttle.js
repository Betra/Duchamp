export const throttle = (caller, interval) => {
  let isBlocking = false;

  return (...args) => {
    if (!isBlocking) {
      caller(...args);
      isBlocking = true;

      setTimeout(() => {
        isBlocking = false;
      }, interval);
    }
  };
};
