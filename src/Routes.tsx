import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const LazyHome = React.lazy(()=>import('./Home'));
const LazyAbout = React.lazy(()=>import('./About'));
const LazyContact = React.lazy(()=>import('./Contact'));


const Rutas: React.FC = ()=>{

    return(
        <Router>
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path='/' Component={LazyHome} />
                        <Route path='/about' Component={LazyAbout}/>
                        <Route path='/contact/*' Component={LazyContact} />
                    </Routes>

                </Suspense>
            </div>
        </Router>
    )
}
export default Rutas;