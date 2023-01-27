import { Component } from 'react';

import smileIconSrc from '../svg/smile-icon_smile.svg';
import confusedIconSrc from '../svg/smile-icon_confused.svg';
import brightIconSrc from '../svg/smile-icon_bright.svg';
import angryIconSrc from '../svg/smile-icon_angry.svg'

import './smile-list.css';

import SmileItem from './SmileItem';
import Button from './Button';
import WinSmileItem from './WinSmileItem';



class SmileList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smileData: [
                {src: smileIconSrc, name: 'smile', id: 1, clickCounter: 0},
                {src: confusedIconSrc, name: 'confused', id: 2, clickCounter: 0},
                {src: brightIconSrc, name: 'bright', id: 3, clickCounter: 0},
                {src: angryIconSrc, name: 'angry', id: 4, clickCounter: 0}
            ],

            winnerData: ''

        }
    }

    onToggle = (event) => {
        const toggle = event.currentTarget.getAttribute('data-toggle');

        this.setState(({smileData}) => ({
            smileData: smileData.map(item => {
                if (item.name === toggle) {
                    return {...item, clickCounter: ++item.clickCounter};
                }
                return item;
            })
        }))
    }

    onGetWinner = () => {
        this.setState(({smileData}) => {
            const winnerData = [...smileData].sort((a, b) => b.clickCounter - a.clickCounter)[0];
            return {
                winnerData: winnerData
            }
           
        }) 
        
    }

    onVoteAgain = () => {
        this.setState({
            winnerData: ''
        })
    }



    render() {
        const {smileData, winnerData} = this.state;

        let smileElements;
        let listClass = 'smile-list';
        let buttonName = 'Winner';
        let buttonClickMethod = this.onGetWinner;
                
        if (winnerData) {
            listClass += ' winner';
            buttonName = 'Vote Again';
            buttonClickMethod = this.onVoteAgain;

            smileElements = <WinSmileItem {...winnerData} />

        } else {
            smileElements = smileData.map(data => {
                const {id, ...dataProps} = data;
    
                return (
                    <SmileItem 
                        key={id} 
                        {...dataProps}
                        onToggle={this.onToggle} />)
                
            })
        }
        
        
        return (
            <div className='smile-list-conteiner'>
                <ul className={listClass}>
                    {smileElements}
                </ul>

                <Button 
                    buttonName={buttonName}
                    buttonClickMethod={buttonClickMethod} />
            </div>
        );
    }
}

export default SmileList;