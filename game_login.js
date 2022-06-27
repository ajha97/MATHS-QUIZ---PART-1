
function addUser() {
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;

    window.localStorage.setItem('name', 'player1_name' )
    window.localStorage.setItem('name', 'player2_name' )

    window.location = "game_page.html";
}

