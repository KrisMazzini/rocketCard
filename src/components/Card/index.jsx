import './styles.css'
import { ProfileData } from '../ProfileData'

import React from 'react'

export const Card = React.forwardRef((props, ref) => {

    const {profile} = props

    return (
        <div className="card-container" ref={ref}>
            <div className="card">
                <header>
                    <div className="logo-container">
                        <img src="/logo.svg" alt="logo" className='logo'/>
                    </div>
                    <h1>{profile.login || "username"}</h1>
                </header>
                <img src={profile.avatar_url || "/user.svg"} alt="avatar" className="avatar" />
                <div className="profile-data-container">
                    <ProfileData key="followers" icon="/followers.svg" text={`${profile.followers || 0} followers`} />
                    <ProfileData key="following" icon="/following.svg" text={`${profile.following || 0} following`} />
                    <ProfileData key="repos" icon="/repository.svg" text={`${profile.public_repos || 0} repos`} />
                    <ProfileData key="company" icon="/company.svg" text={`@${profile.company || ""}`} />
                    <ProfileData key="location" icon="location.svg" text={profile.location || ""} />
                </div>
                <footer>
                    <img src="/logo.svg" alt="logo" className='logo' />
                    <h2>Rocketcard</h2>
                </footer>
            </div>
        </div>
    )
})