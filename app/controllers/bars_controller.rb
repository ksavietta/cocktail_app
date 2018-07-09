class BarsController < ApplicationController
  before_action :authenticate_user!

  def bar
    render json: current_user.bar.ingredients
  end

end
