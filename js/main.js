!function(i){{var t,n,s=$(".sidebar"),e=$(".dashboard__contacts"),a=$(".container__settings"),c=$(".title__contacts");$(".dashboard__nav").height()+$(".dashboard__location").height()}$(".nav__sidebar-btn").click(function(){s.toggle(),n()}),c.click(function(){e.show(),c.css("display","none"),n()}),$(".search__icon").click(function(){e.hide(),c.css("display","inline-block"),n()}),$(i).resize(function(){$(i).height()>=600&&t(),n()}),t=function(){$(".container__messages").height($(i).height()-$(".dashboard").height()+$(".container__messages").height()),$(".contacts__list").height($(i).height()-$(".dashboard").height()+$(".contacts__list").height())},n=function(){var i;a.width()<=560?(i=$(".container__messages").height(),$(".container__settings .settings__group").css({display:"block",marginLeft:"auto",marginRight:"auto"}),$(".container__messages").height(i)):($(".container__settings .settings__group").css({display:"inline-block",marginRight:10}),t())},n(),t()}(this);