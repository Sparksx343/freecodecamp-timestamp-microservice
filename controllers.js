exports.date = (params, req, res) => {
  try {
    if (params.date.includes("-")) {
      const fecha = new Date(params.date);
      if (isNaN(fecha)) return res.json({ error: "Invalid Date" });
      const resp = {
        unix: dateToUnix(fecha),
        utc: dateToDateString(fecha),
      };
      return res.json(resp);
    } else {
      if (isNaN(new Date(unix * 1000)))
        return res.json({ error: "Invalid Date" });
      const resp = {
        unix: params.date,
        utc: unixToDate(params.date),
      };
      return res.json(resp);
    }
  } catch (error) {
    console.log(error);
    res.json({ msg: "Ha ocurrido un error", err: error });
  }
};

function dateToUnix(date) {
  return date.getTime() / 1000;
}

function dateToDateString(date) {
  return date.toDateString();
}

function unixToDate(unix) {
  const fecha = new Date(unix * 1000);
  return fecha.toDateString();
}
