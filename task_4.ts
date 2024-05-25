
interface Employee {
  id: number;
  name: string;
  department: string;
  email: string;
}


type PartialEmployee = Partial<Employee>;

type ReadonlyEmployee = Readonly<Employee>;


function printEmployeeInfo(employee: PartialEmployee) {
  
  console.log('ID:', employee.id);
  console.log('Name:', employee.name);
  console.log('Department:', employee.department);
  console.log('Email:', employee.email);
}