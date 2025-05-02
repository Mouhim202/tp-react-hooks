import { useState, useEffect } from 'react';
import useDebounce from './useDebounce'; 
import useLocalStorage from './useLocalStorage'; 
// TODO: Exercice 3.1 - Créer le hook useDebounce
// TODO: Exercice 3.2 - Créer le hook useLocalStorage

const useProductSearch = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500)
  const [savedProducts, setSavedProducts] = useLocalStorage("products", []);
  // TODO: Exercice 4.2 - Ajouter l'état pour la pagination
  const [currentPage, setCurrentPage] = useState(1);      
  const [itemsPerPage] = useState(6);                     
  
  
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
    
      try {
    // TODO: Exercice 4.2 - Modifier l'URL pour inclure les paramètres de pagination
        const response = await fetch('https://api.daaif.net/products?delay=1000');
        if (!response.ok) throw new Error('Erreur réseau');
        const data = await response.json();
       // console.log("Produits récupérés :", data.products);
        setProducts(data.products);
        setLoading(false);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    useEffect(() => {
      if (savedProducts.length === 0) {
        fetchProducts();
      } else {
        setProducts(savedProducts); 
        setLoading(false);
      }
      }, [savedProducts]); 
      useEffect(() => {
        setCurrentPage(1);
      }, [debouncedSearchTerm]);
    
// TODO: Exercice 4.1 - Ajouter la fonction de rechargement

    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );

 


   
// TODO: Exercice 4.2 - Ajouter les dépendances pour la pagination
const indexOfLastProduct = currentPage * itemsPerPage;
const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);


// TODO: Exercice 4.2 - Ajouter les fonctions pour la pagination
const paginate = (pageNumber) => {
  setCurrentPage(pageNumber);
};

  return { 
    products, 
    loading, 
    error,
    searchTerm,
    setSearchTerm,
    // TODO: Exercice 4.1 - Retourner la fonction de rechargement
    fetchProducts,
    // TODO: Exercice 4.2 - Retourner les fonctions et états de pagination
    products: currentProducts,           
    currentPage,                         
    setCurrentPage,                       
    itemsPerPage,                         
    totalProducts: filteredProducts.length, 
    paginate     
  };
};

export default useProductSearch;