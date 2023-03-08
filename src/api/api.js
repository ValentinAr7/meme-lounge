import { clearUserData, getUserData } from "../util.js";


async function request(url, method, data) {
    const options = {
        method,
        headers: {}
    }

    if (data != undefined) {
        options.headers = ['Content-Type'] = 'application/json'
        options.body = JSON.stringify(data);
    }

    const userData = getUserData()
    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken
    }

    try {
        const res = await fetch(host + url, options);

        if (res.ok == false) {
            if (res.status == 403) {
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