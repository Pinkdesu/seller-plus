const createUserResponse = (userData) => {
  const {
    id,
    firstName,
    secondName,
    email,
    phone,
    role,
    address,
    isActivated
  } = userData;

  return {
    id,
    firstName,
    secondName,
    email,
    phone,
    role,
    address,
    isActivated
  };
};

module.exports = createUserResponse;
