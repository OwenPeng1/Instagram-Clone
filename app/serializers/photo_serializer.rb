class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :photo, :caption, :likedBy
  has_one :user
end
