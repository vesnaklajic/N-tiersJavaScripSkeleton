module.exports = (services) => {
    const user_controller = {
        //function getAll
        getAll: async (req, res) => {
            let result = await services.user.getAll();
            res.send(result);
        },
        //function register
        register: async (req, res) => {

            //picks up an email from clients request
            const email = req.body.email;
            //picks up a password from clients reauest body
            const password = req.body.password;
            try {
                //send missing note
                if (!emai || !password) {
                    res.status(400).json("missing email or password")
                } else {
                    //register a new user with email and password
                    let result = await services.user.register([email, password]);
                    //pick up that user with ID
                    let user = await services.user.getById(result.insertId);
                    //send that user en email
                    await services.mailer.sendMail(user);
                    //returns status 201 and bon note
                    res.status(201).json('New user registered');

                }
            } catch (err) {
                res.status(400).json('Catch error')
            }
        }
    }
    return user_controller;
}