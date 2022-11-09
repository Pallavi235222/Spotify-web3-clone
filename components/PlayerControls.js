import Image from 'next/image'
import next from '../assets/next.svg'
import previous from '../assets/previous.svg'
import speaker from '../assets/speaker.svg'
import repeat from '../assets/repeat.svg'
import shuffle from '../assets/shuffle.svg'
import playRounded from '../assets/playRounded.svg'
import pauseIcon from '../assets/pause.svg'
import { useContext } from 'react'
import { SpotifyContext } from '../context/context'

const styles = {
    albumCoverContainer: `w-20 h-20 mr-3`,
    mainControl: `fixed bottom-0 left-0 py-3 p-5 pr-10 w-screen bg-[#242424] z-40 flex items-center justify-between`,
    flexCenter: `flex items-center`,
    controlIcon: `mr-5 cursor-pointer hover:opacity-100 opacity-50`,
    controlIconsContainer: `flex items-center justify-center mb-2`,
    playIcon:`mr-5 w-10 cursor-pointer hover:opacity-50`,
    controlIconsContainer:`flex items-center justify-center mb-2`,
    playIcon:`mr-5 w-10 cursor-pointer hover:opacity-50`,
    pauseIconStyle: `mt-3 w-10 h-10 cursor-pointer hover:opacity-50`,
    coverPhoto:` object-cover`,
}

const PlayerControls = ({songs}) => {
    const {
        currentSong,
        isPlaying,
        volume,
        onVolumeChange,
        timestamp,
        progress,
        playNext,
        playPrevious,
        isPaused,
        play,
        pause,
        onProgressChange,
    } = useContext(SpotifyContext)

    if(!isPlaying) return null


    return (
        <div className={styles.mainControl}>
            <div className={styles.flexCenter}>
                <div className={styles.albumCoverContainer}>
                    <Image
                        src='https://images.unsplash.com/photo-1611339555312-e607c8352fd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZ28lMjBmb3IlMjBzcG90aWZ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                        height={200}
                        width={200}
                        alt='song-cover'
                    />
                </div>
                <div>
                    <p>{currentSong.title}</p>
                    <p className='opacity-50'>artist</p>
                </div>
                <div>
                    <div className={styles.controlIconsContainer}>
                        <div className={styles.controlIcon}>
                            <Image src={shuffle} alt='shuffle' />
                        </div>
                        <div onClick = {e => playPrevious(songs)} className={styles.controlIcon}>
                            <Image src={previous} alt='prev' />
                        </div>
                        {isPaused ? <div className={styles.playIcon} onClick={play} ><Image src={playRounded} alt="play" /> </div> : <div className={styles.pauseIcon} onClick={pause}> <Image src={pauseIcon} alt='pause'/> </div> }
                        <div onClick={e => playNext(songs)} className={styles.controlIcon}>
                            <Image src={next} alt='next' />
                        </div>
                        <div className={styles.controlIcon}>
                            <Image src={repeat} alt='repeat' />
                        </div>
                </div>
                <div className={styles.flexCenter}>
                    <small>{timestamp}</small>
                    <input
                        value={progress}
                        type='range'
                        onChange={e=> onProgressChange(e)}
                        className={styles.range}
                    />
                    <small>2:43</small>
                </div>
            </div>

            <div>
                <div className={styles.flexCenter}>
                    <Image src={speaker} alt='speaker' />
                    <input
                    value = {volume}
                    onChange = {e => onVolumeChange(e)}
                    type='range'
                    id='volume-range'
                    />
                </div>
            </div>
        </div>
    </div>
    )
}

export default PlayerControls