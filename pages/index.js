

import MainContainer from "../components/MainContainer.js";
import Ts from "../components/Ts.tsx"

const Index = () => { 
    return (
        <MainContainer keywords={'index page'}>
           
            <Ts/>
            <h1>main</h1>
           
            {/* <style jsx>
                { 
                `
                body{
                    background-color: #e8f0e5; 
                    margin: 0;
                    font-family: Arial, sans-serif;
                }
                h1{
                    color: #2c5f2d;
                    margin-left: 20px;
                }
                `
                }
            </style> */}
        </MainContainer>
    )
}
export default Index