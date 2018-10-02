Rails.application.routes.draw do
  device_for :users

  root 'messages#index'
end
