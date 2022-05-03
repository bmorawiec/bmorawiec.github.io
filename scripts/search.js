var searchClass = "article";                // class of items that will be searched through
var searchStringClass = ".article-title";   // class of item titles
var searchBarId = "search";                 // id of search bar
var noResultsStringId = "search-no-res";    // id of 'no results' paragraph
var searchList = [];    // list of all articles and their titles
var searchBar;          // search bar elem
var noResultsString;    // 'no results' paragraph elem

// updates the list of articles and their titles
function updateSearchList() {
    var items = document.getElementsByClassName(searchClass);
    searchBar = document.getElementById(searchBarId);
    noResultsString = document.getElementById(noResultsStringId);

    for (var i = 0; i < items.length; i++) {
        searchList.push([items[i], items[i].querySelector(searchStringClass).innerText.toLowerCase()]);
    }
}

// shows only the articles that titles contain the query
// input a query (string)
function searchByString(query) {
    var hiddenElements = 0;
    query = query.toLowerCase();

    for (var i = 0; i < searchList.length; i++) {
        var elem = searchList[i][0];
        var title = searchList[i][1];

        if (title.includes(query)) {
            elem.classList.remove("search-hidden");
        } else {
            elem.classList.add("search-hidden");
            hiddenElements++;
        }
    }

    if (hiddenElements == searchList.length) {
        noResultsString.classList.remove("search-hidden");
    } else {
        noResultsString.classList.add("search-hidden");
    }
}

// makes a div's height fixed
// input div id (string)
function reinforceDiv(divid) {
    var div = document.getElementById(divid);
    div.style.height = div.clientHeight + "px";
}