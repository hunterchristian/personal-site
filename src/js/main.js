'use strict';

import 'babel-polyfill';
import Ractive from 'ractive';
import Equalizer from './components/Equalizer';

Ractive.components.equalizer = Equalizer;

const SHOW_CONTENT_BELOW_FOLD_DELAY_MILLIS = 2500;
// This constant needs to be kept in sync with the $sectionHeight variable in _utils.scss
const PERCENT_OF_VIEW_TO_PEEK = 0.06;
const BACKGROUND_DISTANCE_MODIFIER = 0.65;
const NAME_TITLE_DISTANCE_MODIFIER = 0.4;

/**
 * See if we have scrolled far enough down the page to activate the equalizer, and if so, activate it.
 * @param {Ractive} ractive
 */
function activateEqualizerIfAtBreakpoint (ractive) {
    const lastKnownTopPosition = ractive.el.getBoundingClientRect().top;
    const heightOfThisElement = ractive.el.clientHeight;

    if (lastKnownTopPosition <= heightOfThisElement * PERCENT_OF_VIEW_TO_PEEK) {
        ractive.set('equalizerActive', true);
    } else {
        ractive.set('equalizerActive', false);
    }
}

/**
 * Move a given element down the y-axis by a given number of pixels.
 * @param {Element} element
 * @param {number} numPixels
 */
function shiftDown (element, numPixels) {
    element.style.transform = 'translateY(' + numPixels + 'px)';
}

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
        const scrollTop = event.target.scrollingElement.scrollTop;
        const backgroundEl = document.querySelector('.sect1Background');
        const nameTitleEl = document.querySelector('.sect1');

        window.requestAnimationFrame(function () {
            shiftDown(backgroundEl, scrollTop * BACKGROUND_DISTANCE_MODIFIER);
            shiftDown(nameTitleEl, scrollTop * NAME_TITLE_DISTANCE_MODIFIER);
            activateEqualizerIfAtBreakpoint(this);
        }.bind(this));
    }
});