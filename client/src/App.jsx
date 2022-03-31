import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Create from "./pages/Create";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Success from "./pages/Success";
import Error from "./pages/Error";
import Bugs from "./pages/CategoryPages/Bugs";
import Stackoverflow from "./pages/CategoryPages/Stackoverflow";
import Javascript from "./pages/CategoryPages/Javascript";
import Coding from "./pages/CategoryPages/Coding";
import Css from "./pages/CategoryPages/Css";
import Developer from "./pages/CategoryPages/Developer";
import Git from "./pages/CategoryPages/Git";
import Nft from "./pages/CategoryPages/Nft";
import Computer from "./pages/CategoryPages/Computer";
import Monitor from "./pages/CategoryPages/Monitor";
import Comrade from "./pages/CategoryPages/Comrade";
import Modal from "./Components/Modal";
// theme
import appTheme from "./Components/Theme";

// redux setup
import { useSelector } from "react-redux";
// import {
// 	ClerkProvider,
// 	SignedIn,
// 	SignedOut,
// 	RedirectToSignIn,
// } from "@clerk/clerk-react";

// const frontendApi = import.meta.env.VITE_CLERK_API_FRONTEND_KEY;

function App() {
	const modalData = useSelector((data) => data.modal);
	return (
		<ThemeProvider theme={appTheme}>
			<div className="App">
				<Router>
				<Navbar />
							{modalData.showing ? <Modal /> : null}
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="about" element={<About />} />
								<Route path="home" element={<Home />} />
								<Route path="categories" element={<Categories />}>
									<Route path="bugs" element={<Bugs />} />
									<Route path="stackoverflow" element={<Stackoverflow />} />
									<Route path="javascript" element={<Javascript />} />
									<Route path="coding" element={<Coding />} />
									<Route path="css" element={<Css />} />
									<Route path="developer" element={<Developer />} />
									<Route path="git" element={<Git />} />
									<Route path="nft" element={<Nft />} />
									<Route path="computer" element={<Computer />} />
									<Route path="monitor" element={<Monitor />} />
									<Route path="comrade" element={<Comrade />} />
								</Route>
								<Route path="login" element={<Login />} />
								<Route path="contact" element={<Contact />} />
								<Route path="create" element={<Create />} />
								<Route path="success" element={<Success />} />
								<Route path="*" element={<Error />} />
							</Routes>
							<Footer />
				</Router>
			</div>
		</ThemeProvider>
	);
}

export default App;
