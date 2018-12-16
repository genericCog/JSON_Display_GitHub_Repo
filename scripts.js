$(function() {
  $("#showHideRepos").hide(); //hide paragraph element on load
  $("#gitHubButtonClose").hide();
  console.log("ready!"); //page is ready
  /*---------------get & set the date*/
  var theDate = new Date();
  $("#dateToday").html(theDate);
  $("#copyrightYear").html(theDate.getFullYear());
  console.log(theDate.getFullYear());

  /*---------------get & display github repo*/
  var gitHubURL = "//api.github.com/users/genericCog/repos";
  var openHref = '<a target="_blank" href="';
  var closeHref = '">';

  $("#gitHubButtonClose").click(function() {
    $("#showHideRepos").hide();
    $(this).hide();
  });
  $("#gitHubButton").click(function() {
    $("#gitHubButtonClose").show();
    $("#showHideRepos").show();
    $.getJSON(gitHubURL, {}, function(data) {
      var $ul = $("#listRepos");
      $.each(data, function(idx, item) {
        $ul.append(
          "<li>" +
            openHref +
            item.html_url +
            closeHref +
            item.name +
            "</a></li>"
        );
      });
    });
  });
  /*---------------*/

 
  /*______________________________________________________________________*/
}); //END jQuery

/*
Helpful Resource
https://developer.github.com/v3/
https://github.com/primer/octicons
https://stackoverflow.com/questions/18393860/how-to-parse-a-json-list-like-this-and-display-its-elements-in-html
https://stackoverflow.com/questions/11850527/use-javascript-to-get-the-list-of-a-users-github-repositories
https://stackoverflow.com/questions/25311541/how-to-vertically-align-text-inside-a-flexbox
http://api.jquery.com/hide/
https://github.com/jcolebrand
https://www.w3schools.com/cssref/tryit.asp?filename=trycss_overflow
http://yonaba.github.io/2012/08/14/List-your-GitHub-projects-using-JavaScript-and-jQuery.md.html
http://aboutcode.net/2010/11/11/list-github-projects-using-javascript.html

*/
