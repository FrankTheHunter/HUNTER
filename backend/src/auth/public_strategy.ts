<<<<<<< HEAD
import { SetMetadata } from '@nestjs/common';
export const IS_PUBLIC_KEY = 'isPublic';
=======
import { SetMetadata } from '@nestjs/common'; // Importation de la fonction SetMetadata de Nest.js

// Clé utilisée pour stocker les métadonnées associées à une route publique
export const IS_PUBLIC_KEY = 'isPublic';

// Décorateur pour marquer une route comme publique (accessible sans authentification)
>>>>>>> 3130ac3263d985a9860438a64dd8618915eb6009
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
