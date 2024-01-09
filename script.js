$(document).ready(function() {
  let quizCount = 0;

  $('#submitBtn').click(function() {
    const answer1 = $('#answer1').val();
    const answer2 = $('#answer2').val();


    
    if (answer1 === 'yes' && answer2 >= 8) {
      showResult("Shadow","https://static.wikia.nocookie.net/sonic-x9874/images/f/f0/Shadow_16.png/revision/latest?cb=20211019214327");
    } else if (answer1 === 'no' && answer2 >= 5) {
      showResult("sonic","https://static.wikia.nocookie.net/sonic-nexus/images/d/d0/Sonic.png/revision/latest?cb=20231103171635");
    } else if (answer1 === 'yes' && answer2 < 8) {
      showResult("eggman","https://upload.wikimedia.org/wikipedia/en/9/96/Doctor_Eggman.png");
    } else {
      showResult("tails","https://en.wikifur.com/w/images/thumb/5/5a/Sonicchannel_tails.png/479px-Sonicchannel_tails.png");
    }
      
    quizCount++;
    updateQuizCount();
  });

  function showResult(character,imagePath) {
    const resultText = `Your character result is: ${character}.`;
    const imageElement = `<img src="${imagePath}" alt="${character}" class="result-image">`;
    $('#result').empty().append(resultText).append(imageElement);
  }

  function updateQuizCount() {
    const quizCountText = `Quiz has been taken ${quizCount} times.`;
    $('#result').append(`<p>${quizCountText}</p>`);
  }
});
$('#restartBtn').click(function() {
    $(location).attr('href',);
    $('#answer1').val('');
    $('#answer2').val('');
    $('#result').empty();
});