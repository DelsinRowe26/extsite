import React from "react"
import MenuButton from "./MenuButton"

class Header extends React.Component {
    render() {
        return(
            <header className="header">{this.props.title}
                <li><MenuButton ssylka="#" btntitle="Главная" /></li>
                <li><MenuButton ssylka="#" btntitle="Новости" /></li>
                <li><MenuButton ssylka="#" btntitle="Контакты" /></li>
                <li><MenuButton ssylka="#" btntitle="О нас" /></li>
            </header>
        )
    }
}

export default Header