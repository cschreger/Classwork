class ApplicationController < ActionController::Base

    def log_in_user!(user)
        user.reset_session_token
        session[:session_token] = user.session_token
    end

    def logout_user!
        current_user.reset_session_token
        session[:session_token] = nil
        redirect_to new_user_url
    end

    def current_user
        return nil unless session[:session_token]
        current_user ||= User.find_by(session[:session])
    end

    def logged_in?
        !!current_user
    end


end
