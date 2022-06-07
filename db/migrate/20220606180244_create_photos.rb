class CreatePhotos < ActiveRecord::Migration[6.1]
  def change
    create_table :photos do |t|
      t.string :photo
      t.string :caption
      t.belongs_to :user, null: false, foreign_key: true
      t.text :likedBy, array: true, default: []

      t.timestamps
    end
  end
end
