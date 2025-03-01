    import React from 'react';
    import MyButton from './components/Button';
    import MyContainer from './components/Container';
    import Footer from './components/Footer'; // Импортируем Footer
    import './styles.css';

    const App = () => {
    const handleClick = () => {
        alert('Кнопка нажата!');
    };

    return (
        <MyContainer>
        <h1 className="my-title">Лабораторная работа № 2</h1>
        <MyButton label="Кнопка" onClick={handleClick} />
        </MyContainer>
    );
    };

    export default App;