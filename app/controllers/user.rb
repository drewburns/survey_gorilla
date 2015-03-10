get '/user' do
	redirect '/login' if session[:user_id] == nil
	@user = User.find(session[:user_id])
	erb :user
end

get '/login' do
	redirect '/user' if session[:user_id] != nil
	erb :login
end



post '/newuser' do
	password = User.create_password(params[:password_create])
	user = User.new(name: params[:username_create], password_hash: password )
	if user.valid?
		user.save
		session[:user_id] = user.id
		redirect '/user'
	else
		redirect '/login'
	end
end

post '/login' do
	user = User.login_check(params[:username_login],params[:password_login])
	if user == false 
		redirect '/login'
	else
		session[:user_id] = user.id
		redirect '/user'
	end
end



get '/logout' do
	session.clear
	redirect '/'
end