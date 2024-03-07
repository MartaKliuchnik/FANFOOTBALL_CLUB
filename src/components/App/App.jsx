import { Route, Routes } from 'react-router-dom';
import { Context } from '../../context';

function App() {
	return (
		<Context.Provider value={{}}>
			<Routes>
				{/* <Route path="/" element={<Layout />}/> */}
				{/* <Route path="/" element={<HomePage />}/> */}
				{/* <Route path='*' element={<EmptyRequestPage />} /> */}
			</Routes>
		</Context.Provider>
	);
}

export default App;
