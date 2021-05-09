import Vue from 'vue/dist/vue'

import { Auth0Client } from '@auth0/auth0-spa-js'
const auth0 = new Auth0Client({
    domain: 'ctil.us.auth0.com',
    client_id: 'Gp2KF1TQuuIopzkLAM2xz5P0NGCAW0Aq',
    cacheLocation: 'localstorage',
});

/*
customElements.define('dsla-login', class extends HTMLElement {
    constructor() {
        super(); 

        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.innerHTML = `
            <style>
            :host {
                display: block;
                cursor: pointer;
            }
            div {
                padding: 0.5rem 1rem;
                white-space: nowrap;
            }
            div.border {
                border: 1px solid #ddd;
                border-radius: 5px;
            }
            .nav-link { 
                font-weight: bold;
            }
            small {
                opacity: 0.5;
            }
            #name {
                font-size: 85%;
            }
            </style>

            <div id="login" class="border"><span class="nav-item">Login</span></div>
            <div id="logout">Logout <small>|</small> <span id="name"/></div>
        `;

        //see if we are logged in
        this.user = null;
        auth0.getUser().then(user=>{
            this.user = user;
            this.update();
        });

        this.addEventListener('click', e=>{
            if(this.user) {
                console.log("logging out");
                auth0.logout({});
                this.update();
            } else {
                //auth0.loginWithRedirect({ //redirect_uri: "http://localhost:1313", });
                auth0.loginWithPopup().then(()=>{
                    console.log("logged in?");
                    auth0.getUser().then(user=>{
                        this.user = user;
                        this.update();
                    });
                });
            }
        });
    }

    update() {
        const loginBtn = this.shadow.querySelector('#login');
        const logoutBtn = this.shadow.querySelector('#logout');
        if(this.user) {
            loginBtn.style.display = 'none';
            logoutBtn.style.display = 'inherit';
            this.shadow.querySelector('#name').innerHTML = this.user.name;
        } else {
            loginBtn.style.display = 'inherit';
            logoutBtn.style.display = 'none';
        }
    }
});
*/
/*
document.addEventListener('DOMContentLoaded', async ()=>{
    const user = await auth0.getUser();
    console.log("user:", user);
    if(user) {
        const event = new CustomEvent('login', user);
        //document.body.querySelector('dsla-login').dispatchEvent(event);  //works
        document.body.dispatchEvent(event);  //works
    }
});
*/

new Vue({
    el: '#app', //right now it's attached to partials/header/header.html
    components: {
        'dslaLogin': ()=>import('./vue/login'),
    },
    async mounted() {
        this.user = await auth0.getUser();
    },
    data() {
        return {
            user: false,
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
/*
new Vue({
    el: '#app', //right now it's attached to partials/header/header.html
    data: {
        message: 'Hello Vue!',
        user: null,
    },
    methods: {
        async login() {
            console.log("login clicked", this.auth0);
            //await auth0.loginWithRedirect({ redirect_uri: "http://localhost:1313", });
            await auth0.loginWithPopup();
            this.user = await auth0.getUser();
            console.dir(this.user);
        },
        logout() {
            auth0.logout({
                //returnTo: "http://localhost:1313",
            });
            this.user = null;
        },
    },
    async mounted() {
        console.log("app mounted");
        this.user = await auth0.getUser();
        console.dir(this.user);
    }
})
*/
