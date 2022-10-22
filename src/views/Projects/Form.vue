<template>
    <section>
        <form @submit.prevent="save">
            <div class="field">
                <label for="projName" class="label"> Project Name </label>
                <input type="text" class="input" v-model="projName" id="projName" />
            </div>
            <div class="field">
                <button class="button" type="submit">Save</button>
            </div>
        </form>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TypeNotification } from "@/interfaces/INotification";
import { useStore } from "@/store";
import { ADD_PROJECT, UPD_PROJECT } from "@/store/types-mutations";
import useNotifier from  "@/hooks/notifier";

export default defineComponent({
    name: "Form",
    props: {
        id: {
            type: String,
        }
    },
    mounted(){
        if(this.id){
            const project = this.store.state.projects.find(proj => proj.id == this.id)
            this.projName = project?.name || ''
        }
    },
    data() {
        return {
            projName: "",
        };
    },
    methods: {
        save() {
            if(this.id){
                this.store.commit(UPD_PROJECT, {
                    id: this.id,
                    name: this.projName,
                });
            }else{
                this.store.commit(ADD_PROJECT, this.projName);
            }
            this.projName = "";
            this.notify(TypeNotification.OK, 'Success', "Everything good");
            this.$router.push('/projects');
        },
    },
    setup() {
        const store = useStore();
        const {notify} = useNotifier();
        return {
            store,
            notify
        };
    },
});
</script>