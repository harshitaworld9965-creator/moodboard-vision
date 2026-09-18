
import './App.css'
import Header from './components/Header';
import Intro from './components/Intro';
import SparkCard from './components/SparkCard';
import { sparks } from './data/sparks';
function App(){
  return (
    <div className='app'>
      <Header />
      <main className='main-content'>
        <Intro />
        <section className='spark-grid'>
        {sparks.map((spark) => (
          <SparkCard 
          key={spark.id}
          type={spark.type}
          title={spark.title}
          description={spark.description}
          colors={spark.colors}
          />
        ))}
        </section>
      </main>

    </div>
  )
}
export default App;