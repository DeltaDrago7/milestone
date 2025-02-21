const Approach = () => {
    return(
        <section>
            <div className="gap-32 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Our Approach to Contracting
                    </h2>
                    <p className="mb-4 py-4 text-justify">
                        Milestone brings unparalleled expertise in construction management. From specialized improvements to complete turnkey facilities, we take pride in our seamless project execution. Our skilled team provides strong leadership, efficient administration, and strategic management, ensuring the successful delivery of each project.
                        <br/><br/>
                        We collaborate closely with trusted building partners and suppliers throughout the process, always with the client’s best interests at the forefront. This commitment to teamwork ensures that every project is completed to the highest standards.
                    </p>



                </div>

                <div className="gap-4 mt-8">
                <img 
                    src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
                    alt="" 
                    className="rounded lg:[transform:scale(1)_perspective(1040px)_rotateY(-11deg)_rotateX(2deg)_rotate(2deg)]"
                />
                </div>
                
            </div>
        </section>
    );
}

export default Approach