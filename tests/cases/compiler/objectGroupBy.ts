// @target: esnext

const basic = Object.groupBy([0, 2, 8], x => x < 5 ? 'small' : 'large');

const chars = Object.groupBy('a string', c => c);

enum RoleEnum {
    IC,
    MANAGER
}

type Employee = { name: string, role: 'ic' | 'manager', roleEnum: RoleEnum };
const employees: Set<Employee> = new Set();
const byName = Object.groupBy(employees, x => x.name);
const byRole = Object.groupBy(employees, x => x.role);
const byRoleEnum = Object.groupBy(employees, x => x.roleEnum);

const byNonKey = Object.groupBy(employees, x => x);
