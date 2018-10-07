class UsersController < ApplicationController

  def edit
  end

  def update
  	if current_user.update(user_params)
  	  redirect_to root_path
  	else
  	  render :edit
    end
  end

  def create
	@group = Group.new(group_params)
	if @group.save
	  redirect_to root_path, notice: "グループを作成しました"
	else
	  flash.now[:alert] = "グループ名を入力してください"
	  render :new
	end
  end

  private

  def user_params
  	params.require(:user).permit(:name,:email)
  end
end
