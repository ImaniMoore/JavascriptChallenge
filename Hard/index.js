function createPatient(name, ssn) {
  let PII = {
    name: name,
    ssn: ssn,
  };
  return {
    getName() {
      return PII.name;
    },
  };
}
const patient = createPatient("Imani Moore", 987654321);
console.log(patient.getName());
console.log(patient.PII);
console.log(patient.getSSN);
