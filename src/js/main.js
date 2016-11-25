'use strict';

import 'babel-polyfill';
import Ractive from 'ractive';
import Equalizer from './components/Equalizer';

Ractive.components.equalizer = Equalizer;

const SHOW_CONTENT_BELOW_FOLD_DELAY_MILLIS = 2500;

const ractive = new Ractive({
    el: '.sect2',
    template: '#sect2_template',
    data: function () {
        equalizerActive: false
    },

    /**
     * When this section scrolls into view, activate the equalizer.
     * Let the user know that the content below the fold has loaded.
     */
    oninit: function () {
        window.addEventListener('scroll', this.onscroll.bind(this));
        window.setTimeout(function () {
            this.el.classList.add('pageLoaded');
        }.bind(this), SHOW_CONTENT_BELOW_FOLD_DELAY_MILLIS);
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
        if (this.el.getBoundingClientRect().top <= this.el.clientHeight * 0.06) {
            this.set('equalizerActive', true);
        } else {
            this.set('equalizerActive', false);
        }
    }
});