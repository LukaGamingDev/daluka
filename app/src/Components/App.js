import React, {useState} from 'react'
import Home from "./Pages/Home"
import Restarunts from "./Pages/Restaurants"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"

import { GiHamburgerMenu as HamburgerMenu } from 'react-icons/gi'

import {
    BrowserRouter as Router,
    NavLink,
    Route,
    Link,
    Switch
} from 'react-router-dom'

function NavItem({children, ...props}) {
    return (
        <li>
            <NavLink
                exact
                className="main-sidebar__item"
                activeClassName="main-sidebar__item--active"
                {...props}
            >
                {children}
            </NavLink>
        </li>
    )
}  

export default function App() {
    const [sideBarVisible, setSideBarVisible] = useState(true)

    function handleHamburgerClick() {
        setSideBarVisible(visible => !visible)
    }

    return (
        <Router>
            <div
                className={
                    `main-container ${!sideBarVisible && 'main-container--hide-sidebar'}`
                }
            >
                <header className="main-header">
                    <div className="main-header__hamburger" onClick={handleHamburgerClick}>
                        <HamburgerMenu />
                    </div>
                    <Link className="brand" to="/">
                        DaLuka Ordering
                    </Link>
                    <Link className="login blue-button" to="/login">
                        Login
                    </Link>
                </header>
                <nav className="main-sidebar">
                    <ul className="main-sidebar__list">
                        <NavItem to="/">
                            Home
                        </NavItem>
                        <NavItem to="/restaurants">
                            Restaurants
                        </NavItem>
                    </ul>
                </nav>
                <main className="main">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/restaurants" component={Restarunts}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/signup" component={Signup}/>
                    </Switch>
                </main>
            </div>  
        </Router>
    )
}
