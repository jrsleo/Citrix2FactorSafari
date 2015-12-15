safari.application.addEventListener("popover", restore_options, true);
safari.application.addEventListener("message", handleMessage, false);
document.getElementById('save').addEventListener('click', save_options);
document.getElementById('parent').addEventListener('keyup', moveNextField);
initializeStorage();

function handleMessage(msgEvent) {
    if (msgEvent.name === "solve") {
      var data = {};
      data.A1 = localStorage.A1;
      data.A2 = localStorage.A2;
      data.A3 = localStorage.A3;
      data.A4 = localStorage.A4;
      data.A5 = localStorage.A5;
      data.B1 = localStorage.B1;
      data.B2 = localStorage.B2;
      data.B3 = localStorage.B3;
      data.B4 = localStorage.B4;
      data.B5 = localStorage.B5;
      data.C1 = localStorage.C1;
      data.C2 = localStorage.C2;
      data.C3 = localStorage.C3;
      data.C4 = localStorage.C4;
      data.C5 = localStorage.C5;
      data.D1 = localStorage.D1;
      data.D2 = localStorage.D2;
      data.D3 = localStorage.D3;
      data.D4 = localStorage.D4;
      data.D5 = localStorage.D5;
      data.E1 = localStorage.E1;
      data.E2 = localStorage.E2;
      data.E3 = localStorage.E3;
      data.E4 = localStorage.E4;
      data.E5 = localStorage.E5;
      data.F1 = localStorage.F1;
      data.F2 = localStorage.F2;
      data.F3 = localStorage.F3;
      data.F4 = localStorage.F4;
      data.F5 = localStorage.F5;
      data.G1 = localStorage.G1;
      data.G2 = localStorage.G2;
      data.G3 = localStorage.G3;
      data.G4 = localStorage.G4;
      data.G5 = localStorage.G5;
      data.H1 = localStorage.H1;
      data.H2 = localStorage.H2;
      data.H3 = localStorage.H3;
      data.H4 = localStorage.H4;
      data.H5 = localStorage.H5;
      data.I1 = localStorage.I1;
      data.I2 = localStorage.I2;
      data.I3 = localStorage.I3;
      data.I4 = localStorage.I4;
      data.I5 = localStorage.I5;
      data.J1 = localStorage.J1;
      data.J2 = localStorage.J2;
      data.J3 = localStorage.J3;
      data.J4 = localStorage.J4;
      data.J5 = localStorage.J5;

      msgEvent.target.page.dispatchMessage("answer", data);
    }
}

function moveNextField(e) {
  if (e.target !== e.currentTarget) {
        var currentField = e.target;
        var nextField = document.getElementById(getNextID(currentField));

        if (currentField.value.length >= currentField.maxLength) {
          currentField.value = currentField.value.toUpperCase();
          nextField.focus(); 
          nextField.select();
        } 
  }

  e.stopPropagation();
}

function getNextID(field) {
  var temp = field.id;
  var output = "";

  if (temp.charAt(0) == 'J' && temp.charAt(1) == '5') {
    output = 'A1';
  }
  else if (temp.charAt(0) == 'J') {
    output = 'A'.concat(+temp.charAt(1) + 1);
  }
  else {
    output = nextLetter(temp.charAt(0)).concat(temp.charAt(1));  
  }

  return output;
}

function nextLetter(s){
    return s.replace(/([a-zA-Z])[^a-zA-Z]*$/, function(a){
        var c = a.charCodeAt(0);
        switch(c){
            case 90: return 'A';
            case 122: return 'a';
            default: return String.fromCharCode(++c);
        }
    });
}

