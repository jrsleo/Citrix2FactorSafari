var question = document.getElementById('lblChallenge').value;

document.getElementById('lblChallenge').addEventListener('onload',
    parse(question));

function parse (input) {
	var output = new Array();
	input = input.trim();
	input = input.split(" ");

	for (var i = 0; i < input.length; i++) {
		if (input[i].charAt(0) == "[") {
			output.push(input[i].slice(1,3));
		};
	};

	return output;
};