import { Route, Routes } from 'react-router-dom';
import HomePage from '../../Pages/HomePage';
import { Context } from '../../context';
import PrizePage from '../../Pages/PrizePage';
import Header from '../Header';
import Conditions from '../Conditions';
function App() {
	return (
		<Context.Provider value={{}}>
			<Header />
			<Conditions />
			<Routes>
				{/* <Route path="/" element={<Layout />}/> */}
				<Route path='/' element={<HomePage />} />
				<Route path='/prize-page' element={<PrizePage />} />
			</Routes>
		</Context.Provider>
	);
}

export default App;
