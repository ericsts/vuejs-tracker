<template>
  <div class="box form">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Create a new Task"
      >
        <input
          type="text"
          class="input"
          placeholder="Task?"
          v-model="description"
        />
      </div>
      <div class="column">
        <Timer @onFinishTime="finishTask"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Timer from './Timer.vue'

export default defineComponent({
  name: "Form",
  emits: ['onSaveTask'],
  components: {
    Timer
  },
  data () {
    return {
      description: ''
    }
  },
  methods: {
    finishTask (timeElapsed: number) : void {
      this.$emit('onSaveTask', {
        secondsDuration: timeElapsed,
        description: this.description
      })
      this.description = ''
    }
  }
});
</script>
<style>
.form {
  color: var(--primary-txt);
  background-color: var(--primary-bg);
}
</style>