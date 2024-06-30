class getApi {
    constructor() {
        this.url = "https://api.api-ninjas.com/v1/dogs?name=";
        this.options = {
            method: 'GET',
            headers: {
                'X-Api-Key': "P3DhU14ufvl40QglG15osQ==IemL2YQgM24IhLJi"
            }
        };
    }

    async getDogsInformation(value) {
        try {
            const response = await (await fetch(`${this.url}${value}`, this.options)).json();

            response.forEach((information) => {
                addToHtml(information);
            });

        } catch (err) {
            console.log(err)
        }
    }

}