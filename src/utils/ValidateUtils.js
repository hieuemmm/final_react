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
export function isAlphabet(value) {
    let regex = /[a-zA-Z ]+/;
    if (!regex.test(value)) {
        return "Must be alphabet!";
    }
    return "";
}
export function isTitle(value) {
    let regex = /^[a-zA-Z0-9\s]+[a-zA-Z0-9\s]$/;
    if (!regex.test(value)) {
        return "Invalid title!";
    }
    return "";
}
export function isAuthor(value) {
    let regex = /^[a-zA-Z0-9\s]+[a-zA-Z0-9\s]$/;
    if (!regex.test(value)) {
        return "Invalid author!";
    }
    return "";
}
export function isReleaseYear(value) {
    let number = Number(value);
    if (number < 1990) {
        return "Must greater than or equal 1990!";
    }
    return "";
}