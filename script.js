$(document).ready(function(){
    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
      });
    $("#carouselContainer").hide();
    $("#closeBtn").hide();
    $(".dropdown-trigger").dropdown();


    function displayRecipes(region) {  
        var apiId = "b8fa8ec0"
        var apiKey = "2e99e135530eaed01cb9620b24c1f1c0"
        var queryURL = "https://api.edamam.com/search?q=" + region + "&app_id=" + apiId + "&app_key=" + apiKey

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            //console.log(response);
             
            for (var i=0; i < 3; i++) {
                var regionRecipe = response.hits[i].recipe.url;
                //console.log(regionRecipe);
                var recipeName = response.hits[i].recipe.label;
                console.log(recipeName);
                var recipeImage = response.hits[i].recipe.image;
                //console.log(recipeImage);
                
               
            };

        });
    };

    
        



    $("#carouselBtn").on("click", function(){
        $("#carouselContainer").show();
        $("#carouselBtn").hide();
        $("#closeBtn").show();
    });

    $("#closeBtn").on("click", function(){
        $("#carouselContainer").hide();
        $("#closeBtn").hide();
    });

    $(".region").on("click", function(){
        var region = $(this).text();
        //console.log(this);
        displayRecipes(region);
    });
    
});