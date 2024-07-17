
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FormExample from './components/FormExample/FormExample'
import { ChakraProvider} from '@chakra-ui/react'
import  ChakraTheme  from "./ChakraTheme";
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';



function App() {


  return (
    <ChakraProvider theme={ChakraTheme}>
      <BrowserRouter>
      <Header/>
          <Routes>
              <Route path="/form" element={<FormExample/>}/>
              <Route path="/cards" element={<Cards/>}/>
          </Routes>
      </BrowserRouter>
    </ChakraProvider>
    
  )
}

export default App
