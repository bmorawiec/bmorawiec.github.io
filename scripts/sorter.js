var categories = [];                // empty array for sorter categories
var prefix = "cat-";                // prefix used in class name of items you want sorted
                                    //   eg. cat-games, cat-apps
var sorterSuffix = "-sorter";       // suffix used in class name of the sorter button
                                    //   eg. cat-games-sorter, cat-apps-sorter
var sorterAllId = "cat-sorter-all"; // id used for the sorter button that shows all items

// sets the sorting categories
// input categories in form of an array without prefixes
function setCategories(cat) {
    for (var i = 0; i < cat.length; i++) {
        categories.push(prefix + cat[i]);
    }
}

// adds counters to the sorter buttons indicating the amount of items in that category
// input true=add counter to the 'all' button
//       false=don't add counter to the 'all' button
function addCounters(updateSorterAll) {
    var sum = 0;

    for (var i = 0; i < categories.length; i++) {
        var sorter = document.getElementById(categories[i] + sorterSuffix);
        var elems = document.getElementsByClassName(categories[i]);
        sorter.innerText += " (" + elems.length + ")";
        sum += elems.length;
    }

    if (updateSorterAll) {
        var sorterAll = document.getElementById(sorterAllId);
        sorterAll.innerText += " (" + sum + ")";
    }
}

// shows the specified category
// input the category you want to show without prefix
function showCategory(cat) {
    for (var i = 0; i < categories.length; i++) {
        setVisibilityByClass(categories[i], false);
    }

    setVisibilityByClass(prefix + cat, true);
}

// shows all items
function showAllCategories() {
    for (var i = 0; i < categories.length; i++) {
        setVisibilityByClass(categories[i], true);
    }
}

// input class name (string) & target display mode (boolean)
function setVisibilityByClass(cl, targetVis) {
    var elems = document.getElementsByClassName(cl);
    for (var j = 0; j < elems.length; j++) {
        var elem = elems[j];

        if (targetVis) {
            elem.classList.remove("sorter-hidden");
        } else {
            elem.classList.add("sorter-hidden");
        }
    }
}