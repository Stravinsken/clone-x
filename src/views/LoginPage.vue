<template>
    <div>
        <!-- <input type = "text" placeholder="Email" v-model="email"/>
        <input type = "password" placeholder="Password" v-model="password"/> -->
        <InputField :type="'text'" :placeholder="'Email'" :modelValue="email" v-model="email"/>
        <InputField :type="'password'" :placeholder="'Password'" :modelValue="password" />

        <button @click="login">로그인하기</button>
        <div>
            계정이 없으신가요?
            <span>Sign Up</span>
        </div>
    </div>
</template>

<script>
import InputField from '../components/InputField.vue';
export default {
    name: 'LoginPage',
    components: { InputField },
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