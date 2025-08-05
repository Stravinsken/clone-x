<template>
  <div class = "container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
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

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo{
  max-width: 60px;
  height: auto;
}

.button {
    border-radius : 20px;
    border: 1px solid white;
    font-size: 15px;
    font-weight: bold;
    /* 위 우 아래 좌 */
    /* 2개면 상하  좌우 */
    margin: 10px 0px;
    padding: 10px;
    width: 100%;
    cursor: pointer;
}

.error-message {
    color: red;
    font-size: small;
    width: 100%;
    margin-bottom: 5px;
}

</style>