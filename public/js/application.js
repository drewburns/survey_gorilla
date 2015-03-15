

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
	  	$("#create_choice").attr("action", "/create_choice/" + response);      
	  });
	});
	$("#create_choice").on("submit", function(event) {    
	  event.preventDefault();                                        

	  var url = $("#create_choice").attr('action');                          
	  var data = $("#create_choice").serialize();
	  $('#create_choice').hide();
	  $('#another_choice').show(); 
	  $('#another_question').show();
		$.post(url, data, function(){ 

	  });                    
	});

	$("#another_question").on("submit", function(event) {    
	  event.preventDefault();                                        
                         
	  $('#create_question').show();
	  $('#another_question').hide();
	  $('#another_choice').hide();
	});
	$("#another_choice").on("submit", function(event) {    
	  event.preventDefault();                                        
                         
	  $('#create_choice').show();
	  $('#another_question').hide();
	  $('#another_choice').hide();
	});



});
