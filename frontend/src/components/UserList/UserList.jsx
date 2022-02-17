import {useEffect, useState} from "react";
import {getAllUsersList} from "api/userApi";
import Preloader from "components/common/PreLoader/Preloader";

const UserList = () => {

    const [userList, setUserList] = useState(null)
    const [loading, setLoading] = useState(false)
    useEffect(async () => {
        setLoading(true)
        const response =  await getAllUsersList()
        if (response){
            setUserList(response.data)
            setLoading(false)
        } else {
            setLoading(false)
        }
    }, [])
    return (<div>
        UserList
        {loading ? <Preloader/> : <>
            {userList ? userList.map( user=> <div>
                {user.userName}
                {user.userSurname}
            </div>) : <div>"Ошибка получания данных"</div>}
        </>}
    </div>)
}
export default  UserList;