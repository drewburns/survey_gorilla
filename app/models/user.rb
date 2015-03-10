class User < ActiveRecord::Base
	require 'bcrypt'
	
  has_many :completions
  has_many :surveys

  validates :name, presence: true
  validates :name, uniqueness: true
  validates :password_hash , presence: true

  def password
    @password ||= BCrypt::Password.new(password_hash)
  end

  def self.create_password(new_password)
    BCrypt::Password.create(new_password)
  end

	def self.login_check(username, password)
    user = User.where(name: username).first
    if user && user.password == password 
      user
    else
      false
    end
  end 
end
