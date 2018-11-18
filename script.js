window.onload=init;
    function init() {
        ySearch();
        document.getElementById('search').addEventListener('click', ySearch, false);   
    }


    function ySearch() {
        searchTerm = 'cartoon';
        var searchTerm = document.getElementById('searchYoutube').value+' cartoon';
        console.log(searchTerm);
        searchTerm = encodeURIComponent(searchTerm);
        var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDgmIHClyyhNlck62Jmu8xWfk0GY_Muk18&q='+ searchTerm +'&maxResults=20';
        getJSON(url, function(data){
            showResult(data.items);
        });
    }
    var player;
    function showResult(results) {
    // console.log(results);
       
        var html = "";
        for(var value in results){
            console.log(results[value]);
            console.log(results[value].id.videoId);
            var title = results[value].snippet.title;
            var description = results[value].snippet.description;
            var img = results[value].snippet.thumbnails.default.url;
            // html += `<div><div>`;
            html += `<div id="output" class="row jumbotron"><div class="col-sm-6"><iframe class="img" allowfullscreen="1" src="https://www.youtube.com/embed/${results[value].id.videoId}"></iframe></div><div class="col-sm-6"><h5 class="text-left"> ${title} </h5></div></div>`;
            
        }
        document.getElementById("output").innerHTML = html;
    };
    

    function getJSON(url, callback){
        var xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.responseType = 'json';
        xhr.onload = function() {
            if(xhr.status===200){
                callback(xhr.response);
            }
        }
     xhr.send(); 
}

$(function() {
    $('h5').click(function() {
        $('h5').val();
        console.log($('h5').val());
    });
}); 