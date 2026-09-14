module.exports = (req, res) => {
  const greeting = process.env.SITE_GREETING;
  res.status(200).json({
    greeting: greeting || null,
    set: Boolean(greeting),
  });
};
