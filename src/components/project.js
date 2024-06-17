import hotel from "../assets/images/hotel.jpg"
import shop from "../assets/images/shop.jpg"
import dress from "../assets/images/dress.jpg"
function Project()
{
    return(
    <>
    <div className="bg-blue-950 text-white text-center" id="project">
    <div>
        <h1 className="font-extrabold text-4xl">Projects</h1>
        <p className="p-8">These are some of my projects. I built them using the MERN stack, React.js, Tailwind CSS, JavaScript, and other technologies.</p>
    </div>
    <div className="flex flex-col md:flex-row bg-blue-950 justify-evenly">
        <div className="relative">
            <img src={hotel} alt="" className="h-60 w-96 ml-12"/>
            <div className="absolute left-12 right-0 text-white bottom-0 top-0 bg-blue-500 opacity-0 duration-500 hover:opacity-90">
                <p className="text-center p-16 font-medium">Resturant E-commerce Website.</p>
                <a href="https://sushmithalokesh.github.io/Resturant/" className="bg-black text-white p-2 rounded-md" target="_blank">View Projects</a>
            </div>
        </div>
        <div className="relative">
            <img src={shop} alt="" className="h-60 w-96 ml-12"/>
            <div className="absolute left-12 right-0 text-white bottom-0 top-0 bg-blue-500 opacity-0 duration-500 hover:opacity-90">
                <p className="text-center p-16 font-medium">Shop E-commerce Website.</p>   
                <a href="https://primecart-frontend.onrender.com/" className="bg-black text-white p-2 rounded-md" target="_blank">View Projects</a>
            </div>
        </div>
        <div className="relative">
            <img src={dress} alt="" className="h-60 w-96 ml-12"/>
            <div className="absolute left-12 right-0 text-white bottom-0 top-0 bg-blue-500 opacity-0 duration-500 hover:opacity-90">
                <p className="text-center p-16 font-medium">Dress E-commerce Website.</p>   
                <a href="https://sushmithalokesh.github.io/Nostra-Project/" className="bg-black text-white p-2 rounded-md" target="_blank">View Projects</a>
            </div>
        </div>
    </div>
    </div>
    </>)
}

export default Project