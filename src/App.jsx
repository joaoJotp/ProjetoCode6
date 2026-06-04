import Header from './componentes/Header/Header.jsx';
import Hero from './componentes/Hero/Hero.jsx';         
import ProductCard from './componentes/ProductCards/ProductCard.jsx';
import Footer from './componentes/Footer/Footer.jsx';

function App() {
  const productsData = [
    {
      id: 1,
      title: "React de A a Z",
      tag: "Curso Online",
      description: "Domine a biblioteca mais popular do mercado, do zero ao profissional.",
      price: 199.90,
      imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UmVhY3R8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 2,
      title: "Guia de CSS Moderno",
      tag: "Ebook",
      description: "Flexbox, Grid, Animações e as melhores práticas para layouts incríveis.",
      price: 49.90,
      imageUrl: "https://images.unsplash.com/photo-1634634465913-5bb5600942f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y3NzfGVufDB8fDB8fHww"
    },
    {
      id: 3,
      title: "Node.js Escalável",
      tag: "Curso Online",
      description: "Construa APIs robustas e de alta performance com Node.js e TypeScript.",
      price: 249.90,
      imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bm9kZWpzfGVufDB8fDB8fHww"
    },
    {
      id: 4,
      title: "UI/UX para Desenvolvedores",
      tag: "Ebook",
      description: "Princípios de design essenciais para criar interfaces bonitas e intuitivas.",
      price: 79.90,
      imageUrl: "https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVpJTIwdXh8ZW58MHx8MHx8fDA%3D"
    }
  ];

  return (
    <>

      <Header />
      
      <main className="container">
    
        <Hero 
          titulo="Nova Coleção Alpha" 
          subtitulo="Os melhores ebooks e cursos te esperam." 
        />
        <section className="product-grid">
          {productsData.map((product) => (
            <ProductCard 
              key={product.id} 
              title={product.title}
              tag={product.tag}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </section>
      </main>
      <Footer companyName="AlphaTech" year={2026} />
    </>
  );
}
export default App;