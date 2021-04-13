import React, { useState, useEffect } from "react"
import API from "../utils/API"
import Container from "./Container"
import Filter from "./Filter"
import '../index.css';

function DirectoryContainer() {
    const [employees, setEmployees] = useState([])
    const [employeeRender, updateRender] = useState([])

    useEffect(() => {
        renderEmployees()
    }, [])


    function renderEmployees() {
        API.search()
        .then(res => {
            setEmployees(res.data.results)
        })
    }


    function sortNames() {
        const sorted = employees.sort( function(name1, name2){
            if(name1.name.last < name2.name.last){
                return -1
            }
            if(name1.name.last > name2.name.last){
                return 1
            }
            return 0
        })
        setEmployees([...sorted])
    }


    return (
        <div>
            <p>Search employees:</p>
            <Filter emps={employees} updateEmps={updateRender}></Filter>
            <br/><br/>
            <Container list={employeeRender} sortNames={sortNames}></Container>
        </div>
    )
}

export default DirectoryContainer