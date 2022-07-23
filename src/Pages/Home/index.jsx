import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { exportComponentAsPNG, exportComponentAsJPEG } from 'react-component-export-image'

import './styles.css'

import {Card }from '../../components/Card'
import { Button } from '../../components/Button'

export function Home() {

    const [profile, setProfile] = useState()

    const cardRef = useRef()

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
                {profile ? <Card profile={profile} ref={cardRef} /> : <></>}
            </main>
            <aside>
                <p>Customize Rocketcard</p>
                <Button key="generateBackgroundColor" text="Generate Background" onclick={generateBackgroundColor}/>
                <p>Export Rocketcard</p>
                <Button key="saveAsPNG" text="Save as PNG" onclick={() => exportComponentAsPNG(cardRef, "rocketcard.png")}/>
                <Button key="saveAsJPEG" text="Save as JPEG" onclick={() => exportComponentAsJPEG(cardRef, "rocketcard.jpg")}/>
            </aside>
        </div>
    )
}