const Button = ({ children, callback }) => (
    <button className="flex bg-blue-500 shadow hover:shadow-lg hover:bg-blue-600 text-white rounded px-5 py-2 m-2 text-lg" onClick={callback}>{children}</button>
);

export default Button;