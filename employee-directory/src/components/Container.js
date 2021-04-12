import React from 'react'
import caret from '../assets/caret.png'
import DirectoryContainer from './DirectoryContainer'

const Container = (props) => {
    // console.log(props.list)
    return (
        <div>
             <table>
                 <tbody>
                     <tr>
                         <td>Photo</td>
                         <td>Name <button className="btn"><input type="image" src={caret} alt="caret" width="50%" onClick={props.sortNames}></input></button></td>
                         <td>Phone</td>
                         <td>Email</td>
                         <td>Date of Birth</td>
                     </tr>
                     {props.list.map(result => (
                        <tr>
                        <td><img src={result.picture.thumbnail} alt="employee"></img></td>
                        <td>{result.name.last}, {result.name.first}</td>
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
