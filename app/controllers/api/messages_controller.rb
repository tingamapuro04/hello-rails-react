class Api::MessagesController < ApplicationController
  def random_message 
    message = Message.order("RANDOM() DESC").last
    render plain: "#{message.greeting}"
  end
end
