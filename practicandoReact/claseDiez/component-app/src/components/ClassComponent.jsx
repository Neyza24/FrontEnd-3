import React, { Component } from "react";
import Card from "./Card";

class ClassPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            id: 1,
        }
    }

    request = async () => {
        const response = await fetch(
            `https://rickandmortyapi.com/api/character/${this.state.id}`
        );

        const result = await response.json();
        this.setState({ data: result });
    };

    componentDidMount() {
        this.request();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.id !== this.state.id) {
            this.request();
        }
    }

    incrementId = (arg) => {
        if (arg === "prev") {
            this.setState((prevState) => ({ id: prevState.id - 1 }));
        } else if (arg === "next") {
            this.setState((prevState) => ({ id: prevState.id + 1 }));
        }
    }



    render() {
        return (
            <div>
                <Card image={this.state.data.image} name={this.state.data.name} incrementId={this.incrementId} title="Class Component" />
            </div>
        )
    }
}

export default ClassPage;