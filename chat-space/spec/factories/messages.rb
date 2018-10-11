FactoryGirl.define do
  factory :message do
  	body Faker::Lorem.sentence
  	image File.open("#{Rails.root}/public/images/inu2.jpg")
  	group 
  	user
  end
end
