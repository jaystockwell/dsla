import Vue from 'vue/dist/vue'

export default {
    data() {
        return {
            //name: "hello",
        }
    },
    template: `
    <div class="dsla-login">
        <div v-if="!$root.user" class="btn btn-primary border" @click="$root.login">Login</div>
        <div v-if="$root.user">
            <div class="btn border" @click="$root.logout">Logout</div>
            &nbsp;
            <small>{{$root.user.name}}</small>
        </div>
    </div>`,
    methods: {
    }
}
