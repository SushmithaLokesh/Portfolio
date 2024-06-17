import sush from "../assets/images/sush.jpg"
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { MdMailOutline } from "react-icons/md";

function Home()
{
    return(
    <div className="bg-blue-950 text-white text-2xl flex flex-col md:flex-row justify-between" id="home">
        <h1 className="text-5xl p-28">Hi,<br /> I am Sushmitha Raja <br />
        <p className="text-3xl"> <br />I'm a MERN Stack Developer</p> <br />
        <div className="flex gap-10">
        <a href="https://mail.google.com" target="_blank" type="mail"><MdMailOutline/></a>
        <a href="https://www.linkedin.com/public-profile/settings" target="_blank"><AiOutlineLinkedin/></a>
        <a href="https://github.com/SushmithaLokesh" target="_blank"><AiOutlineGithub/></a>
        </div></h1>
        <img src={sush} alt="Sushmitha" className="rounded-full m-12"></img>
    </div>)
}

export default Home