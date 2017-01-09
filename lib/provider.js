'use babel';

const colors = require('../colors');
const props = require('../properties');

import { Disposable } from 'atom';

export default class Provider extends Disposable {
    constructor () {
        super();
        this.selector = '.source.css, .source.stylus, .source.sass, .source.css.less, .source.css.scss';
    }

    getSuggestions (request) {
        const { prefix, bufferPosition, editor } = request;
        const line = editor.getTextInRange([ [bufferPosition.row, 0], bufferPosition ]);

        return new Promise((resolve) => {
      
            if (isCompletedProp(line)) {
                resolve(getColorNames(request.prefix));
            }
        });
    }

}

function isCompletedProp(prop) {
    if (prop.includes(':')) {
        prop = prop.trim().split(':')[0];
        return props.includes(prop);
    }
}

function getColorNames(pref) {
    let suggestions = [];
    for (let color in colors) {
        if(color.includes(pref)) {
            suggestions.push({
                text: color,
                leftLabelHTML: `<div style="background-color:${colors[color]}" class="css-color-name__color-preview"></div>`
            });
        }
    }
    return suggestions;
}
