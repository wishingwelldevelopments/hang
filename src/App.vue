<template>
  <div class="app-container">
    <theme-toggle-component></theme-toggle-component>
    <figure-component :figureDisplay="state.goes" :startAnimation="state.result"></figure-component>
    <h1 v-if="state.result.status == false">{{ state.result.msg }} The Word You Were Looking For Was : {{ state.result.answer }}</h1>
    <h1 v-if="state.result.status == true">{{ state.result.msg }}</h1>
    <div class="container">
      <div v-for="(w, index) in state.word" :key="index">
        <input :value="state.correct.includes(w) ? w : ''" :class="state.correct.includes(w) ? 'correct' : ''" style="pointer-events:none;user-select:none;" readonly/>
      </div>
    </div>
    <input v-if="Object.keys(state.result).length === 0" placeholder="Hint : Rhymes With Dog" class="input-field" v-model="state.letter" style="width:250px;margin-top:20px;" @keyup="go(state.letter)" autofocus/>
    <h1>Attempts Left : {{ state.goes }}</h1>
    <div class="attempts">
      <p v-for="(att, index) in state.attempts" :key="index">{{ att }}<span style="margin-right:5px;" v-if="index+1 < state.attempts.length">,</span></p>
    </div>
    <p style="position:absolute;bottom:10px;color:#353535;">!(!!#</p>
  </div>
</template>

<script>
import { reactive, watch } from 'vue';
import listOfWords from './assets/words.json'

export default {
  name: 'App',
  setup(){
    const state = reactive({
      goes:6,
      letter:'',
      result:{},
      correct:[],
      attempts: [],
      word: ''
    })

    const newWord = () => {
      return state.word = listOfWords[Math.floor(Math.random()*listOfWords.length)]
    }

    //Run newWord on created
    newWord()

    const watchIfReset = () => {
      state.result = {}
      state.letter=""
      state.correct=[]
      state.goes=6
      state.attempts=[]
      state.word=''
      newWord()
    }

    watch(() => {
      const filteredWord = [...new Set(state.word)]
      if(state.correct.length == filteredWord.length){
        state.result = {status:true, msg:'You Survived! YAY!', answer:state.word};
      }
      if(state.attempts.length == 6){
        state.result = {status:false, msg:'You Got Hanged!', answer:state.word};
      }
    })

    const go = (letter) => {
      if(state.word.includes(letter.charAt(0)) && !state.correct.includes(letter.charAt(0)) && letter != ""){
        state.correct.push(letter.charAt(0))
        state.letter=""
      }else{
        if(!state.attempts.includes(letter.charAt(0)) && !state.correct.includes(letter) && !letter.includes(" ") && letter != ""){
          state.attempts.push(letter.charAt(0))
          state.goes--
        }
        state.letter=""
      }
    }

    return{
      state,
      go,
      watchIfReset,
    }
  }
}
</script>

<style scoped>
.app-container{
  display:block;
  position:relative;
  width:100%;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align:center;
  flex-direction:column;
}
*{
  margin:0px;
  padding:0px;
}
.container input{
  outline:none;
  width:40px;
  padding:10px;
  box-sizing:border-box;
  margin-right:5px;
  border:none;
  color:white;
  font-size:18px;
  text-align:center;
  border-bottom:2px solid #3e3e3e;
  background-color:transparent;
}
.input-field{
  padding:5px;
  background-color:transparent;
  box-sizing:border-box;
  border:2px solid #4e4e4e;
  outline:none;
  font-size:18px;
  border-radius:4px;
  color:#47bd6b;
}
.input-field:focus{
  border:2px solid #47bd6b;
}
.input-field:focus::placeholder{
  color:#47bd6b;
}
.correct{
  border-bottom:2px solid #47bd6b !important;
}
.attempts{
  display:flex;
}
h1{
  color:dimgrey;
  margin-bottom:10px;
  font-size:20px;
  margin-top:20px;
}
p{
  color:white;
}
.container{
  display:flex;
}
</style>
