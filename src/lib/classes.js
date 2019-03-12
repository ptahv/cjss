import upperFirst from 'lodash/upperFirst'
import { spacing, theme, custom, common } from './classCreator.js';

export default (t) => ({
    'width-max': { width: '100%' },
    'height-max': { height: '100%' },
    
    ...theme(t, 'color', 'color'),
    ...theme(t, 'font-size', 'fontSize'),
    ...theme(t, 'background-color', 'color'),

    ...spacing(t, 'margin'),
    ...spacing(t, 'padding'),

    ...custom(
        ['border'], 
        ['', 'top', 'right', 'bottom', 'left'], 
        [''], 
        ({prefix}) => ({
            ['border' + upperFirst(prefix) + 'Width']: 1,
            borderStyle: 'solid', borderColor: t.colorBorder
    })),
    ...theme(t, 'border-color', 'color'),
    
    ...custom(
        ['border-radius'], 
        ['', 'top', 'right', 'bottom', 'left'], 
        ['', 'none'], 
        ({propertyName, prefix, suffix}) => {
            const v = suffix === 'none' ? 0 : t.borderRadius

            return {
                '':     { [propertyName]: v },
                top:    { borderTopLeftRadius: v, borderTopRightRadius: v },
                right:  { borderTopRightRadius: v, borderBottomRightRadius: v },
                bottom: { borderBottomLeftRadius: v, borderBottomRightRadius: v },
                left:   { borderTopLeftRadius: v, borderBottomLeftRadius: v }
            }[prefix]
        }
    ),

    ...common('font-weight', ['normal', 'bold']),
    ...common('display', ['flex', 'none']),

    'flex': { flex: 1 },
    ...common('flex-direction', ['row', 'column']),

    ...common('justify-content', ['center', 'space-between', 'space-evenly', 'flex-start', 'flex-end']),
    ...common('align-items', ['center', 'flex-start', 'flex-end']),
    ...common('align-content', ['center', 'flex-start', 'flex-end']),
    ...common('align-self', ['center', 'flex-start', 'flex-end']),

    ...common('overflow', ['hidden']),

    ...common('text-align', ['right']),
    ...common('text-transform', ['uppercase']),

    ...common('position', ['relative', 'absolute']),

    ...custom(
        ['top', 'right', 'bottom', 'left'], 
        [''], 
        ['', 'none'], 
        ({className, suffix}) => ({
            [className]: suffix === 'none' ? 'auto' : 0
        })
    )
})
