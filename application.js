(function() {

  var playerMoney = 100;

  function generateRandomNo() {
    return Math.floor((Math.random() * 10) + 1);
  }

  function getUserBet(min, max) {
    if (min == max) {
      var userBet = min;
      alert('Placed a bet for ' + userBet + ' $!');
      return userBet;
    } else {
      do {
        var userBet = prompt('Place a bet ($' + min + '-$' + max + '):');
      } while (userBet < min || userBet > max);
      return userBet;
    }
  }

  function getUserGuess() {
    do {
      var userGuess = prompt('Guess a no. between 1 and 10:');
  } while (userGuess < 1 || userGuess > 10);
    return userGuess
  }

  function gameRound() {

    userBet = getUserBet(5, Math.min(playerMoney, 10));
    randomNo = generateRandomNo();
    userGuess = getUserGuess();

    if (randomNo === userGuess) {
      playerMoney *= 2;
      alert('The number was: ' + randomNo + '. Awesome, you guessed it! You now have ' + playerMoney + '$!')
    } else if (Math.abs(userGuess - randomNo) > 1) {
      playerMoney -= userBet;
      if (playerMoney >= 5) {
        alert('The number was: ' + randomNo + '. Bummer, you lost your bet! You now have ' + playerMoney + '$!');
      } else {
        alert('You only have ' + playerMoney + '$ left, so you can\'t start another round! You lost!');
      }
    } else {
      alert('The number was: ' + randomNo + '. You were close! No loss, no gain; you stil have ' + playerMoney + '$!')
    }
  };

  do {
    gameRound();
  } while (playerMoney >= 5);


})();
