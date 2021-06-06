const createUserResponse = (userData) => {
  const {
    id,
    firstName,
    secondName,
    email,
    phone,
    role,
    region,
    city,
    otherAddress
  } = userData;

  return {
    id,
    firstName,
    secondName,
    email,
    phone,
    role,
    address: {
      city,
      region,
      otherAddress
    }
  };
};

module.exports = createUserResponse;
