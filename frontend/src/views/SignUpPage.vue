<template>
    <div>
        <div class="logo-container">
            <img src="../assets/x-logo.png" class="logo" />
        </div>
        <div class="title">
            계정을 생성하세요.
        </div>
        <InputField :type="'text'" :placeholder="'이메일'" v-model="email" :errorMsg="'이메일을 입력하세요.'"/>
        <InputField :type="'text'" :placeholder="'이름'" v-model="name" :errorMsg="'이름을 입력하세요.'"/>
        <InputField :type="'password'" :placeholder="'비밀번호'" v-model="password" :errorMsg="'비밀번호를 입력하세요.'"/>
        <InputField :type="'password'" :placeholder="'비밀번호 확인'" v-model="passwordConfirm" />
        <span v-if="!isPasswordMatch && passwordConfirm" class="error-message">비밀번호가 일치하지 않습니다.</span>
        <button class="button" @click="signUp">회원가입</button>
    </div>
</template>

<script>
import InputField from '../components/InputField.vue';
import { api } from '../api/index';
export default {
    name: 'SignUpPage',
    components: { InputField },
    data() {
        return {
            email: '',
            name: '',
            password: '',
            passwordConfirm: '',
        }
    },
    methods: {
        async signUp(){
            if(!this.email || !this.name || !this.password) {
                alert("모든 필드를 입력해주세요.");
                return;
            }
            if(!this.isPasswordMatch) {
                alert("비밀번호가 일치하지 않습니다.");
                return;
            }

            try{
                const response = await api.post("/users", {
                    name: this.name,
                    email: this.email,
                    password: this.password
                })
                console.log("회원가입 성공:" + response.data);
                this.$router.push('/');
            } catch(error){
                console.error("회원가입 실패", error);
                alert("회원가입에 실패");
            }
        }
    },
    computed: {
        isPasswordMatch() {
            return this.password === this.passwordConfirm;
        }
    }
}
</script>

<style scoped>
.title{
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: large;
    padding: 1%;
}

</style>