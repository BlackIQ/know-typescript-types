// Enums

// Errors items
// - server error
// - client error
// - Wrong credentials
// - Page not found
// Unauthorized

enum LoginError {
  Unauthorized = "Unauthorized",
  NoUser = "User not found",
  WrongCred = "Wrong Cred",
}

const printError = (error: LoginError) => {
  if (error == LoginError.Unauthorized) {
    console.log("You don't have access");
  } else if (error == LoginError.NoUser) {
    console.log("User is not found");
  } else if (error == LoginError.WrongCred) {
    console.log("Username or password is wrong");
  } else {
    console.log("No match cases");
  }
};

printError(LoginError.Unauthorized);
printError(LoginError.NoUser);
printError(LoginError.WrongCred);
