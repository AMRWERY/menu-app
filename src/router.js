import { createRouter, createWebHistory } from 'vue-router';

import RegistrationPage from './ui/RegistrationPage.vue';
import LoginPage from './ui/LoginPage.vue';
import MarketList from './components/MarketList.vue'
import MarketMenu from './components/MarketMenu.vue';
import CartItems from './components/CartItems.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/market' },
        { path: '/registration', component: RegistrationPage },
        { path: '/login', component: LoginPage },
        { path: '/market', component: MarketList },
        { path: '/menu/:marketId', name: 'MarketMenu', component: MarketMenu },
        { path: '/cart', component: CartItems },
    ]
});

export default router;