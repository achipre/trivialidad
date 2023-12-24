import './page.css'
import { Erica_One } from 'next/font/google'

const ericaOne = Erica_One({ weight: '400',subsets: ['latin'] })

export default function Home() {

  return (
    <main>
      <button className={ericaOne.className}>JUGAR</button>
    </main>
  )
}
