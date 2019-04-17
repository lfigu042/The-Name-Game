//TEAM NAME
//assign team_name to the input entered
function assign_team(){
   let team_name = document.getElementById("team-form").value.toUpperCase();
  
  //only continue function if player_name is valid
  if(team_name !== "" && isNaN(team_name)){
    //Display team name on html
    var current_team = document.getElementById("playing-team");
    current_team.innerHTML = "Team " + team_name + "!!!";
    show_player_form();
    hide_team_form();
  }else{
    //say error, invalid input
    alert("team name must not be empty nor be a number");
  }
}//end of assign_team function

// PLAYER NAME
var count = 0;
//assign player_name to the input entered
function assign_name() {
  var player_name = capitalize(document.getElementById("input-form").value.toLowerCase());
  
  //only continue function if player_name is valid
  if(player_name !== "" && isNaN(player_name))
  {
    let name_char = player_name.charAt(0);
    let adj_arr = ["Adaptable", "Adventurous", "Affable", "Affectionate", "Agreeable", "Ambitious", "Amiable", "Amicable", "Amusing", "Brave", "Bright", "Broad-Minded", "Calm", "Careful", "Charming", "Communicative", "Compassionate", "", "Conscientious", "Considerate", "Convivial", "Courageous", "Courteous", "Creative", "Decisive", "Determined", "Diligent", "Diplomatic", "Discreet", "Dynamic", "Easygoing", "Emotional", "Energetic", "Enthusiastic", "Exuberant", "Fair-Minded", "Faithful", "Fearless", "Forceful", "Frank", "Friendly", "Funny", "Generous", "Gentle", "Good", "Gregarious", "Hard-Working", "Helpful", "Honest", "Humorous", "Imaginative", "Independent", "Intellectual", "Intelligent", "Intuitive", "Inventive","Jolly", "Joyfull","Jaunty", "Jovial","Jiggish", "Kind", "Keen", "Kick-ass","Knightly","Kosher","Loving", "Loyal", "Likeable", "Lighthearted", "Lively", "Loyal", "Lovely", "Lucky", "Modest", "Mature", "Martial", "Memorable","Merry","Meticulous","Mesmerized","Moral", "Neat", "Nice","Nourishing", "Optimistic", "Objective", "O.K.", "Open", "Opinionated", "Optimistic","Orderly","Outgoing","Outstanding","Overjoyed", "Passionate", "Patient", "Persistent", "Pioneering", "Philosophical", "Placid", "Plucky", "Polite", "Powerful", "Practical", "Pro-Active", "Quick-Witted","Quick", "Quiet", "Rational", "Reliable", "Reserved", "Resourceful", "Romantic", "Self-Confident", "Self-Disciplined", "Sensible", "Sensitive", "Shy", "Sincere", "Sociable", "Straightforward", "Sympathetic", "Thoughtful", "Tidy", "Tough","Unique","Unaffected","Unbiased", "Unassuming", "Understanding",  "Versatile", "Victorious", "Vivid", "Visionary", "Voracious", "Versatile", "Valiant", "Warmhearted","Wholesome","Wonderful","Winning","Wondrous", "Willing", "Witty","XOXOXOX", "Xenial","XisHardToWorkWith:(","Young","Youthful","Yummy", "Zealous", "Zestful"];

  //scan adj_arr for adjectives that start with the same letter as the player_name and save them to adj_name
    let adj_name = [];
    for(let i = 0; i< adj_arr.length; i++){
      if(adj_arr[i].charAt(0) == name_char){
        adj_name.push(adj_arr[i]);    
      }
    }

    let adj_rand = getRandomInt(0, adj_name.length-1);
    let final_name = adj_name[adj_rand] + " " + player_name;
  
  // console.log(player_name + " <-player name");
  // console.log(adj_name + " <-adjective to choose");
  // console.log(adj_rand +" <-adjective chosen randomly");
  // console.log(final_name +" <-name+adjective");
  
    //stack all names on top of each other
    let stack = document.createElement('p');
    //add a common class to all the new nicknames in order to easily remove them all later
    stack.className = "players-nicknames";
    let referenceNode = document.getElementById('nicknames');  
    stack.innerHTML = final_name;
    referenceNode.after(stack);
  
    //increase count after each name
    increase_count();
    //console.log(count + " <-count");
    //add count to html 
    let keep_score = document.getElementById("player_score");
    keep_score.innerHTML = count; 

  }else{
    //say error, invalid input
    alert("player name must not be empty nor be a number");
  }
  
  
}//END OF assign_name FUNCTION

