import './css/Todoitems.css'
import right from './assets/right.png';
import circle from './assets/circle.png';
import wrong from './assets/wrong.png';

 const Todoitems = ({no,display,text,setTodos}) => {

  const deleteTodo = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.no!==no)
    setTodos(data);
  }
  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for(let i = 0; i < data.length; i++)
     {
      if (data[i].no===no){
        if(data[i].display===""){
          data[i].display = "line-through";
        }
        else{
          data[i].display = "";
        }
        break;
      }
  }
  setTodos(data);
  }


  return (
    <div className='todoitems'>
      <div className={"todoitems-container ${display}"} onClick={()=>{toggle(no)}}>
        {display === ''?<img src={circle}  alt="" />:<img src={right}  alt="" />}
      
      
      <div className="todoitems-text">{text}</div>
      </div>
      <img className='todoitems-cross-icon' onClick={()=>{deleteTodo(no)}} src={wrong}  alt="" />
    </div>
   
  )
}

export default Todoitems