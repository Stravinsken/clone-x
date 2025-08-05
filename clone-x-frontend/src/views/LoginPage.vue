<template>
    <div>
        <div class="logo-container">
            <img src="../assets/x-logo.png" class="logo" />
        </div>
        <!-- <input type = "text" placeholder="Email" v-model="email"/>
        <input type = "password" placeholder="Password" v-model="password"/> -->
        <InputField :type="'text'" :placeholder="'Email'" v-model="email" :errorMsg="'이메일을 입력하세요.'"/>
        <InputField :type="'password'" :placeholder="'Password'" v-model="password" :errorMsg="'비밀번호를 입력하세요.'"/>

        <button class="button" @click="login">로그인하기</button>
        <div>
            계정이 없으신가요?
            <router-link class="signup-button" to="/signup">Sign Up</router-link>
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
            this.$router.push('/main'); // 로그인 후 메인 페이지로 이동
        }
    }
}
</script>

<style scoped>
.signup-button {
    color: aqua;
    cursor: pointer;
}
</style>