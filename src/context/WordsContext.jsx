import { createContext, useContext, useState, useEffect } from "react";

const WordsContext = createContext();

export const useWords = () => {
    return useContext(WordsContext);
}

export const WordsProvider = (props) => {
    const [words, setWords] = useState();
    useEffect(() => {
        fetch('/api/words')
            .then((response) => response.json())
            .then((response) => setWords(response))
    }, []);

    return (
        <WordsContext.Provider value={{ words, setWords }}>
            {props.children}
        </WordsContext.Provider>
    )
}