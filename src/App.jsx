
import './App.css'
import CardComponents from './Components/Card/Card'
import HeroSection from './Components/Hero Section/Hero'

function App() {
  return (
    <>
      <HeroSection imageUrl={'https://i.pinimg.com/736x/74/8f/98/748f98fafbe781229a6d2827a1174c32.jpg'} />
      <div>
      {Array.from({ length: 8 }).map((_, index) => (
          <CardComponents key={index}  />
        ))}
      </div>
      {/* <FootballHistoryCard imageUrl={'https://i.pinimg.com/564x/8e/22/df/8e22df0ce1e1615a331cee38cd5fce50.jpg'} />   */}
      {/* how to make it show when click */}
      {/* <div className="App">
  {footballMatches.length > 0 && (
    <FootballHistoryCard
      key={0} // Using a static key value since we're rendering a single card
      imageUrl={footballMatches[0].imageUrl}
      onClose={() => console.log('Closed')}
      title={footballMatches[0].title}
      paragraphs={footballMatches[0].paragraphs}
    />
  )}
</div> */}

    </>
  )
}

export default App
