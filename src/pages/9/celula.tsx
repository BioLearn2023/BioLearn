/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from "react"
import { useRouter } from "next/router";
export default function Celula() {
    const router = useRouter();
    return(
        <>
        <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
    >
        <div
            className="relative left-[calc(50%-20rem)] aspect-[1155/678] w-[27.125rem] -translate-x-1 rotate-[30deg] bg-gradient-to-tr from-green-500 to-green-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }} />
        </div><div
            className="absolute inset-x-0 -top-70 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-100"
            aria-hidden="true"
    >
            <div
                className="relative left-[calc(50%-11rem)] aspect-[650/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-300 to-green-900 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                    clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                }} />
        </div><div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
        >
            <div
                className="relative right-[calc(0%+11rem)] aspect-[600/600] w-[36.125rem] -translate-x-1/2  rotate-[30deg] bg-gradient-to-tr from-lime-600 to-emerald-950 opacity-30 sm:left-[calc(50%+15rem)] sm:w-[72.1875rem]"
                style={{
                    clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                }} />
        </div>
        <div
        className="absolute inset-x-0 mt-[69rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
    >
        <div
            className="relative left-[calc(50%-20rem)] aspect-[1200/1000] w-[27.125rem] -translate-x-1 rotate-[30deg] bg-gradient-to-tr from-lyme-300 to-green-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 12.1%, 80.7% 52%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }} />
        </div>

        <div className=" py-24 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-2">
          <div className="mx-auto max-w-7xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center text-emerald-900">The cell and its chemical composition.</h2>
              <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none">
                <div className="mt-0 text-lg text-gray-900 text-center">
                <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Definition: </span> The cell is the basic structural, functional, and genetic unit of an organism. <br/>
                <br/>
                <div className="flex justify-center">
                <img src="/images/celula.jpg" width={350} height={350} alt="Picture of the author" className="rounded-lg"/>
                </div>
                </div>
                </div>
              <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-16 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none">
                 <span className="mt-0 text-lg text-gray-900"> <span className="underline decoration-wavy text-[#65a30d] font-extrabold">The functions of the cell: </span><br/>
                  - maintains the homeostasis of the internal environment <br/>
                  - synthesizes its own compunds according to a specifi code <br/>
                  - as the ability to regenerate and self-reproduce  <br/>
                  - adapts to the varied living conditions of the environment. <br />
                </span>
              </div>
              <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-16 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none">
                <div className="mt-0 text-lg text-gray-900 text-right">
                  <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Observation! </span> The shape varies depending on position and function.

  <br/>
                  Cell shapes: <br/>
                  - fusiform <br/>
                  - spherical <br/>
                  - oval <br/>
                  - pyramidal <br/>
                  - star-shaped <br/>
                  <span className="flex justify-left -mt-48">
                  <img src="/images/hematii.jpg" width={300} height={300} alt="Picture of the author" className="rounded-lg"/>
                  <img src="/images/neuroni.jpg" width={300} height={300} alt="Picture of the author" className="rounded-lg"/>
                  </span>
                </div>
              </div>
              <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-16 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none">
                <span className="mt-0 text-lg text-gray-900">
                  <span className="underline decoration-wavy text-[#65a30d] font-extrabold">The chemical composition of the cell</span> <br/>
                  The cell contains: <br/>
                  - 60% water <br/>
                  - inorganic substances(mineral substances): chlorides, sulfides, carbonates <br/>
                  - organic substances: carbohydartes, lipids, proteins, nucleic acids, carbonates <br/>
                  Carbohydrates = carbonates (e.g., starch, glucose, glycogen, chitin, cellulose)<br/>
                  Lipids = phospholipids and triglycerides<br/>
                  Proteins = contain amino acids (e.g., keratin, chlorophyll, hemoglobin, antibodies)<br/>
                </span>
              </div>
              <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-16 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none">
                <div className="mt-0 text-lg text-gray-900  text-right">
                  <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Nucleic acids</span> <br/>
                  - ADN = Deoxyribonucleic acid<br/>
                  <span className="underline decoration-dotted">Role:</span> Stores and transmits genetic information <br/>
                  -  ARN = Ribonucleic acid<br/>
                  <span className="underline decoration-dotted">Role:</span> Determines protein synthesis
                  <span className="flex justify-left -mt-32">
                  <img src="/images/adn.jpeg" width={300} height={300} alt="Picture of the author" className="rounded-lg"/>
                  <img src="/images/arn.jpg" width={300} height={300} alt="Picture of the author" className="rounded-lg"/>
                  </span>
                </div>
              </div>
            </div>
            </div>
          </div>        


          <div className="flex justify-center">
          <span onClick={()=> void router.push('/9/eucariota')} className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium text-lime-500 bg-white border border-lime-500 rounded-lg hover:bg-lime-500 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Next lesson
            <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </span>
          </div>

  </>

    )
}

