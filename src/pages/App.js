import  {  BrowserRouter ,  Routes ,  Route  }  from  'react-router-dom' ;

import Concepts from './concepts';
import Home from './home'

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/concepts" element={<Concepts />} />                
            </Routes>
        </BrowserRouter>
    )
}