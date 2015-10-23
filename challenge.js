var challenge_question = document.getElementById('lblChallenge').innerHTML;
translate(parse(challenge_question));

// takes String input and returns Array of strings in output
function parse (input) {
	var output = [];
	input = input.trim();
	input = input.split(" ");

	for (var i = 0; i < input.length; i++) {
		if (input[i].charAt(0) == "[") {
			output.push(input[i].slice(1,3));
		};
	};

	return output;
};

// Grabs data from options page and takes parsed array and returns corresponding code value
function translate(input) {
  chrome.storage.local.get({
    A1: '',
    A2: '',
    A3: '',
    A4: '',
    A5: '',
    B1: '',
    B2: '',
    B3: '',
    B4: '',
    B5: '',
    C1: '',
    C2: '',
    C3: '',
    C4: '',
    C5: '',
    D1: '',
    D2: '',
    D3: '',
    D4: '',
    D5: '',
    E1: '',
    E2: '',
    E3: '',
    E4: '',
    E5: '',
    F1: '',
    F2: '',
    F3: '',
    F4: '',
    F5: '',
    G1: '',
    G2: '',
    G3: '',
    G4: '',
    G5: '',
    H1: '',
    H2: '',
    H3: '',
    H4: '',
    H5: '',
    I1: '',
    I2: '',
    I3: '',
    I4: '',
    I5: '',
    J1: '',
    J2: '',
    J3: '',
    J4: '',
    J5: ''
  }, function(items) {
    var matching_text = "";
    var output = [];

    for (var i = 0; i < input.length; i++) {
		matching_text = input[i];

		output.push(items[matching_text]);
	};

	// publish the output code in case of manual typing
	document.getElementById('lblChallenge').innerHTML = document.getElementById('lblChallenge').innerHTML + "The secret code is: " + output;

	// input the code into the field
	//document.getElementById('ID_Challenge_Response').value = 

  });

}