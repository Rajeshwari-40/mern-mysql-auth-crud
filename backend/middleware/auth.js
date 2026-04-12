const auth = (req, res, next) => {
  // temporary middleware (just allow request)
  next();
};

module.exports = auth;