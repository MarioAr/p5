// const URL  = "http://my-json-server.typicode.com/MarioAr/data/";
const URL  = "127.0.0.1:3007/";
export const api = {
    productos: {
        get: () => {
            return fetch(`${URL}productos`)
            .then ( data => data.json())
            .then( data => {
                // console.log(data)
                if (Array.isArray(data)) {
                    return data;
                }
                return [];
            })
            .catch(e => {
                console.log(e)
                return e;
            })
        },
        getUno: (id) => {
            console.log(id)
            return fetch(`${URL}productos/${id}`)
            .then ( data => data.json())
            .then( data => {
                if (data.id) {
                    return data;
                }
                return {};
            })
            .catch(e => {
                // console.log(e)
                return e;
            })
        },
        setUno: (o) => {
            return fetch(`${URL}productos/${1}`)
            .then ( data => data.json())
            .then( data => {
                // console.log(data)
                if (data.id) {
                    return data;
                }
                return {};
            })
            .catch(e => {
                console.log(e)
                return e;
            })
        },
        deleteUno: (o) => {
            return fetch(`${URL}productos/${1}`)
            .then ( data => data.json())
            .then( data => {
                // console.log(data)
                if (data.id) {
                    return data;
                }
                return {};
            })
            .catch(e => {
                console.log(e)
                return e;
            })
        }
    }
}

