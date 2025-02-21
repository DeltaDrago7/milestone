import { Link } from 'react-router-dom';

const ClientsPreview = ({images}) => {
    return (
        <section>
            <div>
                <div className="space-y-16 flex flex-col justify-center items-center">
                    <h2 className="text-center">
                        Our Clients
                    </h2>
                    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                        <ul className="grid grid-cols-5 md:grid-cols-10 gap-x-44 gap-y-10 md:gap-56 [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        {images.map(img =>(
                                <li>
                                    <img className='h-36' src={img}/>
                                </li>
                            ))}
                        </ul>
                        <ul className="grid grid-cols-5 md:grid-cols-10  gap-x-44 md:gap-56 [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                        {images.map(img =>(
                                <li>
                                    <img  className='h-36' src={img}/>
                                </li>
                            ))}
                        </ul>
                    </div>
   
                </div>

                {/* 
                
                    <div className=" md:mt-0 grid md:grid-cols-2 gap-12 justify-center items-center">
                
                
                    <div className="space-y-16">
                        <figure className="relative rounded-2xl bg-white p-6 shadow-md shadow-slate-900/10">
                                    <svg
                                        aria-hidden="true"
                                        width="105"
                                        height="78"
                                        className="absolute left-6 top-6 fill-slate-200"
                                    >
                                        <path
                                            d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"
                                        ></path>
                                    </svg>
                                    <blockquote className="relative">
                                        <p className="text-black text-lg">
                                            I love the fitness apparel and gear I purchased from this site. The quality is exceptional and the prices are unbeatable.
                                        </p>
                                    </blockquote>
                                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                                        <div>
                                            <div className="font-display text-base text-slate-900">Sheryl Berge</div>
                                        </div>
                                        <div className="overflow-hidden rounded-full bg-slate-50">
                                            <img
                                                alt=""
                                                className="h-14 w-14 object-cover"
                                                style={{ color: 'transparent' }}
                                                src="https://randomuser.me/api/portraits/men/15.jpg"
                                            />
                                        </div>
                                    </figcaption>
                        </figure>

                        <figure className="relative rounded-2xl bg-white p-6 shadow-md shadow-slate-900/10">
                                    <svg
                                        aria-hidden="true"
                                        width="105"
                                        height="78"
                                        className="absolute left-6 top-6 fill-slate-200"
                                    >
                                        <path
                                            d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"
                                        ></path>
                                    </svg>
                                    <blockquote className="relative">
                                        <p className="text-lg text-black">
                                            I love the fitness apparel and gear I purchased from this site. The quality is exceptional and the prices are unbeatable.
                                        </p>
                                    </blockquote>
                                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                                        <div>
                                            <div className="font-display text-base text-slate-900">Sheryl Berge</div>
                                        </div>
                                        <div className="overflow-hidden rounded-full bg-slate-50">
                                            <img
                                                alt=""
                                                className="h-14 w-14 object-cover"
                                                style={{ color: 'transparent' }}
                                                src="https://randomuser.me/api/portraits/men/15.jpg"
                                            />
                                        </div>
                                    </figcaption>
                        </figure>

                    </div>


                    <div className="mt-16 md:mt-0 grid grid-cols-2 gap-12">
                        <div className="flex justify-center">
                            <img className="h-36" src="https://i.pinimg.com/474x/ec/58/20/ec5820a0d6aab1c541f0d531513f532a.jpg" alt="Client 1" />
                        </div>
                        <div className="flex justify-center">
                            <img className="h-36" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnrgKbxKUIXUwdIEzCQsdirrDgg3iHFYvQnQ&s" alt="Client 2" />
                        </div>
                        <div className="flex justify-center">
                            <img className="h-36" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDux_P5cK-xSxOyhyWihtG4IMcXLNbehN8mg&s" alt="Client 3" />
                        </div>
                        <div className="flex justify-center">
                            <img className="h-36" src="data:image/png;base64,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" alt="Client 4" />
                        </div>
                    </div>

                </div>
                */}
                

                

            </div>
            {/* <div className="flex justify-center mt-20 md:mt-12">
                <Link to="/testimonials" >
                    <button className="px-12 py-3 rounded-full bg-sec text-center">
                        <p className='text-lg text-pri font-semibold'>See More Testimonials</p>
                    </button>
                </Link>
            </div> */}
        </section>
        
    );
};

export default ClientsPreview;
