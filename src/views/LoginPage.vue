<template>
    <div>
        <input type = "text" placeholder="Email" v-model="email"/>
        <input type = "password" placeholder="Password" v-model="password"/>

        <button @click="login">로그인하기</button>
        <div>
            계정이 없으신가요?
            <span>Sign Up</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginPage',
    data(){
        return{
            email: '',
            password: '',
        }
    },
    methods: {
        login(){
            console.log(this.email, this.password);
        }
    }
}
</script>

<style>

</style>