# TP React Hooks - Application de Gestion de Produits

Ce TP a pour objectif de mettre en pratique l'utilisation des Hooks React (useState, useEffect, useContext) ainsi que la création de Hooks personnalisés.

## Installation et configuration initiale

1. Cloner le dépôt :
```bash
git clone https://github.com/pr-daaif/tp-react-hooks.git
cd tp-react-hooks
```

2. Créer votre propre dépôt sur Github et changer le remote :
```bash
# Supprimer le remote origine
git remote remove origin

# Ajouter votre nouveau remote
git remote add origin https://github.com/[votre-username]/tp-react-hooks.git

# Premier push
git push -u origin main
```

3. Installer les dépendances :
```bash
npm install
```

4. Lancer l'application :
```bash
npm start
```

## Instructions pour le TP

Pour chaque exercice :
1. Lisez attentivement l'énoncé
2. Implémentez la solution
3. Testez votre implémentation (pensez à faire des copies d'écran)
4. Mettez à jour la section correspondante dans ce README avec :
   - Une brève explication de votre solution
   - Des captures d'écran montrant le fonctionnement
   - Les difficultés rencontrées et comment vous les avez résolues
5. Commitez vos changements avec un message descriptif

### Exercice 1 : État et Effets 
#### Objectif : Implémenter une recherche en temps réel

- [ ] 1.1 Modifier le composant ProductSearch pour utiliser la recherche
- [ ] 1.2 Implémenter le debounce sur la recherche
- [ ] 1.3 Documenter votre solution ici

_Votre réponse pour l'exercice 1 :_
```
Expliquez votre solution ici
1/Objectif
Dans cet exercice, j'ai implémenté une fonctionnalité de recherche en temps réel dans une liste de produits. L’objectif était d’utiliser les hooks React (useState, useEffect) pour réagir aux saisies de l’utilisateur, et d’ajouter un effet de "debounce" pour ne pas exécuter la recherche à chaque frappe, mais seulement après un petit délai (500 ms).
2/Étapes de réalisation
2.1 Création de l’état pour le champ de recherche
J’ai utilisé useState pour stocker la valeur du champ de recherche :
### const [searchTerm, setSearchTerm] = useState("");
Cela me permet de mettre à jour dynamiquement la valeur saisie par l’utilisateur.
2.2 Développement du hook personnalisé useDebounce
Pour optimiser la recherche, j’ai créé un hook useDebounce. Ce hook attend un certain délai avant de mettre à jour la valeur finale utilisée pour la recherche. Cela permet d’éviter de déclencher l'effet de recherche à chaque caractère tapé.
### const debouncedSearchTerm = useDebounce(searchTerm, 500);
2.3 Utilisation de useEffect pour filtrer les produits
Une fois que j’ai obtenu la version "débouncée" du champ de recherche, j’ai utilisé useEffect pour filtrer la liste des produits.
Ce filtre est appliqué uniquement après que l’utilisateur a arrêté de taper pendant 500 ms, ce qui évite de filtrer inutilement à chaque frappe.
2.4 Interface utilisateur
J’ai ajouté un champ de recherche (input) :
3/Résultat obtenu
La recherche fonctionne en temps réel avec un léger délai grâce au debounce.
Cela rend l’expérience utilisateur plus fluide et évite des traitements inutiles quand l’utilisateur tape rapidement.
<img src="public/images/exercice1.png" alt="exercice 1">

### Exercice 2 : Context et Internationalisation
#### Objectif : Gérer les préférences de langue

- [ ] 2.1 Créer le LanguageContext
- [ ] 2.2 Ajouter le sélecteur de langue
- [ ] 2.3 Documenter votre solution ici

_Votre réponse pour l'exercice 2 :_
```
Expliquez votre solution ici
[Ajoutez vos captures d'écran]
```

### Exercice 3 : Hooks Personnalisés
#### Objectif : Créer des hooks réutilisables

- [ ] 3.1 Créer le hook useDebounce
- [ ] 3.2 Créer le hook useLocalStorage
- [ ] 3.3 Documenter votre solution ici

_Votre réponse pour l'exercice 3 :_
```
Expliquez votre solution ici
[Ajoutez vos captures d'écran]
```

### Exercice 4 : Gestion Asynchrone et Pagination
#### Objectif : Gérer le chargement et la pagination

- [ ] 4.1 Ajouter le bouton de rechargement
- [ ] 4.2 Implémenter la pagination
- [ ] 4.3 Documenter votre solution ici

_Votre réponse pour l'exercice 4 :_
```
Expliquez votre solution ici
[Ajoutez vos captures d'écran]
```

## Rendu

- Ajoutez l'URL de votre dépôt Github dans  **Classroom** et envoyer la réponse dès le démarage de votre projet.
- Les push doivent se faire au fûr et à mesure que vous avancez dans votre projet.
- Le README.md doit être à jour avec vos réponses et captures d'écran. 
- Chaques exercice doit faire l'objet d'au moins un commit avec un message mentionnant le numéro de l'exercice.