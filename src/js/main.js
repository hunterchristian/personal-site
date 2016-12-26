'use strict';

import 'babel-polyfill';
import Ractive from 'ractive';
import Equalizer from './components/Equalizer';

Ractive.components.equalizer = Equalizer;

const SHOW_CONTENT_BELOW_FOLD_DELAY_MILLIS = 2500;
// This constant needs to be kept in sync with the $sectionHeight variable in _utils.scss
const PERCENT_OF_VIEW_TO_PEEK = 0.06;
const DISTANCE_MODIFIER = 0.65;

const ractive = new Ractive({
    el: '.sect2',
    template: '#sect2_template',
    data: function () {
        equalizerActive: false
    },

    /**
     * When this section scrolls into view, activate the equalizer.
     */
    oninit: function () {
        window.addEventListener('scroll', this.onscroll.bind(this));
    },

    /**
     * Let the user know that the content below the fold has loaded.
     */
    oncomplete: function () {
        const timeSinceFirstLoad = performance.now() - window.loadStartTime;
        if (timeSinceFirstLoad < SHOW_CONTENT_BELOW_FOLD_DELAY_MILLIS) {
            window.setTimeout(function () {
                this.el.classList.add('pageLoaded');
            }.bind(this), SHOW_CONTENT_BELOW_FOLD_DELAY_MILLIS - timeSinceFirstLoad);
        } else {
            this.el.classList.add('pageLoaded');
        }
    },

    /**
     * We don't need to listen to the scroll event after this element is torn down.
     */
    onteardown: function () {
        window.removeEventListener('scroll', this.onscroll.bind(this));
    },

    /**
     * See if this section has scrolled into view and activate the equalizer if so.
     */
    onscroll: function (event) {
        const lastKnownTopPosition = this.el.getBoundingClientRect().top;
        const heightOfThisElement = this.el.clientHeight;
        const sect1El = document.querySelector('.sect1Background');

        window.requestAnimationFrame(function () {
            const scrollTop = event.target.scrollingElement.scrollTop;
            sect1El.style.transform = 'translateY(' + scrollTop * DISTANCE_MODIFIER + 'px)';

            if (lastKnownTopPosition <= heightOfThisElement * PERCENT_OF_VIEW_TO_PEEK) {
                this.set('equalizerActive', true);
            } else {
                this.set('equalizerActive', false);
            }
        }.bind(this));
    }
});