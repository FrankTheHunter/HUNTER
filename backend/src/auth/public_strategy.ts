import { SetMetadata } from '@nestjs/common'; // Importation de la fonction SetMetadata de Nest.js

// Clé utilisée pour stocker les métadonnées associées à une route publique
export const IS_PUBLIC_KEY = 'isPublic';

// Décorateur pour marquer une route comme publique (accessible sans authentification)
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
