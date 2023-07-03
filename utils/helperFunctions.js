const formatSearchOptions = (
  location,
  adults,
  child,
  babes,
  arrivalDate,
  departureDate
) => {
  let searchLocation;
  if (location === "Dhaka,Bangladesh") {
    searchLocation = {
      location,
      latLong: "23.8103,90.4125",
    };
  } else if (location === "Chottogram,Bangladesh") {
    searchLocation = {
      location,
      latLong: "22.3569,91.7832",
    };
  } else if (location === "Cox's Bazar,Bangladesh") {
    searchLocation = {
      location,
      latLong: "21.4272,92.0058",
    };
  }
  const datesOfAccommodation = {
    arrivalDate: `${arrivalDate.$d}`,
    departureDate: `${departureDate.$d}`,
  };
  const numberOfGuests = {
    adults,
    child,
    babes,
  };
  const searchOptionsObject = {
    searchLocation,
    datesOfAccommodation,
    numberOfGuests,
  };
  return searchOptionsObject;
};

export { formatSearchOptions };
