import './App.css';
import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
    return animals[Math.floor(Math.random() * animals.length)];
}
function App() {

    const [animals, setAnimals] = useState([]);

    //animals.push(getRandomAnimal()) // 직접적으로 state 값 변경하지 못함
    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()])
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />;
    });

    return (
        <div className="app">
            <button onClick={handleClick}>
                Add Animal
            </button>
            <div className='animal-list'>{renderedAnimals}</div>
        </div>
    );
}

export default App;