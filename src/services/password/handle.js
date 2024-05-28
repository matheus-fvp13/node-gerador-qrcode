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

async function handle() {
    let characters = [];
    let password = "";

    const passwordLength = process.env.PASSWORD_LENGTH;
    characters = await permittedCharacters();
    console.log(characters);

    for(let i = 0; i < passwordLength; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }

    return password;
}

export default handle;