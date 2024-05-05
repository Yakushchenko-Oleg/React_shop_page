import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Dropdown from './components/dropdown/Dropdown';
import classes from './app.module.css'
import { useState } from 'react';
import ProductPage from './components/productPage/ProductPage';

function App() {
  const [catProducts, setCatProducts] = useState(['Рюкзаки', 'Футболки', 'Рубашки'])

  const [sortCat, setSortCat] = useState(
    [
      {
        id: "1", 
        label: "По цене",
        selected: true
      },
      {
        id: "2",
        label: "По популярности",
        selected: false,
      },
    ]
  );

  const handeleLabelChangeCars = (label) => {
    const updateCategories = sortCat.map(item => ({
      ...item,
      selected: item.id === label.id
    }));

    setSortCat(updateCategories);
  }

  const productList = [
    {
    title: 'Рюкзак Louis Vuitton Discovery',
    price: 150000,
    rating: 4.5,
    image: "/louis-vuitton--M43186_PM2_Front view 1.svg"
  },
  {
    title: 'Рюкзак Louis Vuitton Discovery',
    price: 150000,
    rating: 4.5,
    image: "/louis-vuitton--M43186_PM2_Front view 1.svg"
  },
  {
    title: 'Рюкзак Louis Vuitton Discovery',
    price: 150000,
    rating: 4.5,
    image: "/louis-vuitton--M43186_PM2_Front view 1.svg"
  },
  {
    title: 'Рюкзак Louis Vuitton Discovery',
    price: 150000,
    rating: 4.5,
    image: "/louis-vuitton--M43186_PM2_Front view 1.svg"
  },
  {
    title: 'Рюкзак Louis Vuitton Discovery',
    price: 150000,
    rating: 4.5,
    image: "/louis-vuitton--M43186_PM2_Front view 1.svg"
  },
  {
    title: 'Рюкзак Louis Vuitton Discovery',
    price: 150000,
    rating: 4.5,
    image: "/louis-vuitton--M43186_PM2_Front view 1.svg"
  },
  {
    title: 'Рюкзак Louis Vuitton Discovery',
    price: 150000,
    rating: 4.5,
    image: "/louis-vuitton--M43186_PM2_Front view 1.svg"
  },
  {
    title: 'Рюкзак Louis Vuitton Discovery',
    price: 150000,
    rating: 4.5,
    image: "/louis-vuitton--M43186_PM2_Front view 1.svg"
  },  {
    title: 'Рюкзак Louis Vuitton Discovery',
    price: 150000,
    rating: 4.5,
    image: "/louis-vuitton--M43186_PM2_Front view 1.svg"
  },
  {
    title: 'Рюкзак Louis Vuitton Discovery',
    price: 150000,
    rating: 4.5,
    image: "/louis-vuitton--M43186_PM2_Front view 1.svg"
  },
  {
    title: 'Рюкзак Louis Vuitton Discovery',
    price: 150000,
    rating: 4.5,
    image: "/louis-vuitton--M43186_PM2_Front view 1.svg"
  },
  {
    title: 'Рюкзак Louis Vuitton Discovery',
    price: 150000,
    rating: 4.5,
    image: "/louis-vuitton--M43186_PM2_Front view 1.svg"
  },
]

  return (
   <main className={classes.mainApp}>
    
    
    <Header/>

    <Sidebar
      categories={catProducts}/>

    <Dropdown 
      categories={sortCat}
      onSelect={handeleLabelChangeCars}/>

    <ProductPage productList={productList} />
    
   </main>
  );
}

export default App;
