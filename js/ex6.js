const words = [{
  term: "Procrastination",
  definition: "Avoidance of doing a task that needs to be accomplished"
}, {
  term: "Tautology",
  definition: "logical argument constructed in such a way that it is logically irrefutable"
}, {
  term: "Oxymoron",
  definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];

var x = "<dl>", i;
for (i = 0; i < words.length; i++) {
  x = x + "<strong><dt>" + words[i]["term"] + "</strong></dt>" + "<dd>" + words[i]["definition"] + "</dd>";
}
x = x + "</dl>";
document.getElementById("content").innerHTML = x;