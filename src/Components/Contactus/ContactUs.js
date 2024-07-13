import React from 'react'
import { Link } from 'react-scroll'
import {  FaLinkedinIn,FaFacebookSquare,FaInstagramSquare } from 'react-icons/fa';
const ContactUs = () => {
  return (
    <div name="contactus" className="pt-24 w-full min-h-screen h-full bg-black">
            <h2 class="w-full mb-24 text-5xl font-bold leading-tight text-center text-white ">
            Get in Touch
            </h2>
            
     
        <div className=" space-y-6 text-center text-white">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"></h2>
          <div className="space-y-4">
            <div className="flex flex-col items-center gap-16">
              <div className="text-5xl font-semibold">Cravimoor</div>
              <div className="text-muted-foreground text-4xl">
                <span className="font-bold">Loacation:</span> sahloul 4 , Sousse,Tunisia
              </div>
              <div className="text-muted-foreground text-4xl">
                <span className="font-bold">Email:</span> contact@Cravimoor.com
              </div>
              <div className="text-muted-foreground text-4xl">
                <span className="font-bold">Phone:</span> +216 52 993 317
              </div>
              <div className="flex text-4xl items-center gap-2 text-muted-foreground">
                <span className="font-bold">Social:</span>
                <Link href="#" className="hover:text-primary" prefetch={false}>
                <FaInstagramSquare color='rgb(185 28 28)' size={40} />
                </Link>
                <Link href="#" className="hover:text-primary" prefetch={false}>
                <FaFacebookSquare color='rgb(185 28 28)' size={40} />
                </Link>
                <Link href="#" className="hover:text-primary" prefetch={false}>
                < FaLinkedinIn color='rgb(185 28 28)' size={40} /> 
                </Link>
              </div>
            </div>
            <p className="text-muted-foreground text-4xl pt-8">
              Feel free to reach out to me with any questions or inquiries. We'll do our best to respond promptly.
            </p>
          </div>
        </div>
      </div>

  )
}

export default ContactUs