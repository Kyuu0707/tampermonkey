// ==UserScript==
// @name         Pixiv legacy tag list
// @namespace    https://github.com/Kyuu0707/
// @version      0.9
// @description  adds button to send user to legacy bookmarks list
// @author       Kyuu
// @match        https://www.pixiv.net/member*
// @grant        none
// ==/UserScript==

function goToTags()
{
    var url = window.location.href;
    var idx = url.indexOf('=');
    url = url.slice(idx+1,url.length);
    //console.log(url);
    window.location.href = "https://www.pixiv.net/member_tag_all.php?id=" + url;
}

function main()
{
    var elems = document.getElementsByClassName('n5QTR4w');
    var myNode = elems[0];
    console.log(myNode);
    var myButton = document.createElement("Button");
    myButton.innerHTML = "Bookmarks";
    myButton.addEventListener('click',goToTags);
    myNode.appendChild(myButton);
}

window.onload = function()
{
    main();
}
