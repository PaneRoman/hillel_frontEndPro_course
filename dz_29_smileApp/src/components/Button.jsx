import './button.css';

export default function Button({buttonName, buttonClickMethod}) {
     return (
        <button 
          className='win-button'
          onClick={buttonClickMethod}>{buttonName}</button>
     );
}