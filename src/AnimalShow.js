import './AnimalShow.css';
import { useState } from 'react';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import horse from './svg/horse.svg';
import heart from './svg/heart.svg';

const svgMap = {
    bird, cat, cow, dog, gator, horse
};

// object의 property 값 접근시에 .propertyName으로 가능하지만 propertyName이 변수인경우에는 [] 사용.
function AnimalShow({ type }) {

    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        if (clicks < 10) {
            setClicks(clicks + 1);
        };
        console.log(clicks);
    };


    return (<div className="animal-show" onClick={handleClick}>
        <img className="animal" alt='animal' src={svgMap[type]} />
        <img
            className='heart'
            alt='heart'
            src={heart}
            style={{ width: 10 + 10 * clicks + 'px' }}
        />
    </div>);
}

export default AnimalShow;