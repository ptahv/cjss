import classes from './classes.js';

export default (...classNames) => 
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