Rails.application.routes.draw do
  get 'static_pages/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  root "greetings#random_message"

  namespace :api do
    get "/messages/random_message", to: "greetings#random_message"
  end

  # Defines the root path route ("/")
  
end
