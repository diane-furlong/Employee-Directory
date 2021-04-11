import React, { Component } from "react"
import API from "../utils/API"

class DirectoryContainer extends Component {
    state = {
        image:"",
        name: "",
        phone: "",
        email: "",
        dob: ""
    }

    componentDidMount() {
        API.search
            (res => this.setState({ 
                image: res.results.picture.thumbnail, 
                name: res.results.name.first + res.results.name.last 
            }))
    }

    render() {
        return (
            this.componentDidMount
        )
    }
}

export default DirectoryContainer