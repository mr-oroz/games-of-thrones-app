export default class GotService {
    constructor() {
        this._ApiBase = 'https://www.anapioficeandfire.com/api'
    }

    getResource = async (url) => {
        const res = await fetch(`${this._ApiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Cloud not fethc ${url}` + `, received ${res.status}`);
        }
        return await res.json()
    }

    getAllCharacters = async () => {
        const res = await this.getResource(`/characters?page=5&pageSize=10`);
        return res.map(this._transformCharacter)
    }

    getCharacter = async (id) => {
        const character = await this.getResource(`/characters/${id}`)
        return this._transformCharacter(character)
    }

    getAllHouses = async () => {
        const res = await this.getResource(`/houses/`)
        return res.map(this._transfromHouses)
    }

    getHouse = async (id) => {
        const houses = await this.getResource(`/houses/${id}`)
        return this._transfromHouses(houses)
    }

    getAllBooks = async () => {
        const res = await this.getResource(`/books/`)
        return res.map(this._transformBooks)
    }

    getBook = async (id) => {
        const books = await this.getResource(`/books/${id}`)
        return this._transformBooks(books)
    }

    isSet(data) {
        if(data) {
            return data
        } else {
            return 'no data :('
        }
    }

    _extractId = (item) => {
        const idRebExp = /\/([0-9]*)$/;
        return item.url.match(idRebExp)[1]
    }

    _transformCharacter = (char) => {
        return {
            id: this._extractId(char),
            name: this.isSet(char.name),
            gender: this.isSet(char.gender),
            born: this.isSet(char.born),
            died: this.isSet(char.died),
            culture: this.isSet(char.culture)
        }
    }

    _transfromHouses = (house) => {
        return {
            id: this._extractId(house),
            name: this.isSet(house.name),
            region: this.isSet(house.region),
            words: this.isSet(house.words),
            titles: this.isSet(house.titles),
            overlord: this.isSet(house.overlord),
            ancestralWeapons: this.isSet(house.ancestralWeapons)
        }
    }

    _transformBooks = (book) => {
        return {
            id: this._extractId(book),
            name: this.isSet(book.name),
            numberOfPages: this.isSet(book.numberOfPages),
            publisher: this.isSet(book.publisher),
            released: this.isSet(book.released)
        }
    }
}