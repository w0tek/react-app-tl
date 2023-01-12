export default function Table({ tbodyData }) {
    return (
        <table>
            <tbody>
                {tbodyData.map((row, index) => {
                    return <tr key={index}>
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
                    </tr>;
                })}
            </tbody>
        </table>
    );
}