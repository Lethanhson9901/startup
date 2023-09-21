import "./App.css"
import NavBar from "./components/common/navbar/NavBar"
import Head from "./components/common/header/Head"
import Footer from "./components/common/footer/Footer"
import Hero from "./components/hero/Hero"
import Login from "./components/login/Login"
import UserHomePage from "./components/user/UserHomePage"
import UploadFile from "./components/user/uploadfile/UploadFile"
import Billing from "./components/user/billing/Billing"
import UserInfo from "./components/user/userinfo/UserInfo"
import { Register } from "./components/register/Register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// function App() {
//   return (
//     <div>
//       <Router>
//         <Head/>
//         <NavBar />
//         <Hero/>
//         <Switch>
//           <Route path="/login" component={Login} />
//           {/* <Route exact path='/' component={Home} />
//           <Route exact path='/about' component={About} />
//           <Route exact path='/courses' component={CourseHome} />
//           <Route exact path='/team' component={Team} />
//           <Route exact path='/pricing' component={Pricing} />
//           <Route exact path='/journal' component={Blog} />
//           <Route exact path='/contact' component={Contact} /> */}
//         </Switch>
//         <Footer />
//         {/* <Footer />
//         <Footer /> */}
//       </Router>
//     </div>
//   )
// }

// export default App

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/user-home-page' component={UserHomePage}/>
        <Route exact path='/user-info' component={UserInfo}/>
        <Route exact path='/user-billing' component={Billing}/>
        <Route exact path='/upload-file' component={UploadFile}/>
        {/* Routes for all other components */}
        <Route path='/'>
          <Head />       
          <NavBar />
          <Hero/>
          <Switch>
            {/* <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/courses' component={CourseHome} />
            <Route exact path='/team' component={Team} />
            <Route exact path='/pricing' component={Pricing} />
            <Route exact path='/journal' component={Blog} />
            <Route exact path='/contact' component={Contact} /> */}
          </Switch>
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App
