class FollowToggle {
    constructor(options, el) {
        this.$el = $(el);
        this.userId = this.$el.data('user-id');
        this.initialFollowState = this.$el.data('initial-follow-state');

        this.render();
        this.handleClick();
    }

    render () {
        if (this.initialFollowState === 'following') {
            this.$el.text('Unfollow!');
        } else {
            this.$el.text('Follow!');
        }
    }

    handleClick(event) {
        event.preventDefault();
        
        if (this.initialFollowState === 'unfollowed'){
            this.initialFollowState = "followed";
            this.render();
            APIUtil.followUser(this.userId).then

        } 
        else {
             $.ajax({
                method: 'DELETE',
                url: '/users/:id/follow',
                dataType: $.ajax,
                success: this.initialFollowState = 'unfollowed'
             });
             this.render();
        }
        



        
    }
}

module.exports = FollowToggle;


// switch(expression) {
//     case x:
//       // code block
//       break;
//     case y:
//       // code block
//       break;
//     default:
//       // code block
//   }