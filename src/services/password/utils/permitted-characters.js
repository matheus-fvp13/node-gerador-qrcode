async function permittedCharacters() {
    let permittedCharacters = [];

    if(process.env.UPPERCASE_LETTERS == "true") {
        permittedCharacters.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }

    if(process.env.LOWERCASE_LETTERS == "true") {
        permittedCharacters.push(..."abcdefghijklmnopqrstuvwxyz");
    }

    if(process.env.NUMBERS == "true") {
        permittedCharacters.push(..."0123456789");
    }

    if(process.env.SPECIAL_CHARACTERS == "true") {
        permittedCharacters.push(..."!@#$%^&*()");
    }

    return permittedCharacters;
}

export default permittedCharacters;