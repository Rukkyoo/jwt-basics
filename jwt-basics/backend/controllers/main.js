/* import CustomAPIError from "../errors/custom-error.js"; */

export const login = async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password)
    if (!username || !password) {
        return res.status(400).json({msg: `Please provide email and password`})
        /* throw new CustomAPIError("Please provide email and password", 400) */
    }
    res.send("Fake Login/Register/Signup Route");
  };
  
  export const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100);
    res
      .status(200)
      .json({
        msg: `Hello, John Doe`,
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
      });
  };
  