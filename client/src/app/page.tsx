
import HeroBanner from '@/components/banner'
import Link from 'next/link'
import { redirect } from 'next/navigation'

const isAuth = false
export default function Home() {
  // if (!isAuth) {
  //   redirect('/login')
  // }
  return (
    <main>
      <div>
        <HeroBanner />
      </div>
    </main>
  )
}