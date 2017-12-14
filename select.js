﻿function selectCode(a)
{
   // Get ID of code block
   var e = a.parentNode.parentNode.getElementsByTagName('CODE')[0];
 
   // Not IE
   if (window.getSelection)
   {
      var s = window.getSelection();
      // Safari
      if (s.setBaseAndExtent)
      {
         s.setBaseAndExtent(e, 0, e, e.innerText.length - 1);
      }
      // Firefox and Opera
      else
      {
         // workaround for bug # 42885
         if (window.opera && e.innerHTML.substring(e.innerHTML.length - 4) == '<BR>')
         {
            e.innerHTML = e.innerHTML + ' ';
         }
 
         var r = document.createRange();
         r.selectNodeContents(e);
         s.removeAllRanges();
         s.addRange(r);
      }
   }
   // Some older browsers
   else if (document.getSelection)
   {
      var s = document.getSelection();
      var r = document.createRange();
      r.selectNodeContents(e);
      s.removeAllRanges();
      s.addRange(r);
   }
   // IE
   else if (document.selection)
   {
      var r = document.body.createTextRange();
      r.moveToElementText(e);
      r.select();
   }
}
if(text){}else{ var text = 'Selecionar todos';}
jQuery(document).ready(function(){
   jQuery("dl.codebox dt").not("dl.spoiler > dt").html('Code: <a href="#" onclick="selectCode(this); return false;"><font face="verdana" color="white">----------</font>Select content</a>');
});