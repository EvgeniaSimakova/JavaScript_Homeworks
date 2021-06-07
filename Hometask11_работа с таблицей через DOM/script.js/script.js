var table = document.getElementById('table');
    tbody = table.firstElementChild;

table.onclick = function(event) {
	var target = event.target;
	
	if (target.id === 'add_row') {
        tbody.insertAdjacentHTML('afterbegin', '<tr><td></td><td></td><td></td></tr>');
        return;
    } else if (target.tagName === 'TD' && target.id !== 'add_row') {
        var currentText = target.innerText;
	    var input = createInput(currentText);
	   	target.innerText = '';
	    target.appendChild(input);

	    input.focus();
    }
};

function createInput(text) {
	var input = document.createElement('input'),
	  	toggle;
	input.value = text;
  
	input.onkeydown = function (event) {
	  	if (event.key === 'Enter') {
			toggle = true;
			input.parentElement.innerText = input.value;
	  };
	  toggle = false;
	};

	input.onblur = function () {
	  if (!toggle) {
			input.parentElement.innerText = input.value;
	  };
	};
  
	return input;
}

    