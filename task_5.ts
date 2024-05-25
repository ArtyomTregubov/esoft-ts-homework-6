
  interface User {
    id: number;
    name: string;
    email: string;
    age: number;
  }
  
  
  type UserNameType = User['name'];
  
  
  type UserFieldsToBoolean = { 
    [Key in keyof User]: boolean;
  }
  
  
  function getUserFieldType(key: keyof User) {
    
    return typeof User[key];
  }
  
  
  const ageType = getUserFieldType('age');
  const nameType = getUserFieldType('name')