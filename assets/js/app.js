import Vue from 'vue/dist/vue'

import { Auth0Client } from '@auth0/auth0-spa-js'
const auth0 = new Auth0Client({
    domain: 'ctil.us.auth0.com',
    client_id: 'Gp2KF1TQuuIopzkLAM2xz5P0NGCAW0Aq',
    cacheLocation: 'localstorage',
});

//since we have multiple vue root, we can't communicate between them.
//so let's use global here to check
let _isLoggedIn = null; 

const loginMix = {
    data() {
        return {
            user: null,
        }
    },
    async mounted() {
        this.user = await auth0.getUser();
        if(this.user) _isLoggedIn = true;
    },
    methods: {
        //move these to vue/login
        async login() {
            await auth0.loginWithPopup();
            this.user = await auth0.getUser();
            if(this.user) _isLoggedIn = true;
        },
        async logout() {
            auth0.logout();
            this.user = null;
            _isLoggedIn = false;
        },
    },
}

document.initLogin = (el)=> {
    new Vue({
        el,
        mixins: [ loginMix ],
        async mounted() {
        },
        data() {
            return {
                //$root stuff
            }
        },
        template: `
        <div class="dsla-login">
            <div v-if="!$root.user" class="btn btn-primary" @click="$root.login">Login</div>
            <div v-if="$root.user">
                <div class="btn btn-outline-secondary" @click="$root.logout">Logout</div>
                <!--&nbsp; <small>{{$root.user.name}}</small>-->
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
                showCorrect: false,
            }
        },
        mounted() {
            const d = JSON.parse(quiz);
            this.question = d.question;
            this.answers = [d.answer, ...d.wrong];
            shuffleArray(this.answers);
            this.correct = this.answers.indexOf(d.answer);
        },
        methods: {
            select(i) {
                if(this.selected !== null) return; //already answered
                if(!_isLoggedIn) {
                    alert("Please login first, so you can earn badges!");
                    return;
                }
                this.selected = i;
                if(i == this.correct) {
                    console.log("correct answer!");
                } else {
                    setTimeout(()=>{
                        this.showCorrect = true;
                    }, 2000);
                }
            }
        },
        template: `<div class="dsla-quiz">
            <div class="dsla-quiz-left">
                <i class="fas fa-question"></i>
            </div>
            <div class="dsla-quiz-main" :class="{answered: this.selected != null}">
                <p class="dsla-quiz-question"> {{question}}</p>
                <small>Please select a correct answer from below.</small>
                <div v-for="(w, idx) in answers" :key="idx">
                    <p class="dsla-quiz-answer" @click="select(idx)" :class="{show: selected === null || idx == selected || (idx == correct && showCorrect), selected: idx == selected}">
                        <b>{{idx+1}}.</b> {{w}}
                        <span v-if="idx == correct && selected !== null" class="answer">
                            <!-- <i class="fas fa-arrow-down"></i>-->
                            Correct Answer !!
                        </span>
                        <span v-if="idx != correct && selected !== null" class="answer answer-wrong">
                            Wrong Answer ... :(
                        </span>
                        <span v-if="idx == correct && idx != selected && showCorrect" class="answer answer-true">
                            <i class="fas fa-arrow-left"></i>
                            Correct answer.
                        </span>
                    </p>
                </div>
            </div>
        </div>`,
    });
}

