
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FormExample from './components/FormExample/FormExample'
import { ChakraProvider} from '@chakra-ui/react'
import  ChakraTheme  from "./ChakraTheme";
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';



function App() {


  return (
    <ChakraProvider theme={ChakraTheme}>
      <BrowserRouter>
      <Header/>
          <Routes>
              <Route path="/" element={<Home/>}/> 
              <Route path="/form" element={<FormExample/>}/>
              <Route path="/cards" element={<Cards/>}/>
              <Route path="/*" element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
    </ChakraProvider>
    
  )
}

export default App
