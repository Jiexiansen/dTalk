import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import Login from '@/page/login';
import Home from '@/page/home';

// 项目
import projectList from '@/page/project-page/project-list';
import projectDetail from '@/page/project-page/project-detail';

import projectOverview from '@/page/project-page/project-details/project-overview';
import tradingPlan from '@/page/project-page/project-details/trading-plan';
import auditCenter from '@/page/project-page/project-details/audit-center';

// 会议
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
        {
            path: '/project-detail',
            name: 'project-detail',
            redirect: '/project-overview',
            component: projectDetail,
            children: [{
                    path: '/project-overview',
                    name: 'project-overview',
                    component: projectOverview
                },
                {
                    path: '/trading-plan',
                    name: 'trading-plan',
                    component: tradingPlan
                },
                {
                    path: '/audit-center',
                    name: 'audit-center',
                    component: auditCenter
                }
            ]
        }
    ]
})
