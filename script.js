$(document).ready(function () {


    var musicSelection;


    $(".dropdown-trigger").dropdown();



    // $("#firstHiddenContainer").hide();

    // $("#secondHiddenContainer").hide();

    // $("#thirdHiddenContainer").hide();

    // $("#fourthHiddenContainer").hide();

    // $('#fifthHiddenContainer').hide();

    // $('#sixthHiddenContainer').hide();

    // $("#lastContainer").hide();

    // $("#dropdown1").on("click", function (event) {
    //     event.preventDefault();

    //     $('h2').hide()
    //     $('a').hide();
    //     // $('#firstHiddenContainer').show();

    // });

    // $("#recipe-button-one").on("click", function (eventTwo) {
    //     eventTwo.preventDefault();

    //     $('#firstHiddenContainer').hide() &&

    //         // $('#secondHiddenContainer').show();

    // })

    // $("#mealBtn").on("click", function (eventTwo) {
    //     eventTwo.preventDefault();

    //     $('#secondHiddenContainer').hide() &&

    //         $('#thirdHiddenContainer').show();

    // })


    $(".region").on("click", function(){
        var region = $(this).text();
        console.log(this);
        displayRecipes(region);
    });
    function displayRecipes(region) {

        var regionArray =[];
        var apiId = "b8fa8ec0"
        var apiKey = "2e99e135530eaed01cb9620b24c1f1c0"
        var queryURL = "https://api.edamam.com/search?q=" + region + "&app_id=" + apiId + "&app_key=" + apiKey
        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response){
            console.log(response);
        
            for (var i=0; i < 3; i++) {
                var regionRecipe = response.hits[i].recipe.url;
                //console.log(regionRecipe);
                var recipeName = response.hits[i].recipe.label;
                var recipeImage = response.hits[i].recipe.image;

                var randomItem = regionArray[Math.floor(Math.random()*regionArray.length)];


                var col =  $('<div class="col s12 m4 l4">').css({"width": "32%", "min-height": "369px", "max-height": "370px",  "overflow-y": "scroll"});
                var card = $('<div class="card blue-grey darken-1">');

                var content = $('<div class="card-content white-text">');
                var title = $('<span class="card-title" id="recipe">').text(recipeName);
                 var body =  $('<div class="card-action">');
                 var img = $('<img>').attr('src', recipeImage).css({"max-width": "250px", "max-height": "200px"});;
                 var btn = $('<a>').attr('href',regionRecipe ).text('More Selections');
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