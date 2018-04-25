var GitHub = require('github-api');
const Cfg = require('./cfg');

// basic auth
var gh = new GitHub({
   token: Cfg.token
});

var me = gh.getUser(); // no user specified defaults to the user for whom credentials were provided
me.listNotifications(function(err, notifications) {
   console.log(notifications)
});

me.listStarredRepos(function(err, repos) {
   // console.log(repos)
});