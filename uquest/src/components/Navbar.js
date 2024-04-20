import React from 'react'

export default function Navbar() {

    return (
        <div class="navbar container">
            <nav className="nav">
                <a href="/leaderboard">
                    <img class="logo" src="/images/Logo.png" alt="logo" />
                    <p>U-Quest</p>
                </a>
                <a href="/leaderboard">Leaderboard</a>
                <a href="/house">House</a>
                <a href="/league">League</a>
            </nav>
        </div>

    )


}