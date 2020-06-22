class SessionsController < ApplicationController

    before_action :logged_in?

    def new
        render :new
    end

    def create
        user = User.find_by_credentials(
            params[:user][:user_name],
            params[:user][:password]
        )

        if user
            login_user!(user)
            redirect_to cats_url
        else
            flash.now[:errors] = ['Credentials invalid!']
            render :new
        end
    end
    
    def destroy
        # debugger
        logout_user!
        # debugger
        redirect_to new_session_url
    end

end