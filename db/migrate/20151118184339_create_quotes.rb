class CreateQuotes < ActiveRecord::Migration
  def change
    create_table :quotes do |t|
      t.string :author
      t.string :content

      t.timestamps null: false
    end
  end
end
