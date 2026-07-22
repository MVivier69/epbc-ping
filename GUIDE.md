# EPBC Ping — Guide d'utilisation

## Principe
Le contenu de l'application ne se trouve plus dans le code.
**Un seul fichier à modifier : `config.js`.**

| Fichier | Rôle | Modifier ? |
|---|---|---|
| `config.js` | Textes, images, liens, couleurs | ✅ OUI |
| `images/` | Bannière et image « À la une » | ✅ OUI (téléversement) |
| `images/club/` | Vignettes des pavés « Le club » | ✅ OUI (téléversement) |
| `images/galerie/` | Photos de la galerie | ✅ OUI (téléversement) |
| `index.html` | Moteur de l'application | ❌ non |
| `sw.js` | Fonctionnement hors connexion | ❌ (sauf mise à jour, voir plus bas) |
| `manifest.webmanifest` | Fiche d'installation | ❌ non |
| `icons/` | Icône sur l'écran d'accueil | uniquement pour changer l'icône |

---

## 1. Changer un texte
Ouvrir `config.js` sur GitHub → icône crayon → modifier le texte
entre "guillemets" → **Commit changes**. Effet immédiat.

## 2. Ajouter ou remplacer une image

### Cas A — remplacer une image existante (le plus simple)
Téléverser un fichier portant **exactement le même nom**
(ex. `alaune.jpg`) dans le dossier `images/`.
→ Aucune modification de `config.js` nécessaire.

Sur GitHub : dossier `images` → **Add file** → **Upload files**
→ glisser le fichier → **Commit changes**.

### Cas B — utiliser un nouveau nom de fichier
1. Téléverser l'image dans `images/` (ex. `tournoi-mars.jpg`)
2. Dans `config.js`, indiquer :
   `image: "images/tournoi-mars.jpg"`

### Cas C — supprimer l'image d'un pavé
Dans `config.js` : `image: ""`

**Conseils images** : format JPG (photos) ou PNG (logos, transparence),
largeur 800 à 1200 px, poids visé sous 300 Ko.
Le pavé « À la une » affiche l'image sur 170 px de haut, recadrée
automatiquement et centrée : privilégier un visuel dont le sujet est au centre.

---

## 2 bis. Images des pavés « Le club »

Chaque pavé accepte une image, via le champ `image:`.

**Deux présentations possibles** — champ `club.styleImage` :

| Valeur | Rendu |
|---|---|
| `"grande"` | Image en haut du pavé (96 px de haut) — réglage actuel |
| `"vignette"` | Petite image carrée (46 px) à gauche du texte |

**9 vignettes déjà disponibles** dans `images/club/`, extraites de votre visuel :

    entrainements.jpg · competitions.jpg · stages-tournois.jpg
    adultes.jpg · jeunes.jpg · loisirs.jpg
    tous-niveaux.jpg · tous-ages.jpg · ping-pour-tous.jpg

Pour changer la vignette d'un pavé, il suffit de remplacer le nom du fichier :

    { texte: "Bureau", image: "images/club/loisirs.jpg", lien: "..." },

Un pavé sans image (`image: ""`) reste affiché normalement, en texte seul.

---

## 2 ter. Galerie photos

Section `galerie` de `config.js`.

| Réglage | Effet |
|---|---|
| `afficher` | `true` / `false` |
| `colonnes` | `2`, `3` (actuel) ou `4` photos par ligne |
| `legende` | Texte sous la photo (`""` = aucune) |
| `lien` | `""` = photo non cliquable ; sinon une adresse |
| `boutonTexte` / `boutonLien` | Bouton facultatif sous la galerie (`""` = masqué) |

**Ajouter une photo :**
1. Téléverser le fichier dans `images/galerie/`
2. Ajouter une ligne dans `photos` :

       { image: "images/galerie/tournoi-2026.jpg", legende: "Tournoi 2026", lien: "" },

Les photos sont affichées en **carré**, recadrées automatiquement et centrées :
privilégier des visuels dont le sujet est au centre.
Le nombre de photos n'est pas limité ; elles se chargent au fil du défilement.

---

## 3. Ajouter un pavé dans « Le club »
Dans `config.js`, section `club.paves`, copier une ligne :

    { texte: "Photothèque", lien: "https://www.ping2belleville.net/phototh%C3%A8que" },

⚠️ Accents dans les liens : é = `%C3%A9`, î = `%C3%AE`, è = `%C3%A8`

## 4. Masquer une section entière
Passer `afficher: true` à `afficher: false`.

## 5. Changer les couleurs
Section `couleurs` de `config.js` (codes hexadécimaux).
`rouge` modifie aussi la couleur de la barre d'état du téléphone.

---

## 6. Publier une mise à jour

| Ce que vous modifiez | Action nécessaire |
|---|---|
| `config.js` ou fichiers de `images/` | **Rien de plus** — visible au prochain lancement |
| `index.html` ou `sw.js` | Incrémenter la version dans `sw.js` : `epbc-v5` → `epbc-v6` |

C'est volontaire : `config.js` et tout le dossier `images/`
(y compris `club/` et `galerie/`) sont rechargés
depuis le réseau à chaque ouverture, tandis que le reste de
l'application est mis en cache pour la rapidité et le hors-connexion.

---

## 7. En cas d'écran blanc
Cela signifie presque toujours une erreur de syntaxe dans `config.js` :
- un guillemet `"` non fermé,
- une virgule manquante en fin de ligne,
- une accolade `{` ou `}` supprimée par erreur.

GitHub conserve l'historique : ouvrir `config.js` → **History** →
sélectionner la version précédente pour revenir en arrière.
