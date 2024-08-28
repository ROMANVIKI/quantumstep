import Navbar from '@/app/components/Navbar'
import Hero from './components/Hero';

export default function Home() {
  return (
    <main data-theme='corporate'>
      <div><Navbar/></div>
      <div className='mt-16'>
        <Hero/>
      </div>
    </main>
  );
}
