//TEAM NAME
//assign team_name to the input entered
function assign_team(){
   let team_name = document.getElementById("team-form").value.toUpperCase();
  
  //only continue function if player_name is valid
  if(team_name !== "" && isNaN(team_name)){
  //Display team name on html
    var current_team = document.getElementById("playing-team");
    current_team.innerHTML = "Team " + team_name + "!!!";
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
// Press id="get-score" and obtain team name and team score and display under Highscores if score is more than the rest. 
// Reset score and reset any names under "Remember these"
function getScore(){
  //find current score
  let score = get_count();
  // console.log(score +" <--Current score");
  
  
  
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

//array with team names and their scores ex: "FIU":10
var best_teams = [["FIU",5],["Dorks",6],["best", 10]];
//add teams
function add_teams(team,score){
  best_teams.push([team,score]);
  find_best_three(best_teams);
}
function find_best_three(teams){
  let firstPlace;
  let secondPlace;
  let thirdPlace;
  // console.log(teams);
}
add_teams("Nina", 80);
