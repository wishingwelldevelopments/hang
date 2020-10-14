<template>
  <svg class="figure-container" height="250" width="200">
    <!--  Stand for man hanging-->
    <line x1="60" y1="20" x2="140" y2="20"></line>
    <line x1="60" y1="20" x2="60" y2="230"></line>
    <line x1="20" y1="230" x2="100" y2="230"></line>

    <!-- Head-->
    <g :class="startAnimation.status == false ? 'swing' : ''">
    <line x1="140" y1="20" x2="140" y2="50" />
    <circle v-if="figureDisplay<6" cx="140" cy="70" r="20"/>
    <!--Body-->
    <line v-if="figureDisplay<5" x1="140" y1="90" x2="140" y2="150"/>
    <!--Arms -->
    <line v-if="figureDisplay<4" x1="140" y1="120" x2="120" y2="100"/>
    <line v-if="figureDisplay<3" x1="140" y1="120" x2="160" y2="100"/>
    <!--Legs -->
    <line v-if="figureDisplay<2" x1="140" y1="150" x2="120" y2="180"/>
    <line v-if="figureDisplay<1" x1="140" y1="150" x2="160" y2="180"/>
    </g>
  </svg>
</template>

<script>
  export default {
    name:'app',
    props:{
      figureDisplay: Number,
      startAnimation: Object
    },
    data() {
      return{
      }
    }
  }
</script>
<style>
.figure-container{
  fill:transparent;
  stroke:#fff;
  stroke-width:4px;
}
@keyframes swing{
  0%{transform: rotate(6deg);}
  50%{transform: rotate(-6deg)}
  100%{transform: rotate(6deg);}
}
.swing{
  transform-origin: 75% 0;
  animation: swing 1.0s ease-in-out forwards infinite;
}
</style>
