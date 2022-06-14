class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :error
    def index
        render json: User.all
    end

    def show
        user = User.find_by!(id: params[:id])
        render json: user
    end

    def create
        new_user = User.new(user_params)
        if new_user.save
            render json: new_user
        else 
            render json: {errors: new_user.errors.full_messages}
        end
    end

    def update
        user = User.find_by(id: params[:id])
        user.update(user_params)
        render json: user
    end

    def destroy
        user = User.find_by(id: params[:id])
        user.destroy
        render json: {}
    end

    def update_likes
        user = User.find_by(id: params[:id])
        user.update(params.require(:user).permit(:likes, likes:[]))
        render json: user
   end

   def update_following
    user = User.find_by(id: params[:id])
    user.update(params.require(:user).permit(:following, following:[]))
    render json: user
end

def update_followers
    user = User.find_by(id: params[:id])
    user.update(params.require(:user).permit(:followers, followers:[]))
    render json: user
end  

def update_stories
    user = User.find_by(id: params[:id])
    user.update(params.require(:user).permit(:stories, stories:[]))
    render json: user
end  

private

    def error
        render json: {error: "User Not Found"}
    end

    def user_params
        params.permit(:username, :password, :name, :stories, :bio, :profile, :id)
    end

   
end
