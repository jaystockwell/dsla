import Vue from 'vue/dist/vue'

import { Auth0Client } from '@auth0/auth0-spa-js'
const auth0 = new Auth0Client({
    domain: 'ctil.us.auth0.com',
    client_id: 'Gp2KF1TQuuIopzkLAM2xz5P0NGCAW0Aq',
    cacheLocation: 'localstorage',
});

document.initLogin = (el)=> {
    new Vue({
        el,
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
            //move these to vue/login
            async login() {
                await auth0.loginWithPopup();
                this.user = await auth0.getUser();
            },
            async logout() {
                auth0.logout();
                this.user = null;
            },

        },
        template: `
        <div class="dsla-login">
            <div v-if="!$root.user" class="btn btn-primary" @click="$root.login">Login</div>
            <div v-if="$root.user">
                <div class="btn btn-outline-secondary" @click="$root.logout">Logout</div>
                &nbsp;
                <small>{{$root.user.name}}</small>
            </div>
        </div>`,
        });
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

document.initQuiz = (el, quiz)=> {
    new Vue({
        el,
        data() {
            return {
                question: "",
                answers: [], //all answer
                selected: null,
                correct: 0, //index for correct answer 
            }
        },
        mounted() {
            const d = JSON.parse(quiz);
            this.question = d.question;
            this.answers = [d.answer, ...d.wrong];
            shuffleArray(this.answers);
        },
        methods: {
            select(i) {
                this.selected = i;
            }
        },
        template: `<div class="dsla-quiz">
            <div class="dsla-quiz-left">
                <i class="fas fa-question"></i>
            </div>
            <div class="dsla-quiz-main">
                <p class="dsla-quiz-question"> {{question}}</p>
                <small>Please select a correct answer from below.</small>
                <div v-for="(w, idx) in answers" :key="idx">
                    <p class="dsla-quiz-answer" @click="select(idx)" :class="{show: selected === null || idx == selected}">
                        <b>{{idx+1}}.</b> {{w}}
                    </p>
                </div>
            </div>
        </div>`,
    });
}

