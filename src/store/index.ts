import IProject from "@/interfaces/IProject";
import { INotification, TypeNotification } from "@/interfaces/INotification";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { InjectionKey } from 'vue'
import {ADD_PROJECT, UPD_PROJECT, DEL_PROJECT, NOTIFY} from "./types-mutations";

interface ProjState {
    projects: IProject[],
    notifications: INotification[],
}

export const key: InjectionKey<Store<ProjState>> = Symbol()

export const store = createStore<ProjState>({
    state: {
        projects: [],
        notifications:[],
    },
    mutations: {
        [ADD_PROJECT](state, projectName: string) {
            const project = {
                id: new Date().toISOString(),
                name: projectName
            } as IProject
            state.projects.push(project)
        },
        [UPD_PROJECT](state, project: IProject) {
            const index = state.projects.findIndex(proj => proj.id == project.id)
            state.projects[index] = project
        },
        [DEL_PROJECT](state, id: string) {
            state.projects =  state.projects.filter(proj => proj.id != id)
        },
        [NOTIFY] (state, newNotification: INotification) {

            newNotification.id = new Date().getTime()
            state.notifications.push(newNotification)

            setTimeout(() => {
                state.notifications = state.notifications.filter(notificacao => notificacao.id != newNotification.id)
            }, 3000)
        },
    }
})

export function useStore(): Store<ProjState> {
    return vuexUseStore(key)
}
