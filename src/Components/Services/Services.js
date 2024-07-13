import React from 'react'
import { FaCodepen, FaBarcode, FaDeviantart } from 'react-icons/fa';
const Services = () => {
    return (
        <div name="services" className='w-full lg:pt-24 items-center h-full h-m-screen'>
            <section className=" flex bg-muted py-12 md:py-20 lg:py-28">
                <div className="container mx-auto px-6 md:px-10 lg:px-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Services</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="bg-background rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
                            <FaCodepen className="h-12 w-12 text-primary" />
                            <h3 className="text-xl font-bold mt-4 mb-2">Product Design</h3>
                            <p className="text-muted-foreground">
                                Our team of industrial designers will work with you to create innovative and visually appealing
                                product designs.
                            </p>
                        </div>
                        <div className="bg-background rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
                            <FaDeviantart className="h-12 w-12 text-primary" />
                            <h3 className="text-xl font-bold mt-4 mb-2">3D Modeling</h3>
                            <p className="text-muted-foreground">
                                Our 3D artists will bring your designs to life with high-quality 3D models and renderings.
                            </p>
                        </div>
                        <div className="bg-background rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
                            <FaBarcode className="h-12 w-12 text-primary" />
                            <h3 className="text-xl font-bold mt-4 mb-2">Prototyping</h3>
                            <p className="text-muted-foreground">
                                We offer rapid prototyping services to help you validate your designs and get feedback from
                                stakeholders.
                            </p>
                        </div>
                        <div className="bg-background rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
                            <FaCodepen className="h-12 w-12 text-primary" />
                            <h3 className="text-xl font-bold mt-4 mb-2">Product Design</h3>
                            <p className="text-muted-foreground">
                                Our team of industrial designers will work with you to create innovative and visually appealing
                                product designs.
                            </p>
                        </div>
                        <div className="bg-background rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
                            <FaDeviantart className="h-12 w-12 text-primary" />
                            <h3 className="text-xl font-bold mt-4 mb-2">3D Modeling</h3>
                            <p className="text-muted-foreground">
                                Our 3D artists will bring your designs to life with high-quality 3D models and renderings.
                            </p>
                        </div>
                        <div className="bg-background rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
                            <FaBarcode className="h-12 w-12 text-primary" />
                            <h3 className="text-xl font-bold mt-4 mb-2">Prototyping</h3>
                            <p className="text-muted-foreground">
                                We offer rapid prototyping services to help you validate your designs and get feedback from
                                stakeholders.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services