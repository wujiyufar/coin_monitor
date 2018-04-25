var GitHub = require('github-api');

// basic auth
var gh = new GitHub({
   token: 'c6244e41822aa715b3c6fe1ae61a6f158753ea40'
});

var me = gh.getUser(); // no user specified defaults to the user for whom credentials were provided
me.listNotifications(function(err, notifications) {
   console.log(notifications)
});

me.listStarredRepos(function(err, repos) {
   // console.log(repos)
});