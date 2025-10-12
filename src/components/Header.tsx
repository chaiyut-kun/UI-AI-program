import premierIcon from '../assets/premierIcon.png'


function Header() {

    return (
        <>
            <div className="bg-purple-900 flex justify-center p-4">
                <img src={premierIcon} alt="" 
                className="w-56 transition delay-75 duration-300 hover:translate-y-3 hover:scale-200 hover:drop-shadow-purple-800" />
            </div>
                    
        </>
    )
}

export default Header