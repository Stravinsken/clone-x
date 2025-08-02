<template>
    <div>
        <div class="logo-container">
            <img src="../assets/x-logo.png" class="logo" />
        </div>
        <div class="title">
            계정을 생성하세요.
        </div>
        <InputField :type="'text'" :placeholder="'이메일'" v-model="email"/>
        <InputField :type="'text'" :placeholder="'이름'" v-model="name"/>
        <InputField :type="'text'" :placeholder="'비밀번호'" v-model="password"/>
        <InputField :type="'text'" :placeholder="'비밀번호 확인'" v-model="PasswordConfirm" />
        <button class="button" @click="signup">회원가입</button>
    </div>
</template>

<script>
import InputField from '../components/InputField.vue';
export default {
    name: 'SignUpPage',
    components: { InputField },
    data() {
        return {
            email: '',
            name: '',
            password: '',
            PasswordConfirm: '',
        }
    }
}
</script>

<style scope>
.title{
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: large;
    padding: 1%;
}

</style>