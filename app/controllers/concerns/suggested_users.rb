module SuggestedUsers
  extend ActiveSupport::Concern
  def set_suggested_users
    @suggested_users = User.all  - [current_user]
  end
end