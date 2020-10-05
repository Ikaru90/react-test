import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from './store';

export const UserData = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = React.useState('Ikaru90');
  const userData = useSelector((state) => (state.userData));

  const fetchUserData = () => {
    dispatch(getUserData(userName));
  };

  const handleChangeUserName = (event) => {
    setUserName(event.target.value);
  };

  React.useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <div>
        <input name="userName" value={userName} onChange={handleChangeUserName} />
        <button type="button" onClick={fetchUserData}>Fetch</button>
      </div>
      {userData && (
        <div>
          <span>
            name:
            {userData.name}
          </span>
          <br />
          <span>
            public repos:
            {userData.public_repos}
          </span>
        </div>
      )}
    </>
  );
};
