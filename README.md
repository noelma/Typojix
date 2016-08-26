#Typojix v1.2
Typojix est un micro framework CSS permettant d’uniformiser et simplifié la gestion typographique de page web. Il offre également un STARTER-KIT vous permettant de personnaliser vos styles CSS rapidement (modifier les couleurs, la taille du texte, les fonts d’écriture…).

##Tester Typojix
Télécharger Typojix puis ouvrer le fichier index.html. Il contient l’ensemble des balises et classes utilisables. Ce document peut servir de référence à vos intégrations.

##Utilisation du STARTERKIT-typojix
* Ouvir STARTERKIT-typojix.css.txt,
* Faîtes les modifications nécessaires,
* Renommer en typojix.css,
* Appeler votre feuille de style dans vos pages web.

La même procédure fonctionne également avec les feuilles de styles LESS.

##Installation des feuilles de styles CSS
La feuille de style principal
```
<link href="css/typojix.css" rel="stylesheet">
```
La feuille de style secondaire, permet d’utiliser vos paragraphes comme des colonnes de texte (similaire aux journaux).
```
<link href="css/typojix.txt-columns.css" rel="stylesheet">
```
Recommande l’utilisation des feuilles minimisés pour le passage du site en production
```
<link href="css/typojix.min.css" rel="stylesheet">
<link href="css/typojix.txt-columns.min.css" rel="stylesheet">
```
##Installation des feuilles de styles LESS
```
<link href="less/typojix.css.less" rel="stylesheet/less">
<link href="less/typojix.txt-columns.css.less" rel="stylesheet/less">
```
Nécessite l’utilisation du script LESS ou de LESS CND
```
<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/2.7.1/less.min.js"></script>
```