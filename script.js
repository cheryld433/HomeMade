$(document).ready(function () {
  M.AutoInit();

  $('.carousel').carousel();
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
  });
  $('#carouselContainer').hide();
  $('#closeBtn').hide();
  // $("#closeBtn").hide();
  $('#firstHiddenContainer').hide();
  $('#thirdHiddenContainer').hide();
  $('#fourthHiddenContainer').hide();
  $('#fifthHiddenContainer').hide();
  $('#lastContainer').hide();
  $('#mealBtn').hide();

  $('.dropdown-trigger').dropdown();

  var region;
  var musicSelection;

  function displayRecipes(region) {
    console.log('running');
    randomIndex = Math.floor(Math.random() * 100);
    var apiId = 'b8fa8ec0';
    var apiKey = '2e99e135530eaed01cb9620b24c1f1c0';
    var queryURL =
      'https://api.edamam.com/search?q=' +
      region +
      '&app_id=' +
      apiId +
      '&app_key=' +
      apiKey +
      '&to=' +
      100 +
      '&health=alcohol-free';
    $.ajax({
      url: queryURL,
      method: 'GET',
    }).then(function (response) {
      console.log(response.h);
      $('#searchData').empty();
      $('#dropDownBtn').hide();

      for (var i = 0; i < 3; i++) {
        var randomRecipe = Math.floor(Math.random() * response.hits.length);
        var regionRecipe = response.hits[randomRecipe].recipe.url;
        var recipeName = response.hits[randomRecipe].recipe.label;
        var recipeImage = response.hits[randomRecipe].recipe.image;

        var col = $('<div class="col s12 m4 l4">').css({
          width: '32%',
          'min-height': '369px',
          'max-height': '370px',
          'overflow-y': 'scroll',
        });
        var card = $('<div class="card blue-grey darken-1">');
        var content = $('<div class="card-content white-text">');
        var title = $('<span class="card-title" id="recipe">').text(recipeName);
        var body = $('<div class="card-action">');
        var img = $('<img>')
          .attr('src', recipeImage)
          .css({ 'max-width': '250px', 'max-height': '200px' });
        var btn = $('<a>').attr('href', regionRecipe).text('Get Recipe');
        btn.attr('target', '_blank');

        body.append(img, btn);
        content.append(title, body);
        card.append(content);
        col.append(card);
        $('#searchData').append(col);
        $('#mealBtn').show();
      }
    });
  }

  $('#recipe-button-one').on('click', function (eventTwo) {
    eventTwo.preventDefault();
    $('#firstHiddenContainer').hide();
  });
  $('#mealBtn').on('click', function (eventTwo) {
    eventTwo.preventDefault();
    $('#dropBtn').hide();
    $('#searchData').hide();
    $('#thirdHiddenContainer').show();
    $('#mealBtn').hide();
  });
  $('#cocktailBtn').on('click', function (eventThree) {
    eventThree.preventDefault();
    $('#thirdHiddenContainer').hide() && $('#fourthHiddenContainer').show();
  });
  $('#send').on('click', function (eventFive) {
    eventFive.preventDefault();
    $('#fourthHiddenContainer').hide() && $('#fifthHiddenContainer').show();
    var liquor = $('.cocktail-textarea').val();
    var queryURLOne =
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + liquor;
    $.ajax({
      url: queryURLOne,
      method: 'GET',
    }).then(function (response) {
      var drinkChoices = [];
      drinkChoices.push(response);
      console.log(response);
      var choice =
        drinkChoices[0].drinks[
          Math.floor(Math.random() * drinkChoices[0].drinks.length)
        ];
      var recipe = $('<a>');
      recipe.attr('id', 'drink-one');
      recipe.attr(
        'href',
        'https://www.thecocktaildb.com/drink.php?c=' +
          choice.idDrink +
          '-' +
          choice.strDrink.split(' ').join('-')
      );
      recipe.attr('target', '_blank');
      recipe.text(choice.strDrink);
      recipe.addClass('link');
      recipeImage = $('<img>');
      recipeImage.attr('src', choice.strDrinkThumb);
      recipeImage.attr('alt', 'drink image');
      recipeImage.css({ width: '100px', height: '100px', display: 'block' });
      $('#drink-options').html(recipe);
      $('#drink-one').append(recipeImage);
      console.log(recipe);
      $('#cocktail-choice-two').on('click', function (eventEight) {
        eventEight.preventDefault();
        var button = $(this);
        var buttonCount = (button.data('click_count') || 0) + 1;
        button.data('click_count', buttonCount);
        if (buttonCount == 1) {
          var choice =
            drinkChoices[0].drinks[
              Math.floor(Math.random() * drinkChoices[0].drinks.length)
            ];
          var recipeTwo = $('<a>');
          recipeTwo.attr('id', 'drink-two');
          recipeTwo.attr(
            'href',
            'https://www.thecocktaildb.com/drink.php?c=' +
              choice.idDrink +
              '-' +
              choice.strDrink.split(' ').join('-')
          );
          recipeTwo.attr('target', '_blank');
          recipeTwo.text(choice.strDrink);
          recipeTwo.addClass('link');
          recipeTwoImage = $('<img>');
          recipeTwoImage.attr('src', choice.strDrinkThumb);
          recipeTwoImage.attr('alt', 'drink image');
          recipeTwoImage.css({
            width: '100px',
            height: '100px',
            display: 'block',
          });
          $('#drink-options').html(recipeTwo);
          $('#drink-two').append(recipeTwoImage);
          console.log(recipeTwo);
        } else {
          buttonCount == 2;
          var choice =
            drinkChoices[0].drinks[
              Math.floor(Math.random() * drinkChoices[0].drinks.length)
            ];
          var recipeThree = $('<a>');
          recipeThree.attr('id', 'drink-three');
          recipeThree.attr(
            'href',
            'https://www.thecocktaildb.com/drink.php?c=' +
              choice.idDrink +
              '-' +
              choice.strDrink.split(' ').join('-')
          );
          recipeThree.attr('target', '_blank');
          recipeThree.text(choice.strDrink);
          recipeThree.addClass('link');
          recipeThreeImage = $('<img>');
          recipeThreeImage.attr('src', choice.strDrinkThumb);
          recipeThreeImage.attr('alt', 'drink image');
          recipeThreeImage.css({
            width: '100px',
            height: '100px',
            display: 'block',
          });
          $('#drink-options').html(recipeThree);
          $('#drink-three').append(recipeThreeImage);
          console.log(recipeThree);
          $('#cocktail-choice-two').hide();
        }
      });
    });
  });
  $('.playlist-menu').on('click', function (eventTen) {
    eventTen.preventDefault();
    if ($('#thirdHiddenContainer').show()) {
      $('#thirdHiddenContainer').hide() && $('#lastContainer').show();
      lastContainer();
    }
    function lastContainer() {
      $('#fifthHiddenContainer').hide();
      $('#lastContainer').show();
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
        musicSelection = 'christian+petermann';
        music(musicSelection);
        break;
      case 'Chinese':
        musicSelection = 'jose+estrella+resonante';
        music(musicSelection);
        break;
      case 'Italian':
        musicSelection = 'mbesil';
        music(musicSelection);
        break;
      case 'Mediterranean':
        musicSelection = 'youssef+el+idrissi';
        music(musicSelection);
        break;
      case 'Ethiopian':
        musicSelection = 'saregama';
        music(musicSelection);
        break;
      case 'Mexican':
        musicSelection = 'schloub';
        music(musicSelection);
        break;
      case 'German':
        musicSelection = 'anarchyx';
        music(musicSelection);
        break;
      case 'Brazilian':
        musicSelection = 'dabra';
        music(musicSelection);
        break;
      default:
        console.log('No selection made!');
        break;
    }
  });

  function music(musicSelection) {
    var queryURLTwo =
      'https://api.jamendo.com/v3.0/albums/?client_id=cbf60db1&format=json&artist_name=' +
      musicSelection;
    $.ajax({
      url: queryURLTwo,
      method: 'GET',
    }).then(function (response) {
      if (musicSelection == 'christian+petermann') {
        var link = $('<a>');
        link.attr('href', response.results[0].shareurl);
        link.attr('target', '_blank');
        link.text(response.results[0].name);
        link.addClass('link');
      } else if (musicSelection == 'jose+estrella+resonante') {
        var link = $('<a>');
        link.attr('href', response.results[8].shareurl);
        link.attr('target', '_blank');
        link.text(response.results[8].name);
        link.addClass('link');
      } else if (musicSelection == 'mbesil') {
        var link = $('<a>');
        link.attr('href', response.results[0].shareurl);
        link.attr('target', '_blank');
        link.text(response.results[0].name);
        link.addClass('link');
      } else if (musicSelection == 'youssef+el+idrissi') {
        var link = $('<a>');
        link.attr('href', response.results[0].shareurl);
        link.attr('target', '_blank');
        link.text(response.results[0].name);
        link.addClass('link');
      } else if (musicSelection == 'saregama') {
        var link = $('<a>');
        link.attr('href', response.results[0].shareurl);
        link.attr('target', '_blank');
        link.text(response.results[0].name);
        link.addClass('link');
      } else if (musicSelection == 'schloub') {
        var link = $('<a>');
        link.attr('href', response.results[1].shareurl);
        link.attr('target', '_blank');
        link.text(response.results[1].name);
        link.addClass('link');
      } else if (musicSelection == 'anarchyx') {
        var link = $('<a>');
        link.attr('href', response.results[8].shareurl);
        link.attr('target', '_blank');
        link.text(response.results[8].name);
        link.addClass('link');
      } else if (musicSelection == 'dabra') {
        var link = $('<a>');
        link.attr('href', response.results[1].shareurl);
        link.attr('target', '_blank');
        link.text(response.results[1].name);
        link.addClass('link');
      } else {
        var link = $('<a>');
        link.attr('href', response.results[0].shareurl);
        link.attr('target', '_blank');
        link.text(response.results[0].name);
        link.addClass('link');
      }
      $('#randomPlaylist').append(link);
    });
  }
  $('#carouselBtn').on('click', function () {
    $('#carouselContainer').show();
    $('#carouselBtn').hide();
    $('#closeBtn').show();
  });
  $('#closeBtn').on('click', function () {
    $('#carouselContainer').hide();
    $('#closeBtn').hide();
  });
  $('#dropdown1').on('click', '.region', function () {
    region = $(this).text();
    console.log(this);

    displayRecipes(region);
  });

  //     M.AutoInit();
  //     $(".dropdown-trigger").dropdown();
  //     $('.carousel').carousel();
  //     $('.carousel.carousel-slider').carousel({
  //         fullWidth: true
  //     });
  //     $("#carouselContainer").hide();
  //     $("#closeBtn").hide();
  //     $("#firstHiddenContainer").hide();
  //     $("#thirdHiddenContainer").hide();
  //     $("#fourthHiddenContainer").hide();
  //     $('#fifthHiddenContainer').hide();
  //     $("#lastContainer").hide();
  //     $("#mealBtn").hide();
  //     var region;
  //     var musicSelection;
  //     function displayRecipes(region) {
  //         var apiId = "b8fa8ec0"
  //         var apiKey = "2e99e135530eaed01cb9620b24c1f1c0"
  //         var queryURL = "https://api.edamam.com/search?q=" + region + "&app_id=" + apiId + "&app_key=" + apiKey
  //         $.ajax({
  //             url: queryURL,
  //             method: "GET"
  //         }).then(function (response) {
  //             //console.log(response);
  //             $("#dropDownBtn").hide();
  //             for (var i = 0; i < 3; i++) {
  //                 var regionRecipe = response.hits[i].recipe.url;
  //                 //console.log(regionRecipe);
  //                 var recipeName = response.hits[i].recipe.label;
  //                 console.log(recipeName);
  //                 var recipeImage = response.hits[i].recipe.image;
  //                 //console.log(recipeImage);
  //                 var col = $('<div id="recipeCard" class=“col s12 m4 l4”>').css({ "max-width": "32%", "min-height": "369px", "max-height": "370px", "overflow-y": "scroll" });
  //                 var card = $('<div class=“card blue-grey darken-1”>');
  //                 var content = $('<div class=“card-content white-text”>');
  //                 var title = $('<span class=card-title id="recipe">').text(recipeName);
  //                 var body = $('<div class=“card-action”>');
  //                 var img = $('<img>').attr('src', recipeImage).css({ 'max-width': '250px', 'max-height': '200px' });
  //                 var btn = $('<a>').attr('href', regionRecipe).text("Let me see this recipe!");
  //                 btn.attr("target", "_blank");
  //                 body.append(img, btn);
  //                 content.append(title, body);
  //                 card.append(content);
  //                 col.append(card);
  //                 //console.log(recipeImage);
  //                 $('#searchData').append(col);
  //                 $("#mealBtn").show();
  //             };
  //         });
  //     };
  //     $("#recipe-button-one").on("click", function (eventTwo) {
  //         eventTwo.preventDefault();
  //         $('#firstHiddenContainer').hide()
  //     })
  //     $("#mealBtn").on("click", function (eventTwo) {
  //         eventTwo.preventDefault();
  //         $("#searchData").hide();
  //         $('#thirdHiddenContainer').show();
  //         $("#mealBtn").hide();
  //     })
  //     $('#cocktailBtn').on('click', function (eventThree) {
  //         eventThree.preventDefault();
  //         $("#thirdHiddenContainer").hide() &&
  //             $('#fourthHiddenContainer').show();
  //     })
  //     $("#send").on("click", function (eventFive) {
  //         eventFive.preventDefault();
  //         $('#fourthHiddenContainer').hide() &&
  //             $('#fifthHiddenContainer').show();
  //         var liquor = $('.cocktail-textarea').val();
  //         var queryURLOne = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + liquor
  //         $.ajax({
  //             url: queryURLOne,
  //             method: "GET"
  //         })
  //             .then(function (response) {
  //                 var drinkChoices = [];
  //                 drinkChoices.push(response);
  //                 console.log(response)
  //                 var choice = drinkChoices[0].drinks[Math.floor(Math.random() * drinkChoices[0].drinks.length)];
  //                 var recipe = $("<a>");
  //                 recipe.attr("id", "drink-one")
  //                 recipe.attr("href", "https://www.thecocktaildb.com/drink.php?c=" + choice.idDrink + "-" + choice.strDrink.split(" ").join("-"));
  //                 recipe.attr("target", "_blank");
  //                 recipe.text(choice.strDrink);
  //                 recipe.addClass("link");
  //                 recipeImage = $('<img>');
  //                 recipeImage.attr('src', choice.strDrinkThumb);
  //                 recipeImage.attr("alt", "drink image");
  //                 recipeImage.css({'width': '100px', 'height': '100px', 'display': 'block'});
  //                 $('#drink-options').html(recipe);
  //                 $('#drink-one').append(recipeImage);
  //                 console.log(recipe);
  //                 $('#cocktail-choice-two').on('click', function (eventEight) {
  //                     eventEight.preventDefault();
  //                     var button = $(this);
  //                     var buttonCount = (button.data("click_count") || 0) + 1;
  //                     button.data("click_count", buttonCount);
  //                     if (buttonCount == 1) {
  //                         var choice = drinkChoices[0].drinks[Math.floor(Math.random() * drinkChoices[0].drinks.length)];
  //                         var recipeTwo = $("<a>");
  //                         recipeTwo.attr("id", "drink-two");
  //                         recipeTwo.attr("href", "https://www.thecocktaildb.com/drink.php?c=" + choice.idDrink + "-" + choice.strDrink.split(" ").join("-"));
  //                         recipeTwo.attr("target", "_blank");
  //                         recipeTwo.text(choice.strDrink);
  //                         recipeTwo.addClass("link");
  //                         recipeTwoImage = $('<img>');
  //                         recipeTwoImage.attr('src', choice.strDrinkThumb);
  //                         recipeTwoImage.attr("alt", "drink image");
  //                         recipeTwoImage.css({'width': '100px', 'height': '100px', 'display': 'block'});
  //                         $('#drink-options').html(recipeTwo);
  //                         $('#drink-two').append(recipeTwoImage);
  //                         console.log(recipeTwo);
  //                     } else {
  //                         (buttonCount == 2)
  //                         var choice = drinkChoices[0].drinks[Math.floor(Math.random() * drinkChoices[0].drinks.length)];
  //                         var recipeThree = $("<a>");
  //                         recipeThree.attr("id", "drink-three");
  //                         recipeThree.attr("href", "https://www.thecocktaildb.com/drink.php?c=" + choice.idDrink + "-" + choice.strDrink.split(" ").join("-"));
  //                         recipeThree.attr("target", "_blank");
  //                         recipeThree.text(choice.strDrink);
  //                         recipeThree.addClass("link");
  //                         recipeThreeImage = $('<img>');
  //                         recipeThreeImage.attr('src', choice.strDrinkThumb);
  //                         recipeThreeImage.attr("alt", "drink image");
  //                         recipeThreeImage.css({'width': '100px', 'height': '100px', 'display': 'block'})
  //                         $('#drink-options').html(recipeThree);
  //                         $('#drink-three').append(recipeThreeImage);
  //                         console.log(recipeThree);
  //                         $('#cocktail-choice-two').hide()
  //                     }
  //                 });

  //             })

  //     })

  //     $('.playlist-menu').on('click', function (eventTen) {
  //         eventTen.preventDefault();
  //         if ($('#thirdHiddenContainer').show()) {
  //             $("#thirdHiddenContainer").hide() &&
  //                 $('#lastContainer').show();
  //             lastContainer();
  //         }

  //         function lastContainer() {
  //             $("#fifthHiddenContainer").hide();
  //             $('#lastContainer').show();
  //         };

  //         var array = [];
  //         $('span').each(function () {
  //             array.push($(this).html());
  //             regions = array.slice(0, 8);
  //         });
  //         console.log(regions);
  //         console.log(region);
  //         switch (region) {
  //             case 'American':
  //                 musicSelection = "christian+petermann";
  //                 music(musicSelection)
  //                 break;
  //             case 'Chinese':
  //                 musicSelection = "jose+estrella+resonante";
  //                 music(musicSelection)
  //                 break;
  //             case 'Italian':
  //                 musicSelection = "mbesil";
  //                 music(musicSelection)
  //                 break;
  //             case 'Mediterranean':
  //                 musicSelection = "youssef+el+idrissi";
  //                 music(musicSelection)
  //                 break;
  //             case 'Ethiopian':
  //                 musicSelection = "saregama";
  //                 music(musicSelection)
  //                 break;
  //             case 'Mexican':
  //                 musicSelection = "schloub";
  //                 music(musicSelection)
  //                 break;
  //             case 'German':
  //                 musicSelection = "anarchyx";
  //                 music(musicSelection)
  //                 break;
  //             case 'Brazilian':
  //                 musicSelection = "dabra";
  //                 music(musicSelection)
  //                 break;
  //             default:
  //                 console.log("No selection made!")
  //                 break;
  //         }
  //     })

  //     function music(musicSelection) {
  //         var queryURLTwo = 'https://api.jamendo.com/v3.0/albums/?client_id=cbf60db1&format=json&artist_name=' + musicSelection;
  //         $.ajax({
  //             url: queryURLTwo,
  //             method: "GET"
  //         })
  //             .then(function (response) {
  //                 console.log(response)
  //                 if (musicSelection == "christian+petermann") {
  //                     var link = $("<a>");
  //                     link.attr("href", response.results[0].shareurl);
  //                     link.attr("target", "_blank");
  //                     link.text(response.results[0].name);
  //                     link.addClass("link");
  //                 } else if (musicSelection == "jose+estrella+resonante") {
  //                     var link = $("<a>");
  //                     link.attr("href", response.results[8].shareurl);
  //                     link.attr("target", "_blank");
  //                     link.text(response.results[8].name);
  //                     link.addClass("link");
  //                 }
  //                 else if (musicSelection == "mbesil") {
  //                     var link = $("<a>");
  //                     link.attr("href", response.results[0].shareurl);
  //                     link.attr("target", "_blank");
  //                     link.text(response.results[0].name);
  //                     link.addClass("link");
  //                 }
  //                 else if (musicSelection == "youssef+el+idrissi") {
  //                     var link = $("<a>");
  //                     link.attr("href", response.results[0].shareurl);
  //                     link.attr("target", "_blank");
  //                     link.text(response.results[0].name);
  //                     link.addClass("link");
  //                 }
  //                 else if (musicSelection == "saregama") {
  //                     var link = $("<a>");
  //                     link.attr("href", response.results[0].shareurl);
  //                     link.attr("target", "_blank");
  //                     link.text(response.results[0].name);
  //                     link.addClass("link");
  //                 }
  //                 else if (musicSelection == "schloub") {
  //                     var link = $("<a>");
  //                     link.attr("href", response.results[1].shareurl);
  //                     link.attr("target", "_blank");
  //                     link.text(response.results[1].name);
  //                     link.addClass("link");
  //                 }
  //                 else if (musicSelection == "anarchyx") {
  //                     var link = $("<a>");
  //                     link.attr("href", response.results[8].shareurl);
  //                     link.attr("target", "_blank");
  //                     link.text(response.results[8].name);
  //                     link.addClass("link");
  //                 }
  //                 else if (musicSelection == "dabra") {
  //                     var link = $("<a>");
  //                     link.attr("href", response.results[1].shareurl);
  //                     link.attr("target", "_blank");
  //                     link.text(response.results[1].name);
  //                     link.addClass("link");
  //                 } else {
  //                     var link = $("<a>");
  //                     link.attr("href", response.results[0].shareurl);
  //                     link.attr("target", "_blank");
  //                     link.text(response.results[0].name);
  //                     link.addClass("link");
  //                 }
  //                 $("#randomPlaylist").append(link);
  //             })
  //     }
  //     $("#carouselBtn").on("click", function () {
  //         $("#carouselContainer").show();
  //         $("#carouselBtn").hide();
  //         $("#closeBtn").show();
  //     });
  //     $("#closeBtn").on("click", function () {
  //         $("#carouselContainer").hide();
  //         $("#closeBtn").hide();
  //     });
  //     $('#dropdown1').on("click", ".region", function () {
  //         region = $(this).text();
  //         displayRecipes(region);
  //         console.log($(this))
  //         console.log(region);
  //     })
});
