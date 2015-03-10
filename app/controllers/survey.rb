get '/survey/:id' do
	@survey = Survey.find(params[:id])
	erb :survey
end

post '/survey/:id' do
	completion = Completion.create(user_id: session[:user_id], survey_id: params[:id]).id
	params[:question].each do |key,value|
		question = Question.find(key.to_i).id
		choice = Choice.find(value.to_i).id
		Selection.create(completion_id: completion , question_id: question  , choice_id: choice )
	end
	redirect '/'
end

get '/create' do
	redirect '/login' if session[:user_id] == nil
	erb :create
end

post '/create_survey' do
	survey = Survey.create(user_id: session[:user_id], title: params[:title])
	survey.id.to_s
end

post '/create_question/:id' do
	question = Question.create(survey_id: params[:id], text: params[:question])
	question.id.to_s
end

post '/create_choice/:id' do
	choice = Choice.create(question_id: params[:id] , text: params[:choice])
end

get '/finished' do
	redirect '/user'
end

get '/survey/stats/:id' do
	if Survey.find(params[:id]).user.id == session[:user_id]
		@survey = Survey.find(params[:id])
		@questions = @survey.questions
		erb :stats
	else
		redirect '/login'
	end
end