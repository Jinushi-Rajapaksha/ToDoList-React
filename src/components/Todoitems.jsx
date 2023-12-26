import './css/Todoitems.css'
import right from './assets/right.png';
import circle from './assets/circle.jpg';
import wrong from './assets/wrong.png';

 const Todoitems = ({no,display,text}) => {
  return (
    <div className='Todoitems'>
      <div className="todoitems">
      <img src={wrong}  alt="" />
      <img src={right}  alt="" />
      <div className="todoitems-text">{text}</div>
      </div>
      <img className='todoitems-cross-icon'src={circle}  alt="" />
    </div>
   
  )
}

export default Todoitems