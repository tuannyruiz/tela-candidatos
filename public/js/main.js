const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);

function newCandidate(person) {
  if(person.newThisWeek == true) {
    return '<p class="new">Novo esta semana</p>'
  } else {
    return '';
  }
}

function createCard(person) {
  return '<img src="' + person.imageUrl + '" class="photo"><div class="profile"><h1 class="candidate">' + person.name +'</h1>' + newCandidate(person) + '<h2 class="occupation">' + person.career + '</h2><ul class="info"><li class="experiences"><img src="images/work-icn.svg" alt="Ícone que representa experiências profissionais">' + person.lastCompanies +'</li><li class="university"><img src="images/study-icn.svg" alt="Ícone que representa univeridade">' + person.university + '</li><li class="local"><img src="images/location-icn.svg" alt="Ícone que representa a localização"> Disposto a trabalhar em: ' + person.cities + '</li><li class="skills"><img src="images/skills-icn.svg" alt="Ícone que representa habilidades"> Principais habilidades: ' + person.mainSkills + '</li></ul></div><button class="favorite"><img src="images/star.svg" alt=""></button><button class="more"><img src="images/dots.svg" alt=""></button>';
  
}

var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3000/candidates', true);
request.onload = function () {

  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(person => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');
      container.appendChild(card);
      card.insertAdjacentHTML('beforeend', createCard(person));
    });
  } else {
    console.log('error');
  }
}

request.send();
