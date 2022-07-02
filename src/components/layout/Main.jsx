import Shoe1 from '@/assets/shoe1.png'
import Shoe2 from '@/assets/shoe2.png'
import Shoe3 from '@/assets/shoe3.png'
import Shoe4 from '@/assets/shoe4.png'

export const Main = () => {


  function handleClickSlide(e) {
    const activeSlide = document.querySelector('[data-active]')
    const slideTarget = document.querySelector('[data-target]')
    if (activeSlide == e.target) return

    delete activeSlide.dataset.active
    e.target.dataset.active = true
    slideTarget.src = e.target.src
  }

  return (
    <main className='main'>
      <img className='main__img-target' data-target src={Shoe1} alt="shoe one zoom" />
      <div className='main__imgs' data-slides>
        <img data-active src={Shoe1} alt="shoe small one" onClick={handleClickSlide} />
        <img src={Shoe2} alt="shoe small two" onClick={handleClickSlide} />
        <img src={Shoe3} alt="shoe small three" onClick={handleClickSlide} />
        <img src={Shoe4} alt="shoe small four" onClick={handleClickSlide} />
      </div>

    </main>
  )
}
