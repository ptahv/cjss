import classes from './classes.js'
import variables from './variables.js'

export default {
    setVariables(newVariables) {
        Object.assign(variables, newVariables)
    },

    setClasses(newClasses) {
        Object.assign(classes, newClasses)
    }
}