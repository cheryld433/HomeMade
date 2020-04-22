$(document).ready(function () {

    var region;
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
    $('#dropdown1').on("click", ".region", function () {
        region = $(this).text();
        console.log($(this))
        console.log(region);

    })
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

        var array = [];
        $('span').each(function () {
            array.push($(this).html());
            regions = array.slice(0, 8);
        });
        console.log(regions);


        console.log(region);

        switch (region) {
            case 'American':
                musicSelection = "christian+petermann";
                music(musicSelection)
                break;
            case 'Chinese':
                musicSelection = "jose+estrella+resonante";
                music(musicSelection)
                break;
            case 'Italian':
                musicSelection = "mbesil";
                music(musicSelection)
                break;
            case 'Mediterranean':
                musicSelection = "youssef+el+idrissi";
                music(musicSelection)
                break;
            case 'Ethiopian':
                musicSelection = "saregama";
                music(musicSelection)
                break;
            case 'Mexican':
                musicSelection = "schloub";
                music(musicSelection)
                break;
            case 'German':
                musicSelection = "anarchyx";
                music(musicSelection)
                break;
            case 'Brazilian':
                musicSelection = "dabra";
                music(musicSelection)
                break;
            default:
                console.log("No selection made!")
                break;
        }
    })


    function music(musicSelection) {
        var queryURLTwo = 'https://api.jamendo.com/v3.0/albums/?client_id=cbf60db1&format=json&artist_name=' + musicSelection;

        $.ajax({
            url: queryURLTwo,
            method: "GET"

        })
            .then(function (response) {
                console.log(response)

                if (musicSelection == "christian+petermann") {
                    var link = $("<a>");
                    link.attr("href", response.results[0].shareurl);
                    link.attr("target", "_blank");
                    link.text(response.results[0].name);
                    link.addClass("link");
                } else if (musicSelection == "jose+estrella+resonante") {
                    var link = $("<a>");
                    link.attr("href", response.results[8].shareurl);
                    link.attr("target", "_blank");
                    link.text(response.results[8].name);
                    link.addClass("link");
                }
                else if (musicSelection == "mbesil") {
                    var link = $("<a>");
                    link.attr("href", response.results[0].shareurl);
                    link.attr("target", "_blank");
                    link.text(response.results[0].name);
                    link.addClass("link");
                }
                else if (musicSelection == "youssef+el+idrissi") {
                    var link = $("<a>");
                    link.attr("href", response.results[0].shareurl);
                    link.attr("target", "_blank");
                    link.text(response.results[0].name);
                    link.addClass("link");
                }
                else if (musicSelection == "saregama") {
                    var link = $("<a>");
                    link.attr("href", response.results[0].shareurl);
                    link.attr("target", "_blank");
                    link.text(response.results[0].name);
                    link.addClass("link");
                }
                else if (musicSelection == "schloub") {
                    var link = $("<a>");
                    link.attr("href", response.results[1].shareurl);
                    link.attr("target", "_blank");
                    link.text(response.results[1].name);
                    link.addClass("link");
                }
                else if (musicSelection == "anarchyx") {
                    var link = $("<a>");
                    link.attr("href", response.results[8].shareurl);
                    link.attr("target", "_blank");
                    link.text(response.results[8].name);
                    link.addClass("link");
                }
                else if (musicSelection == "dabra") {
                    var link = $("<a>");
                    link.attr("href", response.results[1].shareurl);
                    link.attr("target", "_blank");
                    link.text(response.results[1].name);
                    link.addClass("link");
                } else {
                    var link = $("<a>");
                    link.attr("href", response.results[0].shareurl);
                    link.attr("target", "_blank");
                    link.text(response.results[0].name);
                    link.addClass("link");

                }

                $("#randomPlaylist").append(link);

            })




    }

});