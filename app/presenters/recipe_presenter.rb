class RecipePresenter < BasePresenter
  attr_reader :recipe

  def initialize(recipe)
    @recipe = recipe
  end

  def present
    @recipe
  end
end
