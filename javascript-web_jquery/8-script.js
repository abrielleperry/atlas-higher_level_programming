const url = 'https://swapi-api.hbtn.io/api/films/?format=json';
$.get(url, function (data, status) {
  $('UL#list_movies').text(data.title);
});
