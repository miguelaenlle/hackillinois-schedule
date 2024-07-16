import { BASE_API_URL } from "../constants/api";

export const useFetchHook = () => {
    const get = async (url: string) => {
        console.log('BASE_API_URL + url', BASE_API_URL + url);
        const response = await fetch(BASE_API_URL + url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log("API Call complete", response);
        const data = await response.json();
        console.log("data", data);
        return data;
    }

    const post = async (url: string, body: { [key: string]: any }) => {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        return await response.json();
    }

    return {
        get,
        post
    }
}