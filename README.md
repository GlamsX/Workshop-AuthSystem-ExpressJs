Workshop-AuthSystem-ExpressJs


Login: {
  http://localhost:8080/auth/login
  body params (json): {
    email,
    password
  }
  On success: {
    [
      status: true,
      code: 200,
      accessToken: JWT Token
    ]
  }
  On failure: {
    Email Error: [
      status: false,
      code 201,
      msg: "email does not exist"
    ]
    Password Error: [
      status: false,
      code: 202,
      msg: "Invalid Password"
    ]
  }
}

Register: {
  http://localhost:8080/auth/register
  body params (json): {
    firstName,
    lastName,
    userName,
    email,
    password
  }
  On success: {
    [
      status: true,
      code: 100,
      msg: "New client registred"
    ]
  }
  On failure: {
    Email Error: [
      status: false,
      code: 101,
      msg: "This email is linked to an account"
    ]
  }
}

}