export function getUserData(){
    const data = sessionStorage.getItem('userData')
    return data;
}

export function setUserData(data){
    sessionStorage.setItem('userData', JSON.stringify(data))
}

export function clearUserData(){
    sessionStorage.removeItem('userData')
}