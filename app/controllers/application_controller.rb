class ApplicationController < ActionController::Base
  before_action :authenticate_user!

  def authenticate_admin_user!
    authenticate_user!
    unless current_user.admin?
      flash[:alert] = 'Access denied!'
      redirect_to root_path
    end
  end
end
