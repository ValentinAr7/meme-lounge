import { clearUserData, getUserData } from "../util.js";

const host = 'http://localhost:3030'

// This function sends an HTTP request to the API server with the specified URL, method, and data.
async function request(url, method, data) {
    const options = {
        method,
        headers: {}
    }

    // If data IS PROVIDED, include it in the request body and set the 'Content-Type' header to 'application/json'.
    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json'
        options.body = JSON.stringify(data);
    }


    // Retrieve user data from the session storage
    const userData = getUserData()

    if (userData) {         // Check if user data exists
        // If user data exists, include the access token as the value of the 'X-Authorization' header
        options.headers['X-Authorization'] = userData.accessToken
    }

    try {
        // Send the HTTP request to the API server.
        const res = await fetch(host + url, options);

        if (res.ok == false) {
            if (res.status == 403) {                // If the response status is 403 (Forbidden), clear the user data from the session storage.
                clearUserData()
            }
            const error = await res.join()
            throw new Error(error.message)
        }

        if (res.status == 204) {
            return res;
        } else {
            return res.json()
        }
    } catch (err) {
        alert(err.message);
        throw err;
    }
}


// These functions are used to send HTTP requests with the specified URL, method, and data.
export async function get(url) {
    return request(url, 'get')
}

export async function post(url) {
    return request(url, 'post', data)
}

export async function put(url) {
    return request(url, 'put', data)
}

export async function del(url) {
    return request(url, 'delete', data)
}