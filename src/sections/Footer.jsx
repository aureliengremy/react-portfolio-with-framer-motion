import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="pt-5">
    <div className="w-5/6 mx-auto">
        <div className="md:flex justify-center md:justify-between text-center">
            <p className="font-playfair font-semibold text-2xl text-white my-10">
                AURELIEN GREMY
            </p>
        <SocialMediaIcons />
            <p className="font-playfair text-md text-white my-10">
                ©2023. All Rights Reserved
                </p>
        </div>
    </div>


    </footer>

  )
}

export default Footer