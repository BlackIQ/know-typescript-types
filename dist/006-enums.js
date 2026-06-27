"use strict";
// Enums
Object.defineProperty(exports, "__esModule", { value: true });
// Errors items
// - server error
// - client error
// - Wrong credentials
// - Page not found
// Unauthorized
var LoginError;
(function (LoginError) {
    LoginError["Unauthorized"] = "Unauthorized";
    LoginError["NoUser"] = "User not found";
    LoginError["WrongCred"] = "Wrong Cred";
})(LoginError || (LoginError = {}));
const printError = (error) => {
    if (error == LoginError.Unauthorized) {
        console.log("You don't have access");
    }
    else if (error == LoginError.NoUser) {
        console.log("User is not found");
    }
    else if (error == LoginError.WrongCred) {
        console.log("Username or password is wrong");
    }
    else {
        console.log("No match cases");
    }
};
printError(LoginError.Unauthorized);
printError(LoginError.NoUser);
printError(LoginError.WrongCred);
//# sourceMappingURL=006-enums.js.map