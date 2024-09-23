const jwt = require('jsonwebtoken');

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).send("Invalid credentials");
  }
  const token = jwt.sign({ id: user._id }, "yourSecretKey", { expiresIn: "1h" });
  res.json({ token });
});

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ msg: "No token provided" });
  jwt.verify(token, "yourSecretKey", (err, decoded) => {
    if (err) return res.status(401).json({ msg: "Token is not valid" });
    req.user = decoded.id;
    next();
  });
};

app.get("/dashboard", verifyToken, (req, res) => {
  res.json({ msg: "Welcome to the dashboard" });
});
