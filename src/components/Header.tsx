import App from "../App";
import premierIcon from '../assets/premierIcon.png'


function Header() {

    return (
        <>
            <div className="bg-purple-900 flex justify-center p-2">
                <img src={premierIcon} alt="" className="w-56" />
            </div>
                    
        </>
    )
}

export default Header