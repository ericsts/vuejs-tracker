<template>
  <main class="columns is-gapless is-multiline" :class="{ 'dark-mode': darkModeActive }">
    <div class="column is-one-quarter">
      <SideBar @themeChanged="theme"/>
    </div>
    <div class="column is-three-quarter main">
      <Notification></Notification>
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from './components/SideBar.vue'
import Notification from './components/Notification.vue';

export default defineComponent({
  name: 'App',
  components: {
    SideBar,
    Notification
},
  data () {
    return {
      darkModeActive: false
    }
  },
  methods: {
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
