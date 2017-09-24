const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/index.vue'], resolve),
    children: [
        {
            path: '/home',
            component: (resolve) => require(['./views/pages/content/home/Home.vue'], resolve)
        },
        {
            path: '/introduce',
            component: (resolve) => require(['./views/pages/content/introduce/Introduce.vue'], resolve)
        },
        {
            path: '/team',
            component: (resolve) => require(['./views/pages/content/team/Team.vue'], resolve)
        },
        {
            path: '/team/:id',
            component: (resolve) => require(['./views/pages/content/team/OneTeacher.vue'], resolve)
        },
        {
            path: '/research',
            component: (resolve) => require(['./views/pages/content/research/Research.vue'], resolve)
        },
        {
            path: '/achievement/:id',
            component: (resolve) => require(['./views/pages/content/achievement/Achievement.vue'], resolve),

        },
        {
            path: '/news',
            component: (resolve) => require(['./views/pages/content/news/News.vue'], resolve)
        },
        {
            path: '/news/:id',
            component: (resolve) => require(['./views/pages/content/news/OneNews.vue'], resolve)
        },
        {
            path: '/lab',
            component: (resolve) => require(['./views/pages/content/lab/Lab.vue'], resolve)
        },
        {
            path: '/labOne/:id',
            component: (resolve) => require(['./views/pages/content/lab/OneLab.vue'], resolve)
        },
        {
            path: '/contact',
            component: (resolve) => require(['./views/pages/content/contact/Contact.vue'], resolve)
        },

    ]
}];
export default routers;