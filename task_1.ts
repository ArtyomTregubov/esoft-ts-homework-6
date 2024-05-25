interface User {
    id: number;
    name: string;
    email: string
  }
  
  interface Activity {
    userId: number;
    activity: string;
    timestamp: Date;
  }
  
  async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    const data = response.json();
    return data; 
}
  
  type PartialUser = Partial<User>;
  type ReadonlyActivity = Readonly<Activity>;
  
  function getUserActivities(userId: number): Promise<any> {
    return fetchData(`/api/activities/${userId}`);
  }
  type ActivitiesReturnType = ReturnType<typeof getUserActivities>
  
  type AdminPermissions = { canBanUser: boolean };
  type BasicPermissions = { canEditProfile: boolean };

  type Permissions<T>  = T extends AdminPermissions ? AdminPermissions : BasicPermissions;
  
  type StringOrNumber = string | number;
  
  function logMessage(message: StringOrNumber): void {
    console.log(message);
  }
  
  function throwError(errorMsg: string): never {
     throw new Error(errorMsg);
  }
  
  function isString(value: StringOrNumber): value is string {
    return typeof value === 'string';
  }
  
  function assertIsNumber(value: any): asserts value is number {
    if (typeof value !== 'number') {
        throw new Error('Value is not a number');
    }
  }
  
  function processValue(value: StringOrNumber) {
    if (isString(value)) {
        console.log('Value is a string:', value);
    } else {
        assertIsNumber(value);
        console.log('Value is a number:', value);
    }
}
  