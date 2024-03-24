exports.date = (params, req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*"); // Allow freecodecamp tests
    let date = new Date(params.date);

    if (date.toString() === "Invalid Date") {
      date = new Date(parseInt(params.date));
    }
    if (date.toString() === "Invalid Date") {
      return res.json({
        error: "Invalid Date",
      });
    } else {
      return res.json({
        unix: date.getTime(),
        utc: date.toUTCString(),
      });
    }
  } catch (error) {
    console.log(error);
    res.json({ msg: "Oops, something went wrong U.U'", err: error });
  }
};
