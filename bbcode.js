function init() {
var bbimg = "img";
x = document.getElementsByTagName('div');
for(y=0;y<x.length;y++)
{
if(x[y].className == "postbody"){
document.body.innerHTML = document.body.innerHTML.replace(/\[\/help\]/gi, '<\/div>')
.replace(/\[help\]/gi, '<div class=notehelp>')
.replace(/\[\/tip\]/gi, '<\/div>')
.replace(/\[tip\]/gi, '<div class=notetip>')
.replace(/\[\/warn\]/gi, '<\/div>')
.replace(/\[warn\]/gi, '<div class=notewarning>')
.replace(/\[\/imp\]/gi, '<\/div>')
.replace(/\[imp\]/gi, '<div class=noteimportant>')
.replace(/\[\/note\]/gi, '<\/div>')
.replace(/\[note\]/gi, '<div class=noteclassic>');
}}
   };
   if (document.addEventListener) {
       document.addEventListener("DOMContentLoaded", init, false);
   }
   window.onload = init;