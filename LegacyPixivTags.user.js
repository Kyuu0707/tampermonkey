// ==UserScript==
// @name         Pixiv legacy tag list
// @namespace    https://github.com/Kyuu0707/
// @version      2.0
// @description  adds button to send user to legacy tag list
// @author       Kyuu
// @match        https://www.pixiv.net/member*
// @grant        none
// ==/UserScript==

function goToTags()
{
    var url = window.location.href;
    //console.log(url);
    /*
    if(url.includes("pixiv.net/member_illust.php\?mode"))
    {
        url = document.getElementsByClassName("e165rlrk3")[0].getAttribute("href");
    }
    */
    var idx = url.indexOf('=');
    url = url.slice(idx+1,url.length);
    var idx2 = url.indexOf('&');
    if(idx2 !== -1)
    {
        url = url.slice(0,idx2);
    }
    window.location.href = "https://www.pixiv.net/member_tag_all.php?id=" + url;
}

function main()
{
    //var elems = document.getElementsByClassName('_-59EIiw');
    //var myNode = elems[0];
    var myNode = document.body.childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0];
    //console.log(myNode);
    var myli = document.createElement("li");
    var myButton = document.createElement("a");
    myButton.innerHTML = "Tag List";
    myButton.addEventListener('click',goToTags);
    myli.appendChild(myButton);
    myNode.appendChild(myli);
}

window.setTimeout(main,400);

