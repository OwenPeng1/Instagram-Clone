class MessagesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :error
    def index
        render json: Message.all
    end

    def show
        message = Message.find_by!(id: params[:id])
        render json: comment
    end

    def create
        new_message = Message.new(message_params)
        if new_message.save
            render json: new_message
        else 
            render json: {errors: new_message.errors.full_messages}
        end
    end

    def update
        message = Message.find_by(id: params[:id])
        message.update(message_params)
        render json: message
    end

    def destroy
        message = Message.find_by(id: params[:id])
        message.destroy
        render json: {}
    end

private

    def error
        render json: {error: "Message Not Found"}
    end

    def message_params
        params.require(:message).permit(:date, :text, :sender, :recipient)
    end
end
