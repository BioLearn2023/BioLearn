/* eslint-disable @next/next/no-img-element */
import React from "react"
import Image from 'next/image'
import { useRouter } from "next/router";
export default function Nervos() {
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

        <div className=" py-24 sm:py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-2">
                <div className="mx-auto max-w-7xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center text-emerald-900">Nervous system</h2>
                    <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                    <div className="mt-0 text-lg text-grey-600">
                       <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Definition: </span> The nervous system is a system for coordinating and integrating the organism's activity. <br/>
                       <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Types of nervous systems: </span> <br/>
                       Somatic - ensures the integration of the organism in the living environment <br/>
                       Autonomic - coordinates the unconscious activity of internal organs <br/>
                       Central - represented by the brain and spinal cord <br/>   
                       Peripheral - represented by nerves and nerve ganglia <br/>
                       - The basis of nervous system functioning is the reflex arc, which consists of the organism's response to stimuli from the external or internal environment. <br/>
                       <br/>
                       <div className="flex justify-center">
                           <img src="/images2/nervos.jpg" width={500} height={300} alt="nervous-system" className="rounded-lg"/>
                       </div>
                    </div>

                    <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>
                   
                    <p className="mt-0 text-lg text-grey-600">
                       <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Spinal cord</span> <br/>
                       <span className="underline decoration-wavy text-green-700">Location:</span>  in the vertebral canal<br/>
                       <span className="underline decoration-wavy text-green-700">Structure:</span>  it consists of gray matter and white matter <br/>
                       Gray matter: <br/>
                       - located inside <br/>
                       - composed of neuron bodies and forms the horns <br/>
                       White matter: <br/>
                       - located outside the gray matter <br/>
                       - composed of neuron extensions and forms the cords <br/>
                       It is connected to receptors and effectors through spinal nerves. <br/>
                       It fulfills two functions: <br/>
                       - reflex (through gray matter) <br/>
                       - conduction (through white matter) <br/>
                    </p>

                    <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                    <p className="mt-0 text-lg text-grey-600">
                       <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Brain</span> <br/>
                       <span className="underline decoration-wavy text-green-700">Location:</span>  in the cranial cavity <br/>
                       <span className="underline decoration-wavy text-green-700">External structure:</span> <br/>
                       1. Brainstem <br/>
                       2. Cerebellum <br/>
                       3. Diencephalon <br/>
                       4. Cerebral hemispheres <br/>
                       <span className="underline decoration-wavy text-green-700">Internal structure:</span> <br/>
                       - gray matter <br/>
                       - white matter <br/>
                       Gray and white matter are arranged differently in the brain components. <br/>
                       The brain is connected to receptors and effectors through cranial nerves. <br/>
                    </p>

                    <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                   <p className="mt-0 text-lg text-grey-600">
                       <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Brainstem</span> <br/>
                       <span className="undeerline decoration-wavy text-green-700">Internal structure:</span> <br/>
                       - medulla oblongata <br/>
                       - pons Varolii <br/>
                       - midbrain <br/>
                       <span className="underline decoration-wavy text-green-700">External structure:</span> <br/>
                       - gray matter, which forms nerve nuclei, where somatic and autonomic reflexes are enclosed <br/>
                       - white matter with a role in conducting nerve impulses <br/>
                   </p>

                   <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                   <p className="mt-0 text-lg text-grey-600">
                       <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Cerebellum</span> <br/>
                       <span className="underline decoration-wavy text-green-700">External structure:</span> <br/>
                       - two cerebellar hemispheres <br/>
                       - vermis, located between the hemispheres <br/>
                       <span className="underline decoration-dotted text-green-700">Role:</span> <br/>
                       - maintaining balance based on information received from the inner ear <br/>
                       - controls body position, receiving information from proprioceptors <br/>
                       - ensures the precision of movements commanded by the cerebral hemispheres <br/>
                   </p>

                   <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                   <p className="mt-0 text-lg text-grey-600">
                       <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Diencephalon</span> <br/>
                       <span className="underline decoration-wavy text-green-700"> Location:</span> continuing the brainstem, partially covered by the cerebral hemispheres <br/>
                       <span className="underline decoration-wavy text-green-700">Contains:</span> <br/>
                       - thalamus <br/>
                       - hypothalamus, which regulates temperature, the body's water content, appetite, emotions, sexual functions, etc. <br/>
                   </p>

                   <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                   <p className="mt-0 text-lg text-grey-600">
                       <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Cerebral hemispheres</span> <br/>
                       - the largest parts <br/>
                       Gray matter forms: <br/>
                       <span className="underline decoration-double text-green-700">On the surface:</span> the cerebral cortex, which has cortical areas with different functions: <br/>
                       - sensory areas where information from sense organs arrives and corresponding sensations appear <br/>
                       - motor areas that command voluntary movements <br/>
                       - association areas, which in humans coordinate mental processes <br/>
                       <span className="underline decoration-double text-green-700">Inside:</span> basal nuclei, which regulate posture and involuntary movements <br/>
                       The nervous system is the command center of the organism, it receives, transmits, and integrates information from the internal or external environment based on which it elaborates appropriate responses. <br/>
                   </p>
                </div>
            </div>
        </div>

       <div className="flex justify-center">
       <span onClick={()=> void router.push('/10/relatie/limba')} className="inline-flex items-center px-4 py-2 mr-3 mb-8 text-sm font-medium text-lime-500 bg-white border border-lime-500 rounded-lg hover:bg-lime-500 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
       <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
       Previous lesson
       </span>
       <span onClick={()=> void router.push('/10/reproducere/plante')} className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium text-lime-500 bg-white border border-lime-500 rounded-lg hover:bg-lime-500 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
       Next lesson
       <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
       </span>
       </div>
        </>
    )
}
