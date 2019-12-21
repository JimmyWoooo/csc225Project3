jQuery(document).ready(function(){
    axios.get('http://csc225.mockable.io/movies').then(function(response){
        var moviesHTML = response.data.map(function(movies){
            return '<p class="movies" data-movies="' + movies.id + '">' + movies.title + '</p>';
        });
        $('.loading').hide();
        $('#movies').html(moviesHTML);
    });

    $('body').on('click', '.movies', function(){
        var id = $(this).data('movies');
        var url = 'http://csc225.mockable.io/movies/' + id;
        $('#current-movie').html('<img src="loading.gif" alt="loading gif">');
        axios.get(url).then(function(response){
            var movies = response.data;
            var moviesHTML = '<div class="card" style="width: 18rem;">'
            moviesHTML += '<img src="' + movies.poster + '" class = "card-img-top" alt="'+ movies.title +' poster">';
            moviesHTML += '<div class="card-body">';
            moviesHTML += '<h5 class="class-title text-center font-italic">'+ movies.title + '</h5></div>';
            moviesHTML += '<ul class="list-group list-group-flush">';
            moviesHTML += '<li class="list-group-item"> <strong>Director:</strong> ' + movies.director + '</li>';
            moviesHTML += '<li class="list-group-item"> <strong>Year Released:</strong> ' + movies.release + '</li>';
            moviesHTML += '</ul></div>'
            $('#current-movie').html(moviesHTML);
        })
    })
});