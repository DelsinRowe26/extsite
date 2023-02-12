import React from "react"

class MenuButton extends React.Component {
    render(){
        return(
            <button className="menu_button" href={this.props.ssylka}>{this.props.btntitle}</button>
        )
    }
}

export default MenuButton