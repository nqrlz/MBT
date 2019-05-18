//console.log("Begin Script");
$.ajax(
{
	dataType: "json",
  type: "GET",
	url: "https://api.twitch.tv/kraken/streams/b4ithoven",
  headers: {
    "Client-ID": "sltd4m0mek4dqxfnklqhni0q4czhg7"
  },
	success: function(channel)
	{
		//console.log("Results:");
		//console.log(channel);
        //console.log(channel.stream.channel.status);
      if(channel.stream !== null) {
          console.log('Stream Online');
          $(".twitch").show();        
          $(".twitch__output").html(channel.stream.channel.status)
      }
	},
	error: function(){
	   //console.log("The Request Failed");
	}
	
});
//console.log("End Script");

function countdown() {
    // Set the date we're counting down to
var countDownDate = ($('.nexttourney').attr('data-time'))*1000;

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

    //console.log(countDownDate, now);

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  $(".timer").html("in: " +  days + " Tagen " + hours + " Stunden " + minutes + " Minuten");

  // If the count down is finished, write some text 

}, 1000);



    
}

$(document).ready(function() {
    console.log('ready');
    countdown();    

})