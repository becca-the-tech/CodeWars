function toCamelCase(str) {
    let camelCase = [];
    str = str.split('');
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '-' || str[i] == '_') {
            i++;
            camelCase.push(str[i].toUpperCase());
        } else {
            camelCase.push(str[i]);
        }
    }

    return camelCase.join('');
}
