import { Route,  Routes } from "react-router-dom";

const Child: React.FC = () => {
    return (
        <div>
            <h1>Child</h1>
            <p>Welcome to the Child page!</p>
        </div>
    );
}


const Contact : React.FC = () => {
    return (
       
            <Routes>
                <Route path='/child' element={<Child />} />
            </Routes>
        
    );
}

export default Contact;