const router = require("express").Router()
const User = require('../models/User.js')

const bcrypt = require('bcryptjs')

const saltRounds = 12


// const { Router as baboo } = require("express")
// const Router = baboo()

router.post('/signup', async (req, res) => {

    // username, password, repeat password
    const { username, password, passwordRepeat } = req.body

    const isPasswordTheSame = password === passwordRepeat

    if (username && password && isPasswordTheSame) {
        if (password.length < 8) {
            return res.status(400).send({ response: "Password does not fulfill the requirements." })
        } else {
            try {
                // check if username exists
                const usersFound = await User.query().select().where({ 'username': username }).limit(1) // limit -> limit is like for loop. so it will stop when it finds. so more efficient in performance.
                // do if else check if it exists and give response
                if (usersFound.length > 1) {
                    return res.status(400).send({ response: "User already exists." })
                
                } else {

                    const defaultRoles = await Role.query().select().where({ role: 'USER' }).then(roles => {

                    const hashedPassword = bcrypt.hash(password, saltRounds)

                    })
                    const createdUser = await User.query().insert({
                        username,
                        password: hashedPassword,
                        roldId: defaultRoles[0].id
                    })
                    // insert in db
                    return res.send({ response: `User has been created ${createdUser.username}` })
                }
            
            } catch {
                return res.status(500).send({ response: "Something wrong with the database. Interner Server Error." })
            }
        }
    } else if (password && passwordRepeat && !isPasswordTheSame) {
        return res.status(404).send({ response: "Passwords do not match." })
    } else {
        return res.status(404).send({ response: "Missing fields, either username, password, passwordRepeat." })
    }

})

router.post('/login', (req, res) => {

    // 1. retrieve the login details and validate
    // 2. check for a user match in db
    // 3. bcrypt compare
    // 4. sessions

    bcrypt.compare("plaintextPassword", "hashed").then((result)=> {
        console.log(result)
    })

    return res.send({ response: "Ok" })
})

router.get('/logout', (req, res) => {
    return res.send({ response: req.body })
})


module.exports = router