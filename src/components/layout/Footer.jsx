import Arrow from '../../assets/icon-arrow.svg'
import Youtube from '../../assets/img-video.png'

export const Footer = () => {
  return (
    <footer className='footer'>
      <a href="#">
        <img className='footer__video' src={Youtube} alt="youtube video" />
      </a>
      <div className='footer__social'>
        <a href='#'>facebook</a>
        <a href='#'>instagram</a>
        <a href='#'>youtube</a>
        <a href='#'>twitter</a>
      </div>
      <button className='footer__btn'>
        explore mais
        <img src={Arrow} alt="arrow" />
      </button>
    </footer>
  )
}
