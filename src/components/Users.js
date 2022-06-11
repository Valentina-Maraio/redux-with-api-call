import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loadPosts} from '../store/user'
import {useEffect} from 'react'

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.list);

    useEffect(() => {
        dispatch(loadPosts());
    }, [dispatch]);

  return (
    <div>
        <h1>Users</h1>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} / {user.phone} 
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Users