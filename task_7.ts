
  interface User {
    id: number;
    name: string;
    age: number;
  }
  
  interface Product {
    id: number;
    name: string;
    price: number;
  }
  
  interface Book {
    isbn: string;
    title: string;
    author: string;
  }
  
  
  

  
  function findInArray<T, K extends keyof T>(items: T[], key: K, value: T[K]): T | undefined {
    return items.find(item => item[key] === value);
  }
  // Для улучшения функции findInArray можно добавить проверку на отсутствие ключа или значения
  // Также можно добавить возможность поиска по нескольким ключам одновременно
  // Для этого можно передавать массив ключей и значений в функцию и сравнивать их соответственно

  const users: User[] = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 }
  ];
  
  const products: Product[] = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Smartphone", price: 500 }
  ];
  
  const books: Book[] = [
    { isbn: "12345", title: "The TypeScript Handbook", author: "Someone" },
    { isbn: "67890", title: "Learning TypeScript", author: "Another One" }
  ];
  
  
  const foundUser = findInArray(users, 'name', 'Alice');
  console.log(foundUser);
  
  const foundProduct = findInArray(products, 'price', 500);
  console.log(foundProduct);
  
  const foundBook = findInArray(books, 'author', 'another one');
  console.log(foundBook);