const TheTeam = () => {
    return(
        <section>
            <div className="">
                <h3 >The Team</h3>
        
                <h2>
                    Meet Us
                </h2>
        
                <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                    <div className="absolute w-full bg-pri -z-10 md:h-96 rounded-2xl"></div>
                    
                    <div className="w-full p-6 bg-pri md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                        <img className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="client photo" />
                        
                        <div className="mt-2 md:mx-6">
                            <div>
                                <p className="text-xl font-medium tracking-tight text-white">Amr Fathalla</p>
                                <p className="text-gray-400">Founder and CEO</p>
                            </div>
        
                            <p className="mt-4  text-white text-xl"> “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda”.</p>
                        </div>
                    </div>
                </main>
                <img className="object-cover mt-10 md:max-h-[400px] w-full rounded-2xl" src="https://media.licdn.com/dms/image/v2/D4E22AQGoX9OCA7OjtQ/feedshare-shrink_800/feedshare-shrink_800/0/1712767273407?e=2147483647&v=beta&t=LSjSndy_S6Hti_JASu2EQqE6JQNQm6JtXBMtvyKqvTY"/>
            </div>
        </section>
    );
}

export default TheTeam