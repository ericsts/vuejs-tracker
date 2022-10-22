import { TypeNotification } from "@/interfaces/INotification"
import { NOTIFY } from "@/store/types-mutations"
import { store } from '@/store'

export const notificacaoMixin = {
    methods: {
        notify(type: TypeNotification, title: string, text: string) : void {
            store.commit(NOTIFY, {
                title,
                text,
                type
            })
        }
    }
}