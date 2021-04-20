function init(){
	var inputtext = document.getElementById('entryinput');
	var b1 = document.getElementById('entrybutton');
	var output1 = document.getElementById('textoutput');
	
	function whatHappensEvent(){
		alert('Andrew Haines: ' + inputtext.value);
		output1.innerHTML = inputtext.value;
	}
	b1.addEventListener('click', whatHappensEvent);
}
window.addEventListener('load', init);