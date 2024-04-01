const url = 'https://swapi-api.hbtn.io/api/films/?format=json';
$.get(url, function (data, status) {
  data.results.forEach(function (movie) {
    $('UL#list_movies').append('<li>' + movie.title + '</li>');
  });
});
