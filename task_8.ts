  
  interface Person {
    name: string;
    age: number;
  }
  
  interface Adult {
    fullName: string;
    age: number;
  }
  
  
  function mapAndFilter<T, U>(items: T[], transform: (item: T) => U, filter: (item: U) => boolean): U[] {
    const transformedItems: U[] = items.map(transform);
    const filteredItems: U[] = transformedItems.filter(filter);
    return filteredItems;
  }
  
  const people: Person[] = [
    { name: "Alice", age: 24 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 32 }
  ];
  
  
  const adults: Adult[] = mapAndFilter(
    people,
    (person) => ({ fullName: person.name, age: person.age }),
    (adult) => adult.age >= 18
  );
  
  
  console.log(adults);
  
  
  
  // 1. Если необходимо добавить возможность изменения критерия сортировки, то нужно добавить еще один параметр для функции sort, например:
  //    function mapandfilter<T, U>(items: T[], transform: (item: T) => U, filter: (item: U) => boolean, sort: (a: U, b: U) => number): U[] {
  //      const transformedItems: U[] = items.map(transform);
  //      const filteredItems: U[] = transformedItems.filter(filter);
  //      const sortedItems: U[] = filteredItems.sort(sort);
  //      return sortedItems;
  //    }
  // 2. Типы T и U могут быть полностью разными, они не обязательно должны иметь общие характеристики.
  //    В данном случае, типы person и adult не связаны никаким образом, но все равно используются в обобщенной функции mapandfilter.
  
  