import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';

function App() {
  return (
    <div className="App">
      <h2>Iteracion 1</h2>
      <IdCard
        lastName="González"
        firstName="Búho"
        gender="female"
        height={45}
        birth={new Date('1988-08-07').toLocaleDateString('es-ES')}
        picture="https://i.natgeofe.com/n/d5863c64-a28c-4e30-9ee8-ecc4175e8439/NationalGeographic_2745282_square.jpg"
      />
      <IdCard
        lastName="García"
        firstName="Quokka"
        gender="female"
        height={30}
        birth={new Date('1988-08-07').toLocaleDateString('es-ES')}
        picture="https://dam.ngenespanol.com/wp-content/uploads/2021/03/quokka.jpg"
      />
      <h2>Iteracion 2</h2>
      <Greetings lang="es"> Jorge </Greetings>
      <Greetings lang="fr"> Antonio </Greetings>
      <h2>Iteracion 3</h2>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <h2>Iteracion 4</h2>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <h2>Iteracion 5</h2>
      <div class="credit-card-container">
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />
      </div>
      <Rating>0</Rating>
<Rating>1.49</Rating>
<Rating>1.5</Rating>
<Rating>3</Rating>
<Rating>4</Rating>
<Rating>5</Rating>
    </div>
  );
}

export default App;
