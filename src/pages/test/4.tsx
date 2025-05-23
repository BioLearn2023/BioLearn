/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Button, Card } from 'flowbite-react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { ArrowSmallRightIcon } from '@heroicons/react/24/outline'

export class test {
  intrebare: string
  raspuns: number
  input: number
  raspunsuri: string[]
  constructor(
    intrebare: string,
    raspuns: number,
    input: number,
    raspunsuri: string[] = []
  ) {
    this.intrebare = intrebare
    this.raspuns = raspuns
    this.input = input
    this.raspunsuri = raspunsuri
  }
}

function shuffleQs(intrebari: test[]) {
  for (let i = intrebari.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[intrebari[i]!.intrebare, intrebari[j]!.intrebare] = [
      intrebari[j]!.intrebare,
      intrebari[i]!.intrebare,
    ]
    ;[intrebari[i]!.input, intrebari[j]!.input] = [
      intrebari[j]!.input,
      intrebari[i]!.input,
    ]
    ;[intrebari[i]!.raspuns, intrebari[j]!.raspuns] = [
      intrebari[j]!.raspuns,
      intrebari[i]!.raspuns,
    ]
    ;[intrebari[i]!.raspunsuri, intrebari[j]!.raspunsuri] = [
      intrebari[j]!.raspunsuri,
      intrebari[i]!.raspunsuri,
    ]
  }
  return intrebari
}
let g_Intrebari: test[]
let g_Answers: any[]
let usedSet: number

export const API_4 = {
  getQuestions: function () {
    return g_Intrebari
  },
  getAnswers: function () {
    return g_Answers
  },
  getUsedState: function () {
    return usedSet
  },
}

