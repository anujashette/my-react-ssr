const Home = require('../views/Home');
const IndexHtml = require('../views/IndexHtml');

const routes =  [
    {
        path: '/',
        exact: true,
        component: IndexHtml,
    },
    {
        path: '/home',
        component: Home,
    }
]

module.exports = routes;