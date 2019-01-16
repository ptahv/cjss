export default (t) => ({
    'width-max': { width: '100%' },
    'height-max': { height: '100%' },

    'color-primary': { color: t.colorPrimary },
    'color-primary-dark': { color: t.colorPrimaryDark },
    'color-primary-light': { color: t.colorPrimaryLight },
    'color-disabled': { color: t.colorDisabled },
    'color-link': { color: t.colorLink },
    'color-white': { color: t.colorWhite },
    
    'font-size-small': { fontSize: t.fontSizeSmall },
    'font-size-x-small': { fontSize: t.fontSizeXSmall },
    'font-size-large': { fontSize: t.fontSizeLarge },
    'font-size-x-large': { fontSize: t.fontSizeXLarge },

    'background-color-primary': { backgroundColor: t.colorPrimary },
    'background-color-primary-dark': { backgroundColor: t.colorPrimaryDark },
    'background-color-primary-light': { backgroundColor: t.colorPrimaryLight },
    'background-color-white': { backgroundColor: t.colorWhite },
    'background-color-body': { backgroundColor: t.colorBody },
    
    'margin': { 
        marginTop: t.spacing,
        marginRight: t.spacingRight || t.spacing,
        marginBottom: t.spacingBottom || t.spacing,
        marginLeft: t.spacingLeft || t.spacing },
    'margin-none': { margin: 0 },
    'margin-bottom-none': { marginBottom: 0 },
    'margin-top': { marginTop: t.spacingTop || t.spacing },
    'margin-left': { marginLeft: t.spacingLeft || t.spacing },
    'margin-left-negative': { marginLeft: -1 * (t.spacingLeft || t.spacing) },
    'margin-left-half': { marginLeft: (t.spacingLeft || t.spacing)/2 },

    'padding': { 
        paddingTop: t.spacing,
        paddingRight: t.spacingRight || t.spacing,
        paddingBottom: t.spacingBottom || t.spacing,
        paddingLeft: t.spacingLeft || t.spacing },
    'padding-none': { padding: 0 },
    'padding-top-none': { paddingTop: 0 },
    'padding-bottom-none': { paddingBottom: 0 },
    'padding-left-none': { paddingLeft: 0 },
    'padding-right-none': { paddingRight: 0 },

    'padding-horizontal-half': { paddingLeft: t.spacing/2, paddingRight: t.spacing/2 },
    'padding-vertical-half': { paddingTop: t.spacing/2, paddingBottom: t.spacing/2  },

    'border': { borderWidth: 1, borderStyle: 'solid', borderColor: t.colorBorder },
    'border-color-primary-dark': { borderColor: t.colorPrimaryDark },
    
    'border-radius': { borderRadius: 15 },
    'border-radius-none': { borderRadius: 0 },

    'font-weight-bold': { fontWeight: 'bold' },
    
    'display-flex': { display: 'flex' },

    'flex-direction-row': { flexDirection: 'row' },
    'flex': { flex: 1 },

    'justify-content-center': { justifyContent: 'center' },
    'justify-content-space-between': { justifyContent: 'space-between' },
    'justify-content-flex-start': { justifyContent: 'flex-start' },
    'justify-content-flex-end': { justifyContent: 'flex-end' },

    'align-items-center': { alignItems: 'center' },
    'align-items-flex-start': { alignItems: 'flex-start' },
    'align-items-flex-end': { alignItems: 'flex-end' },

    'align-self-center': { alignSelf: 'center' },
    'align-self-flex-start': { alignSelf: 'flex-start' },
    'align-self-flex-end': { alignSelf: 'flex-end' },

    'overflow-hidden': { overflow: 'hidden' },

    'box-shadow': { boxShadow: '0 1px 5px rgba(0,0,0,.14902), 0 1px 2px rgba(0,0,0,.0980392)' },

    'text-align-right': { textAlign: 'right' }
})