var menubar = document.getElementById("menu-bar");
var item = document.getElementById("item");

item.style.right='-300px';
menubar.onclick=function(){
    if(item.style.right=='-300px'){
        item.style.right='0';
    }
    else{
        item.style.right='-300px'
    }
}

