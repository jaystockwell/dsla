import Vue from 'vue/dist/vue'

import { Auth0Client } from '@auth0/auth0-spa-js'
const auth0 = new Auth0Client({
    domain: 'ctil.us.auth0.com',
    client_id: 'Gp2KF1TQuuIopzkLAM2xz5P0NGCAW0Aq',
    cacheLocation: 'localstorage',
});

new Vue({
    el: '#app', //in layouts/_default/baseof.html
    components: {
        'dslaLogin': ()=>import('./vue/login'),
    },
    async mounted() {
        this.user = await auth0.getUser();
    },
    data() {
        return {
            //$root stuff
            user: null,
        }
    },
    methods: {
        async login() {
            await auth0.loginWithPopup();
            this.user = await auth0.getUser();
        },
        async logout() {
            auth0.logout();
            this.user = null;
        },

    }
});

