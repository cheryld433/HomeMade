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
    
=======
$(document).ready(function () {


    var musicSelection;

    M.AutoInit();
    $(".dropdown-trigger").dropdown();



    $("#firstHiddenContainer").hide();

    $("#secondHiddenContainer").hide();

    $("#thirdHiddenContainer").hide();

    $("#fourthHiddenContainer").hide();

    $('#fifthHiddenContainer').hide();

    $('#sixthHiddenContainer').hide();

    $("#lastContainer").hide();

    $("#dropdown1").on("click", function (event) {
        event.preventDefault();

        $('h2').hide()
        $('a').hide();
        $('#firstHiddenContainer').show();

    });

    $("#recipe-button-one").on("click", function (eventTwo) {
        eventTwo.preventDefault();

        $('#firstHiddenContainer').hide() &&

            $('#secondHiddenContainer').show();

    })

    $("#mealBtn").on("click", function (eventTwo) {
        eventTwo.preventDefault();

        $('#secondHiddenContainer').hide() &&

            $('#thirdHiddenContainer').show();

    })

    $('#cocktailBtn').on('click', function (eventThree) {
        eventThree.preventDefault();

        $("#thirdHiddenContainer").hide() &&
            $('#fourthHiddenContainer').show();

    })


    $("#send").on("click", function (eventFive) {
        eventFive.preventDefault();

        $('#fourthHiddenContainer').hide() &&
            $('#fifthHiddenContainer').show();



        var liquor = $('.cocktail-textarea').val();

        var queryURLOne = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + liquor


        $.ajax({
            url: queryURLOne,
            method: "GET"

        })
            .then(function (response) {

                var drinkChoices = [];
                drinkChoices.push(response);
                console.log(response)

                //Should for loop be added here?

                var choice = drinkChoices[0].drinks[Math.floor(Math.random() * drinkChoices[0].drinks.length)];


                var cocktailChoice = $('<p>')
                cocktailChoice.text(choice.strDrink);
                $('#drink-options').html(cocktailChoice);

                $('#cocktail-choice-two').on('click', function (eventEight) {
                    eventEight.preventDefault();

                    var button = $(this);
                    var buttonCount = (button.data("click_count") || 0) + 1;
                    button.data("click_count", buttonCount);

                    if (buttonCount == 1) {
                        var choice = drinkChoices[0].drinks[Math.floor(Math.random() * drinkChoices[0].drinks.length)];
                        var cocktailChoice = $('<p>')
                        cocktailChoice.text(choice.strDrink);
                        $('#drink-options').html(cocktailChoice);

                    } else {
                        $('#cocktail-choice-two').hide()
                    }

                })

                $('#cocktail-choice').on('click', function (eventSeven) {
                    eventSeven.preventDefault();

                    $("#fifthHiddenContainer").hide() &&
                        $('#sixthHiddenContainer').show();

                    var recipe = $("<a>");
                    recipe.attr("href", "https://www.thecocktaildb.com/drink.php?c=" + choice.idDrink + "-" + choice.strDrink.split(" ").join("-"));
                    recipe.attr("target", "_blank");
                    recipe.text(choice.strDrink);
                    recipe.addClass("link");

                    $("#drink-recipe").append(recipe);
                });
            })
    })
    $('.playlist-menu').on('click', function (eventTen) {
        eventTen.preventDefault();

        if ($('#thirdHiddenContainer').show()) {
            $("#thirdHiddenContainer").hide() &&
                $('#lastContainer').show();
        } else {
            $("#sixthHiddenContainer").hide()
                && $('#lastContainer').show();
        }

        //     $("#dropdown1").click(function(){
        //         var userChoice = $(this).child("id")
        //   });


        var musicSelection = $('li').first()
        console.log(musicSelection);
        if (userChoice == "1") {
            musicSelection = "christian+petermann";
        } else if (userChoice == "2") {
            musicSelection = "jose-estrella-resonante";
        } else if (userChoice == "6") {
            musicSelection = "schloub";
        } else {
            console.log("Stop/Don't run any API's");
        }
    

    // var userChoice = $('#dropdown1').val();

    // console.log(regionalSelection);

    // Why won't if/else if not work here?

    // if ($(this).val($('1'))) {
    //    musicSelection = "christian+petermann";
    // } else if ($(this).val($('2'))) {
    //     musicSelection = "jose-estrella-resonante";
    //  } else if (userChoice.val($('6'))) {
    //     musicSelection = "schloub";
    // } else {
    //     console.log('Invalid item');
    // }

    // console.log(musicSelection);

    var queryURLTwo = 'https://api.jamendo.com/v3.0/albums/?client_id=cbf60db1&format=json&artist_name=' + musicSelection;

    $.ajax({
        url: queryURLTwo,
        method: "GET"

    })
        .then(function (response) {
            console.log(response)

            if (musicSelection = "christian+petermann") {
                var link = $("<a>");
                link.attr("href", response.results[0].shareurl);
                link.attr("target", "_blank");
                link.text(response.results[0].name);
                link.addClass("link");
            }

            if (musicSelection = "schloub") {
                var link = $("<a>");
                link.attr("href", response.results[1].shareurl);
                link.attr("target", "_blank");
                link.text(response.results[1].name);
                link.addClass("link");
            }

            if (musicSelection = "schloub") {
                var link = $("<a>");
                link.attr("href", response.results[1].shareurl);
                link.attr("target", "_blank");
                link.text(response.results[1].name);
                link.addClass("link");
            }

            $("#randomPlaylist").append(link);

        });




})

});