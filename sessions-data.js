const sessions = [
    // MARDI 22 JUILLET - JOUR 9
    {
        date: "2025-07-22",
        title: "Repos complet - Reprise nutrition",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération + Reprise des bonnes habitudes alimentaires" },
            { title: "Résumé", content: "Aucun entraînement - Focus sur l'alimentation" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Conseil", content: "Reprends tes bonnes habitudes alimentaires en douceur. Hydratation maximale. Prépare-toi mentalement pour demain où on reprend l'entraînement." },
            { title: "Pourquoi cette séance ?", content: "Transition douce entre la récupération festival et la reprise de l'entraînement. Remise en route du système digestif." }
        ]
    },
    // MERCREDI 23 JUILLET - JOUR 10
    {
        date: "2025-07-23",
        title: "Récupération + HIIT Haut du Corps",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Reprise en douceur après 5 jours d'arrêt" },
            { title: "Résumé", content: "5km facile + 15min HIIT" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'30-8'00/km très décontracté (reprise)\nHIIT Haut du Corps (15min) :\n4 tours de :\n• Pompes (30s)\n• Planche (30s)\n• Press haltère debout 1 bras alterné (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "Y va très doucement, c'est une reprise après 5 jours d'arrêt. Écoute ton corps, ne force pas." },
            { title: "Pourquoi cette séance ?", content: "Reprise progressive après la coupure festival, réactivation douce du système cardio-vasculaire." }
        ]
    },
    // JEUDI 24 JUILLET - JOUR 11
    {
        date: "2025-07-24",
        title: "Endurance Fondamentale",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Reprise sérieuse - Évaluer le niveau après la coupure" },
            { title: "Résumé", content: "8km allure conversationnelle" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 10min marche rapide puis progression douce\nCorps : 8km allure 6'30-7'00/km (tu dois pouvoir parler facilement)\nRetour au calme : 5min marche + étirements 15min" },
            { title: "Conseil", content: "Premier vrai test après la coupure. Reste prudent sur l'allure, on évalue ton niveau actuel pour calibrer la suite." },
            { title: "Pourquoi cette séance ?", content: "Début officiel de la préparation marathon. Reprendre contact avec le volume, évaluer la condition physique post-festival." }
        ]
    },
    // VENDREDI 25 JUILLET - JOUR 12
    {
        date: "2025-07-25",
        title: "Récupération + HIIT Haut du Corps",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération active après la reprise d'hier" },
            { title: "Résumé", content: "5km récupération + 16min HIIT" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km très décontracté\nHIIT Haut du Corps (16min) :\n4 tours de :\n• Burpees (30s)\n• Rowing haltère 1 bras alterné (30s)\n• Gainage latéral (15s chaque côté) (30s)\n• Mountain climbers (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "Récupération vraiment facile après la reprise d'hier. Change de bras toutes les 15s pour le rowing." },
            { title: "Pourquoi cette séance ?", content: "Récupération active + renforcement + activation métabolique pour reprendre la perte de poids." }
        ]
    },
    // SAMEDI 26 JUILLET - JOUR 13
    {
        date: "2025-07-26",
        title: "Sortie Longue",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Première vraie sortie longue du programme marathon" },
            { title: "Résumé", content: "12km allure marathon +30s/km" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix (1h avant la sortie)\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 10min progression douce\nCorps : 12km allure 6'00-6'15/km (confortable, tu peux parler)\nRetour au calme : 5min marche + étirements 15min" },
            { title: "Conseil", content: "Hydratation régulière pendant la sortie. Teste ta nutrition d'avant course. L'allure doit rester confortable tout le long." },
            { title: "Pourquoi cette séance ?", content: "Développer la base aérobie, adaptation progressive au volume long, préparation mentale aux longues distances." }
        ]
    },
    // DIMANCHE 27 JUILLET - JOUR 14
    {
        date: "2025-07-27",
        title: "Repos Complet",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération totale après la première semaine" },
            { title: "Résumé", content: "Repos ou marche légère (20-30min max)" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nRepos complet ou marche tranquille 20-30min si envie\nFocus sur les étirements (15-20min)\nHydratation optimale\nSommeil de qualité" },
            { title: "Conseil", content: "Profite de ce jour pour récupérer, bien dormir et préparer mentalement la semaine 2." },
            { title: "Pourquoi cette séance ?", content: "Récupération nécessaire pour assimiler la charge de travail et repartir en forme." }
        ]
    },
    // LUNDI 28 JUILLET - JOUR 15
    {
        date: "2025-07-28",
        title: "Récupération + HIIT Haut du Corps + Abdos",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération active + renforcement" },
            { title: "Résumé", content: "5km facile + 16min HIIT" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km décontracté\nHIIT Haut du Corps + Abdos (16min) :\n4 tours de :\n• Pompes (30s)\n• Planche (30s)\n• Crunchs (30s)\n• Press haltère debout 1 bras alterné (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "Change de bras toutes les 15s pour le press. Focus sur la technique des crunchs." },
            { title: "Pourquoi cette séance ?", content: "Récupération + renforcement complet + activation métabolique." }
        ]
    },
    // MARDI 29 JUILLET - JOUR 16
    {
        date: "2025-07-29",
        title: "Séance VMA",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Développer la vitesse et améliorer la VMA" },
            { title: "Résumé", content: "6 x 400m à allure 5km" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 15min footing facile + 3 x 100m progressifs\nCorps : 6 x 400m allure 5'10-5'20/km (récupération 1'30 footing lent entre chaque)\nRetour au calme : 10min footing facile + étirements 10min" },
            { title: "Conseil", content: "Vise la régularité plutôt que la performance pure. Si tu es essoufflé, ralentis légèrement sur les dernières répétitions." },
            { title: "Pourquoi cette séance ?", content: "Développer la VMA qui sera la base de toutes tes allures marathon et semi-marathon. Amélioration de l'efficacité cardio-vasculaire." }
        ]
    },
    // MERCREDI 30 JUILLET - JOUR 17
    {
        date: "2025-07-30",
        title: "Récupération + HIIT Haut du Corps + Abdos",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération active après la VMA d'hier" },
            { title: "Résumé", content: "5km facile + 18min HIIT" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km décontracté\nHIIT Haut du Corps + Abdos (18min) :\n5 tours de :\n• Burpees (30s)\n• Gainage latéral (15s chaque côté) (30s)\n• Rowing haltère 1 bras alterné (30s)\n• Bicycle (30s)\n• Repos (1min15)" },
            { title: "Conseil", content: "Récupération vraiment facile après la VMA d'hier. Change de bras toutes les 15s pour le rowing." },
            { title: "Pourquoi cette séance ?", content: "Récupération active + renforcement complet haut du corps et abdos + activation métabolique." }
        ]
    },
    // JEUDI 31 JUILLET - JOUR 18
    {
        date: "2025-07-31",
        title: "Tempo Run",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Développer l'allure seuil et l'endurance à allure soutenue" },
            { title: "Résumé", content: "8km avec 4km à allure semi-marathon" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 15min footing facile progressif\nCorps : 2km facile + 4km allure 5'30-5'45/km (allure semi-marathon) + 2km facile\nRetour au calme : 5min marche + étirements 10min" },
            { title: "Conseil", content: "Les 4km au milieu doivent être soutenus mais contrôlés. Tu dois pouvoir dire quelques mots mais pas tenir une conversation." },
            { title: "Pourquoi cette séance ?", content: "Développer l'allure seuil, habituer le corps à soutenir un effort modérément intense sur la durée. Base pour ton objectif semi-marathon." }
        ]
    },
    // VENDREDI 1ER AOÛT - JOUR 19
    {
        date: "2025-08-01",
        title: "Récupération + HIIT Haut du Corps + Abdos",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération active après le tempo run d'hier" },
            { title: "Résumé", content: "5km facile + 15min HIIT" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km décontracté\nHIIT Haut du Corps + Abdos (15min) :\n4 tours de :\n• Pompes (30s)\n• Russian twist (30s)\n• Press haltère debout 1 bras alterné (30s)\n• Planche (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "Récupération vraiment facile après le tempo d'hier. Change de bras toutes les 15s pour le press." },
            { title: "Pourquoi cette séance ?", content: "Récupération active + renforcement complet + activation métabolique après l'effort soutenu d'hier." }
        ]
    },
    // SAMEDI 2 AOÛT - JOUR 20
    {
        date: "2025-08-02",
        title: "Sortie Longue",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Développer l'endurance de base avec montée en volume" },
            { title: "Résumé", content: "14km allure marathon +30s/km" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix (1h avant la sortie)\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 10min progression douce\nCorps : 14km allure 6'00-6'15/km (confortable, tu peux parler)\nRetour au calme : 5min marche + étirements 15min" },
            { title: "Conseil", content: "Hydratation régulière pendant la sortie. On monte à 14km, écoute ton corps. L'allure doit rester confortable tout le long." },
            { title: "Pourquoi cette séance ?", content: "Développer la base aérobie, augmentation progressive du volume long, adaptation physiologique aux longues distances." }
        ]
    },
    // DIMANCHE 3 AOÛT - JOUR 21
    {
        date: "2025-08-03",
        title: "Repos Complet",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération totale après la deuxième semaine" },
            { title: "Résumé", content: "Repos ou marche légère (20-30min max)" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nRepos complet ou marche tranquille 20-30min si envie\nFocus sur les étirements (15-20min)\nHydratation optimale\nSommeil de qualité" },
            { title: "Conseil", content: "Profite de ce jour pour récupérer après 2 semaines de montée en charge. Bien dormir et préparer mentalement la semaine 3." },
            { title: "Pourquoi cette séance ?", content: "Récupération nécessaire pour assimiler la charge de travail et continuer la progression." }
        ]
    },
    // LUNDI 4 AOÛT - JOUR 22
    {
        date: "2025-08-04",
        title: "Récupération + HIIT Haut du Corps + Abdos",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération active + renforcement" },
            { title: "Résumé", content: "5km facile + 16min HIIT" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km décontracté\nHIIT Haut du Corps + Abdos (16min) :\n4 tours de :\n• Pompes (30s)\n• Dead bug (30s)\n• Kettlebell swing 12kg (30s)\n• Planche (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "On démarre la semaine 3 tranquillement. Focus sur la technique du dead bug (alternance bras/jambes opposés)." },
            { title: "Pourquoi cette séance ?", content: "Reprise après le repos + renforcement complet + activation métabolique pour continuer la perte de poids." }
        ]
    },
    // MARDI 5 AOÛT - JOUR 23
    {
        date: "2025-08-05",
        title: "Fartlek",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Développer la variété d'allures et l'adaptabilité" },
            { title: "Résumé", content: "8km avec variations d'allure" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 15min footing facile\nCorps : 6km fartlek (2min rapide 5'00/km + 2min récup 6'30/km) x 3 fois\nRetour au calme : 10min footing facile + étirements 10min" },
            { title: "Conseil", content: "Alterne les phases rapides et récupération de façon fluide. Les phases rapides doivent être soutenues mais pas à fond." },
            { title: "Pourquoi cette séance ?", content: "Développer l'adaptabilité aux changements d'allure, améliorer la capacité à gérer différents rythmes (utile pour le semi et marathon)." }
        ]
    },
    // MERCREDI 6 AOÛT - JOUR 24
    {
        date: "2025-08-06",
        title: "Récupération + HIIT Haut du Corps + Abdos",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération active après le fartlek d'hier" },
            { title: "Résumé", content: "5km facile + 18min HIIT" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km décontracté\nHIIT Haut du Corps + Abdos (18min) :\n5 tours de :\n• Burpees (30s)\n• Crunchs (30s)\n• Rowing haltère 1 bras alterné (30s)\n• Gainage latéral (15s chaque côté) (30s)\n• Repos (1min15)" },
            { title: "Conseil", content: "Récupération vraiment facile après le fartlek d'hier. Change de bras toutes les 15s pour le rowing." },
            { title: "Pourquoi cette séance ?", content: "Récupération active + renforcement complet après l'effort varié d'hier + activation métabolique." }
        ]
    },
    // JEUDI 7 AOÛT - JOUR 25
    {
        date: "2025-08-07",
        title: "Séance Seuil",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Développer l'endurance à allure seuil et la résistance" },
            { title: "Résumé", content: "2 x 3km à allure seuil" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 15min footing facile + accélérations progressives\nCorps : 2 x 3km allure 5'40-5'55/km (récupération 3min footing lent entre les 2)\nRetour au calme : 10min footing facile + étirements 10min" },
            { title: "Conseil", content: "Les 3km doivent être soutenus et réguliers. C'est plus rapide que l'allure semi mais tu dois pouvoir tenir sur la distance." },
            { title: "Pourquoi cette séance ?", content: "Développer l'allure seuil anaérobie, améliorer la capacité à soutenir un effort intense, préparation spécifique semi-marathon." }
        ]
    },
    // VENDREDI 8 AOÛT - JOUR 26
    {
        date: "2025-08-08",
        title: "Récupération + HIIT Haut du Corps + Abdos",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération active après la séance seuil d'hier" },
            { title: "Résumé", content: "5km facile + 15min HIIT" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km décontracté\nHIIT Haut du Corps + Abdos (15min) :\n4 tours de :\n• Pompes (30s)\n• Bicycle (30s)\n• Press haltère debout 1 bras alterné (30s)\n• Russian twist (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "Récupération vraiment facile après la séance seuil intensive d'hier. Change de bras toutes les 15s pour le press." },
            { title: "Pourquoi cette séance ?", content: "Récupération active + renforcement abdominaux ciblé + activation métabolique après l'effort intense d'hier." }
        ]
    },
    // SAMEDI 9 AOÛT - JOUR 27
    {
        date: "2025-08-09",
        title: "Sortie Longue Progressive",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Développer l'endurance avec finish progressif" },
            { title: "Résumé", content: "16km avec progression sur les derniers kilomètres" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix (1h avant la sortie)\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 10min progression douce\nCorps : 12km allure 6'15-6'30/km + 4km progression (6'00 → 5'45 → 5'30 → 5'15/km)\nRetour au calme : 5min marche + étirements 15min" },
            { title: "Conseil", content: "Les 12 premiers km restent confortables. La progression sur les 4 derniers km doit être contrôlée, pas un sprint." },
            { title: "Pourquoi cette séance ?", content: "Habituer le corps à accélérer en fin d'effort long, simulation des conditions de course, développement de l'endurance spécifique." }
        ]
    },
    // DIMANCHE 10 AOÛT - JOUR 28
    {
        date: "2025-08-10",
        title: "Repos Complet",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération totale après la troisième semaine" },
            { title: "Résumé", content: "Repos ou marche légère (20-30min max)" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nRepos complet ou marche tranquille 20-30min si envie\nFocus sur les étirements (15-20min)\nHydratation optimale\nSommeil de qualité" },
            { title: "Conseil", content: "Récupération après 3 semaines de montée en charge. On se prépare pour la phase plus intense qui arrive avec le semi qui approche." },
            { title: "Pourquoi cette séance ?", content: "Récupération nécessaire avant d'entamer la phase de préparation plus spécifique pour le semi d'Auray-Vannes." }
        ]
    },
    // LUNDI 11 AOÛT - JOUR 29
    {
        date: "2025-08-11",
        title: "Récupération + HIIT Haut du Corps + Abdos",
        semi: true,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération active + renforcement - Phase semi" },
            { title: "Résumé", content: "5km facile + 16min HIIT" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km décontracté\nHIIT Haut du Corps + Abdos (16min) :\n4 tours de :\n• Pompes (30s)\n• Planche (30s)\n• Kettlebell swing 12kg (30s)\n• Dead bug (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "On démarre la phase spécifique semi. Focus sur la technique du dead bug (contrôle du mouvement)." },
            { title: "Pourquoi cette séance ?", content: "Début de la phase de préparation semi-marathon + renforcement complet + activation métabolique." }
        ]
    },
    // MARDI 12 AOÛT - JOUR 30
    {
        date: "2025-08-12",
        title: "VMA Semi-Marathon",
        semi: true,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Développer la vitesse spécifique semi" },
            { title: "Résumé", content: "5 x 1000m à allure 10km" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 15min footing facile + 4 x 100m progressifs\nCorps : 5 x 1000m allure 5'00-5'10/km (récupération 2min footing lent entre chaque)\nRetour au calme : 10min footing facile + étirements 10min" },
            { title: "Conseil", content: "C'est plus rapide que d'habitude, mais sur 1000m c'est gérable. Vise la régularité entre les répétitions." },
            { title: "Pourquoi cette séance ?", content: "Développer la VMA spécifique semi-marathon, habituer le corps aux allures rapides sur distance intermédiaire." }
        ]
    },
    // MERCREDI 13 AOÛT - JOUR 31
    {
        date: "2025-08-13",
        title: "Récupération + HIIT Haut du Corps + Abdos",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération active après la VMA d'hier" },
            { title: "Résumé", content: "5km facile + 18min HIIT" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km décontracté\nHIIT Haut du Corps + Abdos (18min) :\n5 tours de :\n• Burpees (30s)\n• Gainage latéral (15s chaque côté) (30s)\n• Rowing haltère 1 bras alterné (30s)\n• Crunchs (30s)\n• Repos (1min15)" },
            { title: "Conseil", content: "Récupération vraiment facile après la VMA intensive d'hier. Change de bras toutes les 15s pour le rowing." },
            { title: "Pourquoi cette séance ?", content: "Récupération active + renforcement complet après l'effort VMA + activation métabolique." }
        ]
    },
    // JEUDI 14 AOÛT - JOUR 32
    {
        date: "2025-08-14",
        title: "Allure Semi-Marathon",
        semi: true,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Développer l'endurance à allure objectif semi" },
            { title: "Résumé", content: "10km avec 6km à allure semi-marathon" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 15min footing facile progressif\nCorps : 2km facile + 6km allure 5'30-5'45/km (allure objectif semi) + 2km facile\nRetour au calme : 5min marche + étirements 10min" },
            { title: "Conseil", content: "Les 6km au milieu sont cruciaux - c'est ton allure objectif semi. Tu dois pouvoir dire quelques mots mais pas converser." },
            { title: "Pourquoi cette séance ?", content: "Habituer le corps à soutenir l'allure objectif semi sur une distance significative, test de l'allure cible." }
        ]
    },
    // VENDREDI 15 AOÛT - JOUR 33
    {
        date: "2025-08-15",
        title: "Récupération + HIIT Haut du Corps + Abdos",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération active après l'allure semi d'hier" },
            { title: "Résumé", content: "5km facile + 15min HIIT" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km décontracté\nHIIT Haut du Corps + Abdos (15min) :\n4 tours de :\n• Pompes (30s)\n• Russian twist (30s)\n• Press haltère debout 1 bras alterné (30s)\n• Bicycle (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "Récupération vraiment facile après la séance allure semi d'hier. Change de bras toutes les 15s pour le press." },
            { title: "Pourquoi cette séance ?", content: "Récupération active + focus abdominaux + activation métabolique après l'effort spécifique d'hier." }
        ]
    },
    // SAMEDI 16 AOÛT - JOUR 34
    {
        date: "2025-08-16",
        title: "Sortie Longue Semi",
        semi: true,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Sortie longue avec simulation allure semi" },
            { title: "Résumé", content: "18km avec variations d'allure semi" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix (1h avant la sortie)\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 10min progression douce\nCorps : 8km allure 6'15-6'30/km + 6km allure 5'30-5'45/km (allure semi) + 4km retour au calme 6'30/km\nRetour au calme : 5min marche + étirements 15min" },
            { title: "Conseil", content: "Les 6km au milieu sont un vrai test de ton allure semi. Hydratation régulière. Si c'est trop dur, ralentis légèrement." },
            { title: "Pourquoi cette séance ?", content: "Test en conditions réelles de l'allure semi sur distance significative, développement de l'endurance spécifique, préparation mentale." }
        ]
    },
    // DIMANCHE 17 AOÛT - JOUR 35
    {
        date: "2025-08-17",
        title: "Repos Complet",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération totale après la quatrième semaine" },
            { title: "Résumé", content: "Repos ou marche légère (20-30min max)" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nRepos complet ou marche tranquille 20-30min si envie\nFocus sur les étirements (15-20min)\nHydratation optimale\nSommeil de qualité" },
            { title: "Conseil", content: "Récupération après 4 semaines intensives. Plus que 4 semaines avant le semi ! Profite pour faire le point sur tes sensations." },
            { title: "Pourquoi cette séance ?", content: "Récupération nécessaire avant d'entamer les 3 dernières semaines de préparation spécifique semi." }
        ]
    },
    // LUNDI 18 AOÛT - JOUR 36
    {
        date: "2025-08-18",
        title: "Récupération + HIIT Haut du Corps + Abdos",
        semi: true,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération active + renforcement - Intensification semi" },
            { title: "Résumé", content: "5km facile + 16min HIIT" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km décontracté\nHIIT Haut du Corps + Abdos (16min) :\n4 tours de :\n• Pompes (30s)\n• Planche (30s)\n• Kettlebell swing 12kg (30s)\n• Gainage latéral (15s chaque côté) (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "On entre dans la phase finale ! 4 semaines pour peaufiner. Reste concentré sur la technique." },
            { title: "Pourquoi cette séance ?", content: "Phase finale de préparation semi + renforcement complet + activation métabolique optimisée." }
        ]
    },
    // MARDI 19 AOÛT - JOUR 37
    {
        date: "2025-08-19",
        title: "Fractionné Court Intensif",
        semi: true,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Développer la vitesse pure et la puissance pour le semi" },
            { title: "Résumé", content: "8 x 300m à allure 5km" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 15min footing facile + 4 x 100m progressifs\nCorps : 8 x 300m allure 4'50-5'00/km (récupération 1min30 footing lent entre chaque)\nRetour au calme : 10min footing facile + étirements 10min" },
            { title: "Conseil", content: "C'est rapide ! Focus sur la régularité plutôt que d'exploser sur les premières. Les 300m sont courtes mais intenses." },
            { title: "Pourquoi cette séance ?", content: "Développer la vitesse pure et la puissance anaérobie, améliorer l'efficacité neuromusculaire pour le finish du semi." }
        ]
    },
    // MERCREDI 20 AOÛT - JOUR 38
    {
        date: "2025-08-20",
        title: "Récupération + HIIT Haut du Corps + Abdos",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération active après le fractionné intensif d'hier" },
            { title: "Résumé", content: "5km facile + 18min HIIT" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km décontracté\nHIIT Haut du Corps + Abdos (18min) :\n5 tours de :\n• Burpees (30s)\n• Dead bug (30s)\n• Rowing haltère 1 bras alterné (30s)\n• Russian twist (30s)\n• Repos (1min15)" },
            { title: "Conseil", content: "Récupération vraiment facile après la séance intensive d'hier. Change de bras toutes les 15s pour le rowing." },
            { title: "Pourquoi cette séance ?", content: "Récupération active + renforcement complet après l'effort VMA + activation métabolique." }
        ]
    },
    // JEUDI 21 AOÛT - JOUR 39
    {
        date: "2025-08-21",
        title: "Test Semi-Marathon 15km",
        semi: true,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Test en conditions réelles d'allure semi sur longue distance" },
            { title: "Résumé", content: "15km avec 10km à allure semi-marathon" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 15min footing facile progressif\nCorps : 2,5km facile + 10km allure 5'30-5'45/km (allure objectif semi) + 2,5km facile\nRetour au calme : 5min marche + étirements 15min" },
            { title: "Conseil", content: "C'est LE test ! 10km à allure semi, c'est presque la moitié de la distance de course. Si tu tiens bien, tu es prêt !" },
            { title: "Pourquoi cette séance ?", content: "Test décisif de l'allure semi sur distance longue, validation de la forme et de l'allure objectif à 3 semaines du semi." }
        ]
    },
    // VENDREDI 22 AOÛT - JOUR 40
    {
        date: "2025-08-22",
        title: "Récupération + HIIT Haut du Corps + Abdos",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération active après le test 15km d'hier" },
            { title: "Résumé", content: "5km facile + 15min HIIT" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km décontracté\nHIIT Haut du Corps + Abdos (15min) :\n4 tours de :\n• Pompes (30s)\n• Bicycle (30s)\n• Press haltère debout 1 bras alterné (30s)\n• Crunchs (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "Récupération vraiment facile après le gros test d'hier. Change de bras toutes les 15s pour le press. Comment s'est passé le test ?" },
            { title: "Pourquoi cette séance ?", content: "Récupération active + focus abdominaux après l'effort test majeur d'hier." }
        ]
    },
    // SAMEDI 23 AOÛT - JOUR 41
    {
        date: "2025-08-23",
        title: "Sortie Longue Pré-Semi",
        semi: true,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Dernière grosse sortie avant la phase d'affûtage" },
            { title: "Résumé", content: "20km avec simulation tactique semi" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix (1h avant la sortie)\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 10min progression douce\nCorps : 10km allure 6'15-6'30/km + 5km allure 5'45-6'00/km + 5km allure 5'30-5'45/km (simulation tactique)\nRetour au calme : 5min marche + étirements 15min" },
            { title: "Conseil", content: "Simulation de course ! Départ tranquille, puis accélération progressive comme tu feras au semi. Hydratation et nutrition à tester." },
            { title: "Pourquoi cette séance ?", content: "Dernière grosse sortie avant l'affûtage, simulation tactique du semi, test final des sensations et de la nutrition." }
        ]
    },
    // DIMANCHE 24 AOÛT - JOUR 42
    {
        date: "2025-08-24",
        title: "Repos Complet",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération totale avant la phase d'affûtage" },
            { title: "Résumé", content: "Repos ou marche légère (20-30min max)" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nRepos complet ou marche tranquille 20-30min si envie\nFocus sur les étirements (15-20min)\nHydratation optimale\nSommeil de qualité" },
            { title: "Conseil", content: "Dernière récupération avant l'affûtage ! Plus que 3 semaines avant le semi. C'est le moment de faire le bilan de tes sensations." },
            { title: "Pourquoi cette séance ?", content: "Récupération avant la phase d'affûtage semi, préparation mentale pour les 3 dernières semaines cruciales." }
        ]
    },
    // LUNDI 25 AOÛT - JOUR 43
    {
        date: "2025-08-25",
        title: "Récupération + HIIT Haut du Corps + Abdos",
        semi: true,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Affûtage - Maintien de la forme sans fatigue" },
            { title: "Résumé", content: "5km facile + 16min HIIT" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km décontracté\nHIIT Haut du Corps + Abdos (16min) :\n4 tours de :\n• Pompes (30s)\n• Planche (30s)\n• Kettlebell swing 12kg (30s)\n• Gainage latéral (15s chaque côté) (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "Phase d'affûtage ! On diminue progressivement la charge pour arriver frais au semi. Qualité avant quantité." },
            { title: "Pourquoi cette séance ?", content: "Début de l'affûtage semi + maintien du tonus musculaire sans fatigue excessive." }
        ]
    },
    // MARDI 26 AOÛT - JOUR 44
    {
        date: "2025-08-26",
        title: "Fractionné Court Affûtage",
        semi: true,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Maintenir la vitesse sans fatigue excessive" },
            { title: "Résumé", content: "6 x 200m à allure 5km" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 15min footing facile + 3 x 100m progressifs\nCorps : 6 x 200m allure 4'50-5'00/km (récupération 1min30 footing lent entre chaque)\nRetour au calme : 10min footing facile + étirements 10min" },
            { title: "Conseil", content: "Plus court qu'avant ! L'objectif est de maintenir la vitesse et les sensations sans se fatiguer. Les jambes doivent rester fraîches." },
            { title: "Pourquoi cette séance ?", content: "Maintien de la vitesse en phase d'affûtage, activation neuromusculaire sans fatigue excessive, préparation optimale." }
        ]
    },
    // MERCREDI 27 AOÛT - JOUR 45
    {
        date: "2025-08-27",
        title: "Récupération + HIIT Haut du Corps + Abdos",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération active en phase d'affûtage" },
            { title: "Résumé", content: "5km facile + 15min HIIT" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km décontracté\nHIIT Haut du Corps + Abdos (15min) :\n4 tours de :\n• Pompes (30s)\n• Dead bug (30s)\n• Press haltère debout 1 bras alterné (30s)\n• Russian twist (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "Récupération vraiment facile. On réduit aussi légèrement l'intensité du HIIT. Change de bras toutes les 15s pour le press." },
            { title: "Pourquoi cette séance ?", content: "Récupération active en affûtage + maintien du tonus musculaire sans surcharge." }
        ]
    },
    // JEUDI 28 AOÛT - JOUR 46
    {
        date: "2025-08-28",
        title: "Allure Semi Courte",
        semi: true,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Rappel allure semi sans fatigue - Affûtage" },
            { title: "Résumé", content: "8km avec 4km à allure semi-marathon" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 15min footing facile progressif\nCorps : 2km facile + 4km allure 5'30-5'45/km (allure objectif semi) + 2km facile\nRetour au calme : 5min marche + étirements 10min" },
            { title: "Conseil", content: "Plus court qu'avant ! Les 4km doivent être fluides et naturels. Tu dois avoir l'impression que c'est facile maintenant." },
            { title: "Pourquoi cette séance ?", content: "Rappel de l'allure semi en version courte, affûtage optimal, validation des sensations sans fatigue." }
        ]
    },
    // VENDREDI 29 AOÛT - JOUR 47
    {
        date: "2025-08-29",
        title: "Récupération + HIIT Haut du Corps + Abdos",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération légère avant dernière semaine semi" },
            { title: "Résumé", content: "5km facile + 15min HIIT" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km décontracté\nHIIT Haut du Corps + Abdos (15min) :\n4 tours de :\n• Pompes (30s)\n• Bicycle (30s)\n• Rowing haltère 1 bras alterné (30s)\n• Planche (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "On se rapproche du semi ! Plus que 2 semaines. Récupération facile, change de bras toutes les 15s pour le rowing." },
            { title: "Pourquoi cette séance ?", content: "Récupération active en fin d'affûtage + maintien léger du tonus musculaire." }
        ]
    },
    // SAMEDI 30 AOÛT - JOUR 48
    {
        date: "2025-08-30",
        title: "Dernière Sortie Longue Pré-Semi",
        semi: true,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Dernière sortie longue modérée avant le semi" },
            { title: "Résumé", content: "12km allure facile avec quelques accélérations" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix (1h avant la sortie)\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 10min progression douce\nCorps : 8km allure 6'15-6'30/km + 3 x 1km allure 5'45/km (récup 500m facile) + 2km retour au calme\nRetour au calme : 5min marche + étirements 15min" },
            { title: "Conseil", content: "Dernière sortie longue ! Les 3 accélérations doivent être fluides, pas forcées. Tu dois te sentir léger et prêt." },
            { title: "Pourquoi cette séance ?", content: "Dernière préparation longue avant l'affûtage final, test des sensations, activation douce avant la semaine du semi." }
        ]
    },
    // DIMANCHE 31 AOÛT - JOUR 49
    {
        date: "2025-08-31",
        title: "Repos Complet",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération totale avant la dernière semaine pré-semi" },
            { title: "Résumé", content: "Repos ou marche légère (20-30min max)" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nRepos complet ou marche tranquille 20-30min si envie\nFocus sur les étirements (15-20min)\nHydratation optimale\nSommeil de qualité" },
            { title: "Conseil", content: "Dernière récupération avant la semaine du semi ! Plus que 2 semaines. Visualise ta course, prépare-toi mentalement." },
            { title: "Pourquoi cette séance ?", content: "Récupération optimale avant la semaine cruciale pré-semi d'Auray-Vannes." }
        ]
    },
    // LUNDI 1ER SEPTEMBRE - JOUR 50
    {
        date: "2025-09-01",
        title: "Récupération + HIIT Haut du Corps + Abdos",
        semi: true,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Affûtage final - Maintien de la forme légère" },
            { title: "Résumé", content: "5km facile + 15min HIIT" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km décontracté\nHIIT Haut du Corps + Abdos (15min) :\n4 tours de :\n• Pompes (30s)\n• Planche (30s)\n• Press haltère debout 1 bras alterné (30s)\n• Gainage latéral (15s chaque côté) (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "Semaine du semi ! Tout en douceur maintenant. Plus que 13 jours ! Change de bras toutes les 15s pour le press." },
            { title: "Pourquoi cette séance ?", content: "Affûtage final avant le semi + maintien minimal du tonus sans fatigue." }
        ]
    },
    // MARDI 2 SEPTEMBRE - JOUR 51
    {
        date: "2025-09-02",
        title: "Activation Vitesse Pré-Semi",
        semi: true,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Activer la vitesse sans fatigue - Affûtage final" },
            { title: "Résumé", content: "4 x 100m rapide + footing facile" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 15min footing très facile + étirements dynamiques\nCorps : 4 x 100m allure 4'30-4'40/km (récupération 2min marche complète entre chaque)\nRetour au calme : 15min footing très facile + étirements 15min" },
            { title: "Conseil", content: "Très court et très facile ! Les 100m servent juste à réveiller les jambes. Plus que 12 jours avant le semi !" },
            { title: "Pourquoi cette séance ?", content: "Activation neuromusculaire légère, maintien des sensations de vitesse sans aucune fatigue en affûtage final." }
        ]
    },
    // MERCREDI 3 SEPTEMBRE - JOUR 52
    {
        date: "2025-09-03",
        title: "Récupération + HIIT Haut du Corps + Abdos",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération douce - Affûtage final semi" },
            { title: "Résumé", content: "5km facile + 12min HIIT" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km décontracté\nHIIT Haut du Corps + Abdos (12min) :\n3 tours de :\n• Pompes (30s)\n• Russian twist (30s)\n• Rowing haltère 1 bras alterné (30s)\n• Planche (30s)\n• Repos (1min30)" },
            { title: "Conseil", content: "On réduit encore ! Plus que 11 jours avant le semi. Récupération très facile, change de bras toutes les 15s pour le rowing." },
            { title: "Pourquoi cette séance ?", content: "Récupération active en affûtage final + maintien minimal du tonus musculaire." }
        ]
    },
    // JEUDI 4 SEPTEMBRE - JOUR 53
    {
        date: "2025-09-04",
        title: "Test Final Semi",
        semi: true,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Dernier test allure semi avant la course" },
            { title: "Résumé", content: "6km avec 3km à allure semi-marathon" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 15min footing facile progressif\nCorps : 1,5km facile + 3km allure 5'30-5'45/km (allure objectif semi) + 1,5km facile\nRetour au calme : 5min marche + étirements 10min" },
            { title: "Conseil", content: "DERNIER TEST ! Les 3km doivent être fluides et naturels. Si ça passe bien, tu es prêt pour dimanche ! Plus que 10 jours !" },
            { title: "Pourquoi cette séance ?", content: "Test final de validation de l'allure semi, dernière vérification des sensations avant la course." }
        ]
    },
    // VENDREDI 5 SEPTEMBRE - JOUR 54
    {
        date: "2025-09-05",
        title: "Récupération + HIIT Haut du Corps + Abdos",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération légère - Phase finale affûtage" },
            { title: "Résumé", content: "5km facile + 12min HIIT" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km décontracté\nHIIT Haut du Corps + Abdos (12min) :\n3 tours de :\n• Pompes (30s)\n• Dead bug (30s)\n• Press haltère debout 1 bras alterné (30s)\n• Bicycle (30s)\n• Repos (1min30)" },
            { title: "Conseil", content: "Récupération très facile ! Plus que 9 jours avant le semi. Les jambes doivent être fraîches. Change de bras toutes les 15s pour le press." },
            { title: "Pourquoi cette séance ?", content: "Récupération active en phase finale + maintien très léger du tonus avant la semaine de course." }
        ]
    },
    // SAMEDI 6 SEPTEMBRE - JOUR 55
    {
        date: "2025-09-06",
        title: "Dernière Sortie Pré-Semi",
        semi: true,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Activation douce avant semaine de course" },
            { title: "Résumé", content: "8km facile avec 3 accélérations courtes" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix (1h avant la sortie)\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 10min progression très douce\nCorps : 5km allure 6'30-6'45/km + 3 x 200m allure 5'30/km (récup 200m marche) + 2km retour au calme\nRetour au calme : 5min marche + étirements 15min" },
            { title: "Conseil", content: "Dernière sortie ! Les 200m sont juste pour activer, pas pour forcer. Plus que 8 jours avant le semi ! Tu dois te sentir léger." },
            { title: "Pourquoi cette séance ?", content: "Dernière activation avant la semaine de course, maintien des sensations sans fatigue." }
        ]
    },
    // DIMANCHE 7 SEPTEMBRE - JOUR 56
    {
        date: "2025-09-07",
        title: "Repos Complet",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération totale avant la SEMAINE DU SEMI" },
            { title: "Résumé", content: "Repos ou marche légère (20-30min max)" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nRepos complet ou marche tranquille 20-30min si envie\nFocus sur les étirements (15-20min)\nHydratation optimale\nSommeil de qualité" },
            { title: "Conseil", content: "SEMAINE DU SEMI ! Plus que 7 jours ! Repos total, visualise ta course, prépare ton matériel, mental au top !" },
            { title: "Pourquoi cette séance ?", content: "Récupération optimale avant la semaine cruciale du semi d'Auray-Vannes." }
        ]
    },
    // LUNDI 8 SEPTEMBRE - JOUR 57
    {
        date: "2025-09-08",
        title: "Récupération + HIIT Haut du Corps + Abdos LÉGER",
        semi: true,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Affûtage ultra-final - Semaine de course" },
            { title: "Résumé", content: "5km facile + 10min HIIT léger" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km décontracté\nHIIT Haut du Corps + Abdos (10min) :\n3 tours de :\n• Pompes (20s)\n• Planche (20s)\n• Press haltère debout 1 bras alterné (20s)\n• Repos (1min40)" },
            { title: "Conseil", content: "SEMAINE DU SEMI ! Tout ultra-léger maintenant. Plus que 6 jours ! Change de bras toutes les 10s pour le press." },
            { title: "Pourquoi cette séance ?", content: "Affûtage ultra-final + maintien minimal du tonus en semaine de course." }
        ]
    },
    // MARDI 9 SEPTEMBRE - JOUR 58
    {
        date: "2025-09-09",
        title: "Activation Ultra-Légère",
        semi: true,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Activation douce - 5 jours avant le semi" },
            { title: "Résumé", content: "Footing court + quelques foulées" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 10min footing très facile + étirements dynamiques\nCorps : 3 x 50m foulées allure 5'00/km (récupération 1min marche complète)\nRetour au calme : 10min footing très facile + étirements 10min" },
            { title: "Conseil", content: "Ultra-court ! Les foulées servent juste à maintenir les sensations. Plus que 5 jours ! Les jambes doivent être ultra-fraîches." },
            { title: "Pourquoi cette séance ?", content: "Activation neuromusculaire minimale, maintien des sensations sans aucune fatigue à J-5." }
        ]
    },
    // MERCREDI 10 SEPTEMBRE - JOUR 59
    {
        date: "2025-09-10",
        title: "Récupération + HIIT Haut du Corps + Abdos MINIMAL",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Maintien minimal - 4 jours avant le semi" },
            { title: "Résumé", content: "5km facile + 8min HIIT minimal" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km ultra-décontracté\nHIIT Haut du Corps + Abdos (8min) :\n2 tours de :\n• Pompes (20s)\n• Planche (20s)\n• Gainage latéral (10s chaque côté) (20s)\n• Repos (2min)" },
            { title: "Conseil", content: "MINIMAL ! Plus que 4 jours ! Tout doit être ultra-facile. Les jambes doivent être comme des ressorts prêts à exploser dimanche !" },
            { title: "Pourquoi cette séance ?", content: "Maintien minimal du tonus à J-4, éviter la rouille sans aucune fatigue." }
        ]
    },
    // JEUDI 11 SEPTEMBRE - JOUR 60
    {
        date: "2025-09-11",
        title: "Dernière Activation Pré-Semi",
        semi: true,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Activation finale - 3 jours avant le semi" },
            { title: "Résumé", content: "Footing court + dernières foulées" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 8min footing très facile + étirements dynamiques\nCorps : 2 x 30m foulées allure 5'00/km (récupération 2min marche complète)\nRetour au calme : 8min footing très facile + étirements 10min" },
            { title: "Conseil", content: "DERNIÈRE ACTIVATION ! Plus que 3 jours ! Les foulées sont juste pour vérifier que tout va bien. Tu dois te sentir léger et prêt !" },
            { title: "Pourquoi cette séance ?", content: "Dernière activation neuromusculaire avant le semi, vérification finale des sensations à J-3." }
        ]
    },
    // VENDREDI 12 SEPTEMBRE - JOUR 61
    {
        date: "2025-09-12",
        title: "Récupération + HIIT Haut du Corps + Abdos ULTRA-MINIMAL",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Maintien ultra-minimal - 2 jours avant le semi" },
            { title: "Résumé", content: "5km facile + 6min HIIT ultra-minimal" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km ultra-décontracté\nHIIT Haut du Corps + Abdos (6min) :\n2 tours de :\n• Pompes (15s)\n• Planche (15s)\n• Repos (2min30)" },
            { title: "Conseil", content: "ULTRA-MINIMAL ! Plus que 2 jours ! Juste pour éviter la rouille. Les jambes doivent être des ressorts prêts à exploser dimanche !" },
            { title: "Pourquoi cette séance ?", content: "Maintien ultra-minimal du tonus à J-2, éviter totalement la fatigue avant le jour J." }
        ]
    },
    // SAMEDI 13 SEPTEMBRE - JOUR 62
    {
        date: "2025-09-13",
        title: "Repos + Préparation Mentale",
        semi: true,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Repos total - Préparation jour J" },
            { title: "Résumé", content: "Repos ou marche très légère + préparation matérielle" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 glucide complet (pour faire le plein de glycogène)\n\nPRÉPARATION JOUR J :\nRepos complet ou marche très légère 15min max\nPréparation matérielle : tenue, chaussures, dossard, nutrition course\nHydratation optimale toute la journée\nCoucher tôt (22h max)\nVisualisation positive de la course" },
            { title: "Conseil", content: "VEILLE DE COURSE ! Repos total, prépare tout ton matériel, hydrate-toi bien, couche-toi tôt. DEMAIN C'EST LE JOUR J !" },
            { title: "Pourquoi cette séance ?", content: "Repos total avant le semi d'Auray-Vannes, préparation optimale pour être au top demain." }
        ]
    },
    // DIMANCHE 14 SEPTEMBRE - JOUR 63
    {
        date: "2025-09-14",
        title: "SEMI-MARATHON D'AURAY-VANNES",
        semi: true,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Sub 2h00 (allure 5'30-5'45/km)" },
            { title: "Résumé", content: "JOUR J DU SEMI !" },
            { title: "Détail", content: "NUTRITION JOUR J :\nMATIN (2-3h avant le départ) : 1 des 3 petits déjeuners au choix + banane + eau\n1h avant le départ : Petite collation si besoin (banane, barre énergétique)\n\nPROGRAMME JOUR J :\n2-3h avant : Réveil, petit-déjeuner, préparation tranquille\n1h avant : Arrivée sur site, retrait dossard si besoin, échauffement\n30min avant : Échauffement (10-15min footing très facile) + Activation (3-4 accélérations de 30m) + Étirements dynamiques (5min)\n\nPENDANT LA COURSE :\nKm 1-5 : Allure 5'45-6'00/km (ne pas partir trop vite !)\nKm 6-15 : Allure objectif 5'30-5'45/km\nKm 16-21 : Maintenir ou accélérer légèrement si possible\n\nAPRÈS LA COURSE : Récupération (15min marche + étirements) + Hydratation et nutrition de récupération" },
            { title: "Conseil", content: "C'EST LE JOUR J ! Tu as tout donné en préparation, tu es prêt ! Fais-toi plaisir et cours SMART !" },
            { title: "Pourquoi cette séance ?", content: "OBJECTIF : MOINS DE 2H00 AU SEMI ! GO GO GO !" }
        ]
    },
    // LUNDI 15 SEPTEMBRE - JOUR 64
    {
        date: "2025-09-15",
        title: "Récupération Active Post-Semi",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération douce après le semi d'hier" },
            { title: "Résumé", content: "5km récupération très facile + étirements" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nRécupération : 5km allure 7'30-8'00/km ultra-décontracté\nPas de HIIT : Juste étirements 20min et récupération\nHydratation maximale" },
            { title: "Conseil", content: "Récupération douce après le semi. Écoute tes sensations, les jambes peuvent être lourdes, c'est normal !" },
            { title: "Pourquoi cette séance ?", content: "Favoriser la récupération post-course, réactiver la circulation sans stress." }
        ]
    },
    // MARDI 16 SEPTEMBRE - JOUR 65
    {
        date: "2025-09-16",
        title: "Endurance Fondamentale",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Reprise progressive après récupération post-semi" },
            { title: "Résumé", content: "8km allure conversationnelle" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 10min progression douce\nCorps : 8km allure 6'30-6'45/km (tu dois pouvoir parler facilement)\nRetour au calme : 5min marche + étirements 10min" },
            { title: "Conseil", content: "Reprise progressive. Si les jambes sont encore lourdes du semi, raccourcis à 6km. On démarre la préparation marathon en douceur." },
            { title: "Pourquoi cette séance ?", content: "Reprise progressive vers l'entraînement marathon, évaluation des sensations post-semi." }
        ]
    },
    // MERCREDI 17 SEPTEMBRE - JOUR 66
    {
        date: "2025-09-17",
        title: "Récupération + HIIT Haut du Corps + Abdos",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération active + renforcement - Phase marathon" },
            { title: "Résumé", content: "5km facile + 15min HIIT" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km décontracté\nHIIT Haut du Corps + Abdos (15min) :\n4 tours de :\n• Pompes (30s)\n• Planche (30s)\n• Press haltère debout 1 bras alterné (30s)\n• Russian twist (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "On reprend les HIIT ! Change de bras toutes les 15s pour le press. On commence à construire vers le marathon." },
            { title: "Pourquoi cette séance ?", content: "Reprise du renforcement + récupération active pour la transition vers la préparation marathon." }
        ]
    },
    // JEUDI 18 SEPTEMBRE - JOUR 67
    {
        date: "2025-09-18",
        title: "Tempo Run Marathon",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Développer l'allure seuil pour la préparation marathon" },
            { title: "Résumé", content: "10km avec 6km à allure marathon +15s/km" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 15min footing facile progressif\nCorps : 2km facile + 6km allure 5'55-6'10/km (allure marathon +15s) + 2km facile\nRetour au calme : 5min marche + étirements 10min" },
            { title: "Conseil", content: "Les 6km au milieu sont légèrement plus rapides que ton allure marathon objectif (5'40/km). Tu dois pouvoir dire quelques mots." },
            { title: "Pourquoi cette séance ?", content: "Développer l'endurance à allure soutenue pour le marathon, habituer le corps aux allures proches de l'objectif." }
        ]
    },
    // VENDREDI 19 SEPTEMBRE - JOUR 68
    {
        date: "2025-09-19",
        title: "Récupération + HIIT Haut du Corps + Abdos",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération active après le tempo d'hier" },
            { title: "Résumé", content: "5km facile + 16min HIIT" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km décontracté\nHIIT Haut du Corps + Abdos (16min) :\n4 tours de :\n• Burpees (30s)\n• Dead bug (30s)\n• Rowing haltère 1 bras alterné (30s)\n• Bicycle (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "Récupération facile après le tempo d'hier. Change de bras toutes les 15s pour le rowing. Focus sur la technique du dead bug." },
            { title: "Pourquoi cette séance ?", content: "Récupération active + renforcement complet après l'effort soutenu d'hier." }
        ]
    },
    // SAMEDI 20 SEPTEMBRE - JOUR 69
    {
        date: "2025-09-20",
        title: "Sortie Longue Marathon",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Première grosse sortie longue en préparation marathon" },
            { title: "Résumé", content: "16km avec progression finale" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix (1h avant la sortie)\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 10min progression douce\nCorps : 12km allure 6'15-6'30/km + 4km progression (6'00 → 5'45 → 5'30 → 5'15/km)\nRetour au calme : 5min marche + étirements 15min" },
            { title: "Conseil", content: "Les 12 premiers km restent confortables. La progression sur les 4 derniers km simule un finish de course. Hydratation régulière." },
            { title: "Pourquoi cette séance ?", content: "Développer l'endurance de base pour le marathon, habituer le corps à accélérer en fin d'effort long." }
        ]
    },
    // DIMANCHE 21 SEPTEMBRE - JOUR 70
    {
        date: "2025-09-21",
        title: "Repos Complet",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération totale après la première semaine marathon" },
            { title: "Résumé", content: "Repos ou marche légère (20-30min max)" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nRepos complet ou marche tranquille 20-30min si envie\nFocus sur les étirements (15-20min)\nHydratation optimale\nSommeil de qualité" },
            { title: "Conseil", content: "Première semaine de préparation marathon terminée ! Plus que 5 semaines avant le marathon de Rennes. Récupère bien." },
            { title: "Pourquoi cette séance ?", content: "Récupération nécessaire après la reprise marathon, préparation pour intensifier les 5 dernières semaines." }
        ]
    },
    // LUNDI 22 SEPTEMBRE - JOUR 71
    {
        date: "2025-09-22",
        title: "Récupération + HIIT Haut du Corps + Abdos",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération active + renforcement - Intensification marathon" },
            { title: "Résumé", content: "5km facile + 16min HIIT" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km décontracté\nHIIT Haut du Corps + Abdos (16min) :\n4 tours de :\n• Pompes (30s)\n• Planche (30s)\n• Kettlebell swing 12kg (30s)\n• Gainage latéral (15s chaque côté) (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "Semaine 2 de préparation marathon ! On intensifie progressivement. Focus sur la technique des kettlebell swings." },
            { title: "Pourquoi cette séance ?", content: "Renforcement complet + récupération active pour la montée en charge marathon." }
        ]
    },
    // MARDI 23 SEPTEMBRE - JOUR 72
    {
        date: "2025-09-23",
        title: "VMA Marathon",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Développer la vitesse marathon et l'efficacité" },
            { title: "Résumé", content: "5 x 800m à allure 10km" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 15min footing facile + 4 x 100m progressifs\nCorps : 5 x 800m allure 5'10-5'20/km (récupération 2min footing lent entre chaque)\nRetour au calme : 10min footing facile + étirements 10min" },
            { title: "Conseil", content: "Plus long que les 400m précédents ! Vise la régularité. Ces 800m développent ta capacité à tenir des allures soutenues." },
            { title: "Pourquoi cette séance ?", content: "Développer la VMA spécifique marathon, améliorer l'efficacité à allure rapide pour faciliter l'allure marathon." }
        ]
    },
    // MERCREDI 24 SEPTEMBRE - JOUR 73
    {
        date: "2025-09-24",
        title: "Récupération + HIIT Haut du Corps + Abdos",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération active après la VMA d'hier" },
            { title: "Résumé", content: "5km facile + 18min HIIT" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km décontracté\nHIIT Haut du Corps + Abdos (18min) :\n5 tours de :\n• Burpees (30s)\n• Crunchs (30s)\n• Rowing haltère 1 bras alterné (30s)\n• Russian twist (30s)\n• Repos (1min15)" },
            { title: "Conseil", content: "Récupération vraiment facile après la VMA intensive d'hier. Change de bras toutes les 15s pour le rowing." },
            { title: "Pourquoi cette séance ?", content: "Récupération active + renforcement complet après l'effort VMA + activation métabolique." }
        ]
    },
    // JEUDI 25 SEPTEMBRE - JOUR 74
    {
        date: "2025-09-25",
        title: "Allure Marathon",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Développer l'endurance à allure marathon objectif" },
            { title: "Résumé", content: "12km avec 8km à allure marathon" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 15min footing facile progressif\nCorps : 2km facile + 8km allure 5'40-5'50/km (allure marathon objectif) + 2km facile\nRetour au calme : 5min marche + étirements 10min" },
            { title: "Conseil", content: "Les 8km au milieu sont CRUCIAUX ! C'est ton allure marathon objectif. Tu dois pouvoir tenir une conversation courte mais pas continue." },
            { title: "Pourquoi cette séance ?", content: "Habituer le corps à soutenir l'allure marathon sur une distance significative, test de l'allure cible sub-4h." }
        ]
    },
    // VENDREDI 26 SEPTEMBRE - JOUR 75
    {
        date: "2025-09-26",
        title: "Récupération + HIIT Haut du Corps + Abdos",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération active après l'allure marathon d'hier" },
            { title: "Résumé", content: "5km facile + 15min HIIT" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km décontracté\nHIIT Haut du Corps + Abdos (15min) :\n4 tours de :\n• Pompes (30s)\n• Bicycle (30s)\n• Press haltère debout 1 bras alterné (30s)\n• Dead bug (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "Récupération vraiment facile après la séance allure marathon d'hier. Change de bras toutes les 15s pour le press." },
            { title: "Pourquoi cette séance ?", content: "Récupération active + renforcement après l'effort spécifique marathon d'hier." }
        ]
    },
    // SAMEDI 27 SEPTEMBRE - JOUR 76
    {
        date: "2025-09-27",
        title: "Sortie Longue Marathon Progressif",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Montée en volume avec simulation tactique marathon" },
            { title: "Résumé", content: "20km avec simulation allures marathon" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix (1h avant la sortie)\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 10min progression douce\nCorps : 8km allure 6'00-6'15/km + 8km allure 5'50-6'00/km + 4km allure 5'40-5'50/km (simulation marathon)\nRetour au calme : 5min marche + étirements 15min" },
            { title: "Conseil", content: "Simulation de marathon ! Départ tranquille, puis accélération progressive comme tu feras au marathon. Hydratation et nutrition à tester." },
            { title: "Pourquoi cette séance ?", content: "Simulation tactique du marathon, test de la gestion d'allure sur longue distance, développement de l'endurance spécifique." }
        ]
    },
    // DIMANCHE 28 SEPTEMBRE - JOUR 77
    {
        date: "2025-09-28",
        title: "Repos Complet",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération totale après la deuxième semaine marathon" },
            { title: "Résumé", content: "Repos ou marche légère (20-30min max)" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nRepos complet ou marche tranquille 20-30min si envie\nFocus sur les étirements (15-20min)\nHydratation optimale\nSommeil de qualité" },
            { title: "Conseil", content: "Deuxième semaine de préparation marathon terminée ! Plus que 4 semaines avant le marathon de Rennes. On entre dans la phase intensive." },
            { title: "Pourquoi cette séance ?", content: "Récupération nécessaire avant la phase la plus intensive de la préparation marathon." }
        ]
    },
    // LUNDI 29 SEPTEMBRE - JOUR 78
    {
        date: "2025-09-29",
        title: "Récupération + HIIT Haut du Corps + Abdos",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération active + renforcement - Phase intensive marathon" },
            { title: "Résumé", content: "5km facile + 18min HIIT" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km décontracté\nHIIT Haut du Corps + Abdos (18min) :\n5 tours de :\n• Pompes (30s)\n• Planche (30s)\n• Kettlebell swing 12kg (30s)\n• Gainage latéral (15s chaque côté) (30s)\n• Repos (1min15)" },
            { title: "Conseil", content: "PHASE INTENSIVE ! Plus que 4 semaines avant le marathon. On monte en intensité sur toutes les séances." },
            { title: "Pourquoi cette séance ?", content: "Renforcement complet intensifié + récupération active pour la phase cruciale marathon." }
        ]
    },
    // MARDI 30 SEPTEMBRE - JOUR 79
    {
        date: "2025-09-30",
        title: "Fractionné Long Marathon",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Développer l'endurance-vitesse spécifique marathon" },
            { title: "Résumé", content: "4 x 1200m à allure semi-marathon" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 15min footing facile + 4 x 100m progressifs\nCorps : 4 x 1200m allure 5'30-5'40/km (récupération 2min30 footing lent entre chaque)\nRetour au calme : 10min footing facile + étirements 10min" },
            { title: "Conseil", content: "Plus long et plus spécifique ! Allure semi-marathon sur 1200m. Ces fractionnés longs développent ta capacité à tenir l'allure marathon." },
            { title: "Pourquoi cette séance ?", content: "Développer l'endurance-vitesse, améliorer la résistance à allure soutenue, préparation spécifique aux 42km." }
        ]
    },
    // MERCREDI 1ER OCTOBRE - JOUR 80
    {
        date: "2025-10-01",
        title: "Récupération + HIIT Haut du Corps + Abdos",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération active après le fractionné long d'hier" },
            { title: "Résumé", content: "5km facile + 18min HIIT" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km décontracté\nHIIT Haut du Corps + Abdos (18min) :\n5 tours de :\n• Burpees (30s)\n• Dead bug (30s)\n• Rowing haltère 1 bras alterné (30s)\n• Crunchs (30s)\n• Repos (1min15)" },
            { title: "Conseil", content: "Récupération vraiment facile après le fractionné long d'hier. Change de bras toutes les 15s pour le rowing." },
            { title: "Pourquoi cette séance ?", content: "Récupération active + renforcement complet après l'effort intensif d'hier." }
        ]
    },
    // JEUDI 2 OCTOBRE - JOUR 81
    {
        date: "2025-10-02",
        title: "Test Allure Marathon Long",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Test majeur d'endurance à allure marathon" },
            { title: "Résumé", content: "15km avec 10km à allure marathon objectif" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 15min footing facile progressif\nCorps : 2,5km facile + 10km allure 5'40-5'50/km (allure marathon objectif) + 2,5km facile\nRetour au calme : 5min marche + étirements 15min" },
            { title: "Conseil", content: "TEST MAJEUR ! 10km à allure marathon, c'est presque 1/4 de la distance de course. Si tu tiens bien, tu es sur la bonne voie pour sub-4h !" },
            { title: "Pourquoi cette séance ?", content: "Test décisif de l'allure marathon sur longue distance, validation de la forme à 3 semaines et demie du marathon." }
        ]
    },
    // VENDREDI 3 OCTOBRE - JOUR 82
    {
        date: "2025-10-03",
        title: "Récupération + HIIT Haut du Corps + Abdos",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération active après le test marathon d'hier" },
            { title: "Résumé", content: "5km facile + 15min HIIT" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km décontracté\nHIIT Haut du Corps + Abdos (15min) :\n4 tours de :\n• Pompes (30s)\n• Russian twist (30s)\n• Press haltère debout 1 bras alterné (30s)\n• Bicycle (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "Récupération vraiment facile après le gros test d'hier. Change de bras toutes les 15s pour le press. Comment s'est passé le test 10km ?" },
            { title: "Pourquoi cette séance ?", content: "Récupération active + focus abdominaux après l'effort test majeur d'hier." }
        ]
    },
    // SAMEDI 4 OCTOBRE - JOUR 83
    {
        date: "2025-10-04",
        title: "Dernière Grosse Sortie Longue Marathon",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Pic de volume avant l'affûtage marathon" },
            { title: "Résumé", content: "25km avec simulation complète marathon" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix (1h avant la sortie)\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 10min progression douce\nCorps : 10km allure 6'00-6'15/km + 10km allure 5'50-6'00/km + 5km allure 5'40-5'50/km (simulation marathon complète)\nRetour au calme : 5min marche + étirements 20min" },
            { title: "Conseil", content: "DERNIÈRE GROSSE SORTIE ! Simulation complète de marathon. Teste ta nutrition, ton hydratation, ta tactique de course. Plus que 3 semaines !" },
            { title: "Pourquoi cette séance ?", content: "Pic de volume avant l'affûtage, simulation finale du marathon, test complet des conditions de course." }
        ]
    },
    // DIMANCHE 5 OCTOBRE - JOUR 84
    {
        date: "2025-10-05",
        title: "Repos Complet",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération totale avant la phase d'affûtage marathon" },
            { title: "Résumé", content: "Repos ou marche légère (20-30min max)" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nRepos complet ou marche tranquille 20-30min si envie\nFocus sur les étirements (15-20min)\nHydratation optimale\nSommeil de qualité" },
            { title: "Conseil", content: "Phase intensive terminée ! Plus que 3 semaines avant le marathon de Rennes. L'AFFÛTAGE commence demain !" },
            { title: "Pourquoi cette séance ?", content: "Récupération optimale avant la phase d'affûtage marathon, préparation pour arriver en forme parfaite le jour J." }
        ]
    },
    // LUNDI 6 OCTOBRE - JOUR 85
    {
        date: "2025-10-06",
        title: "Récupération + HIIT Haut du Corps + Abdos",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Affûtage marathon - Maintien de la forme sans fatigue" },
            { title: "Résumé", content: "5km facile + 16min HIIT" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km décontracté\nHIIT Haut du Corps + Abdos (16min) :\n4 tours de :\n• Pompes (30s)\n• Planche (30s)\n• Kettlebell swing 12kg (30s)\n• Gainage latéral (15s chaque côté) (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "AFFÛTAGE MARATHON ! On diminue progressivement la charge pour arriver frais au marathon. Qualité avant quantité maintenant." },
            { title: "Pourquoi cette séance ?", content: "Début de l'affûtage marathon + maintien du tonus musculaire sans fatigue excessive." }
        ]
    },
    // MARDI 7 OCTOBRE - JOUR 86
    {
        date: "2025-10-07",
        title: "Fractionné Court Affûtage",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Maintenir la vitesse sans fatigue - Affûtage marathon" },
            { title: "Résumé", content: "6 x 400m à allure 10km" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 15min footing facile + 3 x 100m progressifs\nCorps : 6 x 400m allure 5'10-5'20/km (récupération 1min30 footing lent entre chaque)\nRetour au calme : 10min footing facile + étirements 10min" },
            { title: "Conseil", content: "Plus court qu'avant ! L'objectif est de maintenir la vitesse et les sensations sans se fatiguer. Les jambes doivent rester fraîches." },
            { title: "Pourquoi cette séance ?", content: "Maintien de la vitesse en phase d'affûtage, activation neuromusculaire sans fatigue excessive pour le marathon." }
        ]
    },
    // MERCREDI 8 OCTOBRE - JOUR 87
    {
        date: "2025-10-08",
        title: "Récupération + HIIT Haut du Corps + Abdos",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération active en phase d'affûtage marathon" },
            { title: "Résumé", content: "5km facile + 15min HIIT" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km décontracté\nHIIT Haut du Corps + Abdos (15min) :\n4 tours de :\n• Pompes (30s)\n• Dead bug (30s)\n• Press haltère debout 1 bras alterné (30s)\n• Russian twist (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "On réduit légèrement l'intensité du HIIT en affûtage. Change de bras toutes les 15s pour le press. Plus que 18 jours !" },
            { title: "Pourquoi cette séance ?", content: "Récupération active en affûtage + maintien du tonus musculaire sans surcharge." }
        ]
    },
    // JEUDI 9 OCTOBRE - JOUR 88
    {
        date: "2025-10-09",
        title: "Allure Marathon Courte",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Rappel allure marathon sans fatigue - Affûtage" },
            { title: "Résumé", content: "10km avec 6km à allure marathon" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 15min footing facile progressif\nCorps : 2km facile + 6km allure 5'40-5'50/km (allure marathon objectif) + 2km facile\nRetour au calme : 5min marche + étirements 10min" },
            { title: "Conseil", content: "Plus court qu'avant ! Les 6km doivent être fluides et naturels. Tu dois avoir l'impression que c'est devenu facile maintenant." },
            { title: "Pourquoi cette séance ?", content: "Rappel de l'allure marathon en version courte, affûtage optimal, validation des sensations sans fatigue." }
        ]
    },
    // VENDREDI 10 OCTOBRE - JOUR 89
    {
        date: "2025-10-10",
        title: "Récupération + HIIT Haut du Corps + Abdos",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération légère avant les 2 dernières semaines marathon" },
            { title: "Résumé", content: "5km facile + 15min HIIT" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km décontracté\nHIIT Haut du Corps + Abdos (15min) :\n4 tours de :\n• Pompes (30s)\n• Bicycle (30s)\n• Rowing haltère 1 bras alterné (30s)\n• Planche (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "On se rapproche du marathon ! Plus que 16 jours. Récupération facile, change de bras toutes les 15s pour le rowing." },
            { title: "Pourquoi cette séance ?", content: "Récupération active en fin d'affûtage + maintien léger du tonus musculaire." }
        ]
    },
    // SAMEDI 11 OCTOBRE - JOUR 90
    {
        date: "2025-10-11",
        title: "Dernière Sortie Longue Pré-Marathon",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Dernière sortie longue modérée avant le marathon" },
            { title: "Résumé", content: "15km allure facile avec quelques accélérations" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix (1h avant la sortie)\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 10min progression douce\nCorps : 10km allure 6'15-6'30/km + 3 x 1km allure 5'50/km (récup 500m facile) + 2km retour au calme\nRetour au calme : 5min marche + étirements 15min" },
            { title: "Conseil", content: "Dernière sortie longue ! Les 3 accélérations doivent être fluides, pas forcées. Tu dois te sentir léger et prêt pour dans 2 semaines." },
            { title: "Pourquoi cette séance ?", content: "Dernière préparation longue avant l'affûtage final, test des sensations, activation douce avant les 2 dernières semaines." }
        ]
    },
    // DIMANCHE 12 OCTOBRE - JOUR 91
    {
        date: "2025-10-12",
        title: "Repos Complet",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération totale avant les 2 dernières semaines marathon" },
            { title: "Résumé", content: "Repos ou marche légère (20-30min max)" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nRepos complet ou marche tranquille 20-30min si envie\nFocus sur les étirements (15-20min)\nHydratation optimale\nSommeil de qualité" },
            { title: "Conseil", content: "Phase d'affûtage 1 terminée ! Plus que 2 semaines avant le marathon de Rennes. On entre dans l'affûtage final !" },
            { title: "Pourquoi cette séance ?", content: "Récupération optimale avant les 2 dernières semaines cruciales pré-marathon." }
        ]
    },
    // LUNDI 13 OCTOBRE - JOUR 92
    {
        date: "2025-10-13",
        title: "Récupération + HIIT Haut du Corps + Abdos LÉGER",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Affûtage ultra-final - 2 semaines avant le marathon" },
            { title: "Résumé", content: "5km facile + 12min HIIT léger" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km décontracté\nHIIT Haut du Corps + Abdos (12min) :\n3 tours de :\n• Pompes (20s)\n• Planche (20s)\n• Press haltère debout 1 bras alterné (20s)\n• Repos (1min40)" },
            { title: "Conseil", content: "AFFÛTAGE FINAL ! Plus que 13 jours avant le marathon ! Tout ultra-léger maintenant. Change de bras toutes les 10s pour le press." },
            { title: "Pourquoi cette séance ?", content: "Affûtage ultra-final + maintien minimal du tonus en phase finale marathon." }
        ]
    },
    // MARDI 14 OCTOBRE - JOUR 93
    {
        date: "2025-10-14",
        title: "Activation Ultra-Légère",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Activation douce - 12 jours avant le marathon" },
            { title: "Résumé", content: "Footing court + quelques foulées" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 10min footing très facile + étirements dynamiques\nCorps : 4 x 50m foulées allure 5'30/km (récupération 1min marche complète)\nRetour au calme : 10min footing très facile + étirements 10min" },
            { title: "Conseil", content: "Ultra-court ! Les foulées servent juste à maintenir les sensations. Plus que 12 jours ! Les jambes doivent être ultra-fraîches." },
            { title: "Pourquoi cette séance ?", content: "Activation neuromusculaire minimale, maintien des sensations sans aucune fatigue à J-12." }
        ]
    },
    // MERCREDI 15 OCTOBRE - JOUR 94
    {
        date: "2025-10-15",
        title: "Récupération + HIIT Haut du Corps + Abdos MINIMAL",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Maintien minimal - 11 jours avant le marathon" },
            { title: "Résumé", content: "5km facile + 10min HIIT minimal" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km ultra-décontracté\nHIIT Haut du Corps + Abdos (10min) :\n3 tours de :\n• Pompes (15s)\n• Planche (15s)\n• Gainage latéral (10s chaque côté) (20s)\n• Repos (1min50)" },
            { title: "Conseil", content: "MINIMAL ! Plus que 11 jours ! Tout doit être ultra-facile. Les jambes doivent être comme des ressorts prêts à exploser le 26 octobre !" },
            { title: "Pourquoi cette séance ?", content: "Maintien minimal du tonus à J-11, éviter la rouille sans aucune fatigue." }
        ]
    },
    // JEUDI 16 OCTOBRE - JOUR 95
    {
        date: "2025-10-16",
        title: "Dernière Activation Pré-Marathon",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Activation finale - 10 jours avant le marathon" },
            { title: "Résumé", content: "Footing court + dernières foulées" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 8min footing très facile + étirements dynamiques\nCorps : 3 x 30m foulées allure 5'30/km (récupération 2min marche complète)\nRetour au calme : 8min footing très facile + étirements 10min" },
            { title: "Conseil", content: "DERNIÈRE ACTIVATION ! Plus que 10 jours ! Les foulées sont juste pour vérifier que tout va bien. Tu dois te sentir léger et prêt !" },
            { title: "Pourquoi cette séance ?", content: "Dernière activation neuromusculaire avant le marathon, vérification finale des sensations à J-10." }
        ]
    },
    // VENDREDI 17 OCTOBRE - JOUR 96
    {
        date: "2025-10-17",
        title: "Récupération + HIIT Haut du Corps + Abdos ULTRA-MINIMAL",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Maintien ultra-minimal - 9 jours avant le marathon" },
            { title: "Résumé", content: "5km facile + 8min HIIT ultra-minimal" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km ultra-décontracté\nHIIT Haut du Corps + Abdos (8min) :\n2 tours de :\n• Pompes (15s)\n• Planche (15s)\n• Repos (2min30)" },
            { title: "Conseil", content: "ULTRA-MINIMAL ! Plus que 9 jours ! Juste pour éviter la rouille. Les jambes doivent être des ressorts prêts à exploser le 26 octobre !" },
            { title: "Pourquoi cette séance ?", content: "Maintien ultra-minimal du tonus à J-9, éviter totalement la fatigue avant la semaine de course." }
        ]
    },
    // SAMEDI 18 OCTOBRE - JOUR 97
    {
        date: "2025-10-18",
        title: "Dernière Sortie Avant Semaine Marathon",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Activation douce avant la semaine de course" },
            { title: "Résumé", content: "8km facile avec 2 accélérations courtes" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix (1h avant la sortie)\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 10min progression très douce\nCorps : 6km allure 6'30-6'45/km + 2 x 200m allure 5'40/km (récup 200m marche) + 1km retour au calme\nRetour au calme : 5min marche + étirements 15min" },
            { title: "Conseil", content: "Dernière sortie ! Les 200m sont juste pour activer, pas pour forcer. Plus que 8 jours avant le marathon ! Tu dois te sentir léger." },
            { title: "Pourquoi cette séance ?", content: "Dernière activation avant la semaine de course, maintien des sensations sans fatigue." }
        ]
    },
    // DIMANCHE 19 OCTOBRE - JOUR 98
    {
        date: "2025-10-19",
        title: "Repos Complet",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération totale avant la SEMAINE DU MARATHON" },
            { title: "Résumé", content: "Repos ou marche légère (20-30min max)" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nRepos complet ou marche tranquille 20-30min si envie\nFocus sur les étirements (15-20min)\nHydratation optimale\nSommeil de qualité" },
            { title: "Conseil", content: "SEMAINE DU MARATHON ! Plus que 7 jours ! Repos total, visualise ta course, prépare ton matériel, mental au top !" },
            { title: "Pourquoi cette séance ?", content: "Récupération optimale avant la semaine cruciale du marathon de Rennes." }
        ]
    },
    // LUNDI 20 OCTOBRE - JOUR 99
    {
        date: "2025-10-20",
        title: "Récupération + HIIT Haut du Corps + Abdos ULTRA-LÉGER",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Affûtage ultra-final - Semaine de course" },
            { title: "Résumé", content: "5km facile + 6min HIIT ultra-léger" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nCourse : 5km allure 7'00-7'30/km décontracté\nHIIT Haut du Corps + Abdos (6min) :\n2 tours de :\n• Pompes (10s)\n• Planche (10s)\n• Repos (2min40)" },
            { title: "Conseil", content: "SEMAINE DU MARATHON ! Tout ultra-léger maintenant. Plus que 6 jours ! Juste pour éviter la rouille." },
            { title: "Pourquoi cette séance ?", content: "Affûtage ultra-final + maintien ultra-minimal du tonus en semaine de course." }
        ]
    },
    // MARDI 21 OCTOBRE - JOUR 100
    {
        date: "2025-10-21",
        title: "Activation Minimale",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Activation ultra-douce - 5 jours avant le marathon" },
            { title: "Résumé", content: "Footing très court + foulées légères" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 8min footing très facile + étirements dynamiques\nCorps : 2 x 30m foulées allure 5'40/km (récupération 2min marche complète)\nRetour au calme : 8min footing très facile + étirements 10min" },
            { title: "Conseil", content: "Ultra-court ! Les foulées servent juste à maintenir les sensations. Plus que 5 jours ! Les jambes doivent être ultra-fraîches." },
            { title: "Pourquoi cette séance ?", content: "Activation neuromusculaire minimale, maintien des sensations sans aucune fatigue à J-5." }
        ]
    },
    // MERCREDI 22 OCTOBRE - JOUR 101
    {
        date: "2025-10-22",
        title: "Repos Complet",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération maximale - 4 jours avant le marathon" },
            { title: "Résumé", content: "Repos complet + préparation mentale" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nRepos total ! Plus que 4 jours. Hydratation, étirements légers, préparation du matériel et mental." },
            { title: "Conseil", content: "Repos total ! Plus que 4 jours. Hydratation, étirements légers, préparation du matériel et mental." },
            { title: "Pourquoi cette séance ?", content: "Récupération maximale - 4 jours avant le marathon." }
        ]
    },
    // JEUDI 23 OCTOBRE - JOUR 102
    {
        date: "2025-10-23",
        title: "Activation Ultra-Minimale",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Dernière activation - 3 jours avant le marathon" },
            { title: "Résumé", content: "Footing très court + activation légère" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nSÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 6min footing très facile + étirements dynamiques légers\nCorps : 2 x 20m foulées allure 5'40/km (récupération 2min marche complète)\nRetour au calme : 6min footing très facile + étirements 8min" },
            { title: "Conseil", content: "DERNIÈRE ACTIVATION ! Plus que 3 jours ! Les foulées sont juste pour vérifier que tout va bien. Tu dois te sentir léger et prêt !" },
            { title: "Pourquoi cette séance ?", content: "Dernière activation neuromusculaire avant le marathon, vérification finale des sensations à J-3." }
        ]
    },
    // VENDREDI 24 OCTOBRE - JOUR 103
    {
        date: "2025-10-24",
        title: "Repos Complet",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Repos total - 2 jours avant le marathon" },
            { title: "Résumé", content: "Repos complet + préparation matérielle" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)\n\nPRÉPARATION J-2 :\nRepos complet - aucune activité physique\nPréparation matérielle : tenue, chaussures, dossard, nutrition course\nHydratation optimale toute la journée\nÉtirements légers 10min max\nPréparation mentale : visualisation de la course" },
            { title: "Conseil", content: "J-2 ! Repos total, prépare tout ton matériel, hydrate-toi bien. Plus que 2 jours avant ton marathon !" },
            { title: "Pourquoi cette séance ?", content: "Repos total à J-2, préparation optimale pour être au top dimanche." }
        ]
    },
    // SAMEDI 25 OCTOBRE - JOUR 104
    {
        date: "2025-10-25",
        title: "Repos + Préparation Mentale",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Repos total - Préparation jour J" },
            { title: "Résumé", content: "Repos ou marche très légère + préparation matérielle" },
            { title: "Détail", content: "NUTRITION DU JOUR :\nMATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 glucide complet (pour faire le plein de glycogène)\n\nPRÉPARATION JOUR J :\nRepos complet ou marche très légère 15min max\nPréparation matérielle : tenue, chaussures, dossard, nutrition course\nHydratation optimale toute la journée\nCoucher tôt (21h30 max)\nVisualisation positive de la course marathon" },
            { title: "Conseil", content: "VEILLE DE COURSE ! Repos total, prépare tout ton matériel, hydrate-toi bien, couche-toi tôt. DEMAIN C'EST LE JOUR J DU MARATHON !" },
            { title: "Pourquoi cette séance ?", content: "Repos total avant le marathon de Rennes, préparation optimale pour être au top demain." }
        ]
    },
    // DIMANCHE 26 OCTOBRE - JOUR 105
    {
        date: "2025-10-26",
        title: "MARATHON VERT DE RENNES",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Sub 4h00 (allure 5'40-5'50/km)" },
            { title: "Résumé", content: "JOUR J DU MARATHON !" },
            { title: "Détail", content: "NUTRITION JOUR J :\nMATIN (3h avant le départ) : 1 des 3 petits déjeuners au choix + banane + eau\n1h30 avant le départ : Petite collation si besoin (banane, barre énergétique)\n\nPROGRAMME JOUR J :\n3h avant : Réveil, petit-déjeuner, préparation tranquille\n1h30 avant : Arrivée sur site, retrait dossard si besoin\n45min avant : Échauffement (15min footing très facile) + Activation (4-5 accélérations de 30m) + Étirements dynamiques (5min)\n\nPENDANT LE MARATHON :\nKm 1-10 : Allure 5'50-6'00/km (ne pas partir trop vite !)\nKm 11-25 : Allure objectif 5'40-5'50/km\nKm 26-35 : Maintenir coûte que coûte\nKm 36-42 : Tout donner si tu peux, sinon juste finir !\n\nNUTRITION COURSE : Eau toutes les 2-3 stations + Gel énergétique au km 20 et 30 si besoin\n\nAPRÈS LA COURSE : Récupération (15min marche + étirements) + Hydratation et nutrition de récupération" },
            { title: "Conseil", content: "C'EST LE JOUR J DU MARATHON ! Tu as donné 3 mois de ta vie pour ça ! COURS SMART ET FAIS-TOI PLAISIR !" },
            { title: "Pourquoi cette séance ?", content: "OBJECTIF : MOINS DE 4H00 AU MARATHON ! GO GO GO ! TU VAS Y ARRIVER !" }
        ]
    }
];
