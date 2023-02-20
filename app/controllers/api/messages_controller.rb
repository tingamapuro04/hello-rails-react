class Api::MessagesController < ApplicationController
  def random_message 
    message = Message.order("RANDOM()").first
    render json: {greeting: message.greeting}
  end
end
