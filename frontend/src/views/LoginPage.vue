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
import { useUserStore } from '../store/user';
import { api } from '../api/index'; // Import the api instance
export default {
    name: 'LoginPage',
    components: { InputField },
    data(){
        return{
            userStore: useUserStore(),
            email: '',
            password: '',
        }
    },
    methods: {
        async login(){
            if(!this.email || !this.password){
                alert("모든 필드를 입력해주세요.")
                return;
            }

            const payload = {
                email: this.email,
                password: this.password
            }
            try{
                const response = await api.post("/users/login", payload);
                console.log("로그인 성공:");
                this.userStore.setUser(response.data);
                this.userStore.saveToken(response.data.access_token);

                this.$router.push('/main');
            }catch(error){
                console.error("로그인 실패", error);
                alert("로그인에 실패!! 다시 시도해주세요.");
            }
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