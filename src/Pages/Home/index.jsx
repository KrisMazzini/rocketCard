import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './styles.css'

import { Card } from '../../components/Card'

export function Home() {

    const [profile, setProfile] = useState()

    useEffect(() => {
        async function fetchGithubData() {
            const githubAPI = "https://api.github.com/users/KrisMazzini"
            const response = await axios.get(githubAPI)

            setProfile(response.data)
        }

        fetchGithubData().catch(err => console.error("API not found"))
    }, [])

    return (
        <main>
            {profile ? <Card profile={profile}/> : <></>}
        </main>
    )
}