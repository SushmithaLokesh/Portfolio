import loki from "../assets/images/loki.jpg"
function About()
{
    return(
    <>
    <div className="flex flex-col  md:flex-row  bg-blue-950 text-white" id="about">
        <img src={loki} alt="Sushmitha" className="rounded-3xl m-8 size-96"></img>
    <div className="m-14">
        <h1 className="text-6xl font-bold mb-6">About Me</h1>
        <p className="text-xl">Welcome to my portfolio!! Hello, I'm Sushmitha, a passionate MERN stack developer passionate about crafting engaging web experiences. I recently completed my comprehensive training at Error Makes Clever Academy, where I honed my skills in crafting dynamic web applications using technologies to build full-stack web applications like MongoDB, Express.js, React.js, and Node.js, I bring creativity, dedication, and a thirst for learning to every project I undertake. My proficiency extends to database management, where I've demonstrated expertise in MongoDB for efficient data storage and retrieval. I thrive on challenges, constantly seeking out opportunities to learn and grow in this dynamic field. As I embark on creating my portfolio website, I'm excited to showcase my skills, projects, and enthusiasm for building innovative digital solutions. Let's connect and bring your ideas to life together!</p>
    </div>
    </div>
    </>)
}

export default About