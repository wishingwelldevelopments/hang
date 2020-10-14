<template>
  <button id="themeToggler" @click="toggleTheme()">ahh my eyezz</button>
</template>

<script>
  export default {
    name:'app',
    setup(){
      const toggleTheme = () => {
        document.documentElement.classList.toggle("EnableDarkmode");
      }
      return{
        toggleTheme
      }
    }
  }
</script>

<style>
.EnableDarkmode{
  filter:invert(1);
}
#themeToggler{
  color:white;
  cursor:pointer;
  padding:5px 10px;
  box-sizing:border-box;
  outline:none;
  background-color:transparent;
  position:absolute;
  top:20px;
  font-size:15px;
  margin:0px auto;
  border:1px solid transparent;
  background-color:black;
  border-radius:20px;
}
</style>