// GET SCORE
// Press id="get-score" and obtain team name and team score and display under Highscores if score is more than the rest. Reset score and reset any names under "Remember these"
function getScore(){
  //add the team name and their score to the score board before they are deleted
  //find current score
  let score = get_count();
  //save the entered team name and their score
  let team_name = document.getElementById("team-form").value.toUpperCase();
  //add them to the array of teams and scores to be displayed onto scoreboard
  add_teams(team_name, get_count());
  
  
  
  //show the "enter team name" form
  show_team_form();
  //hide the "enter player name" form
  hide_player_form();
  //reset current score to 0 and display it to HTML
  restart_count();
   //clear all names under "Remember these: "
  clear_names();
  
}//END OF getScore FUNCTION

//function to capitalize first letter of player_name and lowercase the rest
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
//increase count after each name
function increase_count(){
  // console.log(count+" Accessed count function");  
  count++;
}
//returns current count
function get_count(){
  // console.log(count+" Accessed get_count function");  
  return count;
}
//returns current count
function restart_count(){
  count = 0;
  //display 0 on HTML
  let keep_score = document.getElementById("player_score");
  keep_score.innerHTML = count; 
  // console.log(count+" Accessed restart_count function");
  return count;
}
//clear all names under "Remember these: "
//players-nicknames is their common class
// players-nicknames-container is their container div id
function clear_names(){
  //clear all inputed nicknames
  let el = document.getElementsByClassName("players-nicknames");
  while(el[0]) {
      el[0].parentNode.removeChild(el[0]);
  }
  //empty team name, id = "playing-team"
   let current_team = document.getElementById("playing-team");
   current_team.innerHTML = "";
}
//have a random index from 0 to the length of adj_name-1 to be the random adjective
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// display #player-name-input
function show_player_form(){
  document.getElementById("player-name-input").style.visibility = "visible";
  document.getElementById("get-score").style.visibility = "visible";
  document.getElementById("nicknames").style.visibility = "visible";
}
//set #player-name-input visibility: hidden
function hide_player_form(){
  document.getElementById("player-name-input").style.visibility = "hidden";
  document.getElementById("get-score").style.visibility = "hidden";
  document.getElementById("nicknames").style.visibility = "hidden";
}
// display #team-name-input and #get-score btn and #nicknames line
function show_team_form(){
  document.getElementById("team-name-input").style.visibility = "visible";
}
//hide #team-name-input and #get-score btn and #nicknames line 
function hide_team_form(){
  document.getElementById("team-name-input").style.visibility = "hidden";
}

//Displaying top three top scores
// array with team names and their scores ex: "FIU":10
var best_teams = [["a",0],["b",0],["c", 0]];
var three_top;
//add teams and sort them from highest score to lowest
function add_teams(team,score){
  best_teams.push([team,score]);
  best_teams.sort(function(a,b){
    return b[1] - a[1];
  });
  //should post the three highest scores to the "highscore" board
  find_best_three(best_teams);
}
//the three top teams should be posted to the HTML "highscore" board
function find_best_three(arr){
  three_top = [[best_teams[0]],[best_teams[1]],[best_teams[2]]]
  console.log(three_top);
  //make first_place HTML element with id="gold-winner"
  let first_place = best_teams[0].toString();
  let first_place_name = first_place.split(",")[0];
  let first_place_score = first_place.split(",")[1];
  //make second_place HTML element with id="silver-winner"
  let second_place = best_teams[1].toString();
  let second_place_name = second_place.split(",")[0];
  let second_place_score = second_place.split(",")[1];
  //make third_place HTML element with id="bronze-winner"
  let third_place = best_teams[2].toString();
  let third_place_name = third_place.split(",")[0];
  let third_place_score = third_place.split(",")[1];
  
  //if teams scored more than 0, display top three to score board
  if(first_place_score > 0){
    document.getElementById("gold-winner").innerHTML = first_place_name+"-"+first_place_score;
  }if(second_place_score > 0){
    document.getElementById("silver-winner").innerHTML = second_place_name+"-"+second_place_score;
  }if(third_place_score > 0){
    document.getElementById("bronze-winner").innerHTML = third_place_name+"-"+third_place_score;
  }
}
