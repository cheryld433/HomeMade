$(document).ready(function () {

    function displayRecipes(region) {
        var randomIndex = Math.floor(Math.random()* 100);

        var apiId = "b8fa8ec0"
        var apiKey = "2e99e135530eaed01cb9620b24c1f1c0"
        var queryURL = "https://api.edamam.com/search?q=" + region + "&app_id=" + apiId + "&app_key=" + apiKey + "&to=" +  100 + "&health=alcohol-free"; 
        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response){
            console.log(response);
            $("#searchData").empty();

            
    
            for (var i=0; i < 3; i++) {
                var randomRecipe = Math.floor(Math.random()* response.hits.length);
                var regionRecipe = response.hits[randomRecipe].recipe.url;
                var recipeName = response.hits[randomRecipe].recipe.label;
                var recipeImage = response.hits[randomRecipe].recipe.image;


                var col = $('<div class="col s12 m4 l4">').css({"width": "32%", "min-height": "369px", "max-height": "370px",  "overflow-y": "scroll"});
                var card = $('<div class="card blue-grey darken-1">');

                var content = $('<div class="card-content white-text">');
                var title = $('<span class="card-title" id="recipe">').text(recipeName);
                 var body =  $('<div class="card-action">');
                 var img = $('<img>').attr('src', recipeImage).css({"max-width": "250px", "max-height": "200px"});;
                 var btn = $('<a>').attr('href',regionRecipe ).text('Get Recipe');
                 body.append(img, btn);
                 content.append(title, body);
                 card.append(content);
                 col.append(card);
                //console.log(recipeImage);
                $("#searchData").append(col);
                
            };
        });
    };
     
});