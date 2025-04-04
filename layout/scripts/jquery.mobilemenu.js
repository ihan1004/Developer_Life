$('<form action="#"><select id="mobile-menu" /></form>').appendTo("#mainav");
$("<option />",{selected:"selected",value:"",text:"MENU"}).appendTo("#mobile-menu");

// 메인 네비게이션 메뉴의 링크만 선택
$("#mainav > ul > li > a").each(function(){
    var e=$(this);
    if($(e).parents("ul ul ul").length>=1){
        $("<option />",{value:e.attr("href"),text:"- - - "+e.text()}).appendTo("#mobile-menu")
    }else if($(e).parents("ul ul").length>=1){
        $("<option />",{value:e.attr("href"),text:"- - "+e.text()}).appendTo("#mobile-menu")
    }else if($(e).parents("ul").length>=1){
        $("<option />",{value:e.attr("href"),text:""+e.text()}).appendTo("#mobile-menu")
    }else{
        $("<option />",{value:e.attr("href"),text:e.text()}).appendTo("#mobile-menu")
    }
});

// 서브메뉴 링크 추가
$("#mainav ul ul li a").each(function(){
    var e=$(this);
    if($(e).parents("ul ul ul").length>=1){
        $("<option />",{value:e.attr("href"),text:"- - - "+e.text()}).appendTo("#mobile-menu")
    }else if($(e).parents("ul ul").length>=1){
        $("<option />",{value:e.attr("href"),text:"- - "+e.text()}).appendTo("#mobile-menu")
    }else{
        $("<option />",{value:e.attr("href"),text:"- "+e.text()}).appendTo("#mobile-menu")
    }
});

$("#mobile-menu").change(function(){
    if($(this).find("option:selected").val()!=="#") {
        window.location=$(this).find("option:selected").val();
    }
});