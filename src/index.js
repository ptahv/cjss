import initTheme from './lib/theme.js';
import initClasses from './lib/classes';

let theme = initTheme;
let classes = initClasses(theme);

let classesFns = [initClasses]
const config = {
    setTheme(newTheme) {
        Object.assign(theme, newTheme)
        Object.assign(classes, classesFns.reduce((r, v) => Object.assign({}, r, v(theme)), {}))
    },

    setClasses(newClassesFn) {
        classesFns = classesFns.concat(newClassesFn);
        Object.assign(classes, classesFns.reduce((r, v) => Object.assign({}, r, v(theme)), {}))
    }
}

export default Object.assign((...classNames) => (
    classNames
        .flat()
        .filter(cn => typeof cn === 'string')
        .map(cn => cn.trim().split(' '))
        .flat()
        .map(cn => cn.split('\n'))
        .flat()
        .filter(Boolean)
        .reduce((ret, cn) => {
            const style = classes[cn] || {};
            
            if (!Object.keys(style).length) {
                console.warn('Style ' + cn + ' not found!')
                return ret;
            }

            return Object.assign({}, ret, style)
        }, {})
), {
    config,
    theme, 
    classes,
})




    