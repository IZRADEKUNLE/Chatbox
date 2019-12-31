var userNome="";

		function send_message(message){
			var prevMessage = $("#container").html();
			if(prevMessage.length > 3){
				prevMessage = prevMessage + "<br>";
			}

			$("#container").html(prevMessage + "<span class ='current_message'>"+ "<span class ='chatbot'>Chatbot: </span>" +  message + "</span>");
			$(".current_message").hide();
			$(".current_message").delay(500).fadeIn();
			$(".current_message").removeClass("current_message");
		}

		function get_Name(){
				send_message("Hello, what is your name?")			
		}

		function ai(message){
			if (userNome.length < 3){
				userNome = message;
				send_message("Nice to meet you " + userNome + ", how you doing?" );
			}
			if(message.indexOf("how are you")>=0){
				send_message("Thanks, I am good!" );
			}if(message.indexOf("I need help")>=0){
				send_message("what can I help you with?");
			}if(message.indexOf("time")>=0){
				var date = new Date();
				var hour = date.getHours();
				var minutes = date.getMinutes();
				send_message("Time is "+ hour + ":" + minutes);
			}
		}

		$(function(){
			get_Name();
			$("#textarea").keypress(function(event){
				if( event.which == 13){
					if($("#enter").prop("checked")){						
						$("#Send").click();
						console.log("Testing this again");
						event.preventDefault();
					}
				}
			});

		$("#Send").click(function(){
			var userName = "<span class ='userName'>You: </span>"
			var newMessage = $("#textarea").val();
			$("#textarea").val("");
			var prevMessage = $("#container").html();
			if(prevMessage.length > 3){
				prevMessage = prevMessage + "<br>";
			}
			$("#container").html(prevMessage + userName + newMessage);
			$("#container").scrollTop($("#container").prop("scrollHeight"));
			ai(newMessage);
			
		});
		

		});