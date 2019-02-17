// On utilise le raccourci d'écriture de $(document).ready(function(){function name(parameters) { }) 
$(function() {
// On déclare la variable $mainMenuItems et on y stocke tous les éléments li enfants de la liste non ordonnée du menu principal
    var $mainMenuItems = $('#main-menu ul').children('li'),
            // On déclare la variable totalMainMenuItems et on y stocke le nombre d'éléments que la propriété length retourns
            totalMainMenuItems = $mainMenuItems.length,
            // la valeur 2 correspond à l'index2 (3 ème photo)
            openedIndex = 2,
            // On initialise la fonction init
            init = function() {

                // On execute la fonction bindEvents 
                bindEvents();
                // Si l'index est valide on ouvre l'index 2 (photo 3) en arrivant sur la page du site
                if (validIndex(openedIndex)) {
                    animateItem($mainMenuItems.eq(openedIndex), true, 1000);
                }

            },
            // Déclaration de la fonction pour lier les évènements de notre animation
            bindEvents = function() {

                // On rattache le click aux images de tous les enfants qui ont la class .images
                $mainMenuItems.children('.images').click(function() {
                    /* On déclare une variable var newIndex et y on stocke l'index du parent de l'image (élément) sur 
                     * laquelle on a cliqué.
                     * $(this) se rapporte à l'élément sur lequel on a cliqué
                     */
                    var newIndex = $(this).parent().index(),
                            $item = $mainMenuItems.eq(newIndex);
                    // Si l'index qui est cliqué est égal à l'index qui était déja ouvert, alors on doit fermer
                    if (openedIndex === newIndex) {
                        // On donne les valeurs des paramètres à la fonction animateItem
                        animateItem($item, false, 250);
                        // la valeur -1 correspond à l'affichage initial 
                        openedIndex = -1;
                    } else {
                        // Si l'index est fermé
                        if (validIndex(newIndex)) {
                            animateItem($mainMenuItems.eq(openedIndex), false, 250);
                            // On stocke la nouvelle valeur de l'index dans la variable openedIndex
                            openedIndex = newIndex;
                            // On ouvre l'index
                            animateItem($item, true, 250);
                        }
                    }
                });
                
                // Utilisation de l'évènement hover au survole du bouton 
                $('.button').hover(
                        // Fonction pour ajouter la classe hovered css au survole de la souris sur le bouton
                        function() {
                            $(this).addClass('hovered');
                        },
                        // Fonction pour supprimer la classe hovered css lorsque la souris ne survole plus le bouton 
                        function() {
                            $(this).removeClass('hovered');
                        });
                        
                // Utilisation de lévènement click pour ouvrir la description des photos
                $('.button').click(function(){ 
                    // on récupère l'index du bouton qui est le même que celui de l'image
                    var newIndex = $(this).index();
                    $item = $mainMenuItems.eq(newIndex);
                    // Si l'index qui est cliqué est égal à l'index qui était déja ouvert, alors on doit fermer
                    if (openedIndex === newIndex) {
                        // On donne les valeurs des paramètres à la fonction animateItem
                        animateItem($item, false, 250);
                        // la valeur -1 correspond à l'affichage initial 
                        openedIndex = -1;
                    } else {
                        // Si l'index est fermé
                        if (validIndex(newIndex)) {
                            animateItem($mainMenuItems.eq(openedIndex), false, 250);
                            // On stocke la nouvelle valeur de l'index dans la variable openedIndex
                            openedIndex = newIndex;
                            // On ouvre l'index
                            animateItem($item, true, 250);
                        }
                    }
                });
            },
            
                    /* Déclaration de la fonction validIndex pour être sûr que l'index est valide.
                     * On met en paramètre l'index que l'on veut controler 
                     */
                    validIndex = function(indexToCheck) {
                        // on va retourner true oou false 
                        return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
                    },
                    // Déclaration de la fonction animateItem avec l'index de l'item, l'animation, la vitesse d'exécution 
                    animateItem = function($item, toOpen, speed) {
                        // On stocke l'index de l'item couleur dans la variable $colorImage
                        var $colorImage = $item.find('.color'),
                                // Si on ouvre, la largeur de l'item passe à 420px sinon la largeur passe à 140px
                                itemParam = toOpen ? {width: '420px'} : {width: '140px'},
                                /* Si on ouvre, l'item couleur sera placé à 0px de la gauche pour le voir, 
                                 * Sinon il sera placé à 140px de la gauche pour le cacher
                                 */
                                colorImageParam = toOpen ? {left: '0px'} : {left: '140px'};
                        // On utilise la fonction animate qui fera apparaitre la photo couleur
                        $colorImage.animate(colorImageParam, speed);
                        // On utilise la fonction animate pour agrandir l'item et faire apparaitre la description de la photo
                        $item.animate(itemParam, speed);
                    };
            // On utilise la fonction init()
            init();
        });