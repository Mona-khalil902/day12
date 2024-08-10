import victor from '../../assets/images/victor.jpg'
import './Mainavater.css'

function Mainavater() {
    return (
        <div id='container'>
            <div className='bachgrDiv'></div>
            <div id='VictorDiv'>
                <div className='information'>
                    <div className='victorImage'>
                        <img src={victor} className='imagesize' />
                    </div>
                    <div className='Text'>
                        <label>Victor Crest </label>
                        <span>26</span>
                    </div>
                    <span>London</span>
                </div>
                <div className='hrline'></div>
                <div className='peoplewatches'>
                    <div className='Followers '>
                        <label>80K</label>
                        <span>Followers </span>
                    </div>
                    <div className='Likes'>
                        <label>803K</label>
                        <span>Likes</span>
                    </div>
                    <div className='Photos'>
                        <label>1.4K </label>
                        <span>Photos</span>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Mainavater