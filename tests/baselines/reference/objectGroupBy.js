//// [tests/cases/compiler/objectGroupBy.ts] ////

//// [objectGroupBy.ts]
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


//// [objectGroupBy.js]
const basic = Object.groupBy([0, 2, 8], x => x < 5 ? 'small' : 'large');
const chars = Object.groupBy('a string', c => c);
var RoleEnum;
(function (RoleEnum) {
    RoleEnum[RoleEnum["IC"] = 0] = "IC";
    RoleEnum[RoleEnum["MANAGER"] = 1] = "MANAGER";
})(RoleEnum || (RoleEnum = {}));
const employees = new Set();
const byName = Object.groupBy(employees, x => x.name);
const byRole = Object.groupBy(employees, x => x.role);
const byRoleEnum = Object.groupBy(employees, x => x.roleEnum);
const byNonKey = Object.groupBy(employees, x => x);
