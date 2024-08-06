import React from 'react'
import './Project.css'
import Project1 from './../../Images/project 1.jpg'
import Project2 from './../../Images/project 2.jpg'
import Project3 from './../../Images/project 3.jpg'
import Project4 from './../../Images/project 4.jpg'
import Project5 from './../../Images/project 5.jpg'
import Project6 from './../../Images/project 6.jpg'

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
            <a href='https://www.linkedin.com/posts/walid-ghidhaoui-3a3120125_design-car-cardesign-activity-7225503653850173440-p1d6/?utm_source=share&utm_medium=member_android' target="_blank">
              <img
                src={Project1}
                width={400}
                height={300}
                alt="Project 1"
                className="rounded-lg object-cover"
              />
              <h3 className="mt-4 text-xl font-bold">Cravimoor car</h3>
              <p className="mt-2 text-muted-foreground">
              Dubbed the "Black Wolf with Fiery Eyes," its design is a testament to the raw energy and relentless spirit of modern racing.
              </p>
              </a>
            </div>

            <div className="rounded-lg bg-background p-6 shadow-lg">
            <a href='https://www.linkedin.com/posts/dassaultsystemes_this-is-what-you-get-when-you-combine-speed-activity-7082734965880188928-Qvzr/?utm_source=share&utm_medium=member_android' target="_blank">
              <img
                src={Project6}
                width={400}
                height={300}
                alt="Project 2"
                className="rounded-lg object-cover"
              />
              <h3 className="mt-4 text-xl font-bold"> 3D model of a Bugatti  </h3>
              <p className="mt-2 text-muted-foreground">
              This Bugatti was 3D modeled on CATIA .
              </p>
              </a>
            </div>
            <div className="rounded-lg bg-background p-6 shadow-lg">
            <a href='https://www.linkedin.com/posts/walid-ghidhaoui-3a3120125_cloth-catia-design-activity-6642442084726910977-oLDK/?utm_source=share&utm_medium=member_android' target="_blank">
              <img
                src={Project4}
                width={400}
                height={300}
                alt="Project 3"
                className="rounded-lg object-cover"
              />
              <h3 className="mt-4 text-xl font-bold"> Clothing Design</h3>
              <p className="mt-2 text-muted-foreground">
              New challenge with clothing design
              Software used: Catia v5 
              </p>
              </a>
            </div>
            <div className="rounded-lg bg-background p-6 shadow-lg">
            <a href='https://www.linkedin.com/feed/update/urn:li:activity:7042525144816177153/?utm_source=share&utm_medium=member_android' target="_blank">
              <img
                src={Project3}
                width={400}
                height={300}
                alt="Project 3"
                className="rounded-lg object-cover"
              />
              <h3 className="mt-4 text-xl font-bold">Work-Nap Furniture</h3>
              <p className="mt-2 text-muted-foreground">
              That moment when you want to take a nap while working, multifunctional furniture designed on CATIA. 
              </p>
              </a>
            </div>
            <div className="rounded-lg bg-background p-6 shadow-lg">
            <a href='https://www.linkedin.com/posts/walid-ghidhaoui-3a3120125_denmark-constructionmachinery-aljmachinery-activity-7023290089103351808-JY6T/?utm_source=share&utm_medium=member_android' target="_blank">
              <img
                src={Project5}
                width={400}
                height={300}
                alt="Project 3"
                className="rounded-lg object-cover"
              />
              <h3 className="mt-4 text-xl font-bold">8DK Damenberg</h3>
              <p className="mt-2 text-muted-foreground">
                8DK Damenberg new roller made in Denmark , new generation of rollers with strong Multi - Hydro system.

              </p>
              </a>
            </div>
            <div className="rounded-lg bg-background p-6 shadow-lg">
            <a href='https://www.linkedin.com/posts/walid-ghidhaoui-3a3120125_cemento-ciment-factoryjob-activity-7096716025810829312-PLGx/?utm_source=share&utm_medium=member_android' target="_blank">
              <img
                src={Project2}
                width={400}
                height={300}
                alt="Project 3"
                className="rounded-lg object-cover"
              />
              <h3 className="mt-4 text-xl font-bold">Smoke Box Installation</h3>
              <p className="mt-2 text-muted-foreground">
              Optimal and possible proposal to install the tapping at the level of the smoke box at 65° compared to the ground and the passage of conveyor belt in the existing space.
              </p>
              </a>
            </div>
          </div>
        
        </div>
      </section>
    </div>

  )
}

export default Projects