import React, { useEffect, useState } from "react"

const PolicyOverview = () => {
    const [users, setUsers] = useState([])

    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className="PageTitle">
                <h1>Policy Overview</h1>
            </div>
            <button onClick={fetchData}>Refresh policy</button>
            <div className="App">

                <div>
                    {users.length > 0 && (
                        <ul>
                            {users.map(user => (
                                <li key={user.id}>{user.name}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </>

    )
}

export default PolicyOverview
