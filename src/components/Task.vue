<template>
  <Box>
    <div class="columns">
      <div class="column is-7">{{ task.description || 'Task Empty' }}</div>
      <div class="column">
        <Crono :timeInSeconds="task.secondsDuration"/>
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
  }
});
</script>
