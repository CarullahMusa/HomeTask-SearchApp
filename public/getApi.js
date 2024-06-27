class getApi {
    constructor() {
        this.url = "https://api.api-ninjas.com/v1/dogs?name=";
    }

    async getDogsInformation(value) {
        try {
            const response = await (await fetch(`${this.url}${value}`, {
                method: 'GET',
                headers: {
                    'X-Api-Key': "P3DhU14ufvl40QglG15osQ==IemL2YQgM24IhLJi"
                }
            })).json();

            // response.map((information) => {
            //     addToHtml(information);
            // });
            response.forEach((information) => {
                addToHtml(information);
            });

        } catch (err) {
            console.log(err)
        }
    }
}