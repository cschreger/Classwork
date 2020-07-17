const APIUtil = {
    followUser: id => {
        $.ajax({
                method: 'POST',
                url: '/users/:id/follow',
                dataType: $.ajax,
                success: this.initialFollowState = 'following'
            });
            this.render();

    },

    unfollowUser: id => {
        $.ajax({
            method: 'DELETE',
            url: '/users/:id/follow',
            dataType: $.ajax,
            success: this.initialFollowState = 'unfollowed'
         });
         this.render();
        
    }
}

module.exports = APIUtil