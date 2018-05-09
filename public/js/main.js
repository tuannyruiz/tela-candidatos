const app = document.getElementById('root');
const card = document.createElement('div');
card.setAttribute('class', 'card');
app.appendChild(card);


var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3000/candidates', true);
request.onload = function () {

  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(person => {
      console.log(person.name);
    });
  } else {
    console.log('error');
  }
}

request.send();
