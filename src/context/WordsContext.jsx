import { createContext, useContext, useState, useEffect } from "react";

const WordsContext = createContext();

export const useWords = () => {
    return useContext(WordsContext);
}

export const WordsProvider = ({ children }) => {
    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        setLoading(true);

        loadData();

    }, []);

    const loadData = () => {
        fetch('http://itgirlschool.justmakeit.ru/api/words')
            .then(response => {
                if (response.ok) { //Проверяем что код ответа 200
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then((response) => { setWords(response); setLoading(false) })
            .catch(error => { setError(error); setLoading(false) });
    }

    return (
        <WordsContext.Provider value={{ words, setWords, loading, setLoading, error, setError, loadData }}>
            {children}
        </WordsContext.Provider>
    )
}