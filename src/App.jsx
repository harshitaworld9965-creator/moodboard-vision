
import './App.css'

function App(){
  return (
    <div className='app'>
      <header className='header'>
        <div>
          <p className='eyebrow'>CREATIVE SPACE</p>
          <h1>Moodboard</h1>
        </div>
        <button className='add-button'>
          + New Spark
        </button>
      </header>

      <main className='main-content'>
        <section className='intro'>
          <p className='intro-label'>YOUR IDEAS</p>

          <h2>
            Little things worth
            <span>Remembering</span>
          </h2>
          <p className='intro-text'>
            Collect colors, thoughts, songs and strange little ideas before they disappear.          
            </p>
        </section>

        <section className='spark-grid'>

          <article className='spark-card'>
            <div className='card-top'>
              <span className='spark-type'>COLOR</span>
              <span className='spark-icon'>✦</span>
            </div>
            <h3>Midnight Lavender</h3>
            <p>
              Deep purple with a tiny hint of blue.
            </p>
            <div className='color-preview'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </article>

          <article className='spark-card'>
            <div className='card-top'>
              <span className='spark-type'>IDEA</span>
              <span className='spark-icon'>✦</span>
            </div>
            <h3>Digital Garden</h3>
            <p>
              A website where thoughts grow like plants.
            </p>
          </article>

          <article className='spark-card'>
          <div className='card-top'>
            <span className='spark-type'>SONG</span>
            <span className='spark-icon'>✦</span>
          </div>
          <h3>Something melancholic</h3>
          <p>
            Find a song that sounds like driving alone at 2 AM.
          </p>
          </article>

        </section>
      </main>

    </div>
  )
}
export default App;