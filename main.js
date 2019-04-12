// find the form
document.querySelector("form").addEventListener("submit", saveBookmark);

function saveBookmark(event) {
  event.preventDefault();

  var siteName = document.querySelector("#siteName").value;
  var siteUrl = document.querySelector("#siteUrl").value;

  var bookmark = {
    name: siteName,
    Url: siteUrl
  };

  if (localStorage.getItem("bookmarks") === null) {
    // init bookmarks array
    var bookmarks = [];
    // adding 1st bookmark
    bookmarks.push(bookmark);
    // set to local storage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks)); 
  } else {
      // get current bookmarks from local storage.

     var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

        // push new bookmark into bookmarks
     bookmarks.push(bookmark);

     // set bookmarks to localstorage
     localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  }

document.querySelector("form").reset();


  fetchBookmarks();
}

function fetchBookmarks(){

    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));


    var output = document.querySelector("#bookmarks");   
    
    output.innerHTML = "";


    for(var i=0;i<bookmarks.length;i++)   {

        var div = document.createElement("div");

        var h3 = document.createElement("h3");
        h3.textContent = bookmarks[i].name;

        // create vistit list
        var a = document.createElement("a");
        a.href = bookmarks[i].url;
        a.className = "btn btn-success";
        a.textContent = "vistit"

        // delete button
        var button = document.createElement("button");
        button.className = "btn btn-danger";
        button.textContent = "delete";


        div.appendChild(h3);
        div.appendChild(a);
        div.appendChild(button);


        output.appendChild(div);
    }




}



