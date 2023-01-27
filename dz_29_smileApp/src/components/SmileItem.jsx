
import './smile-item.css';



function SmileItem({name, src, clickCounter, onToggle}) {

   return (
        <li className='smile-item'>
            <img 
                src={src} 
                alt={name + ' smile'}
                onClick={onToggle}
                data-toggle={name} />
        
                <span>{clickCounter}</span>
        </li>
   ); 
}

export default SmileItem;