const Test4 = () => {
  const [usedTSet, setUsedSet] = useState(0)
  const [intrebari, setIntrebari] = useState([
    new test(
      'An example of a dry indehiscent fruit found in angiosperms is:',
      2,
      -1,
      ['capsule', 'caryopsis', 'pod', 'silique']
    ),

    new test('Cone cells are:', 4, -1, [
      'absent in the yellow spot',
      'chemosensitive cells',
      'components of the optic nerve',
      'located in the retina',
    ]),

    new test('In plants, photosynthesis:', 2, -1, [
      'occurs in the absence of assimilatory pigments',
      'is a type of autotrophic nutrition',
      'releases light energy',
      'synthesizes inorganic substances',
    ]),

    new test(
      'The systems involved in the nutrition function of organisms are:',
      1,
      -1,
      [
        'circulatory, digestive, excretory',
        'digestive, muscular, skeletal',
        'excretory, nervous, muscular',
        'respiratory, skeletal, muscular',
      ]
    ),

    new test(
      'Each of the daughter cells formed by mitotic division of a parent cell with 2n = 28 chromosomes has:',
      2,
      -1,
      [
        '2n = 28 chromosomes',
        '2n = 14 chromosomes',
        'n = 28 chromosomes',
        'n = 14 chromosomes',
      ]
    ),

    new test('Chronic kidney failure is a disease of the:', 3, -1, [
      'circulatory system',
      'digestive system',
      'excretory system',
      'respiratory system',
    ]),

    new test(
      'An accessory gland that is part of the digestive system of mammals is:',
      3,
      -1,
      ['esophagus', 'pharynx', 'pancreas', 'stomach']
    ),

    new test('In plants, photosynthesis:', 4, -1, [
      'occurs in the mitochondria',
      'occurs in the absence of chlorophyll pigments',
      'splits water in the dark phase',
      'can be detected by the O2 produced',
    ]),

    new test(
      'Each of the daughter cells formed by meiotic division of a parent cell with 2n = 36 chromosomes has:',
      4,
      -1,
      [
        '2n = 36 chromosomes',
        '2n = 18 chromosomes',
        'n = 36 chromosomes',
        'n = 18 chromosomes',
      ]
    ),

    new test('A sexually transmitted disease is:', 2, -1, [
      'astigmatism',
      'candidiasis',
      'epilepsy',
      'gastritis',
    ]),

    new test('A respiratory tract of mammals is:', 4, -1, [
      'pulmonary alveolus',
      'esophagus',
      'pleura',
      'larynx',
    ]),

    new test('In mammals, the ureters:', 4, -1, [
      'make up the medullary area of the kidneys',
      'are funnel-shaped with the base towards the renal hilum',
      'are located between the urinary bladder and urethra',
      'transport urine to the urinary bladder',
    ]),

    new test('In plants, photosynthesis:', 2, -1, [
      'releases CO2 in the presence of light',
      'requires the presence of assimilatory pigments',
      'can be detected by the absorbed O2',
      'produces a large amount of energy',
    ]),

    new test('The protist group includes:', 4, -1, [
      'bryophytes',
      'eubacteria',
      'ferns',
      'sporozoans',
    ]),

    new test('Anurans are:', 3, -1, [
      'annelids',
      'arthropods',
      'chordates',
      'reptiles',
    ]),
  ])
  const [shouldRender, setRender] = useState(false)
  const tempAns = new Array(intrebari.length).fill(0)
  const [ansArray, setAnsarray] = useState(new Array(intrebari.length).fill(0))
  useEffect(() => {
    setIntrebari(shuffleQs(intrebari))
    setRender(true)
    g_Intrebari = intrebari
  }, [intrebari])
  useEffect(() => {
    g_Answers = ansArray
  }, [ansArray])
  useEffect(() => {
    usedSet = usedTSet
  }, [usedTSet])
  const router = useRouter()
  let currAns = -1
  const [counter, setCounter] = useState(0)
  const [currWord, setWord] = useState('Next question')
  const activateButton = (id: number) => {
    currAns = id
    document.getElementById(id.toString())?.classList.add('outline')
    for (let i = 1; i <= 4; i++) {
      if (i != id)
        document.getElementById(i.toString())?.classList.remove('outline')
    }
  }
  const submit = () => {
    intrebari[counter]!.input = currAns
    if (currAns === intrebari[counter]?.raspuns) {
      tempAns[counter] = 1
    }
    if(currAns == -1) alert("You didn't select any answer!")
    setUsedSet(1)
    setCounter((count) => count + 1)
    document.getElementById(currAns.toString())?.classList.remove('outline')
    if (counter >= intrebari.length - 2) {
      setWord('Finish the quiz')
      console.log(usedSet)
    }
    if (counter == intrebari.length - 1) {
      setAnsarray(tempAns)
      setRender(false)
      void router.push('/test/rezultate')
    }
  }
  function renderQuestions() {
    if (shouldRender) {
      return (
        <>
          <Card className="max-w-sm mx-auto my-auto flex h-1/2 rounded-lg relative grid mt-28 border-lime-300 bg-transparent">
            <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {intrebari[counter]?.intrebare}
            </h5>
            <Card className="border-lime-300 bg-transparent">
              <Button
                
                gradientDuoTone="tealToLime"
                id="1"
                onClick={() => activateButton(1)}
              >
                {intrebari[counter]?.raspunsuri[0]}
              </Button>
              <Button
                
                gradientDuoTone="tealToLime"
                id="2"
                onClick={() => activateButton(2)}
              >
                {intrebari[counter]?.raspunsuri[1]}
              </Button>
              <Button
                
                gradientDuoTone="tealToLime"
                id="3"
                onClick={() => activateButton(3)}
              >
                {intrebari[counter]?.raspunsuri[2]}
              </Button>
              <Button
                
                gradientDuoTone="tealToLime"
                id="4"
                onClick={() => activateButton(4)}
              >
                {intrebari[counter]?.raspunsuri[3]}
              </Button>
            </Card>
            <Button className="mx-auto w-32" gradientDuoTone="tealToLime" onClick={() => submit()}>
              {currWord} {''}<ArrowSmallRightIcon className=" ml-2 w-4"/>
            </Button>
          </Card>
        </>
      )
    } else return <div></div>
  }

  return (
  <div> 
    {renderQuestions()} 
    <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
    >
        <div
            className="relative left-[calc(50%-20rem)] aspect-[16/9] w-[27.125rem] -translate-x-1 rotate-[30deg] bg-gradient-to-tr from-yellow-500 to-green-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }} />
        </div><div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
        >
            <div
                className="relative right-[calc(0%+11rem)] aspect-[16/9] w-[36.125rem] -translate-x-1/2  rotate-[30deg] bg-gradient-to-tr from-lime-600 to-green-900 opacity-30 sm:left-[calc(50%+15rem)] sm:w-[72.1875rem]"
                style={{
                    clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                }} />
        </div>
  </div>
  )
}
export default Test4
