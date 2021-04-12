import React from 'react'

const Container = (props) => {
    // console.log(props.results)
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Photo</td>
                        <td>Name <img src="../assets/caret.png" alt="caret"></img></td>
                        <td>Phone</td>
                        <td>Email</td>
                        <td>Date of Birth</td>
                    </tr>
                    {props.results.map(result => (
                        <tr>
                        <td><img src={result.picture.thumbnail} alt="employee"></img></td>
                        <td>{result.name.first} {result.name.last}</td>
                        <td>{result.phone}</td>
                        <td>{result.email}</td>
                        <td>{result.dob.date}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Container
