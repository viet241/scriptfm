{\rtf1\ansi\ansicpg1252\deff0\deflang1033{\fonttbl{\f0\fswiss\fcharset0 Arial;}}
{\*\generator Msftedit 5.41.15.1512;}\viewkind4\uc1\pard\f0\fs20 /************************************************************************/\par
/* Rainbow Links Version 1.03 (2003.9.20)                               */\par
/* Script updated by Dynamicdrive.com for IE6                           */\par
/* Copyright (C) 1999-2001 TAKANASHI Mizuki                             */\par
/* takanasi@hamal.freemail.ne.jp                                        */\par
/************************************************************************/\par
\par
// Setting\par
var rate = 20;  // Increase amount(The degree of the transmutation)\par
\par
\par
// Main routine\par
\par
if (document.getElementById)\par
window.onerror=new Function("return true")\par
\par
var objActive;  // The object which event occured in\par
var act = 0;    // Flag during the action\par
var elmH = 0;   // Hue\par
var elmS = 128; // Saturation\par
var elmV = 255; // Value\par
var clrOrg;     // A color before the change\par
var TimerID;    // Timer ID\par
\par
\par
if (document.all) \{\par
    document.onmouseover = doRainbowAnchor;\par
    document.onmouseout = stopRainbowAnchor;\par
\}\par
else if (document.getElementById) \{\par
    document.captureEvents(Event.MOUSEOVER | Event.MOUSEOUT);\par
    document.onmouseover = Mozilla_doRainbowAnchor;\par
    document.onmouseout = Mozilla_stopRainbowAnchor;\par
\}\par
\par
\par
function doRainbowAnchor()\par
\{\par
    if (act == 0) \{\par
        var obj = event.srcElement;\par
        while (obj.tagName != 'A' && obj.tagName != 'BODY') \{\par
            obj = obj.parentElement;\par
            if (obj.tagName == 'A' || obj.tagName == 'BODY')\par
                break;\par
        \}\par
\par
        if (obj.tagName == 'A' && obj.href != '') \{\par
            objActive = obj;\par
            act = 1;\par
            clrOrg = objActive.style.color;\par
            TimerID = setInterval("ChangeColor()",100);\par
        \}\par
    \}\par
\}\par
\par
\par
function stopRainbowAnchor()\par
\{\par
    if (act) \{\par
        if (objActive.tagName == 'A') \{\par
            objActive.style.color = clrOrg;\par
            clearInterval(TimerID);\par
            act = 0;\par
        \}\par
    \}\par
\}\par
\par
\par
function Mozilla_doRainbowAnchor(e)\par
\{\par
    if (act == 0) \{\par
        obj = e.target;\par
        while (obj.nodeName != 'A' && obj.nodeName != 'BODY') \{\par
            obj = obj.parentNode;\par
            if (obj.nodeName == 'A' || obj.nodeName == 'BODY')\par
                break;\par
        \}\par
\par
        if (obj.nodeName == 'A' && obj.href != '') \{\par
            objActive = obj;\par
            act = 1;\par
            clrOrg = obj.style.color;\par
            TimerID = setInterval("ChangeColor()",100);\par
        \}\par
    \}\par
\}\par
\par
\par
function Mozilla_stopRainbowAnchor(e)\par
\{\par
    if (act) \{\par
        if (objActive.nodeName == 'A') \{\par
            objActive.style.color = clrOrg;\par
            clearInterval(TimerID);\par
            act = 0;\par
        \}\par
    \}\par
\}\par
\par
\par
\par
function ChangeColor()\par
\{\par
    objActive.style.color = makeColor();\par
\}\par
\par
\par
function makeColor()\par
\{\par
    // Don't you think Color Gamut to look like Rainbow?\par
\par
    // HSVtoRGB\par
    if (elmS == 0) \{\par
        elmR = elmV;    elmG = elmV;    elmB = elmV;\par
    \}\par
    else \{\par
        t1 = elmV;\par
        t2 = (255 - elmS) * elmV / 255;\par
        t3 = elmH % 60;\par
        t3 = (t1 - t2) * t3 / 60;\par
\par
        if (elmH < 60) \{\par
            elmR = t1;  elmB = t2;  elmG = t2 + t3;\par
        \}\par
        else if (elmH < 120) \{\par
            elmG = t1;  elmB = t2;  elmR = t1 - t3;\par
        \}\par
        else if (elmH < 180) \{\par
            elmG = t1;  elmR = t2;  elmB = t2 + t3;\par
        \}\par
        else if (elmH < 240) \{\par
            elmB = t1;  elmR = t2;  elmG = t1 - t3;\par
        \}\par
        else if (elmH < 300) \{\par
            elmB = t1;  elmG = t2;  elmR = t2 + t3;\par
        \}\par
        else if (elmH < 360) \{\par
            elmR = t1;  elmG = t2;  elmB = t1 - t3;\par
        \}\par
        else \{\par
            elmR = 0;   elmG = 0;   elmB = 0;\par
        \}\par
    \}\par
\par
    elmR = Math.floor(elmR).toString(16);\par
    elmG = Math.floor(elmG).toString(16);\par
    elmB = Math.floor(elmB).toString(16);\par
    if (elmR.length == 1)    elmR = "0" + elmR;\par
    if (elmG.length == 1)    elmG = "0" + elmG;\par
    if (elmB.length == 1)    elmB = "0" + elmB;\par
\par
    elmH = elmH + rate;\par
    if (elmH >= 360)\par
        elmH = 0;\par
\par
    return '#' + elmR + elmG + elmB;\par
\}\par
}
 