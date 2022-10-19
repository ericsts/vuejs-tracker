<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <Crono :timeInSeconds="timeInSeconds" />
    <button class="button" @click="start" :disabled="timeCounting">
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <span>Play</span>
    </button>
    <button class="button" @click="stop" :disabled="!timeCounting">
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>Stop</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Crono from './Crono.vue'

export default defineComponent({
  name: "Timer",
  emits: ['onFinishTime'],
  components: {
    Crono
  },
  data () {
    return {
      timeInSeconds: 0,
      crono: 0,
      timeCounting: false
    }
  },
  methods: {
    start () {
      // 1 seg = 1000 ms
      this.timeCounting = true
      this.crono = setInterval(() => {
        this.timeInSeconds += 1
      }, 1000)
    },
    stop () {
      this.timeCounting = false
      clearInterval(this.crono)
      this.$emit('onFinishTime', this.timeInSeconds)
      this.timeInSeconds = 0
    }
  }
});
</script>