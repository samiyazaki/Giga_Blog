const withAuth = (req, res, next) => {
  // TODO: If the user is not logged in, redirect the user to the login page
  // TODO: If the user is logged in, allow them to view the paintings
  if (req.session.loggedIn) {
    next();
  } else {
    res.redirect('/login');
  }
};

module.exports = withAuth;
