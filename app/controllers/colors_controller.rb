class ColorsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    Rails.logger.info '#######################'
    Rails.logger.info params[:color]
    Rails.logger.info '#######################'
  end
end
