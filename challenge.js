var question = document.getElementById('lblChallenge').value;

document.getElementById('lblChallenge').addEventListener('onload',
    parse(question));

function parse (input) {
	input = input.trim();
	var output = new Array();

	input = input.split(" ");

	for (var i = 0; i < input.length; i++) {
		var temp = new Array();

		if (input[i].charAt(0) == "[") {
			temp[i] = input[i].slice(1,3);

			output.push(temp[i]);
		};
	};

	return output;
};