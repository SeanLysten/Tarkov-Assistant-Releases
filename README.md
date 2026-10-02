# Tarkov-Assistant-Releases

Fonctionnalités
Trois personnages séparés : PvP Saison (par défaut), PvP et PvE, chacun avec ses quêtes, son niveau, sa planque, ses niveaux de fidélité et son propre marché (les serveurs saisonniers sont indépendants, patch 1.1.0.0).
Quêtes : objectifs, récompenses, prérequis, quêtes débloquées, clés nécessaires, guide du wiki traduit, suivi Kappa / Lightkeeper, ce qu'il manque pour débloquer une quête.
Suivi : quêtes en cours, disponibles maintenant (y compris par déduction à partir des logs), prochaines étapes et prochaine vague de chaque marchand.
Arbre des quêtes : graphe à embranchements par marchand (ou complet), comme un arbre de compétences. Les flèches viennent des prérequis du jeu (terminer / accepter / échouer) et des paliers de progression interne ; un clic surligne tout le chemin pour débloquer une quête et tout ce qu'elle débloque, avec son détail à côté. L'accès à chaque marchand est lu sur le wiki.
Parcours : les quêtes de chaque marchand rangées sous la quête qui les débloque, dans l'ordre, étape par étape.
Histoire principale (chapitres) et quêtes des événements en cours : lues sur le wiki (absentes des données de tarkov.dev), avec leurs objectifs à cocher et l'ordre des quêtes de l'événement. Pour chaque chapitre : guide illustré étape par étape (sommaire cliquable, cartes et captures agrandissables) et lieux où aller pour le démarrer. Les quêtes d'événement ont aussi leur guide illustré.
BattlePass de la saison (ex. « KORD BREACH ») : dates, règles et limites quotidiennes, les 8 types de documents avec leurs cartes, photos de chaque emplacement (wiki) et ouverture de la carte interactive avec les emplacements en surbrillance (positions tarkov.dev). Toutes les saisons décrites sur le wiki (pages « BattlePass » et « Seasons ») sont lues : l'app affiche celle en cours à la date du jour, annonce la suivante, et bascule seule à sa date de début.
Suivi automatique par les logs du jeu : les quêtes démarrées, échouées et terminées sont cochées sur le bon personnage selon le mode de la session. Import de l'historique encore présent dans le dossier Logs.
Niveau estimé : saisie du niveau (ou de l'XP exacte), puis ajout de l'XP des quêtes terminées.
Flea market : catégories du jeu, recherche en anglais, prix le plus bas / moyen / le plus haut (₽, conversions $ et €), historique des prix, où acheter et où vendre (taxe calculée avec la formule du jeu).
Prix communs à toute l'application : l'offre la moins chère réellement accessible au personnage (niveau de fidélité, quête de déblocage, échange, niveau requis au marché) ; à défaut, le dernier prix relevé sur le marché.
Objets : comment l'obtenir, quêtes qui l'utilisent (avec ta progression), planque, échanges, fabrications, emplacements de butin au sol, caractéristiques.
Objets à garder : besoins restants des quêtes et de la planque, FIR, objectifs « au choix », argent demandé.
Cartes interactives : extractions, transits, apparitions PMC / Scav, boss, butin au sol par catégorie ou par objet, conteneurs, serrures et clés, dangers, leviers, objectifs de tes quêtes, étages.
Armes et builds : méta communautaire sourcée, optimiseur de build (recul, équilibré, ergonomie, moins cher) avec le prix de chaque pièce, munitions compatibles, presets officiels.
Recherche de prix rapide : bouton « Prix » ou raccourci global (Alt+Shift+F par défaut, à enregistrer en pressant les touches dans les Paramètres, désactivable) qui ramène la fenêtre de l'app et répond « combien ça vaut » (revente, prix par case) et « faut-il le garder » (quêtes, planque). Aucun overlay : rien n'est affiché dans le jeu.
Préparer un raid : pour une carte, tes quêtes débloquées à y faire, ce qu'il faut emporter (objets à placer, marqueurs, clés), ce que tu peux y trouver, les documents du BattlePass et les extractions.
Tendances du marché : en ce moment (plus fortes hausses et baisses sur 48 h, meilleure valeur par case) et cycle du wipe : objets chers en début de wipe (à vendre tôt) et objets qui prennent de la valeur (à garder), mesurés sur les wipes PvP passés (historique tarkov.dev depuis 2022, dates des wipes lues dans le journal des mises à jour du wiki), avec une vérification sur la saison en cours.
Rentabilité : fabrications de la planque (bénéfice par fabrication et par heure) et échanges des marchands.
Munitions, boss, marchands, planque (niveaux saisis à la main), tableau de bord.
Cercle des cultistes : recettes à résultat fixe, offrande la moins chère pour atteindre les seuils de valeur (400 000 ₽ : 25 % de chance d'objets de quêtes en 6 h), composeur d'offrande.
Notes de patch (journal du wiki + annonces officielles sur Steam), roadmap sourcée, lecteur du wiki : traduits en français avec DeepL, les noms du jeu restant en anglais.
Sécurité du compte
L'app reste un outil hors du jeu : aucune lecture de la mémoire du jeu, aucune injection, aucune modification de ses fichiers, aucun overlay, aucune capture d'écran ni envoi de touches au jeu. Elle lit seulement des données publiques et, en lecture seule, les fichiers de logs que le jeu écrit (comme TarkovMonitor). BattlEye indique ne pas bannir pour des programmes qui ne trichent pas, mais Battlestate Games ne publie pas de liste d'outils autorisés : aucun outil tiers ne peut garantir un risque nul.

Installation (Windows)
Télécharger le dernier Tarkov-Assistant-Setup-x.y.z.exe sur https://github.com/SeanLysten/Tarkov-Assistant-Releases/releases et le lancer (une seule fois). L'installateur n'est pas signé : Windows SmartScreen peut demander une confirmation (« Informations complémentaires » puis « Exécuter quand même »).

Mises à jour
Chaque push sur la branche principale de développement construit l'application (version 1.1.<numéro du build>) et la publie dans le dépôt public SeanLysten/Tarkov-Assistant-Releases (le code reste dans ce dépôt privé). L'application vérifie au démarrage puis toutes les 2 heures ; un bandeau propose de télécharger la nouvelle version puis de redémarrer pour l'installer. La progression (stockée dans le dossier de données de l'utilisateur) est conservée.

Configuration (une fois) :

Créer le dépôt public SeanLysten/Tarkov-Assistant-Releases, initialisé avec un README.
Créer un jeton GitHub « fine-grained » limité à ce dépôt, permission Contents : Read and write.
Dans ce dépôt-ci : Settings → Secrets and variables → Actions → secret RELEASES_TOKEN = le jeton.
Sans ce secret, le workflow construit l'installateur sans le publier (avertissement dans GitHub Actions).

Pour le construire soi-même sous Windows : npm ci puis npm run dist (fichier dans release/).

Sources de données
Données	Source	Mise à jour
Objets, prix, quêtes, cartes, marchands, planque, échanges, fabrications, boss	tarkov.dev (json.tarkov.dev, données extraites du jeu, prix relevés par la communauté)	vérification toutes les 10 min (cache disque ETag, fonctionne hors ligne)
Historique des prix, statut des serveurs	tarkov.dev	à la demande
Configuration des cartes interactives	the-hideout/tarkov-dev (licence MIT), copie incluse en secours	24 h
Guides, journal des patchs, pages du wiki, recettes du cercle	wiki Escape from Tarkov (Fandom, CC BY-SA)	30 min
Annonces officielles	API Steam News (application 3932890)	20 min
Roadmap	feuille de route officielle du 27 août 2026 (lien vers chaque source)	fichier src/data/roadmap.ts
Méta des armes	Tigz (9 sept. 2026), LepreStore (25 sept. 2026), RankedMeta : avis, sourcés et datés	fichier src/data/meta.ts
Limites à connaître
BSG ne propose pas d'API publique pour le marché : les prix viennent des relevés de tarkov.dev (en général moins d'une heure de retard), en roubles uniquement ; les montants en $ et € sont des conversions au taux des marchands.
Le jeu n'écrit pas le niveau du personnage dans ses logs : seule l'XP des quêtes est ajoutée à l'estimation.
La traduction demande une clé DeepL (l'offre gratuite « DeepL API Free » suffit) ; sans clé, les textes du wiki restent en anglais.
Les classements méta sont des opinions de créateurs de contenu, pas des données du jeu.
Beaucoup de quêtes se débloquent par une condition interne au jeu (dialogue avec le marchand, variable de progression) que les données ne détaillent pas. Chaque condition est un seuil (« >= ») sur un compteur propre à un marchand : une quête du même groupe acceptée ou terminée prouve le seuil atteint, et les quêtes de seuil inférieur ou égal passent en « Disponible » (déduction). Les autres restent « Condition en jeu » jusqu'à ce que tu les acceptes (logs ou bouton).
Les chapitres de l'histoire et les quêtes d'événement n'apparaissent pas dans les logs avec un identifiant connu : leur progression se coche à la main.
