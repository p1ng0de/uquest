import React from 'react'

export default function Navbar() {

    return (
        <div className="nav">
            <a href="/leaderboard">
                <img id="logo" src="/images/Logo.png" alt="logo" />
            </a>
            <a href="/leaderboard">
                <p id="title">U-Quest</p>
            </a>
            <div id="spacer"></div>
            <div class="page-container">
                <a href="/leaderboard" class="page">Leaderboard</a>
                <a href="/house" class="page">House</a>
                <a href="/league" class="page">League</a>
            </div>
            <img id="logo" src="/images/Logo.png" alt="logo" />
        </div>

    )


}