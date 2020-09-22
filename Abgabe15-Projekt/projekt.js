(function () {
    'use strict';

    window.addEventListener('DOMContentLoaded', init,false);
    function init() {


        //Validation
        document.querySelectorAll('input, select, textarea');
        var invalidClassName='invalid',
            inputs=document.querySelectorAll('input, select, textarea')
            inputs.forEach(function (input){
                input.addEventListener('invalid', function (){
                    input.classList.add(invalidClassName)
                    window.alert('please enter somthing');
                })
                //Remove class when input becomes valid.
                input.addEventListener('input', function () {
                    if (input.validity.valid){
                        input.classList.remove(invalidClassName)
                    }
                })
            })


        //active control buttons
        document.querySelector('#play').addEventListener('click', togglePlayPause);
        document.querySelector('#back').addEventListener('click', runBackwards);
        document.querySelector('#forward').addEventListener('click', runForwards);
            //selection picture changer and child elements
        var changer = document.querySelector('#photoMe'),
            children = changer.querySelectorAll('figure'),
            container = document.querySelector('#container'),
            newWidth = (children.length*100)+'%';

        // sets container, puts figure-elements horizontal
        container.classList.add('container');
        changer.classList.add('changer');
        changer.style.width = newWidth;
        var newMargin = ((children.length-1)*-100)+'%';

        // animate changer
        var marquee = changer.animate(
            [
                {marginLeft: '0%'},
                {marginLeft: newMargin}
            ],
            {
                duration: children.length*3000,
                direction: 'normal',
                iterations: Infinity,
                playbackRate: 1,
                fill: 'forwards'
            });

        // now for play/pause
        changer.addEventListener('mouseenter', pauseMarquee, false);
        changer.addEventListener('click', playMarquee, false);

        //play function
        function playMarquee() {
            if (marquee.playState ==='paused') marquee.play();
        }
        //pause function
        function pauseMarquee() {
            if (marquee.playState === 'running')marquee.pause();
        }
        function runBackwards() {
            marquee.playbackRate = 1;
        }
        function runForwards() {
            marquee.playbackRate = -1;
        }
        function togglePlayPause() {
            if (document.querySelector('#play')
                .textContent == '❙❙') {
                document.querySelector('output')
                    .innerText = ' Pause';
                document.querySelector('#play')
                    .textContent = '►';
                marquee.pause();
            } else {
                document.querySelector('output')
                    .innerText = ' Play';
                document.querySelector('#play')
                    .textContent = '❙❙';
                marquee.play();
                marquee.playbackRate = 1;
            }
        }
        document.querySelector('#cancel')
            marquee.addEventListener('click', function () {
                marquee.cancel();
            });
        /*marquee.addEventListener('cancel', function () {
            document.querySelector('output')
                .innerText = 'Stop';
        });*/
        /*marquee.addEventListener('finish', function () {
            document.querySelector('output')
                .innerText = 'End'
        });*/


    }
})();