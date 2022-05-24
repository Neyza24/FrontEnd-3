const products = [
    { id: 1, name: "Manzana", isStock: true },
    { id: 2, name: "Pera", isStock: true },
    { id: 3, name: "Naranja", isStock: true },
    { id: 4, name: "Banana", isStock: true },
    { id: 5, name: "Kiwi", isStock: true },
    { id: 6, name: "Durazno", isStock: false },
    { id: 7, name: "Cerezas", isStock: false },
    { id: 8, name: "Anana", isStock: false },
];

const verduleria = (argument) => {
    if (argument === 1) {
        return (
            <ul>
                {products.map((product) => {
                    if (product.isStock) {
                        return <li key={product.id}>{product.name}</li>;
                    }
                })
                }
            </ul>
        );
    } else if (argument === 2) {
        return (
            <ul>
                {products.map((product) => {
                    if (!product.isStock) {
                        return <li key={product.id}>{product.name}</li>;
                    }
                })}
            </ul>
        );
    }
};

const headOne = <h1>Productos con stock</h1>;
const headTwo = <h2>Productos sin stock</h2>;

const App = (
    <div>
        {headOne}
        {verduleria(1)}
        {headTwo}
        {verduleria(2)}
    </div>
);

const hookedElement = document.getElementById("root");
ReactDOM.render(App, hookedElement);
