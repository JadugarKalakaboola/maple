import ContainerBlock from "../components/ContainerBlock";

export default function Map(){
    return(
        <ContainerBlock title="Map">
            <div className="pb-10 flex flex-wrap-reverse justify-between lg:px-16">
                <iframe src="https://map-zeroday.vercel.app/" className="lg:w-7/12 w-11/12 mx-auto min-h-[550px] rounded-lg"></iframe>
                <div className="font-Teko text-6xl lg:w-5/12 flex flex-col justify-center">
                    <p className="p-5">Click the button below to access the complete map</p>
                    <a href="https://map-zeroday.vercel.app/" target={'_blank'} rel="noreferrer" className="w-fit mx-auto button py-3 px-10 rounded-md text-3xl hover:brightness-75 mb-5"><button>Go Now</button></a>
                </div>
            </div>
        </ContainerBlock>
    )
}