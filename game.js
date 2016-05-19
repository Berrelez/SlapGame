(function(){
	
	console.log("loading");
		
	var name = "Bob";
	var health = 100;
	var hits = 0;

	document.getElementById('player').innerHTML = name;
	document.getElementById('hitpoints').innerHTML = parseInt(health,0).toString()+'%';
	document.getElementById('hits').innerHTML = "Hits " + parseInt(hits,0).toString();
	document.getElementById('health-msg').innerHTML = "";
	$('.progress-bar').css('width', health+'%').attr('aria-valuenow', health);
	
	var Game = function(){	
		/* I do not understand this part. */
		console.log("starting game");
		
		var person = prompt("Enter player name");
		if(person != null){
			name = person;
		}else{
			name = "Bob";
		}
		
	};
	
	Game.prototype.start = function(){	
		document.getElementById('player').innerHTML = name;
		document.getElementById('hitpoints').innerHTML = parseInt(health,0).toString()+'%';
		document.getElementById('hits').innerHTML = "Hits " + parseInt(hits,0).toString();
		$('.progress-bar').css('width', health+'%').attr('aria-valuenow', health);
	}
	
	Game.prototype.slap = function(){	
		if(health <= 0){
			document.getElementById('health-msg').innerHTML = name + " is dead";
		}else{
			console.log("SLAP!!!");
			document.getElementById('punch').play();
			health --;
			hits ++;
			update();
		}
	}

	Game.prototype.punch = function(){
		if(health <= 0){
			document.getElementById('health-msg').innerHTML = name + " is dead";
		}else{	
			console.log("POW!!!");
			document.getElementById('punch').play();
			health -=5;
			hits ++;
			update();
		}
	}

	Game.prototype.kick = function(){		
		if(health <= 0){
			document.getElementById('health-msg').innerHTML = name + " is dead";
		}else{
			console.log("WHAM!!!");
			document.getElementById('punch').play();
			health -=10;
			hits ++;
			update();
		}
	}
				
	function update(){
		console.log("Current Health: " + health);
		document.getElementById('hitpoints').innerHTML = parseInt(health,0).toString();
		document.getElementById('hits').innerHTML = "Hits " + parseInt(hits,0).toString();
		$('.progress-bar').css('width', health+'%').attr('aria-valuenow', health);
		
		if(health >= 85){
			console.log("health is excelent");
			
			document.getElementById('hurt').play();
			document.getElementById('health-msg').innerHTML = "";
		
			$('#hitpoints').addClass('progress-bar-success');
			$('#avatar').addClass('hit-excelent');
			
			setTimeout(function() {
				$('#avatar').removeClass('hit-excelent');
				$('#avatar').addClass('excelent');
			}, 1000);
		
		}else if(health >= 70 && health < 85){
			console.log('health is good')
			
			$('#avatar').removeClass('good');
			$('#avatar').addClass('hit-good');
			
			setTimeout(function() {
				$('#avatar').removeClass('hit-good');
				$('#avatar').addClass('good');
			}, 1000);	
		
		}else if(health >= 55 && health < 70){
			console.log("health is poor");
			
			document.getElementById('hurt').play();
			document.getElementById('health-msg').innerHTML = "Health is poor.";
			
			$('#hitpoints').removeClass('progress-bar-success');
			$('#hitpoints').addClass('progress-bar-warning');
			$('#avatar').removeClass('good');
			$('#avatar').addClass('hit-poor');
			
			setTimeout(function() {
				$('#avatar').removeClass('hit-poor');
				$('#avatar').addClass('poor');
			}, 1000);		
		
		}else if(health >=40 && health < 55){
			console.log("health is bad");
			
			document.getElementById('hurt').play();
			document.getElementById('health-msg').innerHTML = "Health is bad!";
			
			$('#avatar').removeClass('poor');
			$('#avatar').addClass('hit-bad');
			
			setTimeout(function() {
				$('#avatar').removeClass('hit-bad');
				$('#avatar').addClass('bad');
			}, 1000);	
		
		}else if(health >=20 && health < 40){
			console.log("health is critical");
			
			document.getElementById('hurt').play();
			document.getElementById('health-msg').innerHTML = "Health is critical!!";
			
			$('#hitpoints').removeClass('progress-bar-warning');
			$('#hitpoints').addClass('progress-bar-danger');
			$('#avatar').removeClass('bad');
			$('#avatar').addClass('hit-critical');
			
			setTimeout(function() {
				$('#avatar').removeClass('hit-critical');
				$('#avatar').addClass('critical');
			}, 1000);			
		
		}else if(health >=1 && health < 20){
			console.log("player is dying");
			
			document.getElementById('hurt').play();
			document.getElementById('health-msg').innerHTML = name + " is dying!!!";
			
			$('#avatar').removeClass('critical');
			$('#avatar').addClass('hit-dying');
			
			setTimeout(function() {
				$('#avatar').removeClass('hit-dying');
				$('#avatar').addClass('dying');
			}, 1000);
		
		}else{
			console.log("player is dead");
			
			document.getElementById('dead').play();
			
			$('#avatar').removeClass('dying');
			$('#avatar').addClass('dead');
			
			document.getElementById('health-msg').innerHTML = name + " is dead";
			
			$('#newGame').show();
		}
	}
	
	Game.prototype.restartGame = function(){

		health = 100;
		hits = 0;
		
		var person = prompt("Enter player name");
		if(person != null){
			name = person;
		}else{
			name = "Bob";
		}
		
		document.getElementById('player').innerHTML = name;
		document.getElementById('hitpoints').innerHTML = parseInt(health,0).toString()+'%';
		document.getElementById('hits').innerHTML = "Hits " + parseInt(hits,0).toString();
		document.getElementById('health-msg').innerHTML = "";
		
		$('.progress-bar').css('width', health+'%').attr('aria-valuenow', health);
		$('#hitpoints').removeClass('progress-bar-warning');
		$('#hitpoints').removeClass('progress-bar-danger');
		$('#hitpoints').addClass('progress-bar-success');
		$('#avatar')[0].className = "pic";
		$('#newGame').hide();
	}
		
	window.SlapGame = Game;

})();