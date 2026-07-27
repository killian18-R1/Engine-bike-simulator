# 📜 CHANGELOG

Toutes les évolutions du projet MotoSim sont consignées ici.

# Version 0.1.0-a7.2

Date : 28/07/2026


## Correction majeure physique


### Transmission

- Nouveau calcul vitesse roue / RPM moteur
- Ajout diamètre roue
- Ajout transmission finale
- Correction rapport boîte


### Moteur

- Couple moteur utilisé pour accélération
- Courbe moteur simplifiée
- Rupteur conservé


### Shifters

- Correction Shifter UP
- Correction Shifter DOWN
- Ajout logique quickshift
- Ajout blipper rétrogradage


## Résultat attendu

- Première vitesse beaucoup plus réactive
- RPM cohérent avec vitesse
- Rétrogradage plus réaliste


## Bugs connus

- Pas d'embrayage
- Pas de patinage
- Pas de température moteur
- Pas de son

# Version 0.1.0-a7.1

Date : 28/07/2026


## Corrections

- Correction affichage shifter mobile
- Ajout indication visuelle ON/OFF
- Correction logique shifter UP
- Correction logique shifter DOWN


## Calibration

- Nouvelle démultiplication boîte
- Meilleure montée en régime
- Correction première vitesse trop longue
- Meilleure relation RPM / vitesse


## Améliorations

- Boutons shifter verts en activation
- Boutons shifter rouges en désactivation


## Bugs connus

- Pas encore d'embrayage
- Pas encore de patinage
- Courbe moteur simplifiée
- Pas de frein moteur complet

# Version 0.1.0-a7

Date : 28/07/2026


## Ajouts

- Transmission mécanique simplifiée
- RPM dépendant de la vitesse
- Shifter UP activable
- Shifter DOWN activable
- Simulation coupure moteur
- Simulation blipper


## Améliorations

- Départ en rapport élevé corrigé
- Rétrogradage plus réaliste
- Meilleure cohérence vitesse / régime


## Bugs connus

- Pas d'embrayage réel
- Pas de patinage
- Modèle moteur simplifié


# Version 0.1.0-a6
Date : 28/07/2026


## Ajouts

- Premier modèle moteur physique
- Liaison mécanique vitesse / RPM
- Simulation couple moteur
- Simulation masse véhicule
- Résistance aérodynamique
- Transmission par rapports


## Améliorations

- Suppression du modèle vitesse artificiel
- Accélération dépendante du moteur
- Comportement plus proche d'une moto réelle


## Limites connues

- Pas d'embrayage
- Pas de patinage
- Pas de courbe moteur réelle
- Pas encore de frein moteur complet


---

# Version 0.1.0-a5
Date : 28/07/2026


## Ajouts

- Gestion du rupteur moteur
- Limitation vitesse par rapport
- Comportement boîte amélioré
- Chute de régime au changement de rapport
- Accélération plus progressive


## Corrections

- Conservation affichage simple des rapports :
  N / 1 / 2 / 3 / 4 / 5 / 6
- Correction vitesse infinie


## Bugs connus

- Pas encore d'embrayage
- Pas encore de couple moteur réel
- Pas encore de frein moteur réaliste
- Pas encore de compteur analogique


---

# Version 0.1.0-a4.1
Date : 28/07/2026

## Correction

- Correction blocage complet du moteur après A3/A4
- Correction gestion des boutons tactiles
- Compatibilité téléphone améliorée
- Ajout système STATUS


## Fonctionnalités conservées

- Gaz maintenu
- Montée RPM
- Retour ralenti
- Passage rapports
- Calcul vitesse
- Frein


## Bugs connus

- Modèle moteur simplifié
- Pas encore de couple réel
- Pas d'embrayage
- Pas de son moteur


---

# Version 0.1.0-a4
Date : 27/07/2026

## Correction

- Correction du blocage complet du moteur
- Correction gestion des boutons
- Correction logique rapports

## Ajouts

- Boîte de vitesse corrigée
- Chute de régime au changement de rapport
- Accélération différente selon le rapport
- Frein moteur léger
- Frein plus progressif

## Bugs connus

- Pas encore d'embrayage
- Pas encore de couple moteur réel
- Pas encore de vitesse maximale réaliste

---


# Version 0.1.0-a3
Date : 27/07/2026


## Corrections

- Correction inversion des rapports
- 1ère courte
- 6ème longue


## Ajouts

- Démultiplication différente par rapport
- Blocage passage vitesse gaz ouvert
- Affichage G1 à G6


## Bugs connus

- Pas encore de couple moteur réel
- Pas encore d'embrayage
- Pas encore de perte de régime lors du passage de vitesse

---


# Version 0.1.0-a2
Date : 27/07/2026


## Ajouts

- Première simulation moteur
- Gestion du gaz maintenu
- Montée progressive du régime moteur
- Retour automatique au ralenti
- Rupteur à 14 000 tr/min
- Interaction entre régime moteur et vitesse


## Limites connues

- Modèle moteur simplifié
- Pas de couple moteur réel
- Pas d'embrayage
- Pas de frein moteur réaliste
- Pas encore de démultiplication réelle

---


# Version 0.1.0-a1
Date : 27/07/2026


## Ajouts

- Nouveau tableau de bord MotoSim
- Cadran vitesse
- Cadran RPM
- Affichage rapport engagé
- Boutons changement de vitesse + et -
- Bouton Gaz
- Bouton Brake
- Affichage numéro de version


## Limites connues

- Pas encore de simulation moteur réelle
- Pas encore de vitesse automatique
- Pas encore de compteur analogique
- Pas encore de son moteur


---

# Version 0.0.1
Date : 27/07/2026

## Création du projet

- Création du dépôt GitHub
- Mise en place de GitHub Pages
- Création de index.html
- Création de style.css
- Création de script.js
- Premier affichage statique
