// const URL  = "http://my-json-server.typicode.com/MarioAr/data/";
const URL  = "http://127.0.0.1:3007/";
export const api = {
    productos: {
        get: () => {
            return fetch(`${URL}productos`)
            .then ( data => data.json())
            .then( data => {
                
                if (Array.isArray(data)) {
                    return data;
                }
                return [];
            })
            .catch(e => {
                // console.log(e)
                return e;
            })
        },
        getUno: (id) => {
            // console.log(id)
            return fetch(`${URL}productos/${id}`)
            .then ( data => data.json())
            .then( data => {
                // console.log(data)
                if (data[0]) {
                    return data[0];
                }
                return {};
            })
            .catch(e => {
                // console.log(e)
                return e;
            })
        },
        setUno: (o) => {
            let config = {
                type: 'POST',
                body: o
            }
            return fetch(`${URL}productos/${1}`, config)
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
        putUno: (id, o) => {
            let config = {
                type: 'PUT',
                body: o
            }
            return fetch(`${URL}productos/${id}`, config)
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
        deleteUno: (id) => {
            return fetch(`${URL}productos/${id}`, {method: 'DELETE'})
            .then ( data => data.json())
            .then( data => {
                // console.log(data)
                if (data === 1) {
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

