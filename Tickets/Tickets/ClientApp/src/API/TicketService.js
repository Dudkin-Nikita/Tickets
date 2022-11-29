import axios from "../../../../node_modules/axios/index";

export default class TicketService {
    static async getAll() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return response.data
    }
}