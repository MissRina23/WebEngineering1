/*
Verwenden Sie eine Ihrer Blumen.html mit dem Formular.
Schreiben Sie ein script, welches folgende Dinge tut.

Den Wert der Formularfelder an der Konsole ausgeben.
Mit click auf ein beliebiges (also alle) image den Wert aller Attribute ausgeben und die src und damit das Bild ändern.
Mit click auf ein beliebiges image (wieder alle) den Namen der Blume mit alert() ausgeben.
*/

(function () {
    'use strict';

    window.addEventListener('DOMContentLoaded',init,false);
    function init(){

        var img = document.querySelector('*');
        function changeImg() {
            img.classList.add('changeImg');
        } img.addEventListener('click',function(e) {changeImg();e.preventDefault();},false);

    var inputs=document.querySelectorAll('input');
    for (var i=0; i<inputs.length; i++){
        inputs[i].addEventListener('blur',function (evt) { validate(evt);evt.preventDefault();evt.stopPropagation(); }, false);
    }
    function validate(evt) {
        console.log(evt.target.value);
        var text=document.querySelectorAll('[type="text"]');
        var radio=document.querySelectorAll('[type="radio"]');
            for (var i=0; i<text.length; i++){
                if (text[i].value==''){
                    text[i].classList.add('false');
                }
            }
        var checkRadio;
            for(var i=0; i<radio.length; i++){
                console.log(radio[i].checked);
                if(radio[i].checked)
                    checkRadio=true;
            }

    }
        function changeSrc(t) {
            t.src='Images/ELCover01.jpg';
        }  img.addEventListener('click', function(e){changeSrc(e.target);e.preventDefault();}, false);

        if (document.getElementsByClassName("img")){
            var imgT=document.getElementById("blume")
            imgT.onclick=function (ev) { alert(imgT.className); }
        }
    }

})();