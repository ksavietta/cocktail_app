class Bar < ApplicationRecord
  has_many :bar_ingredients
  has_many :ingredients, through: :bar_ingredients
  belongs_to :user
end
