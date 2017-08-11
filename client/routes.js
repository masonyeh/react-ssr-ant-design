// Hook for server
if (typeof require.ensure !== 'function') {
    require.ensure = function(dependencies, callback) {
        callback(require)
    }
}

const routes = {
    childRoutes: [{
        path: '/',
        component: require('./containers/Root'),
        indexRoute: {
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./containers/home/App'))
                }, 'home')
            }
        },
        childRoutes: [{
            path: 'explore',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./containers/explore/App'))
                }, 'explore')
            }
        }, {
            path: 'about',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./containers/about/App'))
                }, 'about')
            }
        }]
    }]
}

export default routes
