if (process.env.NODE_ENV === 'production') {
    module.exports = require('./configureStore.pro')
} else {
    module.exports = require('./configureStore.dev')
}
