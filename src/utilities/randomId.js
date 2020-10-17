export default function randomId(params) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "u", "v", "w", "x", "y", "z"];

    let hash = '';

    for (let index = 0; index < alfabeto.length; index++) {
        let number = Math.floor(Math.random() * ((alfabeto.length - 1) - 0));

        hash = hash.concat(alfabeto[number])
    }

    return hash;
};