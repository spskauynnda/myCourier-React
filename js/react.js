var _$ = function(id){
    if (document.getElementById(id)) {
        return document.getElementById(id);
    } else {
        return false;
    }
}

var find = function(){
    _$("ifr").style.display = "none";
    _$("btn").onclick=function(){
        _$("return").style.display = _$("ifr").style.display = "block";
        _$("name").style.display=_$("no").style.display=_$("btn").style.display="none";
        _$("ifr").src = "http://m.kuaidi100.com/index_all.html?type="+_$('name').options[_$('name').selectedIndex].value+"&postid="+_$("no").value;
    }
}

var ret = function(){
    _$("return").onclick = function(){
        _$("return").style.display = _$("ifr").style.display = "none";
        _$("name").style.display=_$("no").style.display=_$("btn").style.display="block";
    }
}

var list = function(){

}

window.onload=function(){
    find();     ret();
}