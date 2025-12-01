function pizzaShare(numPeople, numberOfSlices) {
  let SliceperPerson = numberOfSlices / numPeople;
  let SliceperPersonRounded = SliceperPerson.toFixed(2);
  console.log("Each person gets " + SliceperPersonRounded + " slices of pizza");
}
pizzaShare(8, 16);
pizzaShare(5, 20);
pizzaShare(7, 16);
