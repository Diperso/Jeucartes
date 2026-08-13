# Révision demandée

- [x] Remplacer le nom « The Reconnector » par « Le Lien » dans l’interface, les textes alternatifs et le titre de page.
- [x] Supprimer la phrase de signature du pied de page rejetée par l’utilisateur.
- [x] Créer une séparation plus nette entre le contenu de la section héro et l’image produit sur ordinateur et mobile.
- [x] Vérifier l’alignement, les marges et les respirations de chaque section, notamment les univers, le rituel, la commande et la FAQ.
- [x] Contrôler le rendu final sur ordinateur et mobile avant livraison.

## Constat visuel — ordinateur

La zone textuelle du héros est désormais nettement séparée du visuel produit : le titre conserve une largeur de lecture confortable et le coffret commence après une zone de respiration visible. Les transitions de sections, les cartes-univers, le rituel, le bloc de commande et la FAQ restent alignés sans chevauchement apparent à 1440 px de large.

## Constat visuel — mobile

À 375 px de large, le titre, le descriptif et les boutons du héros restent lisibles sans empiéter sur le visuel produit. Les sections se succèdent avec des marges cohérentes, les cartes se parcourent horizontalement sans compression et les blocs de commande et de FAQ conservent une hiérarchie claire.

## Correctif responsive prioritaire

- [x] Reproduire et diagnostiquer le chevauchement du héros sur un téléphone Android étroit.
- [x] Passer le héros mobile sur une composition verticale, où le texte est entièrement terminé avant le visuel produit.
- [x] Vérifier l’absence de débordement horizontal et de recouvrement à 320, 360, 375, 390, 412, 768, 820, 1024, 1280 et 1440 px.
- [x] Vérifier séparément la navigation, les statistiques, les cartes défilantes, la citation, le rituel, la commande, la FAQ et le pied de page aux formats téléphone et tablette.
- [x] Confirmer la compilation et capturer les formats représentatifs avant livraison.

### Contrôle téléphone — 320 et 390 px

Le héros est maintenant recomposé verticalement : le titre, le descriptif et les actions se terminent avant le début du visuel du coffret. Aucun texte n’est couvert par l’image à 320 ou 390 px. La navigation compacte, les statistiques, l’illustration d’introduction, les cartes défilantes, la citation, le rituel, la commande, la FAQ et le pied de page restent dans la largeur de l’écran, sans chevauchement observé.

Les paliers 360 et 375 px confirment le même comportement : le héros reste vertical, le bouton principal s’adapte à la largeur disponible et le visuel produit commence après les contenus textuels. Les éléments de la page restent lisibles et dans le flux de défilement.

### Contrôle tablette et ordinateur compact — 768 et 1024 px

À 768 px, les zones qui auraient été trop étroites passent à une composition verticale ou au défilement horizontal contrôlé pour les cartes. À 1024 px, le héros conserve un ordre de lecture sûr : texte puis image, sans collision ; les sections à deux colonnes conservent une largeur de lecture suffisante. Aucun débordement ou recouvrement n’est visible sur ces deux paliers.

### Contrôle bureau — 1280 et 1440 px

Les deux formats de bureau rétablissent la composition éditoriale à deux colonnes. Le texte du héros, son image produit et le macaron « 150 cartes » restent distincts. Aucun désalignement n’apparaît dans les sections suivantes, dont les quatre univers, la citation, le rituel, le bloc de commande et la FAQ.

### Contrôle complémentaire — 412 et 820 px

À 412 px, le comportement téléphone reste identique : texte, actions puis image produit dans le flux normal. À 820 px, le héros garde ce même ordre de lecture sécurisé, tandis que les sections longues s’ouvrent en une colonne et que les cartes conservent un défilement horizontal explicite. Aucun recouvrement ni débordement horizontal non intentionnel n’a été observé.

## Restauration de l’identité d’origine

- [x] Remettre « The Reconnector » dans l’en-tête, le pied de page, les libellés, les e-mails et les métadonnées.
- [x] Restaurer la signature « À Allah, soit-Moi et c’est tout ce qui compte. » dans le pied de page.
- [x] Vérifier que la restauration textuelle n’altère pas l’équilibre du logo ni le rendu responsive.

### Contrôle de l’identité restaurée

Le nom The Reconnector est lisible dans l’en-tête, le panneau de commande et le pied de page à 1280 px. À 375 px, il reste contenu dans le verrou de marque sans collision avec la navigation ni les contenus du héros. La phrase de signature est rétablie au pied de page et le rendu responsive reste intact.

