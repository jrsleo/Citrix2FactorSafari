// Saves options to chrome.storage.local.
function save_options() {
  var A1 = document.getElementById('A1').value;
  var A2 = document.getElementById('A2').value;
  var A3 = document.getElementById('A3').value;
  var A4 = document.getElementById('A4').value;
  var A5 = document.getElementById('A5').value;
  
  chrome.storage.local.set({
    A1: A1,
    A2: A2,
    A3: A3,
    A4: A4,
    A5: A5
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 1000);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.local.get({
    A1: '',
    A2: '',
    A3: '',
    A4: '',
    A5: ''
  }, function(items) {
    document.getElementById('A1').value = items.A1;
    document.getElementById('A2').value = items.A2;
    document.getElementById('A3').value = items.A3;
    document.getElementById('A4').value = items.A4;
    document.getElementById('A5').value = items.A5;
  });
}


document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);