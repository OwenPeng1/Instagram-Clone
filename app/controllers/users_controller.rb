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

    def updateLikes
        user = User.find_by(id: params[:id])
        user.update(params.require(:user).permit(:likes, likes:[]))
        render json: user
   end

   def updateFollowing
    user = User.find_by(id: params[:id])
    user.update(params.require(:user).permit(:following, following:[]))
    render json: user
end

def updateFollowers
    user = User.find_by(id: params[:id])
    user.update(params.require(:user).permit(:followers, followers:[]))
    render json: user
end  

private

    def error
        render json: {error: "User Not Found"}
    end

    def user_params
        params.require(:contact).permit(:username, :password, :phone_number, :address, :description, :photo, :favorite, :user_id)
    end

   
end
