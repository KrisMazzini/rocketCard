import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { exportComponentAsPNG, exportComponentAsJPEG } from 'react-component-export-image'

import './styles.css'

import {Card }from '../../components/Card'
import { Button } from '../../components/Button'
import { SearchProfile } from '../../components/SearchProfile'
import { users } from '../../constants/githubApi'

export function Home() {

    const [username, setUsername] = useState(null)
    const [profile, setProfile] = useState({})
    
    const cardRef = useRef()

    const exportOptions = {
        fileName: "rocketcard",
        html2CanvasOptions: {
            backgroundColor: "none"
        }
    }

    function generateBackgroundColor() {
        const elements = document.querySelectorAll(".card-container, .button, .search-profile")
        
        const rbgIndexes = [0,0,0].map(getRandomNumber)
        const backgroundColor = getRBGColor(...rbgIndexes)
        const textColor = getTextColor(...rbgIndexes)

        elements.forEach(element => {
            element.style.backgroundColor = backgroundColor
            element.style.color = textColor
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

    function getTextColor(red = 0, green = 0, blue = 0) {
        const black = '#000000'
        const white = '#ffffff'

        const backgroundInstensity = red * 0.299 + green * 0.587 + blue * 0.114
        const textColor = backgroundInstensity > 150 ? black : white

        return textColor
    }

    async function fetchGithubData() {
        try {
            const githubAPI = `${users}${username}`
            const response = await axios.get(githubAPI)
            
            setProfile(response.data)
        } catch (err) {
            setProfile({})
            console.err(err)
        }
    }

    return (
        <div className="container">
            <main>
                <p>Share your #rocketcard</p>
                <Card profile={profile} ref={cardRef} />
            </main>
            <aside>
                <p>Search GitHub profile</p>
                <SearchProfile onchange={e => setUsername(e.target.value)} onclick={fetchGithubData}/>
                <p>Customize Rocketcard</p>
                <Button key="generateBackgroundColor" text="Generate Background" onclick={generateBackgroundColor}/>
                <p>Export Rocketcard</p>
                <Button key="saveAsPNG" text="Save as PNG" onclick={() => exportComponentAsPNG(cardRef, exportOptions)}/>
                <Button key="saveAsJPEG" text="Save as JPEG" onclick={() => exportComponentAsJPEG(cardRef, exportOptions)}/>
            </aside>
        </div>
    )
}