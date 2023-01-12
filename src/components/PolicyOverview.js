import React, { useEffect, useState } from "react"
import PolicyTable from "./PolicyTable"

const PolicyOverview = () => {
    const [data, setData] = useState([])

    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setData(data)
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
                    {<PolicyTable tbodyData={data}/> }
                </div>
            </div>
        </>

    )
}

export default PolicyOverview
