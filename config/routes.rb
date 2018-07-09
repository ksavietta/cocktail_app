Rails.application.routes.draw do
  root "application#index"
  mount_devise_token_auth_for 'User', at: 'auth'
  resources :recipe_ingredients
  resources :recipes
  resources :ingredients
  resources :products
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
