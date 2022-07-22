import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './styles.css'

import { Card } from '../../components/Card'
import { Button } from '../../components/Button'

export function Home() {

    const [profile, setProfile] = useState()

    function generateBackgroundColor() {
        const elements = document.querySelectorAll(".card-container, .button")
        
        const rbgIndexes = [0,0,0].map(getRandomNumber)
        const backgroundColor = getRBGColor(...rbgIndexes)

        elements.forEach(element => {
            element.style.backgroundColor = backgroundColor
        })
    }

    function getRBGColor(red = 0, green = 0, blue = 0) {
        const color = `rgb(${red}, ${green}, ${blue})`
        return color
    }

    function getRandomNumber() {
        const randomNumber = Math.round(Math.random() * 255)
        return randomNumber
    }

    useEffect(() => {
        async function fetchGithubData() {
            const githubAPI = "https://api.github.com/users/KrisMazzini"
            const response = await axios.get(githubAPI)

            setProfile(response.data)
        }

        fetchGithubData().catch(err => console.error("API not found"))
    }, [])

    return (
        <div className="container">
            <main>
                <p>Share your #rocketcard</p>
                <div className="card-container">
                    {profile ? <Card profile={profile}/> : <></>}
                </div>
            </main>
            <aside>
                <p>Customize Rocketcard</p>
                <Button key="generateBackgroundColor" text="Generate Background" onclick={generateBackgroundColor}/>
            </aside>
        </div>
    )
}