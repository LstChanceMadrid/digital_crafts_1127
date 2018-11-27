import React, { Component } from 'react'

export default class Header extends Component {

	render() {
		return (
		<div className="header-container">
			<label className="logo">good<b>reads</b></label>

			<nav className="nav-container">
				<ul className="nav-list">
					<li>Home</li>

					<li>My Books</li>

					<li>Browse <i className="fa fa-caret-down"></i></li>

					<li>Community <i className="fa fa-caret-down"></i></li>

					<div  className="search-bar-container">
					<form>
						<input className="search-bar" type="text" placeholder="Search" />
						<input className="magnifying-glass" type="submit" value="   " />
					</form>
					</div>
					
					<li>Sign In</li>

					<li>Join</li>

					<i id="hamburger" className="fa fa-bars"></i>
				</ul>
			</nav>
		</div>
		)
	}
}
