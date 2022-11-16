import Vue from 'vue'
import VueRouter from 'vue-router'

import NotFound from './views/404.vue';
import Home from './components/home.vue'
import homeMain from './views/homeMain'
import gardenDecor from './views/gardenDecor/gardenDecor'
import gardenTools from './views/gardenTools/gardenTools'
import homeDecor from './views/homeDecor/homeDecor'
import plants from './views/plants/plants'
import aboutUs from './views/aboutUs'
import contactUs from './views/contactUs'
import trackOrders from './views/trackOrders'
import cart from './views/cart'
import orders from './views/orders'
import powergarden from './views/gardenTools/powergarden'
import teethTrimmer from './views/gardenTools/teethTrimmer'
import grassTrimmer from './views/gardenTools/grassTrimmer'
import sprayNozzle from './views/gardenTools/sprayNozzle'
import weedRemover from './views/gardenTools/weedRemover'
import nightStar from './views/homeDecor/nightStar'
import bikeStand from './views/homeDecor/bikeStand'
import woodStand from './views/homeDecor/woodStand'
import rgb from './views/homeDecor/rgb'
import wallLamp from './views/homeDecor/wallLamp'
import lighthouse from './views/gardenDecor/lighthouse'
import dierya from './views/gardenDecor/dierya'
import owl from './views/gardenDecor/owl'
import ledSolar from './views/gardenDecor/ledSolar'
import succulents from './views/plants/succulents'
import succulents10x from './views/plants/succulents10x'
import payment from './views/payment.vue'
import checkout from './views/checkout.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home,
        children: [
            {
                path: '',
                component: homeMain,
            },
            {
                path: '/payment',
                component: payment,
            },
            {
                path: '/checkout',
                component: checkout,
            },
            {
                path: '/gardenDecor',
                component: gardenDecor,
            },
            {
                path: '/gardenTools',
                component: gardenTools,
            },
            {
                path: '/homeDecor',
                component: homeDecor,
            },
            {
                path: '/plants',
                component: plants,
            },
            {
                path: '/contactUs',
                component: contactUs,
            },
            {
                path: '/aboutUs',
                component: aboutUs,
            },
            {
                path: '/trackOrders',
                component: trackOrders,
            },
            {
                path: '/cart',
                component: cart,
            },
            {
                path: '/orders',
                component: orders,
            },
            {
                path: '/powergarden',
                component: powergarden,
            },
            {
                path: '/teethTrimmer',
                component: teethTrimmer,
            },
            {
                path: '/grassTrimmer',
                component: grassTrimmer,
            },
            {
                path: '/nightStar',
                component: nightStar,
            },
            {
                path: '/lighthouse',
                component: lighthouse,
            },
            {
                path: '/dierya',
                component: dierya,
            },
            {
                path: '/succulents',
                component: succulents
            },
            {
                path: '/bikeStand',
                component: bikeStand
            },
            {
                path: '/rgb',
                component: rgb
            },
            {
                path: '/owl',
                component: owl
            },
            {
                path: '/ledSolar',
                component: ledSolar
            },
            {
                path: '/sprayNozzle',
                component: sprayNozzle
            },
            {
                path: '/wallLamp',
                component: wallLamp
            },
            {
                path: '/succulents10x',
                component: succulents10x
            },
            {
                path: '/woodStand',
                component: woodStand
            },
            {
                path: '/weedRemover',
                component: weedRemover
            }
        ]
    },
    {
        name: 'NotFound',
        path: '**',
        component: NotFound
    }
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    }
})

export default router
