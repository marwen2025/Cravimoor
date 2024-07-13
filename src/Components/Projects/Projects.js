import React from 'react'
import workimg from './../../Images/workimg.jpg'
import './Project.css'
function Projects() {
    
    return (
      <div name="projects" className='w-full lg:pt-24 items-center h-full h-m-screen '>
            <section className="imgmid w-full py-12 md:py-24 lg:py-32">
            <div className=" items-center justify-center gap-4 px-4 md:px-6">
          <div className="space-y-3 text-center">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Our Work</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Showcasing Our Design Expertise
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-700 text-center text-pretty text-lg sm:text-xl md:text-2xl">
              Explore our portfolio of past projects and see how we've helped our clients bring their ideas to life
              through innovative industrial design and captivating 3D modeling.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="rounded-lg bg-background p-6 shadow-lg">
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Project 1"
                className="rounded-lg object-cover"
              />
              <h3 className="mt-4 text-xl font-bold">Smart Home Device</h3>
              <p className="mt-2 text-muted-foreground">
                Designed a sleek and intuitive smart home device with advanced features.
              </p>
            </div>
            <div className="rounded-lg bg-background p-6 shadow-lg">
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Project 2"
                className="rounded-lg object-cover"
              />
              <h3 className="mt-4 text-xl font-bold">Outdoor Furniture</h3>
              <p className="mt-2 text-muted-foreground">
                Created a modern and durable outdoor furniture collection for a leading brand.
              </p>
            </div>
            <div className="rounded-lg bg-background p-6 shadow-lg">
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Project 3"
                className="rounded-lg object-cover"
              />
              <h3 className="mt-4 text-xl font-bold">Automotive Concept</h3>
              <p className="mt-2 text-muted-foreground">
                Developed a futuristic automotive concept with advanced design and 3D modeling.
              </p>
            </div>
          </div>
        </div>
      </section>
        </div>

    )
}

export default Projects