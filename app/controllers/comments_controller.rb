class CommentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :error
    def index
        render json: Comment.all
    end

    def show
        comment = Comment.find_by!(id: params[:id])
        render json: comment
    end

    def create
        new_comment = Comment.new(comment_params)
        if new_comment.save
            render json: new_comment
        else 
            render json: {errors: new_comment.errors.full_messages}
        end
    end

    def update
        comment = Comment.find_by(id: params[:id])
        comment.update(comment_params)
        render json: comment
    end

    def destroy
        comment = Comment.find_by(id: params[:id])
        comment.destroy
        render json: {}
    end

private

    def error
        render json: {error: "Comment Not Found"}
    end

    def comment_params
        params.require(:comment).permit(:text, :photo_id, :user_id)
    end
end
