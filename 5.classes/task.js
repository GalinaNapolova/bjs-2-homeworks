class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
	fix() {
		this.state *= 1.5;
	}
	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}
	get state() {
		return this._state;
	}
}
class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    const findResult = this.books.find(book => book[type] === value);
    return findResult || null;
  }

  giveBookByName(bookName) {
    const bookIndex = this.books.findIndex(book => book.name === bookName);
    if (bookIndex !== -1) {
      return this.books.splice(bookIndex, 1)[0];
    }
    return null;
  }
}

const myLibrary = new Library("Моя библиотека");

myLibrary.addBook(new DetectiveBook("Артур Конан Дойл", "Затерянный мир", 1912, 320));
myLibrary.addBook(new FantasticBook("Джек Лондон", "Мартин Иден", 1909, 416));
myLibrary.addBook(new FantasticBook("Станислав Лем", "Солярис", 1961, 288));

let oldBook = myLibrary.findBookBy("releaseDate", 1919);
if (!oldBook) {
  myLibrary.addBook(new NovelBook("Герман Гессе", "Демиан", 1919, 224));
}

const issuedBook = myLibrary.giveBookByName("Солярис");
console.log("Выдана книга: " + issuedBook.name);

issuedBook.state = 20;
console.log("Состояние после повреждения: " + issuedBook.state);

issuedBook.fix();
console.log("Состояние после ремонта: " + issuedBook.state);

myLibrary.addBook(issuedBook);
console.log("Книг в библиотеке: " + myLibrary.books.length);