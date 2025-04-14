import CareerClientPage from "./CareerClientPage";

<<<<<<< HEAD
export const metadata = {
    title: "Careers at 72MANDC | Join India's Leading Mining & Chemical Company",
    description:"Explore exciting career opportunities at 72MANDC. Join our mission to lead India&apos;s mining industry with innovation, sustainability, and growth.",
  };
=======
const Page = () => {
    const form = useRef();
    const [fileBase64, setFileBase64] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setFileBase64(reader.result); // base64 string
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_3k09epe",
            "template_qx6qf4v",
            form.current,
            "QnwRj8gbpAP_wSM-B"
        )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Message sent successfully ✅");
                },
                (error) => {
                    console.log(error.text);
                    alert("Oops! Something went wrong ❌");
                }
            );
    };

    return (
        <div>
            <div className="flex justify-center flex-col items-center gap-12">
                <div className="contact_section h-[85vh] w-full bg-[url('../public/career/career_page.jpg')] bg-cover bg-center relative p-34">
                    <div className="absolute text-white flex flex-col gap-3 left-0 bottom-0 p-24 w-[60%] max-xl:w-[80%] max-md:p-10">
                        <h1 className='text-4xl font-bold'>Career in 72MANDC</h1>
                        <p>We are forever seeking candidates who are energetic, focussed and have set out to achieve new milestones in their careers</p>
                        <Link to="aboutSection" smooth={true} duration={600}>
                            <button type="button" className="flex items-center gap-3 text-white font-semibold w-38 bg-gradient-to-r from-teal-600 to-lime-600 hover:bg-gradient-to-l hover:from-teal-600 hover:to-lime-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">
                                <span>Know More.</span>
                                <Image src="/downarrow.svg" alt="" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <Element name="aboutSection">
            <div className="about w-full bg-gradient-to-b from-[#fcf7ea] to-[#fff] py-22 px-14 flex flex-col justify-center gap-34">
                <div className="health flex justify-between w-[85vw] max-xl:flex-col max-xl:gap-8 max-xl:items-center">
                    <div className="content flex jsutify-center items-center gap-5 flex-col w-[40vw] max-xl:w-[85vw] mx-auto">
                        <h3 className="font-semibold text-xl">Why</h3>
                        <h1 className="font-[800] text-4xl bg-gradient-to-r from-[#407050] via-[#76702c] to-[#b99d4ab0] text-transparent bg-clip-text inline-block text-center">Work with us</h1>
                        <div className='mt-3'>
                            <ul className='list-disc flex flex-col gap-5 mt-5 items-start'>
                                <li>We want you to bring your diligence, commitment, and creative thinking to this place. You can have a challenging, flexible, and exciting career at 72MANDC that leads you in the direction you desire.</li>
                                <li>We are dedicated to creating a welcoming environment where people can be genuine. We want our staff to believe that all opinions are valued, all cultures are respected, and that different points of view are not only acceptable but also crucial to our success</li>
                                <li>Regardless of race, gender, nationality, ethnicity, religion, age, sexual orientation, or anything else that distinguishes us from one another, we treat one another equally and with decency.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-[448px] max-md:w-full">
                        <Image className="rounded-lg" src="/career/photo_1.png" alt="" />
                    </div>
                </div>

            </div>
            </Element>


            <div className='contact-section w-[90vw] bg-[#fdfaf3] rounded-lg flex justify-center items-center mx-auto py-12'>

                <div className="contact-details flex justify-between items-center w-full py-18 px-22 max-lg:flex-col max-lg:gap-12 max-lg:px-10">
                    <div className="left w-[30%] flex flex-col gap-8 justify-center max-lg:w-full">
                        <div>
                            <Image src="/career/photo_2.png" alt="" />
                        </div>
                    </div>

                    <div className="right w-[45vw] flex flex-col gap-4 max-lg:w-[70vw]">
                        <div>
                            <h2 className='text-2xl'>Send Us A Message</h2>
                            <p>If your question isn&apos;t answered here, or elsewhere on this site, please send us a message. We will contact you soon.</p>
                        </div>
                        <form ref={form} onSubmit={sendEmail} action="" className='flex flex-col flex-wrap gap-4'>
                            <div className='flex gap-6 justify-between w-full max-lg:flex-wrap'>
                                <input className='py-3 px-5 rounded-lg bg-[#ece5cd] w-full outline-none max-lg:w-full' type="text" placeholder='Enter your name' name='user_name' required />
                            </div>
                            <div className='flex gap-6 justify-between w-full max-lg:flex-wrap'>
                                <input className='py-3 px-5 rounded-lg bg-[#ece5cd] w-[48%] outline-none max-lg:w-full' name='user_phone' type="number" placeholder='Enter your phone number' required />
                                <input className='py-3 px-5 rounded-lg bg-[#ece5cd] w-[48%] outline-none max-lg:w-full' name='user_email' type="email" placeholder='Enter your email' required />
                            </div>
                            <textarea className='py-3 px-5 rounded-lg bg-[#ece5cd] w-full h-32 resize-none outline-none' name="message" id="" placeholder='Enter your message' required></textarea>
                            <div className='bg-[#c7a74a] flex items-center gap-3 text-white w-fit px-5 py-3 rounded-lg cursor-pointer'>
                                <Image src="/career/upload.svg" alt="" />
                                <label htmlFor="file-upload">Upload Resume: </label>
                                <input type="file" onChange={handleFileChange} />
                                <input type="hidden" name="file_base64" value={fileBase64} />
                            </div>
                            <input className='bg-[#c7a74a] text-white w-fit px-8 py-3 rounded-lg cursor-pointer' type="submit" value={"Submit"} />
                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Page
>>>>>>> c167869257f66ad499e98f9842ea635bf6e1ee93

export default function CareerPage() {
    return <CareerClientPage />;
  }