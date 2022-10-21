<template>
    <Form @onSaveTask="saveTask"/>
    <div class="list">
        <Task v-for="(task, index) in tasks" :key="index" :task="task"/>
        <Box v-if="isEmptyList"> There is no task today :( </Box>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Form from '../components/Form.vue'
import Task from '../components/Task.vue'
import Box from '../components/Box.vue'
import ITask from '../interfaces/ITask'

export default defineComponent({
    name: "App",
    components: {
        Form,
        Task,
        Box
    },
    data () {
        return {
            tasks: [] as ITask[],
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
    }
});
</script>