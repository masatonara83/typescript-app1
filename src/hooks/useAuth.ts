import axios from "axios";
import { useCallback, useState } from "react"
import { useHistory } from "react-router-dom";
import { User } from "../types/api/user";
import { useLoginUser } from "./useLoginUser";
import { UseMessage } from "./useMassage";

export const UseAuth = () => {
  const history = useHistory();
  const {showMessage} = UseMessage();
  const {setLoginUser} = useLoginUser();

  const [loading, setLoading] = useState(false);

  const login = useCallback((id: string) => {
    setLoading(true);
    axios.get<User>(`http://localhost:8080/api/v1/users_manegement/${id}`).then((res) => {
      if (res.data){
        const isAdmin = res.data.id === 10 ? true : false;
        setLoginUser({...res.data, isAdmin});
        showMessage({title: "ログインしました", status: "success"});
        history.push("/home");
      } else {
        showMessage({title: "ユーザーが見つかりません", status: "error"});
        setLoading(false);
      }
    }).catch(() => {
      showMessage({title: "ログインできません", status: "error"});
      setLoading(false);
    });
  }, [history, showMessage, setLoginUser]);
  return {login, loading}
};