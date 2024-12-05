// import CreateTeamPage from '../pages/CreateTeamPage/index.jsx';
import HomePage from '../temp_pages/HomePage/index.jsx';
import PrizePage from '../temp_pages/PrizePage/index.jsx';
import ReviewsPage from '../temp_pages/ReviewsPage/index.jsx';
import RulesPage from '../temp_pages/RulesPage/index.jsx';

export const routes = [
	{
		path: '/',
		element: HomePage,
		label: 'Создать команду',
		width: '253px',
		className: 'createTeam',
		hoverColor: '#0038FF',
	},
	{
		path: '/prizes',
		element: PrizePage,
		label: 'Призы',
		width: '147px',
		className: 'mainButton',
		hoverColor: '#94ABFA',
	},
	{
		path: '/rules',
		element: RulesPage,
		label: 'Правила',
		width: '147px',
		className: 'mainButton',
		hoverColor: '#94ABFA',
	},
	{
		path: '/reviews',
		element: ReviewsPage,
		label: 'Отзывы',
		width: '147px',
		className: 'mainButton',
		hoverColor: '#94ABFA',
	},
];

export const getRouterByPath = (path) =>
	routes.find((route) => route.path === path);
