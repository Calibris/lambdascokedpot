

var div document.getElementsByClassName("row valign-wrapper").getElementsByClassName("col s8 m8 l8 valign").getElementsByTagName("a")
var urmomfat = document.getElementsByClassName("content-box")
for(var i =0 i< div.length; i++){
	if(div[i].innerHTML == "zanvaay"){
	
		urmomfat.removeChild(div[i].parent.parent.parent.parent)
	}
	
}
