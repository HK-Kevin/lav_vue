const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/index.vue'], resolve),
    children:[
        {path: '/content',
         component: (resolve) => require(['./views/pages/content/Test.vue'], resolve)
        }
    ]
}];
export default routers;