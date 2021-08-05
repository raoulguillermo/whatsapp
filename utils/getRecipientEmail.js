const getRecipientEmail = (users, userLoggedin) => {
  return users?.filter(
    (userToFilter) => userToFilter !== userLoggedin?.email
  )[0];
};

export default getRecipientEmail;
