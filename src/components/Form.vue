<template>
  <div class="box form">
    <div class="columns">
      <div
        class="column is-5"
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
      <div class="column is-3">
        <div class="select">
          <select v-model="idProject">
            <option value="">Select a project</option>
            <option
              :value="project.id"
              v-for="project in projects"
              :key="project.id"
            >
              {{ project.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <Timer @onFinishTime="finishTask"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Timer from './Timer.vue'
import { useStore } from 'vuex'
import { key } from '@/store'

export default defineComponent({
  name: "Form",
  emits: ['onSaveTask'],
  components: {
    Timer
  },
  data () {
    return {
      description: '',
      idProject: ''
    }
  },
  methods: {
    finishTask (elapsedTime: number) : void {
      this.$emit('onSaveTask', {
        elapsedTime: elapsedTime,
        description: this.description,
        project: this.projects.find(proj => proj.id == this.idProject)
      })
      this.description = ''
    }
  },
  setup () {
    const store = useStore(key)
    return {
      projects: computed(() => store.state.projects)
    }
  }
});
</script>

<style scoped>
.button {
  margin-left: 8px;
}
.box {
  background-color: var(--bg-primario);
  color: var(--texto-primario);
}
</style>