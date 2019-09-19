module.exports = {
  requests: {
    ratelimit: {
      window: 20 * 60 * 1000,
      max: 100
    },
    slowDown: {
      window: 15 * 60 * 1000,
      delayAfter: 100,
      delayMs: 100
    }
  }
};
