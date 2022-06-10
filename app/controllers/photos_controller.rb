class PhotosController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :error
    def index
        render json: Photo.all.order("id ASC")
    end

    def show
        photo = Photo.find_by!(id: params[:id])
        render json: photo
    end

    def create
        new_photo = Photo.new(photo_params)
        if new_photo.save
            render json: new_photo
        else 
            render json: {errors: new_photo.errors.full_messages}
        end
    end

    def update
        photo = Photo.find_by(id: params[:id])
        photo.update(photo_params)
        render json: photo
    end

    def destroy
        photo = Photo.find_by(id: params[:id])
        photo.destroy
        render json: {}
    end

   def update_likedBy
        photo = Photo.find_by(id: params[:id])
        photo.update(params.require(:photo).permit(:likedBy, likedBy:[]))
        render json: photo
   end

private

    def error
        render json: {error: "Photo Not Found"}
    end

    def photo_params
        params.require(:contact).permit(:photo,:likedBy, :caption, :user_id)
    end

  
end
