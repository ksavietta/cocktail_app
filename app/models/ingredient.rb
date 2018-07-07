class Ingredient < ApplicationRecord
  has_many :recipe_ingredients
  has_many :recipes, through: :recipe_ingredients
  has_many :bar_ingredients
  has_many :bars, through: :bar_ingredients
end
