app.post("/logFood", verifyToken, async (req, res) => {
  const { foodItem, calories } = req.body;
  const newLog = new FoodLog({
    userId: req.user.id,
    foodItem,
    calories
  });
  await newLog.save();
  res.json(newLog);
});