function initializeStorage () {
  if (!localStorage.A1) localStorage.A1 = '';
  if (!localStorage.A2) localStorage.A2 = '';
  if (!localStorage.A3) localStorage.A3 = '';
  if (!localStorage.A4) localStorage.A4 = '';
  if (!localStorage.A5) localStorage.A5 = '';
  if (!localStorage.B1) localStorage.B1 = '';
  if (!localStorage.B2) localStorage.B2 = '';
  if (!localStorage.B3) localStorage.B3 = '';
  if (!localStorage.B4) localStorage.B4 = '';
  if (!localStorage.B5) localStorage.B5 = '';
  if (!localStorage.C1) localStorage.C1 = '';
  if (!localStorage.C2) localStorage.C2 = '';
  if (!localStorage.C3) localStorage.C3 = '';
  if (!localStorage.C4) localStorage.C4 = '';
  if (!localStorage.C5) localStorage.C5 = '';
  if (!localStorage.D1) localStorage.D1 = '';
  if (!localStorage.D2) localStorage.D2 = '';
  if (!localStorage.D3) localStorage.D3 = '';
  if (!localStorage.D4) localStorage.D4 = '';
  if (!localStorage.D5) localStorage.D5 = '';
  if (!localStorage.E1) localStorage.E1 = '';
  if (!localStorage.E2) localStorage.E2 = '';
  if (!localStorage.E3) localStorage.E3 = '';
  if (!localStorage.E4) localStorage.E4 = '';
  if (!localStorage.E5) localStorage.E5 = '';
  if (!localStorage.F1) localStorage.F1 = '';
  if (!localStorage.F2) localStorage.F2 = '';
  if (!localStorage.F3) localStorage.F3 = '';
  if (!localStorage.F4) localStorage.F4 = '';
  if (!localStorage.F5) localStorage.F5 = '';
  if (!localStorage.G1) localStorage.G1 = '';
  if (!localStorage.G2) localStorage.G2 = '';
  if (!localStorage.G3) localStorage.G3 = '';
  if (!localStorage.G4) localStorage.G4 = '';
  if (!localStorage.G5) localStorage.G5 = '';
  if (!localStorage.H1) localStorage.H1 = '';
  if (!localStorage.H2) localStorage.H2 = '';
  if (!localStorage.H3) localStorage.H3 = '';
  if (!localStorage.H4) localStorage.H4 = '';
  if (!localStorage.H5) localStorage.H5 = '';
  if (!localStorage.I1) localStorage.I1 = '';
  if (!localStorage.I2) localStorage.I2 = '';
  if (!localStorage.I3) localStorage.I3 = '';
  if (!localStorage.I4) localStorage.I4 = '';
  if (!localStorage.I5) localStorage.I5 = '';
  if (!localStorage.J1) localStorage.J1 = '';
  if (!localStorage.J2) localStorage.J2 = '';
  if (!localStorage.J3) localStorage.J3 = '';
  if (!localStorage.J4) localStorage.J4 = '';
  if (!localStorage.J5) localStorage.J5 = '';
}

function save_options() {  
  localStorage.A1 = document.getElementById('A1').value.toUpperCase();
  localStorage.A2 = document.getElementById('A2').value.toUpperCase();
  localStorage.A3 = document.getElementById('A3').value.toUpperCase();
  localStorage.A4 = document.getElementById('A4').value.toUpperCase();
  localStorage.A5 = document.getElementById('A5').value.toUpperCase();
  localStorage.B1 = document.getElementById('B1').value.toUpperCase();
  localStorage.B2 = document.getElementById('B2').value.toUpperCase();
  localStorage.B3 = document.getElementById('B3').value.toUpperCase();
  localStorage.B4 = document.getElementById('B4').value.toUpperCase();
  localStorage.B5 = document.getElementById('B5').value.toUpperCase();
  localStorage.C1 = document.getElementById('C1').value.toUpperCase();
  localStorage.C2 = document.getElementById('C2').value.toUpperCase();
  localStorage.C3 = document.getElementById('C3').value.toUpperCase();
  localStorage.C4 = document.getElementById('C4').value.toUpperCase();
  localStorage.C5 = document.getElementById('C5').value.toUpperCase();
  localStorage.D1 = document.getElementById('D1').value.toUpperCase();
  localStorage.D2 = document.getElementById('D2').value.toUpperCase();
  localStorage.D3 = document.getElementById('D3').value.toUpperCase();
  localStorage.D4 = document.getElementById('D4').value.toUpperCase();
  localStorage.D5 = document.getElementById('D5').value.toUpperCase();
  localStorage.E1 = document.getElementById('E1').value.toUpperCase();
  localStorage.E2 = document.getElementById('E2').value.toUpperCase();
  localStorage.E3 = document.getElementById('E3').value.toUpperCase();
  localStorage.E4 = document.getElementById('E4').value.toUpperCase();
  localStorage.E5 = document.getElementById('E5').value.toUpperCase();
  localStorage.F1 = document.getElementById('F1').value.toUpperCase();
  localStorage.F2 = document.getElementById('F2').value.toUpperCase();
  localStorage.F3 = document.getElementById('F3').value.toUpperCase();
  localStorage.F4 = document.getElementById('F4').value.toUpperCase();
  localStorage.F5 = document.getElementById('F5').value.toUpperCase();
  localStorage.G1 = document.getElementById('G1').value.toUpperCase();
  localStorage.G2 = document.getElementById('G2').value.toUpperCase();
  localStorage.G3 = document.getElementById('G3').value.toUpperCase();
  localStorage.G4 = document.getElementById('G4').value.toUpperCase();
  localStorage.G5 = document.getElementById('G5').value.toUpperCase();
  localStorage.H1 = document.getElementById('H1').value.toUpperCase();
  localStorage.H2 = document.getElementById('H2').value.toUpperCase();
  localStorage.H3 = document.getElementById('H3').value.toUpperCase();
  localStorage.H4 = document.getElementById('H4').value.toUpperCase();
  localStorage.H5 = document.getElementById('H5').value.toUpperCase();
  localStorage.I1 = document.getElementById('I1').value.toUpperCase();
  localStorage.I2 = document.getElementById('I2').value.toUpperCase();
  localStorage.I3 = document.getElementById('I3').value.toUpperCase();
  localStorage.I4 = document.getElementById('I4').value.toUpperCase();
  localStorage.I5 = document.getElementById('I5').value.toUpperCase();
  localStorage.J1 = document.getElementById('J1').value.toUpperCase();
  localStorage.J2 = document.getElementById('J2').value.toUpperCase();
  localStorage.J3 = document.getElementById('J3').value.toUpperCase();
  localStorage.J4 = document.getElementById('J4').value.toUpperCase();
  localStorage.J5 = document.getElementById('J5').value.toUpperCase();

  // Update status to let user know options were saved.
  var status = document.getElementById('status');
  status.textContent = 'Options saved.';
  setTimeout(function() {
    status.textContent = '';
  }, 1000);
}

