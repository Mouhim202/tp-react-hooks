import React, { useState, useContext, useEffect } from "react";

import { ThemeContext, LanguageContext } from "../App";
import useProductSearch from "../hooks/useProductSearch"; 
import ProductList from "./ProductList";
import useDebounce from "../hooks/useDebounce"; 


const ProductSearch = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext); // TODO: Exercice 2.1 - Utiliser le LanguageContext

  const { products, loading, error } = useProductSearch(); 
  const [searchTerm, setSearchTerm] = useState("");  
  const [filteredProducts, setFilteredProducts] = useState([]); 
  // TODO: Exercice 1.2 - Utiliser le hook useDebounce
  
  const debouncedSearchTerm = useDebounce(searchTerm, 500); // 500ms de délai
  useEffect(() => {
    if (debouncedSearchTerm === "") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => 
          product.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        )
      );
    }
  }, [debouncedSearchTerm, products]);
  

  const handleSearch = (e) => {
    setSearchTerm(e.target.value); 
  };

  return (
    <div className="mb-4">
      {}
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder={language === "fr" ? "Rechercher un produit..." : "Search for a product..."}
        className={`form-control ${isDarkTheme ? 'bg-dark text-light' : ''}`}
      />

      <br />
    
      {}
      <ProductList 
        products={filteredProducts} 
        loading={loading} 
        error={error}
      />

    </div>
  );
};

export default ProductSearch;
