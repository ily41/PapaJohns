import { Outlet } from "react-router"
import { Container } from "react-bootstrap"
import Footer from "./Footer"
import Header from "./Header"
import { useState } from "react"
import Basket from "./Basket"

const data = {
  pizza:[
    { id: 1, name: "4 Cheese", desc: "Mozzarella, Cheddar, Parmesan və Blue pendirlərinin dadlı qarışığı", img: "4cheese.jpg", filter: ["vegan"], price: { sm: 10, md: 16, lg: 22 } },
    { id: 2, name: "All the Meats", desc: "Pepperoni, mal əti, toyuq və italyan sosisi ilə zəngin ət menyusu", img: "AlltheMeats.jpg", filter: ["meat"], price: { sm: 14, md: 22, lg: 28 } },
    { id: 3, name: "American Hot", desc: "Pepperoni, yaşıl bibər və acı jalapeno ilə klassik Amerikan acılı pizzası", img: "AmericanHot.jpg", filter: ["meat", "spicy"], price: { sm: 13, md: 20, lg: 26 } },
    { id: 4, name: "Carnival", desc: "Göbələk, zeytun, pepperoni və mozzarella ilə şənlik kimi pizza", img: "Carnival.jpg", filter: ["meat"], price: { sm: 9, md: 14, lg: 19 } },
    { id: 5, name: "Cheddar Chicken Club", desc: "Qril toyuq, cheddar, vetçina və ranç sousu ilə dadlı klub pizzası", img: "CheddarChickenClub.jpg", filter: ["chicken"], price: { sm: 12, md: 20, lg: 25 } },
    { id: 6, name: "Cheddar Double Burger", desc: "Mozzarella və Cheddar ilə ətli burger stilində pizza", img: "CheddarDoubleBurger.jpg", filter: ["meat"], price: { sm: 14, md: 22, lg: 28 } },
    { id: 7, name: "Chicken BBQ", desc: "Qril toyuq, göbələk və barbekyu sousu ilə ətirli seçim", img: "ChickenBBQ.jpg", filter: ["chicken"], price: { sm: 10, md: 16, lg: 22 } },
    { id: 8, name: "Chicken Buffalo", desc: "Buffalo sousu ilə acılı qril toyuq və mozzarella", img: "ChickenBuffalo.jpg", filter: ["chicken", "spicy"], price: { sm: 11, md: 17, lg: 23 } },
    { id: 9, name: "Chicken Cheeseburger", desc: "Mozzarella, toyuq, pomidor və xiyar ilə burger ruhlu pizza", img: "ChickenCheeseburger.jpg", filter: ["chicken"], price: { sm: 11, md: 18, lg: 22 } },
    { id: 10, name: "Chicken Parmesan", desc: "Qril toyuğu, parmezan sousu və mozzarella ilə zərif ləzzət", img: "Chickenparmesan.jpg", filter: ["chicken"], price: { sm: 12, md: 18, lg: 24 } },
    { id: 11, name: "Chicken Ranch", desc: "Ranç sousu, qril toyuğu, pomidor və mozzarella ilə sadə və dadlı", img: "chickenRanch.jpg", filter: ["chicken"], price: { sm: 11, md: 16, lg: 22 } },
    { id: 12, name: "Classic Pepperoni", desc: "Klassik pepperoni və əlavə mozzarella pendiri ilə zəngin dad", img: "ClassicPepperoni.jpg", filter: ["meat"], price: { sm: 9, md: 14, lg: 19 } },
    { id: 13, name: "Crispy 4 Cheese", desc: "Cır-cır dördpendirli baza ilə qızarmış pizzasevərlər üçün", img: "Crispy4Cheese.jpg", filter: ["vegan"], price: { sm: 11, md: 17, lg: 22 } },
    { id: 14, name: "Crispy Cheese Chicken Ranch", desc: "Qızardılmış bazada qril toyuq, ranç sousu və pendir qarışığı", img: "CrispyCheeseChickenRanch.jpg", filter: ["chicken"], price: { sm: 12, md: 18, lg: 24 } },
    { id: 15, name: "Crispy Cheese Pepperoni", desc: "Pepperoni və pendirlə zəngin, xırt-xırt bazalı pizza", img: "CrispyCheesePepperoni.jpg", filter: ["meat"], price: { sm: 12, md: 18, lg: 24 } },
    { id: 16, name: "Crispy Cheese Spicy Italian", desc: "İtalyan sosisi, pepperoni, pul bibər və xırt-xırt baza", img: "CrispyCheeseSpicy Italian.jpg", filter: ["spicy", "meat"], price: { sm: 13, md: 21, lg: 27 } },
    { id: 17, name: "Double Cheeseburger", desc: "İki qat ət, cheddar və mozzarella ilə burger tərzi pizza", img: "DoubleCheeseburger.jpg", filter: ["meat"], price: { sm: 12, md: 19, lg: 23 } },
    { id: 18, name: "Garden Special", desc: "Pomidor, bibər, göbələk və zeytun ilə təzə vegetarian seçimi", img: "GardenSpecial.jpg", filter: ["vegan"], price: { sm: 9, md: 13, lg: 18 } },
    { id: 19, name: "Greek", desc: "Feta pendiri, qara zeytun, oregano və pomidor ilə Yunan üslubu", img: "Greek.jpg", filter: ["vegan"], price: { sm: 9, md: 14, lg: 19 } },
    { id: 20, name: "Grill Chicken Parmesan", desc: "Grill toyuğu, parmesan sousu və jalapeno ilə dadlı qarışım", img: "GrillChickenParmesan.jpg", filter: ["chicken", "spicy"], price: { sm: 12, md: 18, lg: 23 } },
    { id: 21, name: "Hawaiian", desc: "Ananas, qril toyuğu və mozzarella ilə şirin və duzlu ləzzət", img: "Hawaiian.jpg", filter: ["chicken"], price: { sm: 10, md: 18, lg: 23 } },
    { id: 22, name: "Hot N Spicy", desc: "Mal əti, yaşıl bibər, pomidor və jalapeno ilə acılı pizza", img: "HotNSpicy.jpg", filter: ["meat", "spicy"], price: { sm: 10, md: 16, lg: 21 } },
    { id: 23, name: "Little Italy", desc: "İtalyan ədviyyatları və mozzarella ilə yüngül və klassik pizza", img: "LittleItaly.jpg", filter: ["vegan"], price: { sm: 9, md: 14, lg: 19 } },
    { id: 24, name: "Marinera", desc: "Ton balığı, zeytun və yaşıl bibər ilə dəniz məhsullu seçim", img: "Marinera.jpg", filter: ["fish"], price: { sm: 10, md: 18, lg: 22 } },
    { id: 25, name: "Marqarita", desc: "Ekstra mozzarella və oreqano ilə klassik sadə pizza", img: "Marqarita.jpg", filter: ["vegan"], price: { sm: 8, md: 13, lg: 16 } },
    { id: 26, name: "Mexican", desc: "Acılı sous, jalapeno, bibər və mal əti ilə Meksika tərzi", img: "Mexican.jpg", filter: ["meat", "spicy"], price: { sm: 11, md: 17, lg: 23 } },
    { id: 27, name: "Mixed Meat BBQ", desc: "Barbekyu souslu mal əti, pepperoni, vetçina və sosis", img: "MixedMeatBBQ.jpg", filter: ["meat"], price: { sm: 15, md: 23, lg: 29 } },
    { id: 28, name: "New Orleans", desc: "Qızardılmış bazada ədviyyatlı ət və souslarla cənub ləzzəti", img: "NewOrleans.jpg", filter: ["meat"], price: { sm: 13, md: 20, lg: 26 } },
    { id: 29, name: "NY Style Pizza Marqarita", desc: "New York üslubunda geniş və nazik marqarita pizza", img: "NYstylePizzaMarqarita.jpg", filter: ["vegan"], price: { sm: 9, md: 14, lg: 19 } },
    { id: 30, name: "NY Style Pizza Pepperoni", desc: "New York tərzi nazik və geniş pepperonili pizza", img: "NystylepizzaPepperoni.jpg", filter: ["meat"], price: { sm: 9, md: 14, lg: 19 } },
    { id: 31, name: "Papa Mix", desc: "Mix pizzaların qarışığı: BBQ, pepperoni, marqarita və s.", img: "PapaMix.jpg", filter: ["meat", "chicken", "spicy"], price: { lg: 20 } },
    { id: 32, name: "Rustic", desc: "Ənənəvi İtalyan tərzində göyərti və pendir qarışığı", img: "Rustic.jpg", filter: ["vegan"], price: { sm: 10, md: 15, lg: 20 } },
    { id: 33, name: "Spicy Chicken Ranch", desc: "Qril toyuq, jalapeno, ranç sousu və göbələk", img: "SpicyChickenRanch.jpg", filter: ["chicken", "spicy"], price: { sm: 11, md: 16, lg: 22 } },
    { id: 34, name: "Spicy Italian", desc: "Pizza sousu, italyan sosisi, pepperoni və pul bibər", img: "SpicyItalian.jpg", filter: ["spicy", "meat"], price: { sm: 13, md: 21, lg: 27 } },
    { id: 35, name: "Super Papa", desc: "Pepperoni, vetçina, göbələk, bibər, zeytun və italyan sosisi", img: "SuperPapa.jpg", filter: ["meat"], price: { sm: 12, md: 18, lg: 23 } },
    { id: 36, name: "Western Barbecue", desc: "Barbekyu sousu, mal əti və qarğıdalı ilə western ləzzəti", img: "WesternBarbecue.jpg", filter: ["meat"], price: { sm: 12, md: 18, lg: 24 } }
]}

