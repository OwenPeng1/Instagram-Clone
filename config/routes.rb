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

  patch '/update_likedBy/:id', to: "photos#update_likedBy"
  patch '/update_followers/:id', to: "users#update_followers"
  patch '/update_following/:id', to: "users#update_following"
  patch '/update_likes/:id', to: "users#update_likes"
  patch '/update_stories/:id', to: "users#update_stories"

end
