// import React from 'react';
// import Header from './Header';
// import Main from './main';
// import Footer from './Footer';
// import Welcome from './Welcome';
// const App = () => {
//     return (
//         <div>
//             <Header />
//             <Main />
//             <Footer/>
//             <Welcome />
//         </div>
//     );
// };
// export default App;
const App = () => {
    const myname = "rajinesh"
    const multipy = (a,b) => a*b
    const specialclass = 'simple'
    return (
        <section id="section">
            <p>{myname}</p>
            <p>2 + 2 = {2 + 2}</p>
            <p>2*2={multipy(2,2)}</p>
            <p className={specialclass}>This is spicale</p>
        </section>
        
    );
};
export default App;