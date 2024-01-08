const MOVIES = "https://hangmandb.mrbrash.repl.co/Lists/AA_Movies.txt";
const DISNEY_MOVIES = "https://hangmandb.mrbrash.repl.co/Lists/Disney_Movies.txt";
const MLB_TEAMS = "https://hangmandb.mrbrash.repl.co/Lists/MLB_Teams.txt";
const NHL_TEAMS = "https://hangmandb.mrbrash.repl.co/Lists/NHL_Teams.txt";
const NBA_TEAMS = "https://hangmandb.mrbrash.repl.co/Lists/NBA_Teams.txt";
const NFL_TEAMS = "https://hangmandb.mrbrash.repl.co/Lists/NFL_Teams.txt";
const SPANISH = "https://hangmandb.mrbrash.repl.co/Lists/Spanish.txt";
const WORDS = "https://hangmandb.mrbrash.repl.co/Lists/5_Letter_Words.txt";
const BEAUTIFUL_WORDS = "https://hangmandb.mrbrash.repl.co/Lists/Beautiful_Words.txt";
const NBA_PLAYERS = "https://hangmandb.mrbrash.repl.co/Lists/NBA_Players.txt";
const lists = [MOVIES,DISNEY_MOVIES,MLB_TEAMS,NHL_TEAMS,NBA_TEAMS,NFL_TEAMS,WORDS, BEAUTIFUL_WORDS, NBA_PLAYERS, SPANISH];

/** Returns an array, split on new line character by default */
function loadFile(filePath, splitChar = '\n') {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result.split(splitChar);
}

function getTitle(type) {
  let list = getList(type);
  
  return list[randInt(0, list.length-1)];
}

function getAllTitles(type) {
  let list = getList(type);
  
  return list;
}

function getList(type) {
  // Validation
  if ((typeof type != "number") || ((type < 0) || (type > lists.length - 1))) {
    alert("Invalid Type: " + type);
    return -1;
  }

  let list = loadFile(lists[type]);
  
  return list
}

function randInt(low, high) {
  low = Math.ceil(low);
  high = Math.floor(high);
  return Math.floor(Math.random() * (high - low + 1) + low);
}


