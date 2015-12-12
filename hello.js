windown.hello = {
  gameState: {
    userScore: 0,
    computerScore: 0,
    roundCount: 1
  }
}

$(document).ready(function){

  $(".btn.block").on("click", function(){
    var tagName = $(this).date("tag");
    hello.gameState[tagName]++;

    $("#" + tagName).html(hello.gameState[tagName]);
  }});

  });
}