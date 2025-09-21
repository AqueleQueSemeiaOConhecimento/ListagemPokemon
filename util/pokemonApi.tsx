const getDefaultUrl = "https://pokeapi.co/api/v2";

export async function fetchNamePokemon({ query } : { query:string }) {
    try {
        const response = await fetch(`${getDefaultUrl}/pokemon/${query}`);
        if(!response.ok) {
            if (response.status === 404) {
                throw new Error("Pokémon não encontrado. Verifique o nome ou ID.");
            }
            throw new Error("Ocorreu um erro ao buscar o Pokémon.");
        }
        const data = await response.json();
        return data;
    }
    catch (error: any) {
        console.log(error.message);
        return;
    }
};