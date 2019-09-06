import { httpClient } from '@/config/http'

export default {

  getAll() {
    return httpClient.get("/miradores").then(
      response => {
        console.log(response)
        return response.data;
      }
    )
  },

}
