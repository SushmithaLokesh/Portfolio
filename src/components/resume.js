import resume from "../assets/images/resume.jpg"
function Resume()
{
    return(
    <>
    <div className="flex flex-col justify-center md:flex-row justify-around bg-blue-950 text-white" id="resume">
        <img src={resume} alt="Sushmitha" className="rounded-3xl m-14 size-96"></img>
    <div className="m-40 text-center mr-80">
        <h1 className="text-6xl font-bold mb-6">Resume</h1>
        <p className="text-xl mb-8">You can view my resume</p>
        <a href="https://drive.google.com/file/d/1rWjDMQnriWjdqFOc6RmaH0Ppo797MmT0/view?usp=sharing" target="_blank" className="rounded-md bg-black p-3 font-bold text-xl hover:border-2">Open</a>
    </div>
    </div>
    </>)
}

export default Resume