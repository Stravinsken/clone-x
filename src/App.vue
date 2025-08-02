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
  max-height: auto;
}

</style>