import kebabCase from 'lodash/kebabCase'
import camelCase from 'lodash/camelCase'

export function spacing(theme, className) {
    const t = (scalar = 1) => ({ [className + 'Top']: (theme.spacingTop || theme.spacing) *scalar });
    const r = (scalar = 1) => ({ [className + 'Right']: (theme.spacingRight || theme.spacing) *scalar });
    const b = (scalar = 1) => ({ [className + 'Bottom']: (theme.spacingBottom || theme.spacing) *scalar });
    const l = (scalar = 1) => ({ [className + 'Left']: (theme.spacingLeft || theme.spacing) *scalar })

    const withVariations = (name, varFn) => ({
        [name + '-none']: varFn(0),
        
        [name]: varFn(),
        [name + '-double']: varFn(2),
        [name + '-half'] : varFn(0.5),
        
        [name + '-negative']: varFn(-1),
        [name + '-negative-double']: varFn(-2),
        [name + '-negative-half']: varFn(-0.5),
    })

    return {
        ...withVariations(className, (s) => ({
            ...t(s),
            ...r(s),
            ...b(s),
            ...l(s)
        })),
        ...withVariations(className + '-top', (s) => t(s)),
        ...withVariations(className + '-right', (s) => r(s)),
        ...withVariations(className + '-bottom', (s) => b(s)),
        ...withVariations(className + '-left', (s) => l(s)),
        ...withVariations(className + '-horizontal', (s) => ({ ...l(s), ...r(s)})),
        ...withVariations(className + '-vertical', (s) => ({ ...t(s), ...b(s)}))
    }
}

export function theme(theme, className, themeKeyPrefix) {
    const themeKeys = Object.keys(theme)
        .filter(themeKey => themeKey.includes(themeKeyPrefix))

    const propertyName = camelCase(className);
    return themeKeys.reduce((ret, themeKey) => {
        const currClassName = className + '-' + kebabCase(themeKey.replace(themeKeyPrefix, ''))

        return Object.assign({}, ret, {
            [currClassName]: { [propertyName]: theme[themeKey] }
        })
    }, {})
}

export function custom(classNames, prefixes, suffixes, customFn) {
    return classNames.reduce((clsRet, className) => {
        const propertyName = camelCase(className);

        return Object.assign({}, clsRet, 
            prefixes.reduce((preRet, prefix) => Object.assign({}, preRet, 
                suffixes.reduce((sufRet, suffix) => {
                    const currClassName = className 
                        + (prefix ? '-' + prefix : '')
                        + (suffix ? '-' + suffix : '');

                    return Object.assign({}, sufRet, {
                        [currClassName]: customFn({
                            className,
                            propertyName,
                            prefix,
                            suffix
                        })
                    })
                }, {})
            ), {})
        )
    }, {})
}

export function common(className, values) {
    const propertyName = camelCase(className)

    return values.reduce((ret, value) => Object.assign({}, ret, {
        [className + '-' + value]: { [propertyName]: value }
    }), {})
}