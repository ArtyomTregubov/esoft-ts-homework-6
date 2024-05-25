
  interface Identifiable {
    id: number;
  }
  
  function findById<T extends Identifiable>(items: T[], id: number): T | undefined {
    return items.find(item => item.id === id);
  }
  
  interface User extends Identifiable {
    name: string;
    email: string;
    age: number;
  }

  const users: User[] = [
    { id: 1, name: "Alice", email: "alice@example.com", age: 25 },
    { id: 2, name: "Bob", email: "bob@example.com", age: 30 }
  ];
  const user = findById(users, 1);