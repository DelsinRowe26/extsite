import React from "react"

class Image extends React.Component {
    render() {
        return(
            // eslint-disable-next-line
            <img src={this.props.image} />
        )
    }
}

export default Image