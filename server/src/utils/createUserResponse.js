const createUserResponse = (userData) => {
  const {
    id,
    firstName,
    secondName,
    email,
    phone,
    role,
    address
  } = userData;

  return {
    id,
    firstName,
    secondName,
    email,
    phone,
    role,
    address
  };
};

module.exports = createUserResponse;
