import ReactDOM from "react-dom/client";
import App from "./components/App/App";

// Я отключил React.Strictmode так как он дважды вызывает рендер компонента, еще не совсем понимаю почему такое поведение
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
