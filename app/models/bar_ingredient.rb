class BarIngredient < ApplicationRecord
  belongs_to :bar
  belongs_to :ingredient
end
