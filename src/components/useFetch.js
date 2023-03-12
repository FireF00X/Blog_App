import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null)
    let [isPending, setIsPending] = useState(true)
    let [error, setError] = useState(null)
    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url, { signal: abortCont.signal })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw Error(" 404  can't fetch data from server!");
                }
            }).then((data) => {
                setData(data);
                setIsPending(false);
                setError(null)
            }).catch((e) => {
                if (e.name === 'AbortError') {
                } else {
                    setError(e.message);
                    setIsPending(false);
                }
            })
        return (() => abortCont.abort())
    }, [url])
    return { data, isPending, error };
}
export default useFetch;