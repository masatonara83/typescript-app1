/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useState } from "react"
import { User } from "../types/api/user";
import {UseMessage} from './useMassage'

export const useAllUsers = () => {
  const  {showMessage} = UseMessage();
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<Array<User>>([]);

  const getUsers = useCallback(() => {
    setLoading(true)
    axios.get<Array<User>>("http://localhost:8080/api/v1/users_manegement/")
    .then((res) => {
      console.log(res.data)
      setUsers(res.data)
    })
    .catch(() => {
      
      showMessage({title: "ユーザー取得に失敗しました", status: "error"})
    }).finally(() => setLoading(false));
  }, [])
  return {getUsers, loading, users}
}