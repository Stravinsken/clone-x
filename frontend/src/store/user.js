import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => {
        const userData = JSON.parse(localStorage.getItem('user')) || {}
        return {
            name: userData.name || '',
            id: userData.id || '',
            email: userData.email || '',
        }
    },
    getters: {
        placeholder: (state) => "what's good, " + state.name + "?"
    },
    actions: {
        setUser(res){
            this.name = res.name
            this.id = res.id
            this.email = res.email

            localStorage.setItem('user', JSON.stringify({
                name: res.name,
                id: res.id,
                email: res.email
            }))
        },
        saveToken(accessToken){
            localStorage.setItem('access_token', accessToken)
        }
    }
})