const CallToActionComponent = () => {
  return (
    <div className="w-full bg-blueprimary">
      <div className="mx-auto py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="flex flex-wrap justify-center gap-10 shadow-2xl sm:rounded-3xl p-10">
          <div className="mx-auto max-w-[700px] text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
              No esperes más para vivir tu fé en comunidad
            </h2>
            <p className="mt-6 text-lg/8 text-pretty text-gray-300">
              Demos este paso juntos y vivamos una fé juntos
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md bg-white px-10 py-6 text-xl text-gray-900 font-bold shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contactanos
              </a>
              <a href="#" className="text-xl font-semibold text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="h-full [mask-image:radial-gradient-to-tl] from-blue-500 to-blue-700 lg:relative lg:flex lg:gap-x-6 lg:overflow-hidden lg:rounded-xl">
            <img
                alt="App screenshot"
                src="https://concepto.de/wp-content/uploads/2013/03/comunidad-1.jpeg"
                className="h-full image-cover rounded-md mx-auto"
                />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToActionComponent;