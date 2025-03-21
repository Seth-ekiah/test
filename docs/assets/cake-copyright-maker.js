var year = new Date().getFullYear(); 
let copyRightTag = "<br><br><footer class=\"copyRight\"><small>Copyright &copy; "
 + year 
 + " Caleb Whitmer</small></footer>";

document.getElementById("copyright").innerHTML += copyRightTag;