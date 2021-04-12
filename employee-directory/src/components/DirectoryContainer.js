import React, { Component } from "react"
import API from "../utils/API"
import Container from "./Container"

class DirectoryContainer extends Component {
    state = {
        image:"",
        name: "",
        phone: "",
        email: "",
        dob: "",
        results: []
    }

    //when component mounts, get all employees
    componentDidMount() {
        this.renderList()
    }

    renderList = () => {
        API.search()
        .then(res => {
            this.setState({
                image: res.data.results[0].picture.thumbnail,
                name: res.data.results[0].name.first +" "+res.data.results[0].name.last,
                phone: res.data.results[0].phone,
                email: res.data.results[0].email,
                dob: res.data.results[0].dob.date,
                results: res.data.results
            })
        })
    }

    render() {
        return (
            <div>
                <Container
                image={this.state.image} 
                name={this.state.name} 
                phone={this.state.phone} 
                email={this.state.email} 
                dob={this.state.dob} 
                results={this.state.results}/>
            </div>
        )
    }
}

export default DirectoryContainer