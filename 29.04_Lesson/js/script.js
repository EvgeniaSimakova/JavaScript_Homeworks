var container = document.getElementById('container'),
    button = document.getElementsByTagName('button')[0];
    
var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');
    
firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar)
container.appendChild(secondPar);

    
button.onclick = function() {
    var links = firstPar.children;
    for (var i = 0; i < links.length; i++) {
        links[i].classList.add('decorated');
    }
}

secondPar.addEventListener('click', function(event) {
    var target = event.target;
    var links_2 = secondPar.children;
    var href = target.getAttribute('href');

    if(target = links_2) {
        alert(href);
        event.preventDefault();
    }
});

