<template>
  <main class="columns is-gapless is-multiline" :class="{ 'dark-mode': darkModeActive }">
    <div class="column is-one-quarter">
      <SideBar @themeChanged="theme"/>
    </div>
    <div class="column is-three-quarter main">
      <Form @onSaveTask="saveTask"/>
      <div class="list">
        <Task v-for="(task, index) in tasks" :key="index" :task="task"/>
        <Box v-if="isEmptyList">
          There is no task today :(
        </Box>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from './components/SideBar.vue'
import Form from './components/Form.vue'
import Task from './components/Task.vue'
import Box from './components/Box.vue'
import ITask from './interfaces/ITask'

export default defineComponent({
  name: 'App',
  components: {
    SideBar,
    Form,
    Task,
    Box
  },
  data () {
    return {
      tasks: [] as ITask[],
      darkModeActive: false
    }
  },
  computed: {
    isEmptyList() : boolean {
      return this.tasks.length === 0
    }
  },
  methods: {
    saveTask(task: ITask) {
      this.tasks.push(task)
    },
    theme (darkModeActive: boolean) {
      this.darkModeActive = darkModeActive
    }
  }
});
</script>

<style>
.list {
  padding: 1.25rem;
}
main {
  --primary-bg: #fff;
  --primary-txt: #000;
}
main.dark-mode {
  --primary-bg: #2b2d42;
  --primary-txt: #ddd;
}
.main {
  background-color: var(--primary-bg);
}
</style>
