const TutorsComponent = () => {

    return (
        <section className="flex flex-col justify-center items-center gap-y-20 bg-white h-[1500px] md:h-screen">
            <div className="my-2">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-dorado-clasico ">Nuestros formadores</h1>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10 mx-4">
                <a href="#" className="group relative block">
                    <img
                        alt=""
                        src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29uc3xlbnwwfHwwfHx8MA%3D%3D"
                        className="absolute inset-0 h-full w-full object-cover transition-opacity rounded-xl"
                    />

                    <div className="relative p-4 sm:p-6 lg:p-8">
                        <p className="text-sm font-medium tracking-widest text-dorado-clasico uppercase">Developer</p>

                        <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

                        <div className="mt-32 sm:mt-48 lg:mt-64">
                        <div
                            className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                        >
                            <p className="text-sm text-white">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
                            quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
                            </p>
                        </div>
                        </div>
                    </div>
                </a>
                <a href="#" className="group relative block rounded-xl">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                        className="absolute inset-0 h-full w-full object-cover rounded-xl"
                    />

                    <div className="relative p-4 sm:p-6 lg:p-8">
                        <p className="text-sm font-medium tracking-widest text-dorado-clasico  uppercase">Developer</p>

                        <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

                        <div className="mt-32 sm:mt-48 lg:mt-64">
                        <div
                            className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                        >
                            <p className="text-sm text-white">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
                            quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
                            </p>
                        </div>
                        </div>
                    </div>
                </a>
                <a href="#" className="group relative block">
                    <img
                        alt=""
                        src="https://plus.unsplash.com/premium_photo-1681248156598-88d3970f0795?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRlYWNoZXJzfGVufDB8fDB8fHww"
                        className="absolute inset-0 h-full w-full object-cover rounded-xl"
                    />

                    <div className="relative p-4 sm:p-6 lg:p-8">
                        <p className="text-sm font-medium tracking-widest text-dorado-clasico uppercase">Developer</p>

                        <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

                        <div className="mt-32 sm:mt-48 lg:mt-64">
                        <div
                            className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                        >
                            <p className="text-sm text-white">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
                            quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
                            </p>
                        </div>
                        </div>
                    </div>
                </a>
            </div>
        </section>

    )
}


export default TutorsComponent