import React, { useState, useContext, useEffect } from "react";

import { ThemeContext, LanguageContext } from "../App";
import useProductSearch from "../hooks/useProductSearch"; 
import ProductList from "./ProductList";
import useDebounce from "../hooks/useDebounce"; 
import Pagination from "./Pagination"; 


const ProductSearch = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext); // TODO: Exercice 2.1 - Utiliser le LanguageContext

  const { products, loading, error, fetchProducts,currentPage,setCurrentPage,itemsPerPage, totalProducts } = useProductSearch();
  
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
  const handleReload = () => {
    setSearchTerm("");            // Réinitialiser la recherche
    fetchProducts();              // Recharge les produits
  };
  
  return (
    <div className="mb-4">
      {}
      <div className="d-flex ">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder={language === "fr" ? "Rechercher un produit..." : "Search for a product..."}
        className={`form-control ${isDarkTheme ? 'dark-placeholder bg-dark text-white border-light' : ''}`}
      />

   
      <button onClick={handleReload} className="btn btn-secondary ms-3">
      {language === "fr" ? "Recharger" : "Reload"}
      </button>
      <br />
      </div> 
      <br /> 
      {}
      <ProductList 
        products={filteredProducts} 
        loading={loading} 
        error={error}
      />
    <Pagination
      currentPage={currentPage}
      itemsPerPage={itemsPerPage}
      totalProducts={totalProducts}
      paginate={setCurrentPage}
    />

    </div>
    
  );
};

export default ProductSearch;
