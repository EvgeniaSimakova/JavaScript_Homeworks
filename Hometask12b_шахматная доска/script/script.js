var button = document.getElementsByTagName('button')[0];
    inputX = document.getElementById('x');
    inputY = document.getElementById('y');

function validate() {
    if (inputX.value == '' || inputY.value == '') {
        button.disabled = true;
    } else button.disabled = false;
}

button.onclick = function() {
    var x = +inputX.value;
        y = +inputY.value;
    if (x > 0 && y > 0 && x < 11 && y < 11 && x === parseInt(x, 10) && y === parseInt(y, 10)) {
        var table = document.getElementsByTagName('table')[0];
        if(table) {
        table.remove();
        }
        drawTable(x, y); 
    } else alert('Only integer value (from 1 to 10) is possible!')
}

function drawTable(x, y) {
        
    table = document.createElement('table');
        
    for (var i = 0; i < y; i++) {
        var tr = document.createElement('tr');
                    
    for (var j = 0; j < x; j++) {
        var td = document.createElement('td');
        if (i%2 == j%2) {
            td.classList.add('black')
        } 
        tr.appendChild(td);

    } table.appendChild(tr);
}
    document.body.appendChild(table);
    table.onclick = function(changeColors) {
        var table = document.getElementsByTagName('table')[0];
            cells = document.getElementsByTagName('td');

        for (var i = 0; i < cells.length; i++) {
            cells[i].classList.toggle('black');
        }
    };  
}  


