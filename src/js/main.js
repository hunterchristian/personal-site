'use strict';

import 'babel-polyfill';
import Ractive from 'ractive';

const ractive = new Ractive({
    el: '.ractiveEl',
    template: '<div>my new ractive!!!!</div>'
});