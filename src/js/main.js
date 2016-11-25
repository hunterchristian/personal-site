'use strict';

import 'babel-polyfill';
import Ractive from 'ractive';
import Equalizer from './components/Equalizer';

Ractive.components.equalizer = Equalizer;

const SHOW_CONTENT_BELOW_FOLD_DELAY_MILLIS = 2500;
// This constant needs to be kept in sync with the $sectionHeight variable in _utils.scss
const PERCENT_OF_VIEW_TO_PEEK = 0.06;

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
    onscroll: function () {
        const lastKnownTopPosition = this.el.getBoundingClientRect().top;
        const heightOfThisElement = this.el.clientHeight;

        window.requestAnimationFrame(function () {
            if (lastKnownTopPosition <= heightOfThisElement * PERCENT_OF_VIEW_TO_PEEK) {
                this.set('equalizerActive', true);
            } else {
                this.set('equalizerActive', false);
            }
        }.bind(this));
    }
});