export const depositMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "deposit", // Correct spelling
      payload: amount
    });
  };
};

export const withdrawMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "withdraw", // Correct spelling
      payload: amount
    });
  };
};
