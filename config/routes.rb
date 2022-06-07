Rails.application.routes.draw do
  
  resources :comments
  resources :photos
  resources :users
  resources :messages
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post '/login', to: "session#create"
  get '/userInSession', to: "session#logged_user"
  delete "/logout", to: "session#destroy"

  patch 'updateLikedBy', to: "photo#updateLikedBy"
  patch 'updateFollowers', to: "users#updateFollowers"
  patch 'updateFollowing', to: "users#updateFollowing"
  patch 'updateLikes', to: "users#updateLikes"

end
