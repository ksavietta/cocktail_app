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
  { name: 'Lime' },
  { name: 'Green Chartreuse' },
  { name: 'Tequila' },
  { name: 'Mezcal' },
  { name: 'Maraschino Liquer' },
  { name: 'Triple Sec'},
  { name: 'Sugar'}
])

bar = Bar.create(user_id: user.id)
ingredients = Ingredient.where(name: ['Lime', 'Tequila', 'Sugar'])
ingredients.each {|ingredient| BarIngredient.create!(bar_id: bar.id, ingredient_id:ingredient.id)}

recipe = Recipe.find_by(name: 'Margarita')
ingredients = Ingredient.where(name: ['Lime', 'Tequila', 'Triple Sec', 'Sugar'])
ingredients.each {|ingredient| RecipeIngredient.create!(recipe_id: recipe.id, ingredient_id:ingredient.id)}

recipe = Recipe.find_by(name: 'The Last Word')
ingredients = Ingredient.where(name: ['Green Chartreuse', 'Mezcal', 'Maraschino Liquer', 'Lime'])
ingredients.each {|ingredient| RecipeIngredient.create!(recipe_id: recipe.id, ingredient_id:ingredient.id)}
