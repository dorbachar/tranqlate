const API_ROOT = "http://localhost:8082";

export async function getAPI() {
    const response = await fetch(API_ROOT);
    const data = await response.json();
    console.log(data)
    return data;
}