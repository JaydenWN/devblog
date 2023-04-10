import landingImg from '../assets/landingpageimg.png'
import LANDINGCSS from './styles/landingModal.module.css'


function LandingModal(){
    
    return(
        <div className={LANDINGCSS.landingModal}>
            <div className={LANDINGCSS.modalImg}> </div>
            <div className={LANDINGCSS.landingModalContent}>
                <div className="callToAction">
                    <h1>Jaydens Dev Log</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita fugiat ea aspernatur dolorum quasi laboriosam soluta laudantium recusandae vel suscipit eveniet, voluptates doloremque facilis quibusdam iure mollitia quod provident, obcaecati molestias. At reiciendis, nulla amet, libero aspernatur nisi quas fugiat esse sit accusantium provident consequatur numquam natus possimus. Tempore eaque illo delectus temporibus distinctio architecto minima modi iusto inventore porro!</p>
                    <button>Contact Me</button>
                </div>
                <div className="blogPosts"></div>
            </div>
        </div>
        
    )
}
export default LandingModal