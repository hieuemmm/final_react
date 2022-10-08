export function isEmail(value) {
    // let regex = /^[a-z][a-z0-9]*@[a-z0-9]*.[a-z]{2,}$/i;
    let regex = /\S+@\S+\.\S+/i;
    if (!regex.test(value)) {
        return "Invalid email address!";
    }
    return "";
}
export function isPassword(value) {
    let regex = /^([a-z]){1,}|([A-Z]){1,}|([0-9]){1,}$/;
    if (!regex.test(value)) {
        return "Invalid password!";
    }
    return "";
}
export function isName(value) {
    let regex = /^[a-zA-Z\s]+$/;
    if (!regex.test(value)) {
        return "Must be Alphabet & whiteSpace!";
    }
    return "";
}
export function isAddress(value) {
    let regex = /^[a-zA-Z\s]+$/;
    if (!regex.test(value)) {
        return "Must be Alphabet & whiteSpace!";
    }
    return "";
}
export function isNumber(value) {
    let regex = /^[0-9]+$/;
    if (!regex.test(value)) {
        return "Must be number!";
    }
    return "";
}