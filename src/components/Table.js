import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


export default function Table({ tbodyData }) {
    let navigate = useNavigate();
    const routeToEditOffer = (e) => {
        const id = e.target.getAttribute('data-item');
        let path = `/editOffer?id=` + id;
        navigate(path);
    }
    return (
        <table>
            <tbody>
                {tbodyData.map((row, index) => {
                    return <tr key={index} >
                        <td>
                            {
                                row.id
                            }
                        </td>
                        <td>
                            {
                                row.name
                            }
                        </td>
                        <td>
                            {
                                row.username
                            }
                        </td>
                        <td>
                            {
                                row.email
                            }
                        </td>
                        <td>
                            <button data-item={row.id} onClick={routeToEditOffer}>Edit offer</button>
                        </td>
                    </tr>;
                })}
            </tbody>
        </table>
    );
}