import axios from "../../../../node_modules/axios/index";

export default class TicketService {
    static async getAll() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        //const response = await axios.get('https://localhost:7092/Tickets/Index')
        return response
    }

    static async getById(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return response
    }
}