/* ===================================================================
   EPBC PING — FICHIER DE PARAMÉTRAGE
   ===================================================================
   C'EST LE SEUL FICHIER À MODIFIER POUR CHANGER LE CONTENU.
   Vous n'avez pas besoin de toucher à index.html.

   RÈGLES D'ÉCRITURE (importantes) :
     · Chaque valeur de texte est entre "guillemets droits" ;
     · ne supprimez ni les virgules de fin de ligne, ni les accolades { } ;
     · pour un accent dans un lien (URL), utilisez la forme encodée
       (é = %C3%A9, î = %C3%AE, è = %C3%A8) ;
     · true = oui / afficher    ·    false = non / masquer ;
     · un texte vide "" masque l'élément concerné.

   POUR AJOUTER UNE IMAGE :
     1. Préparez votre image (JPG ou PNG).
     2. Sur GitHub : ouvrez le dossier voulu -> Add file -> Upload files.
     3. Écrivez ici son nom, par ex. : image: "images/club/mon-fichier.jpg"
     4. Pour ne pas mettre d'image : image: ""
     ASTUCE : si vous téléversez un fichier portant EXACTEMENT le même nom
     qu'un fichier existant, il n'y a rien à modifier dans ce fichier.

   ORGANISATION DES DOSSIERS :
     images/            -> bannière et pavé « À la une »
     images/club/       -> vignettes des pavés de la section « Le club »
     images/galerie/    -> photos de la galerie
   =================================================================== */

window.EPBC_CONFIG = {

  /* --- IMAGE D'EN-TÊTE (bandeau tout en haut) ---------------------- */
  banniere: {
    image: "images/banniere.jpg",   // "" = aucune image
    alt:   "EPBC — Étoile Pongiste Belleville Community",
    lien:  ""                       // "" = non cliquable
  },

  /* --- PAVÉ « À LA UNE » ------------------------------------------- */
  alaune: {
    afficher: true,
    titreSection: "À la une",
    image:  "",    // "" = pas d'image sinon images/alaune.jpg
    imageAlt: "Tournoi",
    jour:   "29",                   // "" = masque la pastille date
    mois:   "Août",
    titre:  "Tournoi de pré-saison - Ouvert à tous",
    detail: "Samedi 29 août 2026",
    detail: "Tournoi à 14h00 - Inscriptions à partir de 13h00",
    lien:   "https://www.ping2belleville.net/a-la-une"  // "" = non cliquable
  },

  /* --- SECTION « LE CLUB » : pavés-liens avec vignettes -------------
     styleImage : "grande"   -> image en haut du pavé (hauteur 96 px)
                  "vignette" -> petite image carrée à gauche du texte
     Pour AJOUTER un pavé : copiez une ligne { ... } avant le crochet ]
     Pour SUPPRIMER un pavé : effacez sa ligne entière.
     "large: true" = pavé occupant toute la largeur.

     VIGNETTES DISPONIBLES dans images/club/ (extraites de votre visuel) :
       entrainements.jpg · competitions.jpg · stages-tournois.jpg
       adultes.jpg · jeunes.jpg · loisirs.jpg· contact.jpg· bureau.jpg
       adhesion.jpg ·tous-niveaux.jpg · tous-ages.jpg · ping-pour-tous.jpg */
  club: {
    afficher: true,
    titreSection: "Le club EPBC",
    styleImage: "vignette",
    paves: [
      { texte: "Entraîn.", image: "images/club/entrainements.jpg",
        lien: "https://www.ping2belleville.net/entra%C3%AEnements" },
      { texte: "Bureau", image: "images/club/bureau.jpg",
        lien: "https://www.ping2belleville.net/bureau" },
      { texte: "Adhésion", image: "images/club/adhesion.jpg",
        lien: "https://www.ping2belleville.net/adh%C3%A9sion" },
      { texte: "Contact", image: "images/club/contact.jpg",
        lien: "https://www.ping2belleville.net/contact" },
      { texte: "Site complet du club", image: "", large: true,
        lien: "https://www.ping2belleville.net/accueil" }
    ]
  },

  /* --- SECTION « GALERIE PHOTOS » -----------------------------------
     colonnes : 2, 3 ou 4 photos par ligne.
     legende  : texte sous la photo ("" = aucune légende).
     lien     : "" = la photo n'est pas cliquable ;
                sinon une adresse https://... (ex. album photo du site).
     Pour AJOUTER une photo : téléversez-la dans images/galerie/
     puis copiez une ligne { ... } avant le crochet ].                 */
  galerie: {
    afficher: true,
    titreSection: "Galerie photos",
    colonnes: 3,
    photos: [
      { image: "images/galerie/photo-1.jpg", legende: "Adultes",  lien: "https://www.ping2belleville.net/phototh%C3%A8que" },
      { image: "images/galerie/photo-2.jpg", legende: "Jeunes",   lien: "https://www.ping2belleville.net/phototh%C3%A8que" },
      { image: "images/galerie/photo-3.jpg", legende: "Loisirs",  lien: "https://www.ping2belleville.net/phototh%C3%A8que" }
    ],
    /* Bouton facultatif sous la galerie ("" = pas de bouton) */
    boutonTexte: "Voir toutes les photos",
    boutonLien:  "https://www.ping2belleville.net/phototh%C3%A8que"
  },

  /* --- SECTION « INFOS PRATIQUES » ---------------------------------
     lien : "tel:+33612345678"   -> lance un appel
            (06 12 34 56 78 devient +33612345678 : on retire le 0 initial)
            "mailto:adresse@..." -> ouvre un message
            "https://..."        -> ouvre un plan ou une page            */
  infos: {
    afficher: true,
    titreSection: "Infos pratiques",
    lignes: [
      { icone: "📍", titre: "Lancié Aréna", detail: "1313 route du Beaujolais, 69220 Lancié",
        lien: "https://www.google.com/maps/search/?api=1&query=Lanci%C3%A9%20Ar%C3%A9na%2C%201313%20route%20du%20Beaujolais%2C%2069220%20Lanci%C3%A9" },
      { icone: "📞", titre: "Christophe Rollin", detail: "06 83 54 34 33",
        lien: "tel:+33683543433" },
      { icone: "✉️", titre: "Écrire au club", detail: "ping.belleville@gmail.com",
        lien: "mailto:ping.belleville@gmail.com" }
    ]
  },

  /* --- SECTION « LIENS » (boutons externes) ------------------------ */
  liens: {
    afficher: true,
    titreSection: "Liens",
    boutons: [
      { texte: "Actualités FFTT",  lien: "https://www.fftt.com/site/" },
      { texte: "Facebook du club", lien: "https://www.facebook.com/groups/ping2belleville/" }
    ]
  },

  /* --- PIED DE PAGE ------------------------------------------------ */
  piedDePage: {
    afficher: false,
    texte: "Accès rapide — ",
    lienTexte: "ping2belleville.net",
    lien: "https://www.ping2belleville.net"
  },

  /* --- COULEURS DE L'APPLICATION ----------------------------------- */
  couleurs: {
    rouge:  "#C51A1F",
    noir:   "#051115",
    fond:   "#F5F2EF",
    carte:  "#FFFFFF",
    trait:  "#E7E1DB",
    grise:  "#5C5B58"
  },

  /* --- TITRE DE L'APPLICATION -------------------------------------- */
  titreOnglet: "EPBC Ping — Étoile Pongiste Belleville Community"
};
