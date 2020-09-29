export default class GreenService {
    async getResource() {
        const url = `http://localhost:3001/greenhouse/data`
        const result = await fetch(url)
        
        if (!result.ok) {
            throw new Error(`Could not fetch ${url}` +
            `, received ${result.status}`)
        }
        
        return await result.json()
    }
}