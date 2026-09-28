import { useState } from "react";

export function useSendRequest() {
    const [loading, setLoading] = useState(false);

    const sendRequest = async (url, method = "GET", data = null) => {
        setLoading(true);

        const options = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (data) {
            options.body = JSON.stringify(data);
        }

        const response = await fetch(url, options);
        setLoading(false);

        return response.json();
    };

    return { sendRequest, loading };
}
