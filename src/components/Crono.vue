<template>
  <section>
    <strong class="display">
      {{ txtElapsedTime }}
    </strong>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Crono',
  props: {
    elapsedTime: {
      type: Number,
      default: 0
    }
  },
  computed: {
    txtElapsedTime() : string {
      return new Date(this.elapsedTime * 1000).toISOString().substr(11,8)
    }
  },
})
</script>

<style scoped>
.display {
  color: var(--primary-txt);
}
</style>