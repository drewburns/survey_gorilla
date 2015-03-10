

$(document).ready(function(){                                  
	$("#create_survey").on("submit", function(event) {    
	  event.preventDefault();                                        

	  var url = $(this).attr('action')                            
	  var data = $(this).serialize() 

	  $('#create_survey').hide();
	  $('#create_question').show();
	  $.post(url, data, function(response){ 
	  	$("#create_question").attr("action", "/create_question/" + response);
	  });
	});

	$("#create_question").on("submit", function(event) {    
	  event.preventDefault();                                        

	  var url = $(this).attr('action')                            
	  var data = $(this).serialize()                         
	  $('#create_question').hide();
	  $('#create_choice').show();
	  $.post(url, data, function(response){ 
	  	$("#create_choice").attr("action", "/create_question/" + response);      
	  });
	});
	$("#add_another_choice").on("click", function(event) {    
	  event.preventDefault();                                        

	  var url = $("#create_choice").attr('action');                          
	  var data = $("#create_choice").serialize();                       
	  
	  $.post(url, data, function(){ 

	  });
	  $('#choice_input').val("")
	});
	$("#add_another_question").on("click", function(event) {    
	  event.preventDefault();                                        

	  var url = $("#create_choice").attr('action');                           
	  var data = $("#create_choice").serialize();                         
	  
	  $.post(url, data, function(){       
	  });
	  $('#create_choice').hide();
	  $('#create_question').show();  
	});

});
