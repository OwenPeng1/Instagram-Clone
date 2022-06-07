class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.string :text
      t.time :date
      t.string :sender
      t.string :recipient

      t.timestamps
    end
  end
end
