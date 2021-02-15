/**
 * @Author: shadabKhan
 * @Date:   Thursday, November 7th 2019, 5:44:38 pm
 * @Last modified by:   shadabKhan
 * @Last modified time: Thursday, November 7th 2019, 7:38:06 pm
 */
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

