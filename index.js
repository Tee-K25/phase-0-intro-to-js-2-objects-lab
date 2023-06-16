// Write your solution in this file!
let employee = {
  name: "Sam",
  streetAddress: "747 Boeing street",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  var updatedEmployee = { ...employee };
  updatedEmployee[key] = value;
  return updatedEmployee;
}
var updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Sam");

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
}
destructivelyUpdateEmployeeWithKeyAndValue(
  employee,
  "streetAddress",
  "12 Broadway"
);
function deleteFromEmployeeByKey(employee, key) {
  var newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}
deleteFromEmployeeByKey(employee, "name");

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  let newEmployee = delete employee[key];
  return newEmployee;
}
