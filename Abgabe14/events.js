/*
* Verwenden Sie die Blumen-Datei mit Formular.
*
* Schreiben Sie ein js-Script, welches folgende Dinge tut:
*
* Unterbinden Sie den default aller Verlinkungen und des submit-Buttons.
* Lassen Sie auf Klick anzeigen, welches Element angeklickt wurde, unterbinden Sie das hochreichen des events.
* Mit click auf ein Bild lassen Sie den Text aus dem Element alt als neues Element unter dem Bild anzeigen.
*/


(function () {
    'use strict';

    window.addEventListener('DOMContentLoaded',init,false);
    function init() {

        var html=document.querySelector('html');
            html.addEventListener('click',function (ev) { showEvent(ev);ev.preventDefault(); },false);
        function showEvent(ev) {
            console.log(ev.target.nodeName.toLowerCase());
            alert(ev);
        }


        var nav=document.querySelector('nav'),
            ul=document.querySelector('ul'),
            li=document.querySelector('li'),
            form=document.querySelector('form'),
            div=document.querySelector('div'),
            img=document.querySelector('img'),
            section=document.querySelector('section');

        nav.addEventListener('click',function (ev) { showElement('nav'); ev.stopPropagation(); },false);
        ul.addEventListener('click',function (ev) { showElement('ul'); ev.stopPropagation(); },false);
        li.addEventListener('click',function (ev) { showElement('li'); ev.stopPropagation(); },false);
        form.addEventListener('click',function (ev) { showElement('form'); ev.stopPropagation(); },false);
        div.addEventListener('click',function (ev) { showElement('div'); ev.stopPropagation(); },false);
        img.addEventListener('click',function (ev) { showElement('img'); ev.stopPropagation(); },false);
        section.addEventListener('click',function (ev) { showElement('section'); ev.stopPropagation(); },false);

        function showElement(el) {
            alert(el);
            console.log(el);
        }

        var nav=document.querySelector('nav');
        nav.addEventListener('click',function (ev) { showElement(ev.target.nodeName.toLowerCase());ev.preventDefault(); },false);
        function showElement(el) {
            alert(el);
            console.log(el);
        }
    }



})();