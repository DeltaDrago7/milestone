import { Link } from 'react-router-dom';
const Sectors = () => {
    const features = [
        {
            title: 'Banking',
            link: '/banking',
            icon: (
                <svg className="h-28 w-28" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#ffca05"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">  </style> <g> <path class="st0" d="M469.922,0H42.078C23.156,0,7.859,15.313,7.844,34.219v102.688c0.016,18.906,15.313,34.219,34.234,34.234 h47.75v-34.234h-47.75V34.219h427.844v102.688h-47.75v34.234h47.75c18.906-0.016,34.219-15.328,34.234-34.234V34.219 C504.141,15.313,488.828,0,469.922,0z"></path> <rect x="189.891" y="181.125" class="st0" width="51.344" height="51.344"></rect> <rect x="224.125" y="296.656" class="st0" width="25.672" height="128.344"></rect> <rect x="172.781" y="296.656" class="st0" width="25.672" height="94.125"></rect> <path class="st0" d="M111.969,512h288.094v-12.844V95.563H111.969V512z M374.391,486.328h-33.344V121.234h33.344V486.328z M137.641,121.234h160.625v365.094H137.641V121.234z"></path> </g> </g></svg>
            ),
          },
          {
            title: "F&B",
            link: '/f&b',
            icon: (
                <svg className="h-28 w-28" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#ffca05"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">  </style> <g> <path class="st0" d="M50.57,55.239C27.758,29.036-13.992,53.833,4.68,95.145c12.438,27.563,36.469,94.922,70.016,143.438 c33.563,48.516,69.328,43.328,105.453,55.078l25.953,13.422l177.547,204.204l35.906-31.234l0.188-0.156 c-5.25-6.047-166.719-191.782-230.563-265.204C125.992,142.02,61.664,68.004,50.57,55.239z"></path> <path class="st0" d="M476.664,93.551l-61.938,71.266c-3.969,4.563-10.859,5.031-15.422,1.063l-2.203-1.906 c-4.531-3.953-5.031-10.844-1.063-15.406l62.234-71.594c10.219-11.734,5.375-22.125-2.219-28.719 c-7.578-6.578-18.531-9.938-28.75,1.813l-62.234,71.594c-3.953,4.547-10.859,5.031-15.406,1.063l-2.188-1.906 c-4.563-3.953-5.047-10.859-1.094-15.406l61.953-71.266c18.297-21.031-12.297-46.375-30.156-25.828 c-21.391,24.594-59.156,68.031-59.156,68.031c-33,37.688-32.5,55.344-27.844,80.078c3.781,19.938,9.328,34.281-11.156,57.844 l-30.234,34.781l31.719,36.453l34.641-39.844c20.469-23.547,35.453-20.047,55.719-19.094c25.156,1.203,42.703-0.766,75.422-38.672 c0,0,37.766-43.469,59.156-68.063C524.305,99.286,494.945,72.536,476.664,93.551z"></path> <polygon class="st0" points="185.758,322.692 49.102,479.88 85.211,511.286 219.055,357.348 191.508,325.661 "></polygon> </g> </g></svg>
            ),
          },
        {
          title: "Retail",
          link: '/retail',
          icon: (
            <svg className="h-28 w-28" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path>
            </svg>
          ),
        },
        {
          title: "Commercial & Offices",
          link: '/commercial-and-offices',
          icon: (
            <svg className="h-28 w-28" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"></path>
            </svg>
          ),
        },
        {
          title: "Residential",
          link: '/residential',
          icon: (
            <svg className="h-28 w-28" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
            </svg>
          ),
        },
      ];


    return (
        <div className="bg-pri">
            <section>       
                <div className="max-w-xl mb-10 sm:mx-auto relative z-10">
                <h2 className="text-center text-white">
                    Our Core Values
                </h2>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-y-6">
                    {features.map((feature, index) => (
                        <div className="text-sec w-1/2 md:w-1/3 lg:w-1/5 flex flex-col justify-center items-center gap-y-5 sm:gap-y-4">
                            {feature.icon}
                            <div className="grow">
                                <h3 className="text-center text-white">
                                    {feature.title}
                                </h3>
                
                                <Link to={feature.link} >
                                    <p className="text-sec mt-3 flex justify-center items-center space-x-1">
                                        View More  
                                        <span>
                                            <svg className="h-6 w-6" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                                            </svg>
                                        </span>
                                    </p>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>    
            </section>
        </div>
    
      );
}

export default Sectors