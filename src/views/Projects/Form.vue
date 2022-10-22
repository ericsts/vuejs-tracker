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
import { TypeNotification } from "@/interfaces/INotification";
import { useStore } from "@/store";
import { NOTIFY } from "@/store/types-mutations";
import { defineComponent } from "vue";

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
                this.store.commit("UPD_PROJECT", {
                    id: this.id,
                    name: this.projName,
                });
            }else{
                this.store.commit("ADD_PROJECT", this.projName);
            }
            this.projName = "";
            this.store.commit(NOTIFY, {
                title:"Yeah",
                text:"That is it!!!",
                type:TypeNotification.OK
            });
            this.$router.push('/projects');
        },
    },
    setup() {
        const store = useStore();
        return {
            store,
        };
    },
});
</script>