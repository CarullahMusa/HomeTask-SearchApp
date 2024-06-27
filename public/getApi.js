class getApi {
    constructor() {
        this.url = "https://api.api-ninjas.com/v1/dogs?name=";
    }

    async getDogsInformation(value) {
        const response = await (await fetch(`${this.url}${value}`)).json();
        console.log(response);
    }
}