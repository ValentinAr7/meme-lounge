// Get the user data from the session storage
export function getUserData(){
    const data = sessionStorage.getItem('userData')
    return data;
}

// Set the user data in the session storage
export function setUserData(data){
    sessionStorage.setItem('userData', JSON.stringify(data))
}

// Clear the user data from the session storage
export function clearUserData(){
    sessionStorage.removeItem('userData')
}