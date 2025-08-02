<template>
  <div class = "container">
    <LoginPage />
  </div>
</template>

<script>
import LoginPage from './views/LoginPage.vue';
export default {
  name: 'App',
  components: { LoginPage },

}
</script>

<style>
body{
  background-color: black;
  color : white;
}

.container{
  height : 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>