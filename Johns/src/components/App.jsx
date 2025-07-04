import { Outlet } from "react-router"
import { Container } from "react-bootstrap"
import Footer from "./Footer"
import Header from "./Header"

const data = {
  pizza:[
  { name: 'Çiken Ranç', img: 'cikenRanc.jpg', desc: 'Ranç sousu, qril toyuğu, pomidor, mozzarella' },
  { name: 'Marqarita', img: 'marqarita.jpg', desc: 'Pizza sousu, ekstra mozzarella, pomidor, oreqano' },
  { name: '4 Pendir', img: '4pendir.jpg', desc: 'Pizza sousu, mozzarella, feta, parmezan və cheddar pendirləri' },
  { name: 'Qarışıq ət', img: 'qarishiqEt.jpg', desc: 'Pizza sousu, mal əti, pepperoni, italyan sosisi, vetçina, mozzarella' },
  { name: 'NY Style Pizza Marqarita', img: 'NYpepperoni.jpg', desc: 'Pizza sousu, pepperoni, mozzarella' },
  { name: 'Star Marqarita', img: 'starMarqarita.jpg', desc: 'Ulduz kənar, mozzarella və pomidor sousu' },
  { name: 'Star Classic Pepperoni', img: 'starPepperoni.jpg', desc: 'Ulduz kənar, pepperoni, mozzarella' },
  { name: 'Star Western BBQ', img: 'starWesternBBQ.jpg', desc: 'Ulduz kənar, BBQ sousu, mal əti, soğan, mozzarella' },
  { name: 'Star Chicken BBQ', img: 'starChickenBBQ.jpg', desc: 'Ulduz kənar, qril toyuğu, BBQ sousu, mozzarella' },
  { name: 'BBQ Chicken', img: 'bbqChicken.jpg', desc: 'BBQ sousu, qril toyuğu, pomidor, mozzarella' },
  { name: 'Italian Sausage', img: 'italianSausage.jpg', desc: 'Pizza sousu, italyan sosisi, mozzarella' },
  { name: 'Greek', img: 'greek.jpg', desc: 'Pizza sousu, feta, zeytun, pomidor, mozzarella' },
  { name: 'Hawaiian', img: 'hawaiian.jpg', desc: 'Pizza sousu, ananas, vetçina, mozzarella' },
  { name: 'Veggie Delight', img: 'veggieDelight.jpg', desc: 'Pizza sousu, göbələk, bibər, soğan, pomidor, mozzarella' },
  { name: 'Spicy Pepperoni', img: 'spicyPepperoni.jpg', desc: 'Pizza sousu, pepperoni, acılı sous, mozzarella' },
  { name: 'Spicy Italian', img: 'spicyItalian.jpg', desc: 'Pizza sousu, italyan sosisi, pepperoni, pul bibər, mozzarella' },
  { name: 'Crispy Cheese Spaysi İtalyan', img: 'crispyCheese.jpg', desc: 'Pizza sousu, Ekstra İtalyan sosisi, Pepperoni, Panko Mozzarella, Pul bibər'},
  { name: 'Çiken Göbələk', img: 'chickenMushroom.jpg', desc: 'Göbələk sousu, Qril toyuğu, Turşu xiyar, Göbələk, Mozzarella'},
  { name: 'Papa Miks', img: 'papaMiks.jpg', desc: 'Çiken Barbekyu, Hot & Spaysi, Marqarita, Klassik Pepperoni'},
  { name: 'Çiken Baffalo', img: 'chickenBuffalo.jpg', desc: 'Ranç Sousu, Çiken poppers, Vetçina, Mozzarella, Baffalo Sousu'},
  { name: 'Klassik Pepperoni', img: 'classicPepperoni.jpg', desc: 'Pizza sous, Pepperoni, Ekstra Mozzarella'},
  { name: 'Karnaval', img: 'carnaval.jpg', desc: 'Pizza Sous, Göbələk, Qara Zeytun, Pepperoni, Mozzarella'},
  {name: 'Cheddar Dabl Burger', img: 'cheddarDoubleBurger.jpg', desc: '1000 ada sousu, Mal əti, Pomidor, Mozzarella, Cheddar'},
  {name: 'Cheddar Çiken Club', img: 'cheddarChickenClub.jpg', desc: 'Pizza sousu, Qril toyuğu, Pomidor, Vetçina, Mozzarella, Cheddar, Ranç sousu'},
  {name: 'Qarışıq Ət BBQ', img: 'qarishiqEtBBQ.jpg', desc: 'BBQ Sousu, Mal əti, Pepperoni, İtalyan Sosisi, Vetçina, Mozzarella'},
]

};

function App() {
  return (
    <>
      <Header />
      <main className="py-5">
        <Container >
          <Outlet context={data} />
        </Container>
      </main>
      
      <Footer />

    </>
  )
}

export default App
