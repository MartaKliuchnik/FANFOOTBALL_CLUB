import './index.module.css';
export default function ActiveButton({ children, ...props }) {
	return <button {...props}>{children}</button>;
}