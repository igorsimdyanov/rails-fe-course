Rails.application.routes.draw do
  ActiveAdmin.routes(self)
  get 'home/index'
  root 'home#index'
  resources :posts do
    member do
      post :like
      get :likes
    end
    collection do
      get :search
      get :autocomplete
    end
  end

  namespace :api do
    namespace :v1 do
      resources :comments,  only: [:index, :show, :create, :destroy]
    end
  end

  devise_for :users
  resource :profiles, only: [:edit, :update, :show]

  resources :colors, only: [:create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
