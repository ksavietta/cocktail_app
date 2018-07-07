user = User.create(email: 'user@example.com', nickname: 'banana', name: 'User One', password: "firstpass")
Product.create!([
  { name: 'Product 001' },
  { name: 'Product 002' },
  { name: 'Product 003' },
  { name: 'Product 004' }
])
Recipe.create!([
  { name: 'Margarita' },
  { name: 'The Last Word' }
])
Ingredient.create!([
  { name: 'Lime', description: 'a green citrus fruit' },
  { name: 'Green Chartreuse', description: 'a French liqueur made by the Carthusian Monks since 1737'},
  { name: 'Tequila', description: ' a regional distilled beverage and type of alcoholic drink made from the blue agave plant, primarily in the area surrounding the city of Tequila'},
  { name: 'Mezcal', description: 'a distilled alcoholic beverage made from any type of agave'},
  { name: 'Maraschino Liquer', description: 'a liqueur obtained from the distillation of Marasca cherries'},
  { name: 'Triple Sec', description: 'a strong, sweet and colorless orange flavored liqueur'},
  { name: 'Sugar', description: 'the generic name for sweet-tasting, soluble carbohydrates'}
])

bar = Bar.create(user_id: user.id, default: true)
ingredients = Ingredient.where(name: ['Lime', 'Tequila', 'Sugar'])
ingredients.each {|ingredient| BarIngredient.create!(bar_id: bar.id, ingredient_id:ingredient.id)}

recipe = Recipe.find_by(name: 'Margarita')
ingredients = Ingredient.where(name: ['Lime', 'Tequila', 'Triple Sec', 'Sugar'])
ingredients.each {|ingredient| RecipeIngredient.create!(recipe_id: recipe.id, ingredient_id:ingredient.id)}

recipe = Recipe.find_by(name: 'The Last Word')
ingredients = Ingredient.where(name: ['Green Chartreuse', 'Mezcal', 'Maraschino Liquer', 'Lime'])
ingredients.each {|ingredient| RecipeIngredient.create!(recipe_id: recipe.id, ingredient_id:ingredient.id)}
