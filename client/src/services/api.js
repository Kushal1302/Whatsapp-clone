import axios from 'axios'
import {Base_Url} from '../constant'

export const addUser = async (decoded) => {
    try {
        console.log(decoded)
        await axios.post(`${Base_Url}/user`, decoded)
    } catch (error) {
        console.log(error.message)
    }
}
export const allUsers = async () => {
    try {
        return await axios.get(`${Base_Url}/user/all`)
    } catch (error) {
        console.log(error)
    }
}
export const setConversation = async (data) => {
    try {
        return await axios.post(`${Base_Url}/conversation/add`,  data)
    } catch (error) {
        console.log(error)
    }
}
export const getConversation = async (data) => {
    try {
        return await axios.post(`${Base_Url}/conversation/get`,  data)
    } catch (error) {
        console.log(error)
    }
}
export const newMessage = async (data) => {
    try {
        return await axios.post(`${Base_Url}/message/add`,  data)
    } catch (error) {
        console.log(error)
    }
}
export const getMessages = async (id) => {
    try {
        console.log(id)
        return await axios.get(`${Base_Url}/message/get/${id}`)
    } catch (error) {
        console.log(error)
    }
}