class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :bio, :profile, :likes, :following, :followers, :stories
end
