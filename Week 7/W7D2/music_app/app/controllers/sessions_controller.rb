class SessionsController < ApplicationController
    helper_method :current_user

    def create
        user = User.find_by(
            params[:user][:email],
            params[:user][:password]
        )
        if user
            log_in_user!(user)
            redirect_to user_url(user.id)
        else
            flash.now[:errors] = ["Invalid email/password combination!"]
            render :new
        end
    end

    def new
        render :new
    end

    def destroy
        logout_user!
        redirect_to new_session_url
    end

end