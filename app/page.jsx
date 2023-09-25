
import SectionOne from '@/components/SectionOne/SectionOne'
import styles from './page.module.css'
import SectionTwo from '@/components/SectionTwo/SectionTwo'
import SectionThree from '@/components/SectionThree/SectionThree'
import Footer from '@/components/Footer/Footer'



export default function Home() {

  return (
    <div>
      <div className={styles.bk}>
    <div className={styles.border}> </div>
    </div>
    <main>
    <SectionOne/>
    <SectionTwo/>
    <SectionThree />
    <Footer/>
    </main>
    </div>
    
  )
}