<!-- src/routes/+page.svelte -->
<div class="home_picture_forest"> 
  
  
  <h1 class="title" id="pageTitle">Partageons la nature en toute sécurité</h1>  
  
  <a href="./promeneur/"> 
      <div class="btn1">PROMENEUR</div>
  </a>
  <a href="./chasseur/inscription/">
    <div class="btn2">CHASSEUR</div>
    
  </a>
</div>

<style>
.home_picture_forest {
  object-fit: cover;  /* Ajoutez cette ligne pour ajuster l'image à la taille du conteneur */
  position: relative; /* Ajoutez cette ligne pour positionner les éléments à l'intérieur du conteneur */
  display: flex;  /* Ajoutez cette ligne pour aligner les éléments horizontalement */
  align-items: center;  /* Ajoutez cette ligne pour aligner les éléments verticalement */
  flex-direction: column; /* Ajoutez cette ligne pour aligner les éléments verticalement */
  text-align: center; /* Ajoutez cette ligne pour aligner le texte au centre */
  margin: 0 auto; /* Ajoutez cette ligne pour centrer le conteneur */
  background-image: url('../Images/background.jpg'); /* Ajoutez cette ligne pour ajouter une image de fond */
  background-size: cover; /* Ajoutez cette ligne pour ajuster l'image de fond à la taille du conteneur */
  height: 100vh; /* Adjust this value to change the height of the image */
  width: 100%;  /* Adjust this value to change the width of the image */
  justify-content: space-around;
}
.title {
position: center;
  font-family: 'Times New Roman', serif;
  color: rgb(255, 254, 254);
  font-size: 40px;
  width: 70%;
  z-index: 1;
}
.btn1 {
  font-family: 'Arial', sans-serif;
  background-color: #0f4703;
  padding: 20px 30px; /* Ajustez cette valeur pour changer la taille du bouton */
  margin-top: 40px; /* Ajustez cette valeur pour changer la marge entre les boutons */
  border-radius: 20px;  /* Ajustez cette valeur pour changer la forme du bouton */
  color: #ffffff; /* Ajustez cette valeur pour changer la couleur du texte */
  font-weight: bold; /* Ajoutez cette ligne pour rendre le texte en gras */
}
.btn2 {
  font-family: 'Arial', sans-serif;
  background-color: #d67b03;
  padding: 20px 30px; /* Ajustez cette valeur pour changer la taille du bouton */
  margin-top: 50px; /* Ajustez cette valeur pour changer la marge entre les boutons */
  border-radius: 20px;  /* Ajustez cette valeur pour changer la forme du bouton */
  color: #ffffff; /* Ajustez cette valeur pour changer la couleur du texte */
  font-weight: bold; /* Ajoutez cette ligne pour rendre le texte en gras */
}
a {
  text-decoration: none;  /* Ajoutez cette ligne pour enlever le soulignement des liens */
}
@media (max-width: 480) { /* Ajoutez cette ligne pour cibler les écrans de smartphone */
  .home_picture_forest {
    height: 90vh; /* Ajustez cette valeur pour changer la hauteur de l'image sur les écrans de smartphone */
  }
  .home_picture_forest h1 {
    font-size: 5px; /* Ajustez la taille du texte pour les écrans de smartphone */
    width: 100%; /* Ajustez la largeur du texte pour les écrans de smartphone */
  }
}
</style>