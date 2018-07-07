class BarsController < ApplicationController
  before_action :authenticate_user!
  # before_action :set_bar, only: [:show, :update, :destroy]

  def bar
    render json: current_user.bar.ingredients
  end

  # # GET /bars
  # def index
  #   @bars = current_user.bars
  #   render json: @bars
  # end
  #
  # # GET /bars/1
  # def show
  #   render json: @bar
  # end
  #
  # # POST /bars
  # def create
  #   @bar = Bar.new(bar_params)
  #
  #   if @bar.save
  #     render json: @bar, status: :created, location: @bar
  #   else
  #     render json: @bar.errors, status: :unprocessable_entity
  #   end
  # end
  #
  # # PATCH/PUT /bars/1
  # def update
  #   if @bar.update(bar_params)
  #     render json: @bar
  #   else
  #     render json: @bar.errors, status: :unprocessable_entity
  #   end
  # end
  #
  # # DELETE /bars/1
  # def destroy
  #   @bar.destroy
  # end

  # private
  #   # Use callbacks to share common setup or constraints between actions.
  #   def set_bar
  #     @bar = current_user.bars.find(params[:id])
  #   end
  #
  #   # Only allow a trusted parameter "white list" through.
  #   def bar_params
  #     params.require(:bar).permit(:user_id)
  #   end
end
