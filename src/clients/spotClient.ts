const url = "http://localhost:3000";

export async function getPropertyById(id: string) {
    const Url = new URL(`${url}/properties`);
    Url.searchParams.set("id", id)
    const response = await fetch(Url);
    return await response.json();
}

export async function getAllProperties() {
    const Url = new URL(`${url}/properties`);
    const response = await fetch(Url);
    return await response.json();
}