const referenceArr = [
  { name: "salam",
    img: "../public/Assets/img/4cheese.jpg",
    size: "md",
    price: 14,
    quant: 1
  },
  {name: "diff",
    img: "../public/Assets/img/Mushroom.jpg",
    size: "sm",
    price: 28,
    quant: 1
  },
  {name: "salam",
    img: "../public/Assets/img/SpicyItalian.jpg",
    size: "md",
    price: 12,
    quant: 1
  }
]



function App() {
    const [show, setShow] = useState(false)
    const [basket, setBasket] = useState(referenceArr)
    const [quantity, setQuantity] = useState(1)

    const deleteFromBasket = (idx) => {
        setBasket(basket.filter((item,i) => i !==idx))
    }

    const updateBasket = (idx,qua) => {
      console.log(qua);
      
      if( qua == 0 ) {
        
        deleteFromBasket(idx)
      }else {
        let obj = basket[idx]
        obj.quant = qua
        setBasket(basket.map((item,i) => i == idx ? obj : item))
      }
      
    }
    
  return (
    <>
      <Header setShow={setShow} />
        <main className="py-5">
          <Container >
            <Outlet context={data} quantity={quantity} setQuantity={setQuantity} />
          </Container>
        </main>
      <Footer />
      <Basket show={show} setShow={setShow} basket={basket} setBasket={setBasket} quantity={quantity} setQuantity={setQuantity} updateBasket={updateBasket}></Basket>

    </>
  )
}

export default App
