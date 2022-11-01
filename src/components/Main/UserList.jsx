import {useContext, useEffect, useState} from "react";
import {ErrContext} from "../../contexts/Error";
import {UserContext} from "../../contexts/User";
import {getUsersArr} from "../../utils/api";
import ErrorCard from "../ErrorCard";
import LoadingCard from "../LoadingCard";
export default function UserList() {
  const {setUser} = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [usersArr, setUsersArr] = useState([]);
  const {setErr} = useContext(ErrContext);
  const changeUserHanlder = (user) => {
    console.log(user);
    setUser(user);
  };
  useEffect(() => {
    setIsLoading(true);
    getUsersArr()
      .then(({users}) => {
        setErr(() => {
          return {msg: null};
        });

        setUsersArr(users);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setErr(() => {
          return {msg: err.response.data.msg};
        });
      });
  }, []);
  return (
    <LoadingCard isLoading={isLoading}>
      <ErrorCard />
      <ul className="ul_users">
        {usersArr.map((user, index) => {
          return (
            <figure
              key={user.username}
              className="figure_userCard"
              onClick={() => {
                changeUserHanlder(user);
              }}
            >
              <img src={user.avatar_url} alt="User avatar" />
              <figcaption>
                <p>{user.name}</p>
                <p className="grey italic">{user.username}</p>
              </figcaption>
            </figure>
          );
        })}
      </ul>
    </LoadingCard>
  );
}
