import React, {useState, useEffect} from 'react'

const Filter = ({ emps, updateEmps }) => {
    const [filter, setFilter] = useState("")

    useEffect(() => {
        const filtered =  filter === "" ? emps : emps.filter (
            ({
                name: { first, last }
            }) => first.toLowerCase().indexOf(filter.toLowerCase()) >= 0 || last.toLowerCase().indexOf(filter.toLowerCase()) >= 0
        )
        updateEmps(filtered)
    }, [filter, emps])

    function filterFunct(event) {
        setFilter(event.target.value)
    }

    return (
        <input value={filter} onChange={filterFunct} placeholder="Start typing to search"></input>
    )
}

export default Filter
