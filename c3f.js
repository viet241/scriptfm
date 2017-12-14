if(!my_getcookie('friends_cook_t') || ((new Date()).getTime())-300000>my_getcookie('friends_cook_t') )
{
  my_setcookie('friends_cook_t',(new Date()).getTime(),1,0);
  jQuery.get('/profile.forum?mode=editprofile&page_profil=friendsfoes',function(data){
      var i= jQuery(data).find('#page-body table.forumline').eq(2).find('div.friends-foes-list').length;
      i=(i)?'<a href="/profile.forum?mode=editprofile&page_profil=friendsfoes" onClick="my_setcookie(\'friends_cook_t\',0,0,0)">Bạn có <b>'+i+'</b> yêu cầu kết bạn - Click để đồng ý hoặc từ chối !'+'</a>':'Bạn không có yêu cầu kết bạn nào - hãy chủ động kết bạn với những thành viên khác nhé!!';
      jQuery('#friends_cook').attr('id','').html(i);
      my_setcookie('friends_cook_data',i,1,0);
  });
}
else jQuery('#friends_cook').attr('id','').html(my_getcookie('friends_cook_data'));