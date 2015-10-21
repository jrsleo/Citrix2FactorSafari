var question = document.getElementById('lblChallenge').value;

document.getElementById('lblChallenge').addEventListener('onload',
    parse(question));

function parse (input) {
	var temp = input.trim();
	var output = new Array();

	temp = temp.split(" ");

	for (var i = 0; i < temp.length; i++) {
		if (temp[i].charAt(0) == "[") {
			output.push(temp[i]);
		};
	};

	return output;
};