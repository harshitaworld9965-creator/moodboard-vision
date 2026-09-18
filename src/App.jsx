
import './App.css'
import Header from './components/Header';
import Intro from './components/Intro';
import SparkCard from './components/SparkCard';
function App(){
  return (
    <div className='app'>
      <Header />
      <main className='main-content'>
        <Intro />

        <SparkCard 
        type="COLOR"
        title="Midnight Lavender"
        description="Deep purple with a tiny hint of blue"
        colors={[
          '#8f7bb8',
          '#57496f',
          '#30283d',
          '#17151c'
        ]}
        />

        <SparkCard
        type="IDEA"
        title="Digital Garden"
        description="A website where thoughts grow like plants"
        />

        <SparkCard
        type="SONG"
        title="Something melancholic"
        description="Find a song that sounds like driving alone at 2 AM."
        />
      </main>

    </div>
  )
}
export default App;