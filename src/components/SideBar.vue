<template>
  <header>
      <h1>
        <img src="../assets/logo.png" alt="">
      </h1>
      <div class="has-text-centered">
        <button class="button" @click="themeChange">
        {{ txtButton }}
        </button>
      </div>
      <nav class="panel mt-5">
        <ul>
          <li>
            <router-link to="/" class="link">
              <i class="fas fa-tasks"></i>
              TASKS
            </router-link>
          </li>
          <li>
            <router-link to="/projects" class="link">
              <i class="fas fa-project-diagram"></i>
              PROJECTS
            </router-link>
          </li>
        </ul>
      </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SideBar',
  emits: ['themeChanged'],
  data () {
    return {
      darkMode: false
    }
  },
  computed: {
    txtButton () {
      if (this.darkMode) {
        return 'Disable dark mode'
      }
      return 'Enable dark mode'
    }
  },
  methods: {
    themeChange () {
      this.darkMode = !this.darkMode
      this.$emit('themeChanged', this.darkMode)
    }
  }
})
</script>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
