# Using This JS Hangman Database
If you plan on creating a Hangman game and you would like to use an already created list of movies or team names, here is how you could do that:

In your **HTML** file, place the following inside the `<head>` section:
```HTML
<script src="https://misterbrash.github.io/Hangman_DB/hangman_helper.js" defer></script>
```

Now to get a secret title, in your JavaScript code you would call the function `getTitle()` like this:
```JS
let title = getTitle(0);
```
The parameter is the type of title (category):

0. [Movie](https://misterbrash.github.io/Hangman_DB/Lists/AA_Movies.txt)
1. [Disney Movie](https://misterbrash.github.io/Hangman_DB/Lists/Disney_Movies.txt)
2. [MLB Team](https://misterbrash.github.io/Hangman_DB/Lists/MLB_Teams.txt)
3. [NHL Team](https://misterbrash.github.io/Hangman_DB/Lists/NHL_Teams.txt)
4. [NBA Team](https://misterbrash.github.io/Hangman_DB/Lists/NBA_Teams.txt)
5. [NFL Team](https://misterbrash.github.io/Hangman_DB/Lists/NFL_Teams.txt)
6. [5 Letter Words](https://misterbrash.github.io/Hangman_DB/Lists/5_Letter_Words.txt)
7. [Beautiful Words](https://misterbrash.github.io/Hangman_DB/Lists/Beautiful_Words.txt)
8. [NBA Players](https://misterbrash.github.io/Hangman_DB/Lists/NBA_Players.txt)
9. [Spanish 5-Letter Words](https://misterbrash.github.io/Hangman_DB/Lists/Spanish.txt)

If you would like a new category or entry added, [contact Mr. Brash](mailto:matthew.brash@ocsb.ca).

<br><br><br><br>
