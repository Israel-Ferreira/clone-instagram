# frozen_string_literal: true

Rails.application.routes.draw do
  root 'posts#index'
  resources :posts, only: %i[index show new create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  devise_for :users, only: %i[sessions registrations passwords]

  resources :users, only: %i[show], param: :username
  get 'edit_profile', to: 'users#edit'
  patch 'profile', to: 'users#update'
end
