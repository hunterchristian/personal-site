
require(['../third_party/ractive', 'components/EqualizerRactive'], function (Ractive, Equalizer) {
    Ractive.components.equalizer = Equalizer;

    var ractive = new Ractive({
        el: '.sect1',
        template: '#sect1_template'
    });
});
