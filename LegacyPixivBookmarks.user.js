// ==UserScript==
// @name         Legacy pixiv bookmarks
// @namespace    https://github.com/kyuu0707
// @version      0.1
// @description  use old pixiv bookmark style
// @author       Kyuu
// @match        https://www.pixiv.net/member_illust*
// @grant        none
// ==/UserScript==

var main = function() {
    var bar = document.getElementsByClassName("_2g7Dix7")[0];
    console.log(bar);
    var mydiv = document.createElement("div");

    var mylink = document.createElement("a");
    mylink.setAttribute("href",goTo());
    mylink.innerHTML = "Bookmark";
    mylink.style = "text-decoration:none;color: rgb(51, 51, 51);cursor: pointer;display: inline-block;font-weight: 700;height: 32px;line-height: 32px;background: none;border-width: initial;border-style: none;border-color: initial;border-image: initial;padding: 0px";
    mydiv.appendChild(mylink);
    mydiv.style = "margin-right:20px";
    bar.appendChild(mydiv);

    //bar.addEventListener('click',goTo);
}


var goTo = function()
{
    var url = window.location.href;
    var idx = url.indexOf('illust_id');
    url = url.slice(idx+10,url.length);
    return "https://www.pixiv.net/bookmark_add.php?type=illust&illust_id=" + url;
}

window.setTimeout(main, 100);
