import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../App";
import useProductSearch from "../hooks/useProductSearch"; // Récupère les produits via ton hook
import ProductList from "./ProductList";

const ProductSearch = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const { products, loading, error } = useProductSearch(); // Utilisation du hook pour récupérer les produits
  const [searchTerm, setSearchTerm] = useState("");  // Etat pour le terme de recherche
  const [filteredProducts, setFilteredProducts] = useState([]); // Produits filtrés
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm); // Terme de recherche après debounce

  // Déclenche le debounce
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm); // Applique le terme de recherche après le délai
    }, 500); // 500ms de délai avant d'appliquer la recherche

    // Annule le délai précédent si le terme change avant la fin du délai
    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]); // Se déclenche à chaque changement de searchTerm

  // Met à jour les produits filtrés lorsque le terme de recherche débouncé change
  useEffect(() => {
    if (debouncedSearchTerm === "") {
      setFilteredProducts(products); // Si aucune recherche, montrer tous les produits
    } else {
      setFilteredProducts(
        products.filter((product) =>
          product.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        )
      );
    }
  }, [debouncedSearchTerm, products]); // Réexécuter lorsque le debouncedSearchTerm ou les produits changent

  const handleSearch = (e) => {
    setSearchTerm(e.target.value); // Met à jour le terme de recherche en temps réel
  };

  return (
    <div className="mb-4">
      {/* Champ de recherche */}
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Rechercher un produit..."
        className={`form-control ${isDarkTheme ? 'bg-dark text-light' : ''}`}
      />

      {/* Passer les produits filtrés à ProductList */}
      <ProductList 
        products={filteredProducts} // Passe les produits filtrés à ProductList
        loading={loading} 
        error={error}
      />
    </div>
  );
};

export default ProductSearch;
