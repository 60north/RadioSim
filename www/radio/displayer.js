function Displayer() {
	this.display = function(radio) {
		if(radioState.volume < 0) {
			radio.display("Off");
		} else {
			radio.display("vol:" + Math.round(radioState.volume));
		}
	};
}

var displayer = new Displayer();
