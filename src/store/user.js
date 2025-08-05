import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        currentUserId: 0,
        userList: [
            { name: '다미', id: 13, email: 'dm@dm.com' },
            { name: '철수', id: 1, email: 'cs@cs.com' },
            { name: '영희', id: 2, email: 'yh@yh.com' },
            { name: '예진', id: 3, email: 'yj@yj.com' },
            { name: '지우', id: 4, email: 'jw@jw.com' },
        ]
    }),
    getters: {
        getUsername: (state) => state.userList.map(user => user.name),
    },
})