import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/page/login'
import Home from '@/page/home'

import projectList from '@/page/project-page/project-list'
import mettingList from '@/page/metting-page/metting-list'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/home',
            name: 'home',
            redirect: '/project-list',
            component: Home,
            children: [{
                    path: '/project-list',

                    name: 'project-list',
                    component: projectList
                },
                {
                    path: '/metting-page',
                    name: 'metting-list',
                    component: mettingList
                }
            ]
        },
    ]
})
