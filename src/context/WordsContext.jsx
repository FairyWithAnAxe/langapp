import { createContext, useContext, useState, useEffect } from "react";

const WordsContext = createContext();

export const useWords = () => {
    return useContext(WordsContext);
}

export const WordsProvider = ({ children }) => {
    const [words, setWords] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('http://itgirlschool.justmakeit.ru/api/words')
            .then((response) => response.json())
            .then((response) => { setWords(response); setLoading(false) })

    }, []);

    return (
        <WordsContext.Provider value={{ words, setWords, loading }}>
            {children}
        </WordsContext.Provider>
    )
}