export class Book {
  title: string;
  author: string;
  price: number;
  readonly id: number = 1;

  constructor(author: string, title?: string) {// ? - means optional
    this.author = author;
    if (title){
      this.title = title;
    }
  }

  toString(){
    return 'title: ' + this.title +
      ', author: ' + this.author;
  }

  priceWithTax(taxRate: number): number{
    return this.price * (1 + taxRate);
  }

  toStringWithStringTemplate(){
    return `title ${this.title}, author ${this.author}`;
  }
}

export class Video {
  private title: string;
  private author: string;
  private price: number;
}

export enum SubjectArea{
  ART = 'Arts and Crafts',
  HISTORY = 'History',
  SCIENCE = 'Science and Maths',
  LITERATURE = 'Classic literature'
}

export type SubjectAreaString = keyof typeof SubjectArea;
