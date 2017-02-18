var poster = $('[href*="https://www.bloxcity.com/users/"]');
var row = $('.row .valign-wrapper');

for (var i = 0; i < row.length; i++) {

   var current = row.eq(i).find(poster).first().text()
   if (current != "" && current == "Zanvaay") {
      row.eq(i).remove();
   }

}