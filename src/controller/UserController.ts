import { Request, Response } from "express";
import { User } from "../model/User";

export function loginUser(req: Request, res: Response) {
  const requestUsername = req.body.username;
  const requestPassword = req.body.password;

  const getUserPromise = User.findOne({
    where: { username: requestUsername }
  })

  //We will need some hashing in this b**ch soon

  getUserPromise
    .then(userObject => {
      if (userObject == null) {
        res.status(409).send({
          message: "Username does not exist.",
          status: false
        })
      } else {
        if (userObject.password === requestPassword) {
          res.status(200).send({
            message: "User information correct.",
            status: true
          })
        } else {
          res.status(422).send({
            message: "Username or password is not correct.",
            status: false
          })
        }
      }
    })
    .catch(err => {
      console.log(Date.now() + "[LoginUser] - Failed while retrieving user: ", err)
      res.status(500).send({
        message: err,
        status: false
      })
    })
}

export function signupUser(req: Request, res: Response) {
  const requestUsername = req.body.username;
  const requestPassword = req.body.password;

  const getUserPromise = User.findOne({
    where: { username: requestUsername }
  })

  //We will need some hashing in this b**ch soon

  getUserPromise
    .then(userObject => {
      if (userObject != null) {
        res.status(409).send({
          message: "User already exists",
          status: false
        })
      } else {
        if (requestPassword.length < 8) {
          res.status(409).send({
            message: "Password too short",
            status: false
          })
        } else {
          const newUser = User.build({username: requestUsername, password: requestPassword})
          newUser.save();
          res.status(200).send({
            message: "User created.",
            status: true
          })
        }
      }
    })
    .catch(err => {
      console.log(Date.now() + "[SignupUser] - Failed while retrieving user: ", err)
      res.status(500).send({
        message: err,
        status: false
      })
    })
}
