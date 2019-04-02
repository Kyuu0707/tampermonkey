// ==UserScript==
// @name         Legacy pixiv bookmarks
// @namespace    https://github.com/kyuu0707
// @version      1.0
// @description  use old pixiv bookmark style
// @author       Kyuu
// @match        https://www.pixiv.net/member_illust*
// @grant        none
// ==/UserScript==

var main = function() {


    var myBar = document.body.childNodes[1].childNodes[1].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[0];

    var mydiv = document.createElement("div");

    var mylink = document.createElement("a");
    mylink.setAttribute("href",goTo());
    mylink.innerHTML = "Bookmark";
    mylink.style = "text-decoration:none;color: rgb(51, 51, 51);cursor: pointer;display: inline-block;font-weight: 700;height: 32px;line-height: 32px;background: none;border-width: initial;border-style: none;border-color: initial;border-image: initial;padding: 0px";
    mydiv.appendChild(mylink);
    mydiv.style = "margin-right:20px";
    myBar.appendChild(mydiv);

}


var goTo = function()
{
    var url = window.location.href;
    var idx = url.indexOf('illust_id');
    url = url.slice(idx+10,url.length);
    return "https://www.pixiv.net/bookmark_add.php?type=illust&illust_id=" + url;
}

window.setTimeout(main, 600);