// Restores select box and checkbox state using the preferences
// stored in storage.
function restore_options() {
  document.getElementById('A1').value = localStorage.A1;
  document.getElementById('A2').value = localStorage.A2;
  document.getElementById('A3').value = localStorage.A3;
  document.getElementById('A4').value = localStorage.A4;
  document.getElementById('A5').value = localStorage.A5;
  document.getElementById('B1').value = localStorage.B1;
  document.getElementById('B2').value = localStorage.B2;
  document.getElementById('B3').value = localStorage.B3;
  document.getElementById('B4').value = localStorage.B4;
  document.getElementById('B5').value = localStorage.B5;
  document.getElementById('C1').value = localStorage.C1;
  document.getElementById('C2').value = localStorage.C2;
  document.getElementById('C3').value = localStorage.C3;
  document.getElementById('C4').value = localStorage.C4;
  document.getElementById('C5').value = localStorage.C5;
  document.getElementById('D1').value = localStorage.D1;
  document.getElementById('D2').value = localStorage.D2;
  document.getElementById('D3').value = localStorage.D3;
  document.getElementById('D4').value = localStorage.D4;
  document.getElementById('D5').value = localStorage.D5;
  document.getElementById('E1').value = localStorage.E1;
  document.getElementById('E2').value = localStorage.E2;
  document.getElementById('E3').value = localStorage.E3;
  document.getElementById('E4').value = localStorage.E4;
  document.getElementById('E5').value = localStorage.E5;
  document.getElementById('F1').value = localStorage.F1;
  document.getElementById('F2').value = localStorage.F2;
  document.getElementById('F3').value = localStorage.F3;
  document.getElementById('F4').value = localStorage.F4;
  document.getElementById('F5').value = localStorage.F5;
  document.getElementById('G1').value = localStorage.G1;
  document.getElementById('G2').value = localStorage.G2;
  document.getElementById('G3').value = localStorage.G3;
  document.getElementById('G4').value = localStorage.G4;
  document.getElementById('G5').value = localStorage.G5;
  document.getElementById('H1').value = localStorage.H1;
  document.getElementById('H2').value = localStorage.H2;
  document.getElementById('H3').value = localStorage.H3;
  document.getElementById('H4').value = localStorage.H4;
  document.getElementById('H5').value = localStorage.H5;
  document.getElementById('I1').value = localStorage.I1;
  document.getElementById('I2').value = localStorage.I2;
  document.getElementById('I3').value = localStorage.I3;
  document.getElementById('I4').value = localStorage.I4;
  document.getElementById('I5').value = localStorage.I5;
  document.getElementById('J1').value = localStorage.J1;
  document.getElementById('J2').value = localStorage.J2;
  document.getElementById('J3').value = localStorage.J3;
  document.getElementById('J4').value = localStorage.J4;
  document.getElementById('J5').value = localStorage.J5;
}