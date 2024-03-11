import { User } from "../model/user.js";

export const login = async (req, res) => {
    const { email, password } = req.body;



    try {
        if (!email || !password) {
            throw new Error;
        }


        const user = await User.create({ email, password });
        return res.json({ "message": "User created successfully", status: 200, data: user });
    } catch (error) {
        return res.json({ "message": "Error", status: 404, data: null });

    }




}