const FollowToggle = require("./follow_toggle.js")

const ButtonFollowToggle = 
    $("button-follow-toggle").each(function(i, button) {
        new FollowToggle({},button)
});
