class User < ApplicationRecord
    has_secure_password
    has_many :photos
    has_many :comments
end