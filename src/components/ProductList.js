  import React, { useContext } from "react";
  import { ThemeContext, LanguageContext } from "../App";

  const ProductList = ({ products = [], loading, error }) => {
    const { isDarkTheme } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);
    
    // Affichage en cas de chargement
    if (loading) return (
      <div className="text-center my-4">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">{language === "fr" ? "Chargement..." : "Loading..."}</span>
        </div>
      </div>
    );

    // Affichage en cas d'erreur
    if (error) return (
      <div className="alert alert-danger" role="alert">
        Erreur: {error}
      </div>
    );

    // Affichage des produits ou du message "Aucun produit trouvé"
    return (
      <div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="col">
                <div className={`card h-100 ${isDarkTheme ? 'bg-dark text-light' : ''}`}>
                  {product.thumbnail && (
                    <img
                      src={product.thumbnail}
                      className="card-img-top"
                      alt={product.title}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">
                      <strong>Prix: </strong>
                      {product.price}€
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-muted text-center">{language === "fr" ? "Aucun produit trouvé." : "No products found."}</p> // Afficher si aucun produit
          )}
        </div>
      </div>
    );
  };

  export default ProductList;
