$(function() {
  $('#showUserBet').hide();
  $('#showUserGuess').hide();
  $('#showRandomNo').hide();
  $('#getUserGuessForm').hide();
  $('#showRoundResult').hide();
  $('#playAgain').hide();
  $('#bye').hide();

  var playerMoney = 20;
  var userBet;

    $('#getBetForm').on('submit', function(e) {
      e.preventDefault();
      userBet = +$('input[name="userBet"]').val();
      $('#userBetValue').text(userBet);
      $('#getBetForm').hide();
      $('#showUserBet').show();
      $('#getUserGuessForm').show();
    });

    $('#getUserGuessForm').on('submit', function(e) {
      e.preventDefault();
      var userGuess = +$('input[name="userGuess"]').val();
      var randomNo = generateRandomNo();
      $('#userGuess').text(userGuess);
      $('#randomNo').text(randomNo);
      $('#getUserGuessForm').hide();
      $('#showUserGuess').show();
      $('#showRandomNo').show();
      checkGuess(randomNo, userGuess);
    });


  function generateRandomNo() {
    return Math.floor((Math.random() * 10) + 1);
  }

  function checkGuess(rand, guess) {
    if (rand === guess) {

      playerMoney *= 2;
      $('#won').text('+' + playerMoney + '$');
      $('#won').fadeOut(3000);
      $('#money').text(playerMoney);
      $('#roundResult').text('Awesome, you guessed it! You now have ' + playerMoney + '$');
      $('#showRoundResult').show();
      playAgain();

    } else if (Math.abs(guess - rand) > 1) {

      playerMoney -= userBet;
      $('#loss').text('-' + userBet + '$');
      $('#loss').fadeOut(3000);
      $('#money').text(playerMoney);

        if (playerMoney >= 5) {
          $('#roundResult').text('Bummer, you lost your bet! You now have ' + playerMoney + '$');
          $('#showRoundResult').show();
          playAgain();

        } else {
          $('#roundResult').text('You only have ' + playerMoney + '$ left, so you can\'t start another round! You lost');
          $('#showRoundResult').show();
          $('#bye').show();
        }

      } else {
        $('#roundResult').text('You were close! No loss, no gain; you stil have ' + playerMoney + '$');
        $('#money').text(playerMoney);
        $('#showRoundResult').show();
        playAgain();
      }
    if (playerMoney<10) {
      $('input[name="userBet"]').attr("max", playerMoney);
    }
  }

  function playAgain() {
    $('#playAgain').show();
    $('#keepPlaying').on('click', function() {
      $('#playAgain').hide();
      $('#showUserBet').hide();
      $('#showUserGuess').hide();
      $('#showRandomNo').hide();
      $('#showRoundResult').hide();
      $('#getBetForm').show();
    });
  }

  function updateMoney() {
    $('#money').text(playerMoney);
  }

  });
