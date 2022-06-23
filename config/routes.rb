Rails.application.routes.draw do
  get 'home/index'
  root 'home#index'
  resources :posts
  get 'profile/edit', to: 'profile#edit', as: :edit_profile
  get 'profile', to: 'profile#show'
  patch 'profile', to: 'profile#update'
  
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
