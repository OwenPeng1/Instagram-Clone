class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :name
      t.string :bio
      t.string :profile
      t.text :likes, array: true, default: []
      t.text :following, array: true, default: []
      t.text :followers, array: true, default: []
      t.text :stories, array: true, default: []

      t.timestamps
    end
  end
end
