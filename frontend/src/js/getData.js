export async function getData (url) {
    const reponse = await fetch(url);
    if (reponse.ok === true) {
        const r = reponse.json();
        //console.log(r);
        return r; // Surveiller le format
    } else {
        throw new Error('Impossible de contacter le serveur')
    }
}

export const URL = "http://localhost:3000/";