import { Login } from "../components/Login"
import { useConnection } from "@solana/wallet-adapter-react"
import { SpotifyContext } from "../context/context"
import { useContext } from 'react'
import HomePage from "./homepage"


export default function Home() {
    const { updateProgress, updateVolume } = useContext(SpotifyContext)

    return (
        <div>
            <audio
                id='audio-element'
                hidden
                playsInline
                onVolumeChange={e => updateVolume(e)}
                onTimeUpdate={e => updateProgress(e)}
            />
            <HomePage />
        </div>
    )
}
