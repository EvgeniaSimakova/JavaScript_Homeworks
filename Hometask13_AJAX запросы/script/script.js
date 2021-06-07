var button = document.getElementsByTagName('button')[0];
var tab = document.getElementById('tab');
var tabContent = document.getElementById('tabcontent');

button.onclick = function loadUsers() {

    var xhr = new XMLHttpRequest();

    if (localStorage.getItem('usersData') === null) {
      
      xhr.open('GET', 'https://reqres.in/api/users?page=2', true);

      xhr.send();

      xhr.onload = function() {
        var statusType = Math.round(this.status / 100);

        if(statusType === 2) {
          var usersData = JSON.parse(this.response).data;
          showUsers(usersData);
          localStorage.setItem('usersData', JSON.stringify(usersData));
        } else {
          this.status;
        }
             
    };
      xhr.onerror = function() {
        var error = document.createElement('p');
        error.innerHTML = 'Something is wrong. Please check!';
        error.classList.add('error');
        tabContent.appendChild(error);
        console.error(this.status);
    };
      xhr.onloadend = function() {
      console.log('Запрос завершен');
    };
    
    } else {
      showUsers(JSON.parse(localStorage.getItem('usersData')));
    }

}

function showUsers(usersData) {
  button.disabled = true;

  var userInfo = document.getElementById('tabcontent');
    userInfo.innerHTML = '<img src="' + usersData[0]['avatar'] + '">' +
                          '<p>' + 'First Name: ' + usersData[0]['first_name'] +
                          '<br>' + 'Last Name: ' + usersData[0]['last_name'] + '<p>';

  usersData.forEach(function (user, i) {
        var btn = document.createElement('button');
        var btnIndex = i + 1;
        btn.classList.add('tablinks');
        if (i == 0){
          btn.classList.add('active')
      }
        
        btn.setAttribute('id', btnIndex);
        btn.innerHTML = 'User ' + btnIndex;
        tab.appendChild(btn);

        btn.onclick = function () {

          userInfo.innerHTML = '<img src="' + user.avatar + '">' +
                                '<p>' + 'First Name: ' + user.first_name + '<br>' +
                                 'Last Name: ' + user.last_name + '<p>';
        };

        tab.onclick = showInfo;
      });
    }

    function showInfo(event, usersData) {
      var btns = tab.getElementsByClassName('tablinks');
      var target = event.target;

      if(target.classList.contains('tablinks')) {
        for (var i = 0; i < btns.length; i++) {
          if (tab.children[i].classList.contains('active')) {
            tab.children[i].classList.remove('active');
          }
        }
        target.classList.add('active');
      }
    }
    
     

        
  

    










    
      
        
