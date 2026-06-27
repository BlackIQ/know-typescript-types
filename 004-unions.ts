// Unions

// In previus lesson we learned types for many fields (interfaces)
// And now time to know type for one variable
type UUID = string | number;

// Now this function gets an ID that is union of UUID
// It can be string or number
const printID = (id: UUID): void => {
  console.log(id);
};

// Passing numberID and stringID
printID(123456789);
printID("ABCDEFG");
