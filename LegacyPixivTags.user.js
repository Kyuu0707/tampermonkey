// ==UserScript==
// @name         Pixiv legacy tag list
// @namespace    https://github.com/Kyuu0707/
// @version      1.21
// @description  adds button to send user to legacy tag list
// @author       Kyuu
// @match        https://www.pixiv.net/member*
// @grant        none
// ==/UserScript==

function goToTags()
{
    var url = window.location.href;
    //console.log(url);
    if(url.includes("pixiv.net/member_illust.php\?mode"))
    {
        url = document.getElementsByClassName("e165rlrk3")[0].getAttribute("href");
    }
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
    var elems = document.getElementsByClassName('n5QTR4w');
    var myNode = elems[0];
    //console.log(myNode);
    var myButton = document.createElement("Button");
    myButton.innerHTML = "Tag List";
    myButton.style = "text-decoration:none;border:none;background-color:#ffffff;color:#258fb8;font-weight:200;";
    myButton.addEventListener('click',goToTags);
    myNode.appendChild(myButton);
}

window.setTimeout(main,100);

