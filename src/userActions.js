import axios from "axios";
import { router } from "./main.js"

export const userActions = {
    register: async (_, user) => {
        const response = await axios.post("http://localhost:3000/users/register", user)
        router.push("/")
    },
    me: async (context, to) => {
        console.log("ME was called")
        try {
            context.commit('changeUserLoading', true)
            const response = await axios.get("http://localhost:3000/users/me")
            router.push(`${to}`)
            context.commit('changeUser', response.data.user)
            context.commit('changeUserLoading', false)
        } catch (err) {
            console.error(err)
        }
    },
    login: async (context, user) => {
        console.log("LOGIN was called")
        try {
            const response = await axios.post("http://localhost:3000/users/login", user)
            context.commit('changeUser', user)
            router.push("/")
        } catch (err) {
            console.log("err:", err)
        }

    },
    logout: async (context) => {
        const response = await axios.delete("http://localhost:3000/users/logout")
        if (response.status === 204) {
            context.commit('changeUser', null)
            router.push("login")
        }
    }
}

