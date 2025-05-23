/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
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

export const API_3 = {
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

const Test3 = () => {
  const [usedTSet, setUsedSet] = useState(0)
  const [intrebari, setIntrebari] = useState([
    new test('Belong to the Animal kingdom, Arthropod group:', 1, -1, [
      'arachnids',
      'cephalopods',
      'hydrozoans',
      'nematodes',
    ]),

    new test(
      'Each of the daughter cells formed by mitotic division of a parent cell with 2n=10 chromosomes has:',
      1,
      -1,
      [
        '2n = 10 chromosomes',
        '2n = 5 chromosomes',
        'n = 10 chromosomes',
        'n = 5 chromosomes',
      ]
    ),

    new test(
      'One of the urinary tracts of the mammalian excretory system is:',
      2,
      -1,
      ['nephron', 'urethra', 'uterus', 'cortical area']
    ),

    new test('The liver of mammals:', 4, -1, [
      'is one of the components of the digestive tract',
      'is located to the left of the stomach',
      'participates in the gastric digestion of food',
      'secretes a digestive juice lacking enzymes',
    ]),

    new test('Spongy bone tissue:', 3, -1, [
      'has bone lamellae with concentric arrangement',
      'contains semi-hard fundamental substance',
      'is a type of hard connective tissue',
      'is crossed by Haversian canals with vessels and nerves',
    ]),

    new test('Bony fish belong to the group:', 3, -1, [
      'cephalopods',
      'coelenterates',
      'chordates',
      'placental mammals',
    ]),

    new test('Mammalian kidneys are:', 4, -1, [
      'composed of microscopic units called calyces',
      'components of the urinary tract',
      'located on the ventral side of the abdominal cavity',
      'protected externally by a fibrous capsule',
    ]),

    new test('Heterotrophic nutrition:', 4, -1, [
      'is specific to plant organisms',
      'consists in the synthesis of organic substances',
      'can be evidenced by absorbed CO2',
      'can be saprophytic and parasitic',
    ]),

    new test('A component of the mammalian digestive tract is:', 2, -1, [
      'bronchus',
      'pharynx',
      'larynx',
      'pancreas',
    ]),

    new test('Photosynthesis in plants:', 4, -1, [
      'is a type of heterotrophic nutrition',
      'releases light energy',
      'requires the presence of oxygen',
      'produces organic substances',
    ]),

    new test('The nephron is part of the structure of:', 3, -1, [
      'brain',
      'lung',
      'kidney',
      'stomach',
    ]),

    new test('The choroid in the structure of the mammalian eye:', 2, -1, [
      'has a protective role for the eyeball',
      'contains blood vessels',
      'is the site of photoreceptors',
      'is part of the optic system',
    ]),

    new test(
      'Each of the daughter cells formed by meiotic division of a parent cell with 2n = 38 chromosomes has:',
      4,
      -1,
      [
        '2n = 38 chromosomes',
        '2n = 19 chromosomes',
        'n = 30 chromosomes',
        'n = 19 chromosomes',
      ]
    ),

    new test('Are mammals:', 2, -1, [
      'anurans',
      'placental mammals',
      'trematodes',
      'urodeles',
    ]),

    new test('Rod cells are:', 3, -1, [
      'components of the optic nerve',
      'located in the choroid',
      'visual receptors',
      'sensitive to red and green colors',
    ]),
  ])
  console.log(intrebari)
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
export default Test3
