import { Route, Routes } from 'react-router-dom';
import { Context } from '../../context';
import Header from '../Header';
import Conditions from '../Conditions';
import { routes } from '../../routes/index';
import HomePage from '../../Pages/HomePage';

function App() {
	return (
		<Context.Provider value={{}}>
			<Header />
			<Conditions />
			<Routes>
				<Route path='/' element={<HomePage />} />
				{routes.map(({ path, element: Element }) => (
					<Route key={path} path={path} element={<Element />} />
				))}
			</Routes>
		</Context.Provider>
	);
}

export default App;
