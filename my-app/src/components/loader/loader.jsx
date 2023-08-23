import loader1 from './../../assets/loader.svg';
import'./loader.css';
function loader() {
  return (
    <div className='loader-container'>
   <img  className='loader' src={loader1} alt='loader'/>

    </div>
  )
}

export default loader