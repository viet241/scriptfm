/*
 * jQuery FM Prefixes 1.1
 * Copyright © 2012 Việt K - c3zone.net.
 * Released under the MIT and GPL licenses.
 */
;(function($){
	var defaults = {
		prefix: [],
		tag: "[c3z]",
		divider: 5,
		id: "prefix",
		forum:0,
		required:false,
		required_mes:"Vui lòng chọn Tiền tố"
	}
	function Addprefix(element,options){
		this.config = $.extend({},defaults,options);
		this.element = element;
		this.init();
	}
	Addprefix.prototype.init = function(){
		var f = this.element,
		c = this.config;
		t = f.find("[name='subject']"),
		p = f.find("[name='f']");
		l = true,
		pre = $('#'+c.id);
		pref = c.prefix.split("|");
		c.forum+="";
		c.forum = c.forum.split("|");
		z = c.forum == 0;
		if (!z)
			z=$.inArray(p.val()+"",c.forum)>=0;
		if(pref.length && p.length && z){
			if (pre.length<1) {
				pre = $('<select style="margin-right:'+c.divider+'px;" id="'+c.id+'" size="1" />').insertBefore(t);
				$("<option />",{value:"",text:"(none)"}).appendTo(pre);
			}
			for(i in pref)
				$("<option />",{value:pref[i],text:pref[i]}).appendTo(pre);
			pt = t.val().match(new RegExp("\\" + c.prefix, "g"));
			if (pt) {
				pt.push("c3z");
				pr = c.tag.replace("c3z",pt[0]);
				if (t.val().indexOf(pr)<1){
					t.val(t.val().substr(pr.length+1));
					pre.find("[value='"+pt[0]+"']").attr("selected","selected");
				}
			}
			f.unbind("submit").submit(function(){
				if(l){
					s = is_ie?document.post.subject.value:t.val().trim();
					var pp = pre.val();
					if(c.required && pp.length<1){
						alert(c.required_mes);
						return false;
					}
	        		if (s && pp)
	        			t.val(c.tag.replace("c3z",pp) + " " + s);
	        		l = 0;
        		}
			});

		}
	}
	$.fn.addPrefix = function(options) {
		new Addprefix(this.first(),options);
		return this.first();
	}
})(jQuery);