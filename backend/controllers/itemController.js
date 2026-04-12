exports.getItems = (req, res) => {
  try {
    return res.status(200).json({
      message: "Get Items Working"
    });
  } catch (error) {
    return res.status(500).json({
      message: "Items error"
    });
  }
};

exports.createItem = (req, res) => {
  try {
    return res.status(200).json({
      message: "Create Item Working"
    });
  } catch (error) {
    return res.status(500).json({
      message: "Create error"
    });
  }
};