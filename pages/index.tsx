import Hero from '@/components/hero'
import Header from '../components/header'
import '../styles/_globals.scss'
import Featured from '@/components/featured'
import Favorite from '@/components/favorite'
import NewIn from '@/components/newin'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Featured />
      <Favorite />
      <NewIn />
      <Footer />
    </>
  )
}
