import React from 'react'
import caret from '../assets/caret.png'

const Container = (props) => {
    return (
            <table className="wholeTable">
                <tbody>
                    <tr className="headerRow">
                        <td>Photo</td>
                        <td>Name <button className="btn"><input type="image" src={caret} className="caretBtn" alt="caret" width="50%" onClick={props.sortNames}></input></button></td>
                        <td>Phone</td>
                        <td>Email</td>
                        <td>Date of Birth</td>
                    </tr>
                    {props.list.map(result => (
                    <tr className="eachResult">
                    <td><img src={result.picture.large} alt="employee" className="empPhoto"></img></td>
                    <td>{result.name.last}, {result.name.first}</td>
                    <td>{result.phone}</td>
                    <td>{result.email}</td>
                    <td>{result.dob.date.split("T")[0]}</td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Container
