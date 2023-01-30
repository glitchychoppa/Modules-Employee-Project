import { UI } from "./ui"

export class RequestClass { 
    constructor(url) {
        this.url = url
    }

    async Get() {
        const request = await fetch(this.url)
        const responseData = await request.json()

        return responseData
    }
    
    async Post(data) {
        const request = await fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
        })

        const responseData = await request.json()
        return responseData
    }

    async Delete(id) {
        const request = await fetch(this.url + '/' + id, {
            method: 'DELETE', 
        })

        return 'Veri silme islemi tamamlandi'
    }

    async Put(id,data) {
        const request = await fetch(this.url + '/' + id, {
            method: 'PUT', 
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
        })
        
        const responseData = await request.json()
        return responseData
    }
}


