Rails.application.routes.draw do
  get 'static_pages/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  root "api/messages#random_message"

  namespace :api do
    get "api/messages/random_message", to: "api/messages#random_message"
  end

  # Defines the root path route ("/")
  
end
