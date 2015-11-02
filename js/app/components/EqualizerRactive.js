define([
    '../../third_party/underscore-min',
    '../../third_party/jquery.min',
    '../../third_party/ractive'
], function (_, $, Ractive) {
    // Contains the list of rectangles that should be hidden during each step
    var steps = [
        [41,51,52,61,62],
        [51,61,62,63],
        [52,53,61,62,63],
        [42,52,61,62],
        [32,42,52,53,61,62,63],
        [42,51,52,61,62]
    ];

    var pausedStep = [31,32,33,41,42,43,51,52,53,61,62,63];

    /**
     * Sets all of the rectangles to be visible again (to be used in between showStep calls)
     * @param {Node} el The element containing the equalizer
     */
    function resetSteps (el) {
        var rects = el.querySelectorAll('.fadeout');
        for (var i = 0; i < rects.length; i++) {
            rects[i].classList.remove('fadeout');
        }
    }

    /**
     * Sets the visibility of the rectangles in the equalizer to the corresponding step
     * @param {Node} el The element containing the equalizer
     * @param {Number} step The step in the animation that should be shown
     */
    function showStep (el, step) {
        var stepSeq = steps[step];
        for (var i = 0; i < stepSeq.length; i++) {
            var stepEl = el.querySelector('.r' + stepSeq[i]);
            if (stepEl) {
                stepEl.classList.add('fadeout');
            }
        }
    }

    /**
     * Sets the visibility of the rectangles in the equalizer to be in the paused state
     * @param {Node} el The element containing the equalizer
     */
    function showPausedStep (el) {
        for (var i = 0; i < pausedStep.length; i++) {
            var stepEl = el.querySelector('.r' + pausedStep[i]);
            if (stepEl) {
                stepEl.classList.add('fadeout');
            }
        }
    }

    /**
     * Starts the equalizer's animation. If the view is already animating, then the call is ignored.
     * @param  {Node} el The element containing the equalizer
     * @param  {Number} currentStep
     * @return {Number}
     */
    function animate (el, currentStep) {
        resetSteps(el);
        showStep(el, currentStep);
        return (currentStep + 1) % steps.length;
    }

    /**
     * Stops the animation, clearing the flag and the timeout.
     * @param  {EqualizerRactive} ractive
     */
    function stopAnimation (ractive) {
        ractive.isAnimated = false;
        if (ractive.stepInterval) {
            clearInterval(ractive.stepInterval);
        }
    }

    /**
     * Sets up the observer for active and animate properties causing the equalizer to start/stop animating.
     * @param  {EqualizerRactive} ractive
     */
    function setupAnimateListener (ractive) {
        ractive.currentObserver = ractive.observe('active animate', function () {
            if (ractive.get('active') === true && !ractive.isAnimated && ractive.get('animate') === true) {
                ractive.isAnimated = true;
                ractive.stepInterval = setInterval(function () {
                    ractive.currentStep = animate(ractive.el, ractive.currentStep);
                }, 200);
            } else if (ractive.get('active') === false || ractive.get('animate') === false) {
                stopAnimation(ractive);
                showPausedStep(ractive.el);
            }
        });
    }

    /**
     * Adjust eualizer size if size variable is passed in.
     * @param  {EqualizerRactive} ractive
     */
    function adjustSize (ractive) {
        var size = ractive.get('size') || 1;
        var h = 1 * size;
        var w = 6 * size;
        var x1 = 0;
        var x2 = x1 + w + 1;
        var x3 = x2 + w + 1;
        var y1 = 0;
        var y2 = y1 + h + 1;
        var y3 = y2 + h + 1;
        var y4 = y3 + h + 1;
        var y5 = y4 + h + 1;
        var y6 = y5 + h + 1;

        ractive.set({
            h: h,
            w: w,
            x1: x1,
            x2: x2,
            x3: x3,
            y1: y1,
            y2: y2,
            y3: y3,
            y4: y4,
            y5: y5,
            y6: y6
        });
    }

    /**
     * @data {boolean} active
     *       {boolean} animate
     */
    var Equalizer = Ractive.extend({
        template: '#equalizer_ractive_template',
        currentStep: 0,

        /**
         * Called when the component is rendered and ready to work with.
         */
        oncomplete: function () {
            showPausedStep(this.el);
            setupAnimateListener(this);
            adjustSize(this);
        },

        /**
         * When torn down we should stop the animation.
         */
        onteardown: function () {
            if (this.currentObserver) {
                this.currentObserver.cancel();
            }
            stopAnimation(this);
        }
    });

    return Equalizer;
});
