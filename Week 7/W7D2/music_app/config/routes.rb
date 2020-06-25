Rails.application.routes.draw do
  resources :users, only: [:new, :show, :create]

  resource :session, only: [:create, :destroy, :new]

  resources :bands do 
    resources :albums, only: [:new]
  end

  resources :albums, only: [:create, :edit, :show, :update, :destroy]

end
