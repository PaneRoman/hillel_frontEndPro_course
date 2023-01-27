import './win-smile-item.css';


export default function WinSmileItem({src, name, clickCounter}) {
    return (
        <li className='win-smile-item'>
                <h2>{name} boy is Winner !!!</h2>
                <img 
                    src={src} 
                    alt={name + ' smile'}
                    data-toggle={name} />
                <h3>{clickCounter} Votes</h3>
            </li>
    );
}