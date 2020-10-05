export const FETCH_USER_DATA = 'FETCH_USER_DATA';

export const getUserData = (userName) => async (dispatch) => {
  const userData = await fetch(`https://api.github.com/users/${userName}`).then(
    (response) => {
      if (response.status !== 200) {
        return null;
      }
      return response.json();
    },
    () => null,
  );

  dispatch({
    type: FETCH_USER_DATA,
    payload: userData,
  });
};
