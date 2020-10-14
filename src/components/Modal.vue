<template>
  <div class="modal">
    <h1>{{ gameStatus.status }}</h1>
    <p v-if="gameStatus.answer">The Word Was {{ gameStatus.answer }}</p>
    <button @click="playAgain()">Play Again</button>
  </div>
</template>

<script>
  export default {
    name:'app',
    props: {
      gameStatus: Object
    },
    setup(props, { emit }){
      const playAgain = () => {
        emit('game-reset')
      }
      return{
        playAgain
      }
    }
  }
</script>

<style scoped>
.modal{
  background-color:rgba(0,0,0,0.4);
  z-index:99999;
  width:300px;
  height:200px;
  padding:20px;
  box-sizing:border-box;
  display:flex;
  text-align:center;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  border-radius:4px;
  margin:auto auto;
  position:absolute;
  top:0px;
  bottom:0px;
  left:0px;
  right:0px;
}
.modal p, .modal h1{
  color:white;
}
</style>
