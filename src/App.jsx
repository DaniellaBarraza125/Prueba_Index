
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FormExample from './components/FormExample/FormExample'
import { ChakraProvider} from '@chakra-ui/react'
import  ChakraTheme  from "./ChakraTheme";



function App() {


  return (
    <ChakraProvider theme={ChakraTheme}>
      <BrowserRouter>
          <Routes>
              <Route path="/form" element={<FormExample/>}/>
          </Routes>
      </BrowserRouter>
    </ChakraProvider>
    
  )
}

export default App
