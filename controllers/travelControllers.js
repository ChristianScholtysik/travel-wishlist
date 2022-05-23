const countries = [
  {
    id: 1,
    name: "Bhutan",
    alpha2Code: "BT",
    alpha3Code: "BTN",
  },
  {
    id: 2,
    name: "United States of America ",
    alpha2Code: "US",
    alpha3Code: "USA",
  },
  { id: 3, name: " Afghanistan", alpha2Code: "AF", alpha3Code: "AFG" },
];

export const getAllCountries = (req, res) => {
  res.status(200).json(countries);
};

export const getSingleCountry = (req, res) => {
  console.log(req.params.alphaXCode.length);
  let findCountry;
  if (req.params.alphaXCode.length === 2) {
    findCountry = countries.find(
      (country) => country.alpha2Code == req.params.alphaXCode
    );
    res.status(200).json(findCountry);
  } else if (req.params.alphaXCode.length === 3) {
    findCountry = countries.find(
      (country) => country.alpha3Code == req.params.alphaXCode
    );
    res.status(200).json(findCountry);
  } else {
    res.status(400).send("Country not in database");
  }
};

export const addNewCountry = (req, res) => {
  const newCountry = {
    id: req.body.id,
    name: req.body.name,
    alpha2Code: req.body.alpha2Code,
    alpha3Code: req.body.alpha3Code,
  };
  countries.push(newCountry);
  res.status(201).json(newCountry);
};

export const editCountry = (req, res) => {
  const findCountry = countries.find(
    (country) => country.alpha2Code == req.params.alpha2Code
  );

  if (findCountry) {
    findCountry.name = req.body.name;
    findCountry.alpha2Code = req.body.alpha2Code;
    findCountry.alpha3Code = req.body.alpha3Code;
    res.status(200).send(findCountry);
  } else {
    res.status(400).send("Country not found");
  }
};

export const deleteCountry = (req, res) => {
  const findCountry = countries.find(
    (country) => country.alpha2Code == req.params.alpha2Code
  );
  const index = countries.indexOf(findCountry);
  if (findCountry) {
    countries.splice(index, 1);
    res.status(200).send("Country deleted");
  } else {
    res.status(400).send("Country not found");
  }
};
