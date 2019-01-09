import v from './variables.js';

export default {
    'width-max': { width: '100%' },
    'height-max': { height: '100%' },

    'color-primary': { color: v.colorPrimary },
    'color-primary-dark': { color: v.colorPrimaryDark },
    'color-primary-light': { color: v.colorPrimaryLight },
    'color-disabled': { color: v.colorDisabled },
    'color-link': { color: v.colorLink },
    'color-white': { color: v.colorWhite },
    
    'font-size-small': { fontSize: v.fontSizeSmall },
    'font-size-x-small': { fontSize: v.fontSizeXSmall },
    'font-size-large': { fontSize: v.fontSizeLarge },
    'font-size-x-large': { fontSize: v.fontSizeXLarge },

    'background-color-primary': { backgroundColor: v.colorPrimary },
    'background-color-primary-dark': { backgroundColor: v.colorPrimaryDark },
    'background-color-primary-light': { backgroundColor: v.colorPrimaryLight },
    'background-color-white': { backgroundColor: v.colorWhite },
    'background-color-body': { backgroundColor: v.colorBody },
    
    'margin': { margin: v.spacing },
    'margin-left': { marginLeft: v.spacing },
    'margin-left-half': { marginLeft: v.spacing/2 },

    'padding': { padding: v.spacing },
    'padding-top-none': { paddingTop: 0 },
    'padding-bottom-none': { paddingBottom: 0 },

    'padding-horizontal-half': { paddingLeft: v.spacing/2, paddingRight: v.spacing/2 },
    'padding-vertical-half': { paddingTop: v.spacing/2, paddingBottom: v.spacing/2  },

    'border': { borderWidth: 1, borderStyle: 'solid', borderColor: v.colorBorder },
    'border-color-primary-dark': { borderColor: v.colorPrimaryDark },
    
    'border-radius': { borderRadius: 15 },
    'border-radius-none': { borderRadius: 0 },

    'font-weight-bold': { fontWeight: 'bold' },
    
    'flex-direction-row': { flexDirection: 'row' },
    'flex': { flex: 1 },

    'justify-content-center': { justifyContent: 'center' },

    'align-items-center': { alignItems: 'center' },
    'align-items-left': { alignItems: 'flex-start' },

    'align-self-center': { alignSelf: 'center' },

    'overflow-hidden': { overflow: 'hidden' }
}