<template>
  <Box>
    <div class="columns">
      <div class="column is-3">
        {{ task.project?.name || 'N/A' }}
      </div>
      <div class="column is-4">
        {{ task.description || 'Task Empty' }}
      </div>
      <div class="column">
        <Crono :elapsedTime="task.elapsedTime"/>
      </div>
    </div>
  </Box>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Crono from "./Crono.vue";
import ITask from '../interfaces/ITask'
import Box from './Box.vue'

export default defineComponent({
  name: "Task",
  components: {
    Crono,
    Box
  },
  props: {
    task: {
      type: Object as PropType<ITask>,
      required: true
    }
  },
  computed: {
    elapsedTime() : string {
      return new Date(this.task.elapsedTime * 1000)
        .toISOString()
        .substr(11, 8)
    }
  }
});
</script>
