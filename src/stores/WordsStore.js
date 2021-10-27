import {action, makeAutoObservable, observable} from 'mobx';

class WordsStore {

constructor () {
makeAutoObservable(this)
}


    words = []

    loadData = () => {
        fetch('http://itgirlschool.justmakeit.ru/api/words')
            .then(response => {
                if (response.ok) { //Проверяем что код ответа 200
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then((response) => this.words=response)
    }

    saveNewWord = (newWord) => {
        fetch(`/api/words/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                english: newWord.english,
                transcription: newWord.transcription,
                russian: newWord.russian,
                tags: newWord.tags
            })
        })
            .then(response => {
                if (response.ok) { //Проверяем что код ответа 200
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(() => { this.loadData() })
    }

    deleteWord = (id) => {
        fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
            method: 'POST'
        })
            .then(response => {
                if (response.ok) { //Проверяем что код ответа 200
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(() => { this.loadData() })

    }

    updateWord = (newWord) => {

    // validation();

    fetch(`/api/words/${newWord.id}/update`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(newWord)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong ...');
            }
        })
        // .then(toggleSelected(!isSelected))
        .then(() => { this.loadData() })

    }

}

export default WordsStore