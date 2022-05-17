const { createUser } = require('../../../services/user/user.service');

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @returns 
 */
module.exports = async function(req, res) {
    try {
        let userObj = req.body;
        await createUser(userObj);
        return res.status(200).json({message: "successfully create user"});
    } catch(e) {
        console.error(e);
        let errorStr = JSON.stringify(e, Object.getOwnPropertyNames(e));
        return res.status(500).json(e);
    }
}