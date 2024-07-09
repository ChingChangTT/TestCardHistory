
import './App.css'
import CardComponents from './Components/Card/Card'
import HeroSection from './Components/Hero Section/Hero'
import SlowCard from './Components/Sketlinton/Slow'
import Forget from './Components/OTP/forgetPass'
import Mycard from './Components/Detail/Mycard'
import FootballHistoryCard from './Components/History Page/History'
function App() {
  const footballMatches = [
    {
      imageUrl: 'https://i.pinimg.com/564x/d9/74/fe/d974fea5071ae14b984759faa5313e48.jpg',
      title: 'ប្រវិត្តនៃ FIFA WORLD CUP',
      paragraphs: [
        'FIFA ដែលមានពាក្យពេញថា «Federation International Football Association» ជាសហព័ន្ធគ្រប់គ្រងបាល់ទាត់អន្តរជាតិ ដែលមាន ២១១ប្រទេសជាសមាជិកនៅពេលបច្ចុប្បន្ននេះ ត្រូវបានបង្កើតឡើងនៅឆ្នាំ១៩០៤ ក្រោមការចូលរួមបង្កើតឡើងដោយប្រទេសអាល្លឺម៉ង់ ប៊ែលហ្សិក ដាណឺម៉ាក បារាំង ហូឡង់  អេស្ប៉ាញ ស៊ុយអែត និងស្វីស ដែលមានទីស្នាក់ការកណ្តាលនៅទីក្រុង Zurich  ប្រទេសស្វីសតែម្តង មានលោក Infantino វ័យ ៤៥ឆ្នាំ សញ្ជាតិស្វីសកាត់អ៉ីតាលី ប្រធានបច្ចុប្បន្ន ។',
        'រឹត្តិការណ៍បាល់ទាត់ពិភពលោកផ្នែកបុរស Men’s World Cup ត្រូវបានបង្កើតឡើងដំបូងក្នុងឆ្នាំ១៩៣០ ដែលមានអ៊ុយរ៉ាហ្គាយ ជាប្រទេសស្ថិតនៅតំបន់អាមេរិកឡាទីនឈ្នះជើងឯកមុនគេ មុនពេល World Cup ស្រ្តីត្រូវបានបង្កើតឡើងក្នុងឆ្នាំ១៩៩១ ដែលមានក្រុមស្រ្តីអាមេរិក ឈ្នះជើងឯកបាន ៤ដងច្រើនជាងគេ។',
        'គួរបញ្ជាក់ផងថា មានតែ ២តំបន់ប៉ុណ្ណោះដែលឈ្នះជើងឯក World Cup ផ្នែកបុរស ក្រោយរៀបចំបាន ២១ សម័យមកនេះ ដោយប្រទេសស្ថិតនៅតំបន់អាមេរិកឡាទីនរួមមានប្រេស៊ីល បាន ៥ដង និងអាហ្សង់ទីន និងអ៊ុយរ៉ាហ្គាយ ឈ្នះបាន ២ដងដូចគ្នា និងក្រៅពីនោះឈ្នះតែក្រុមនៅអឺរ៉ុបទាំងអស់ដោយអាល្លឺម៉ង់ និងអ៉ីតាលី បាន ៤ដងដូចគ្នា បារាំង ២ដង និងអង់គ្លេស និងអេស្ប៉ាញ ឈ្នះបាន ១ដងដូចគ្នា និងបារាំងឈ្នះជើងឯកនេះចុងក្រោយគេ នៅឆ្នាំ២០១៨ នៅទឹកដីប្រទេសរុស្ស៊ី ក្រោយខកខាន ២០ឆ្នាំ គិតចាប់តាំងពីឆ្នាំ១៩៩៨ ក្នុងទឹកដីរបស់ខ្លួនមក៕'
      ]
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/a8/00/c7/a800c7c06974de3291831510dbd6903f.jpg',
      title: 'Match 2',
      paragraphs: [
        'Description of the second match.',
        'Additional details about the second match.'
      ]
    }
  ];
  

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
      <div className="App">
  {footballMatches.length > 0 && (
    <FootballHistoryCard
      key={0} // Using a static key value since we're rendering a single card
      imageUrl={footballMatches[0].imageUrl}
      onClose={() => console.log('Closed')}
      title={footballMatches[0].title}
      paragraphs={footballMatches[0].paragraphs}
    />
  )}
</div>

    </>
  )
}

export default App