## Animations premium

- [x] Mettre en place des révélations au défilement, calmes et décalées, pour les séquences éditoriales.
- [x] Ajouter des micro-interactions précieuses aux cartes, aux liens et aux boutons.
- [x] Animer les motifs de lune, les halos et les éléments du héros avec retenue, exclusivement via transform et opacity.
- [x] Respecter `prefers-reduced-motion` et vérifier les animations sur téléphone et ordinateur.

### Contrôle mouvement — ordinateur

Le rendu à 1280 px conserve les proportions, les espacements et les repères éditoriaux après l’ajout du système de mouvement. Les révélations, les micro-interactions et les mouvements décoratifs n’ajoutent aucun chevauchement apparent ; les cartes-univers conservent leur décalage de piliers imprimés.

### Contrôle mouvement — téléphone et accessibilité

À 375 px, la page conserve sa lecture verticale et les animations n’empiètent pas sur les contenus ni sur le défilement. Les mouvements non essentiels sont encapsulés dans une règle `prefers-reduced-motion: no-preference` : un appareil ou un navigateur demandant une réduction des mouvements conserve donc une interface statique et complète.

## Compaction du héros mobile

- [x] Réduire la hauteur occupée par le visuel produit sur téléphone et le traiter comme une vignette éditoriale.
- [x] Préserver une séparation nette entre le texte, les boutons et l’image.
- [x] Vérifier que la première section conserve une lecture compacte à 320, 375 et 412 px sans altérer le bureau.

### Observation intermédiaire

Le passage du visuel produit à une vignette recadrée diminue déjà nettement la longueur du héros, sans perturber le texte ni les actions. La vignette est encore réduite une dernière fois pour qu’elle termine plus près du premier écran sur téléphone.

### Contrôle du héros compact — 320 et 375 px

Le héros est désormais sensiblement plus court : à 320 px, le visuel produit est une vignette de fin de section et les statistiques suivantes commencent déjà à apparaître dans le premier écran. À 375 px, le texte, les actions et la vignette restent séparés, sans recouvrement ni espace inutilement long.

À 412 px, la vignette complète le héros avant l’arrivée immédiate des statistiques. La vérification à 1280 px confirme que le bureau conserve sa mise en scène grand format d’origine, inchangée.

## Lisibilité du prix

- [x] Recomposer l’affichage pour que « 29,90 € » se lise comme une seule unité.
- [x] Vérifier le prix dans le panneau de commande sur téléphone et ordinateur.

### Contrôle du prix

Le montant s’affiche désormais comme un groupe unique « 29,90 € » : les centimes et la devise restent accolés au 29, avec un léger décalage vertical seulement décoratif. Le résultat est lisible dans le panneau de commande sur téléphone et ordinateur.

## Adaptation téléphone pliable

- [x] Créer un palier intermédiaire avant la mise en page de bureau pour les écrans étroits et hauts.
- [x] Garder le héros en composition compacte avec une vignette produit courte sur ce palier.
- [x] Tester le format pliable, les téléphones classiques et l’ordinateur après l’ajustement.

### Contrôle pliable et téléphone

À 820 × 1460 px, le héros garde désormais une image produit recadrée et s’achève juste avant les statistiques, au lieu de former une très longue seconde partie. À 375 px, le format mobile compact existant reste intact : texte, actions, vignette et statistiques se suivent sans recouvrement.

À 1280 px, la composition grand format avec le visuel produit en arche reste inchangée.

## Correction pliable par orientation

- [x] Remplacer le palier dépendant de la largeur par un palier portrait qui fonctionne avec le viewport réel du pliable.
- [x] Forcer la vignette produit compacte dans ce scénario, même lorsque le navigateur utilise une largeur CSS proche du bureau.
- [x] Vérifier le portrait pliable à largeur étendue, le mobile et le bureau.

### Contrôle portrait indépendant de la largeur

À 1080 × 1945 px, qui reproduit le format vertical large de la capture reçue, le héros garde désormais une vignette produit basse et se termine immédiatement avant les statistiques. À 375 px, la composition mobile courte déjà validée est inchangée.

Le test à 1280 × 900 px confirme que la règle portrait n’a aucun effet sur la composition bureau grand format.

## Honor Magic V3 — correction dédiée

