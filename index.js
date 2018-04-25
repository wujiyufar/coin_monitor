var GitHub = require('github-api');

// basic auth
var gh = new GitHub({
   token: '35691ff5451c01eeff2c922a1109d4a127c40fb6'
});

var me = gh.getUser(); // no user specified defaults to the user for whom credentials were provided
me.listNotifications(function(err, notifications) {
   console.log(notifications)
});

me.listStarredRepos(function(err, repos) {
   // console.log(repos)
});