import React from 'react'
const Services = () => {
    return (
        <div name="services" className='w-full lg:pt-24 items-center h-full h-m-screen  bg-gray-200'>
            <section className=" flex bg-muted py-12 md:py-20 lg:py-28">
            <div className=" items-center justify-center gap-4 px-4 md:px-6">
          <div className="space-y-3 text-center">
            <div className="inline-block rounded-lg bg-black px-3 py-1 text-sm text-white">
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Bringing Your Ideas to Life</h2>
            <p className="mx-auto max-w-[700px] py-4 text-gray-700 text-center text-pretty text-lg sm:text-xl md:text-2xl">
              Cravimoor offers a wide range of services to help you transform your concepts into reality. From product
              design to 3D modeling and animation, we have the expertise to bring your vision to life.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <TypeIcon className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-xl font-bold">Product Design</h3>
              <p className="mt-2 text-muted-foreground">
                Our team of industrial designers will work with you to create innovative and user-centric product
                designs.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <PiIcon className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-xl font-bold">Prototyping</h3>
              <p className="mt-2 text-muted-foreground">
                We can create physical and digital prototypes to help you validate your designs and gather feedback.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <Scale3dIcon className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-xl font-bold">3D Modeling</h3>
              <p className="mt-2 text-muted-foreground">
                Our 3D modeling experts can create high-quality, photorealistic models and animations to showcase your
                products.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <PresentationIcon className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-xl font-bold">Rendering</h3>
              <p className="mt-2 text-muted-foreground">
                We offer advanced 3D rendering services to produce stunning visuals that bring your designs to life.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <VideoIcon className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-xl font-bold">Animation</h3>
              <p className="mt-2 text-muted-foreground">
                Our 3D animation experts can create captivating videos to showcase your products in action.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <ViewIcon className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-xl font-bold">Visualization</h3>
              <p className="mt-2 text-muted-foreground">
                We can provide high-quality 3D visualizations to help you better understand and communicate your design
                ideas.
              </p>
            </div>
          </div>
        </div>
            </section>
        </div>
    )
}

export default Services

function TypeIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="4 7 4 4 20 4 20 7" />
        <line x1="9" x2="15" y1="20" y2="20" />
        <line x1="12" x2="12" y1="4" y2="20" />
      </svg>
    )
  }
  function VideoIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
        <rect x="2" y="6" width="14" height="12" rx="2" />
      </svg>
    )
  }
  
  
  function ViewIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
        <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
        <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
      </svg>
    )
  }
  function PiIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="9" x2="9" y1="4" y2="20" />
        <path d="M4 7c0-1.7 1.3-3 3-3h13" />
        <path d="M18 20c-1.7 0-3-1.3-3-3V4" />
      </svg>
    )
  }
  
  
  function PresentationIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h20" />
        <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
        <path d="m7 21 5-5 5 5" />
      </svg>
    )
  }
  
  
  function Scale3dIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="19" cy="19" r="2" />
        <circle cx="5" cy="5" r="2" />
        <path d="M5 7v12h12" />
        <path d="m5 19 6-6" />
      </svg>
    )
  }