- [x] Confirmer les résolutions physiques et le viewport CSS probable du Honor Magic V3 ouvert et fermé.
- [x] Reproduire le viewport ouvert réel et appliquer un palier de héros compact adapté, même lorsqu’un navigateur annonce une largeur CSS de bureau.
- [x] Vérifier le format extérieur, le format ouvert et le bureau avant livraison.

### Validation Honor Magic V3

La résolution interne native **2156 × 2344 px** et le viewport probable **820 × 893 px** appliquent tous deux le héros compact. L’écran externe reproduit à **360 × 800 px** conserve la variante mobile courte. La mise en scène bureau à **1280 × 900 px** reste inchangée.

## Correctif déterministe Honor Magic V3

- [x] Identifier pourquoi la capture réelle conserve le ratio d’image naturel malgré les paliers CSS : le viewport Android ne correspond pas de façon fiable aux seuils CSS.
- [x] Créer une variante compacte de héros qui limite explicitement la hauteur de l’image sur les grands écrans portrait.
- [x] Reproduire la capture du Magic V3 et vérifier les formats mobile et bureau avant livraison.

### Contrôle du verrou déterministe

Le héros est contrôlé à la résolution interne **2156 × 2344 px**, où le visuel produit reste dans une vignette de hauteur limitée. À **375 × 812 px**, la variante mobile courte demeure inchangée. La détection directe Honor applique ce même verrou sur le navigateur du Magic V3, même si son viewport ne satisfait pas les media queries attendues.

La vérification à **1280 × 900 px** confirme que la composition de bureau demeure inchangée.

## Analyse vidéo Honor Magic V3

- [x] Examiner la vidéo fournie pour relever la cause exacte du comportement du héros.
- [x] Distinguer un problème de cache, d’état de zoom, de viewport ou de mise en page : la vidéo montre une rupture de contrainte déclenchée au retour en haut, non un cache ni un zoom global.
- [x] Corriger uniquement le mécanisme confirmé par la vidéo : le visuel produit est maintenant sans transformation animée, avec contraintes verrouillées et détection mise à jour à chaque changement de viewport.

### Validation après analyse vidéo

Le héros reste compact et sans recouvrement à **375 × 812 px**. À **1280 × 900 px**, la composition bureau conserve le visuel produit dans son arche, mais sans animation de transformation. Le verrou Honor est recalculé au chargement, au retour de page, au redimensionnement, au changement d’orientation et lors de l’évolution du viewport visuel.

## Héros statique

- [x] Supprimer toutes les animations continues du fond, de la pierre, du macaron et du motif du héros.
- [x] Conserver un premier écran stable dès le chargement, y compris sur Honor Magic V3.
- [x] Vérifier que les animations de contenu situées après le héros restent discrètes et fonctionnelles.

### Validation du héros statique

Le premier écran est stable à **375 × 812 px** et à **1280 × 900 px** : aucun élément du héros ne se déplace au chargement ou pendant le défilement. Les animations de révélation et d’interaction restent limitées aux contenus qui suivent le héros.

## Composition initiale lune et coffret

- [x] Afficher une grande lune décorative dans la moitié droite du héros dès l’arrivée sur la page.
- [x] Abaisser le visuel du coffret pour qu’il n’apparaisse que partiellement sous la lune, comme sur la référence.
- [x] Garder cette composition entièrement statique et l’adapter au pliable, au téléphone et au bureau.

### Contrôle intermédiaire de la lune

La première version de la lune a confirmé la composition demandée, mais son recadrage initial affichait une zone neutre de l’image source. Le point focal est maintenant déplacé sur la lune lumineuse elle-même pour restituer l’effet de la référence sans introduire de mouvement.

Le contrôle confirme que cette lune est pertinente sur le pliable large, mais qu’elle recouvre le texte sur téléphone. Elle est donc réservée aux largeurs de **681 px et plus**, tandis que le héros mobile retrouve sa composition compacte sans lune.

### Validation de la composition de référence

À **1080 × 878 px**, le héros affiche dès l’arrivée une grande lune pleine à droite et le coffret abaissé en second plan, sans mouvement. À **375 × 812 px**, le décor de grande lune est désactivé, ce qui préserve la lecture du texte et la composition compacte du téléphone.

## Synchronisation GitHub complète

- [x] Inspecter la branche et le contenu existant du dépôt Diperso/Jeucartes.
- [x] Inclure le code, les fichiers de configuration, les ressources visuelles locales et la documentation utile.
- [x] Mettre à jour les références d’images distantes afin que le dépôt soit autonome.
- [ ] Commiter et envoyer la synchronisation complète vers GitHub.
