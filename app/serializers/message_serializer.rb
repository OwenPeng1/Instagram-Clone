class MessageSerializer < ActiveModel::Serializer
  attributes :id, :text, :date, :sender, :recipient
end
