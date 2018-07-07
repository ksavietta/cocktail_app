class CreateBars < ActiveRecord::Migration[5.1]
  def change
    create_table :bars do |t|
      t.integer :user_id
      t.timestamps
    end

    create_table :bar_ingredients do |t|
      t.integer :bar_id
      t.integer :ingredient_id
      t.integer :quantity
      t.string  :units
      t.timestamps
    end
  end
end
