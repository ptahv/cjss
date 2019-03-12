import omit from 'lodash/fp/omit';

import initTheme from './lib/theme.js';
import initClasses from './lib/classes';

export let theme = initTheme;
export let classes = initClasses(theme);
export let classesFn = initClasses;

let classesFns = [initClasses]
function updateClasses() {
    Object.assign(
        classes, 
        classesFns.reduce((r, v) => Object.assign({}, 
            r, 
            typeof v === 'function' ? v(theme) : v), {}
        ))
}

export const config = {
    setTheme(newTheme) {
        Object.assign(theme, newTheme)
        updateClasses();
    },

    setClasses(newClassesFn) {
        classesFns = classesFns.concat(newClassesFn);
        updateClasses();
    }
}

const flatten = (r,v) => r.concat(v);
export default Object.assign((...classNames) => (
    classNames
        .reduce(flatten, [])
        .filter(cn => typeof cn === 'string')
        .map(cn => cn.trim().split(' '))
        .reduce(flatten, [])
        .map(cn => cn.split('\n'))
        .reduce(flatten, [])
        .filter(Boolean)
        .reduce((ret, cn) => {
            const style = classes[cn] || {};
            
            if (!Object.keys(style).length) {
                console.warn('Style ' + cn + ' not found!')
                return ret;
            }

            return Object.assign({}, 
                omit(Object.keys(style), ret), 
                style
            )
        }, {})
), {
    config,
    theme, 
    classes,
})




    