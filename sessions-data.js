const sessions = [
    // JEUDI 31 JUILLET - JOUR 1 (REPRISE PROGRESSIVE)
    {
        date: "2025-07-31",
        title: "Endurance Fondamentale - Reprise",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Reprendre contact avec la course en douceur" },
            { title: "Résumé", content: "6km allure conversationnelle" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 10min marche rapide puis progression très douce\nCorps : 6km allure 7'00-7'30/km (tu dois pouvoir parler facilement)\nRetour au calme : 5min marche + étirements 15min" },
            { title: "Conseil", content: "C'est une REPRISE ! Écoute ton corps, ne force pas. L'objectif est de reprendre contact avec la course sans se blesser." },
            { title: "Pourquoi cette séance ?", content: "Reprise en douceur, évaluation de ton niveau après l'arrêt, réactivation du système cardio-vasculaire." }
        ]
    },
    // VENDREDI 1 AOÛT - JOUR 2 (REPRISE PROGRESSIVE)
    {
        date: "2025-08-01",
        title: "Récupération + HIIT Complet",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération active + renforcement corps entier" },
            { title: "Résumé", content: "30min footing récup + 15min HIIT" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nFooting récup : 30min allure 7'30-8'00/km très décontracté\nHIIT Complet (15min) :\n4 tours de :\n• Pompes (30s)\n• Squats (30s)\n• Planche (30s)\n• Fentes alternées (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "Le footing doit être ultra-facile, presque de la marche rapide. Pour le HIIT, on commence doucement avec des exercices de base." },
            { title: "Pourquoi cette séance ?", content: "Récupération active après hier + première séance de renforcement complet pour préparer le corps." }
        ]
    },
    // SAMEDI 2 AOÛT - JOUR 3 (REPRISE PROGRESSIVE)
    {
        date: "2025-08-02",
        title: "Sortie Longue Facile - Reprise",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Reprendre contact avec le volume en douceur" },
            { title: "Résumé", content: "8km allure facile" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix (1h avant la sortie)\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 10min progression douce\nCorps : 8km allure 6'45-7'15/km (confortable, tu peux parler)\nRetour au calme : 5min marche + étirements 15min" },
            { title: "Conseil", content: "On monte légèrement en volume mais ça reste une reprise ! L'allure doit être très confortable. Hydratation régulière." },
            { title: "Pourquoi cette séance ?", content: "Habituer progressivement le corps au volume, développer la base aérobie en douceur, adaptation progressive." }
        ]
    },
    // DIMANCHE 3 AOÛT - JOUR 4 (REPRISE PROGRESSIVE)
    {
        date: "2025-08-03",
        title: "HIIT Complet Intense",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Renforcement complet + activation métabolique" },
            { title: "Résumé", content: "15min HIIT corps entier" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nHIIT Complet (15min) :\n5 tours de :\n• Burpees (30s)\n• Mountain climbers (30s)\n• Squats sautés (30s)\n• Pompes (30s)\n• Planche (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "C'est le jour HIIT intense ! Donne tout sur chaque exercice, récupère bien entre les tours. Plus intense que vendredi." },
            { title: "Pourquoi cette séance ?", content: "Activation métabolique maximale, renforcement complet corps entier, préparation pour la semaine de vraie préparation qui arrive." }
        ]
    },
    // LUNDI 4 AOÛT - JOUR 5 (SEMAINE 1 PRÉPARATION MARATHON)
    {
        date: "2025-08-04",
        title: "Endurance Fondamentale",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Base aérobie - Début préparation marathon" },
            { title: "Résumé", content: "10km allure conversationnelle" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 10min progression douce\nCorps : 10km allure 6'30-6'45/km (tu dois pouvoir tenir une conversation)\nRetour au calme : 5min marche + étirements 10min" },
            { title: "Conseil", content: "DÉBUT DE LA VRAIE PRÉPARATION ! On monte en volume. Reste dans ta zone de confort, on construit la base aérobie." },
            { title: "Pourquoi cette séance ?", content: "Développement de la capacité aérobie, base fondamentale pour le marathon, adaptation progressive au volume." }
        ]
    },
    // MARDI 5 AOÛT - JOUR 6
    {
        date: "2025-08-05",
        title: "Fractionné VMA",
        semi: true,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Développer la vitesse et améliorer la VMA" },
            { title: "Résumé", content: "6 x 400m à allure 5km" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 15min footing facile + 3 x 100m progressifs\nCorps : 6 x 400m allure 5'10-5'20/km (récupération 1'30 footing lent entre chaque)\nRetour au calme : 10min footing facile + étirements 10min" },
            { title: "Conseil", content: "Première vraie séance VMA ! Vise la régularité plutôt que la performance pure. Si tu es essoufflé, ralentis légèrement." },
            { title: "Pourquoi cette séance ?", content: "Développer la VMA qui sera la base de toutes tes allures marathon et semi-marathon. Amélioration de l'efficacité cardio-vasculaire." }
        ]
    },
    // MERCREDI 6 AOÛT - JOUR 7
    {
        date: "2025-08-06",
        title: "Récupération + HIIT Complet",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération active après la VMA + renforcement" },
            { title: "Résumé", content: "30min footing récup + 15min HIIT" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nFooting récup : 30min allure 7'30-8'00/km très décontracté\nHIIT Complet (15min) :\n4 tours de :\n• Pompes (30s)\n• Squats (30s)\n• Planche (30s)\n• Fentes alternées (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "Récupération vraiment facile après la VMA d'hier. Le HIIT reste modéré avec exercices de base pour ne pas fatiguer les jambes." },
            { title: "Pourquoi cette séance ?", content: "Récupération active + renforcement complet sans surcharger après l'effort VMA d'hier." }
        ]
    },
    // JEUDI 7 AOÛT - JOUR 8
    {
        date: "2025-08-07",
        title: "Tempo Run",
        semi: true,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Développer l'allure seuil et l'endurance à allure soutenue" },
            { title: "Résumé", content: "8km avec 4km à allure semi-marathon" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 15min footing facile progressif\nCorps : 2km facile + 4km allure 5'30-5'45/km (allure semi-marathon) + 2km facile\nRetour au calme : 5min marche + étirements 10min" },
            { title: "Conseil", content: "Les 4km au milieu doivent être soutenus mais contrôlés. Tu dois pouvoir dire quelques mots mais pas tenir une conversation." },
            { title: "Pourquoi cette séance ?", content: "Développer l'allure seuil, habituer le corps à soutenir un effort modérément intense sur la durée. Base pour ton objectif semi-marathon." }
        ]
    },
    // VENDREDI 8 AOÛT - JOUR 9
    {
        date: "2025-08-08",
        title: "Récupération + HIIT Complet",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération active après le tempo + renforcement" },
            { title: "Résumé", content: "30min footing récup + 15min HIIT" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nFooting récup : 30min allure 7'30-8'00/km très décontracté\nHIIT Complet (15min) :\n4 tours de :\n• Burpees (30s)\n• Wall sit (30s)\n• Planche (30s)\n• Squats sautés (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "Récupération vraiment facile après le tempo d'hier. Le HIIT est un peu plus intense aujourd'hui avec burpees et squats sautés." },
            { title: "Pourquoi cette séance ?", content: "Récupération active + renforcement complet après l'effort soutenu d'hier + activation métabolique." }
        ]
    },
    // SAMEDI 9 AOÛT - JOUR 10
    {
        date: "2025-08-09",
        title: "Sortie Longue",
        semi: true,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Développer l'endurance de base avec montée en volume" },
            { title: "Résumé", content: "12km allure marathon +30s/km" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix (1h avant la sortie)\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 10min progression douce\nCorps : 12km allure 6'10-6'25/km (confortable, tu peux parler)\nRetour au calme : 5min marche + étirements 15min" },
            { title: "Conseil", content: "Première vraie sortie longue ! Hydratation régulière pendant la sortie. L'allure doit rester confortable tout le long." },
            { title: "Pourquoi cette séance ?", content: "Développer la base aérobie, adaptation progressive au volume long, préparation mentale aux longues distances." }
        ]
    },
    // DIMANCHE 10 AOÛT - JOUR 11
    {
        date: "2025-08-10",
        title: "HIIT Complet Intense",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Renforcement complet + activation métabolique maximale" },
            { title: "Résumé", content: "15min HIIT corps entier intensif" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nHIIT Complet (15min) :\n5 tours de :\n• Burpees (30s)\n• Mountain climbers (30s)\n• Squats sautés (30s)\n• Pompes (30s)\n• Planche (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "HIIT intense du dimanche ! Donne tout sur chaque exercice. C'est plus intense que les HIIT de mercredi/vendredi. Récupère bien entre les tours." },
            { title: "Pourquoi cette séance ?", content: "Activation métabolique maximale, renforcement complet corps entier, développement de la puissance et de l'explosivité." }
        ]
    },
    // LUNDI 11 AOÛT - JOUR 12 (SEMAINE 2 PRÉPARATION MARATHON)
    {
        date: "2025-08-11",
        title: "Endurance Fondamentale",
        semi: true,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Développer la base aérobie avec montée en volume" },
            { title: "Résumé", content: "12km allure conversationnelle" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 10min progression douce\nCorps : 12km allure 6'30-6'45/km (tu dois pouvoir tenir une conversation)\nRetour au calme : 5min marche + étirements 10min" },
            { title: "Conseil", content: "On monte en volume ! 12km cette semaine. Reste dans ta zone de confort, on continue de construire la base aérobie." },
            { title: "Pourquoi cette séance ?", content: "Montée progressive en volume, développement de la capacité aérobie, habituer le corps à des distances plus longues." }
        ]
    },
    // MARDI 12 AOÛT - JOUR 13
    {
        date: "2025-08-12",
        title: "Fartlek",
        semi: true,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Développer la variété d'allures et l'adaptabilité" },
            { title: "Résumé", content: "8km avec variations d'allure" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 15min footing facile\nCorps : 6km fartlek (2min rapide 5'00/km + 2min récup 6'30/km) x 3 fois\nRetour au calme : 10min footing facile + étirements 10min" },
            { title: "Conseil", content: "Alterne les phases rapides et récupération de façon fluide. Les phases rapides doivent être soutenues mais pas à fond." },
            { title: "Pourquoi cette séance ?", content: "Développer l'adaptabilité aux changements d'allure, améliorer la capacité à gérer différents rythmes (utile pour le semi et marathon)." }
        ]
    },
    // MERCREDI 13 AOÛT - JOUR 14
    {
        date: "2025-08-13",
        title: "Récupération + HIIT Complet",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération active après le fartlek + renforcement" },
            { title: "Résumé", content: "30min footing récup + 15min HIIT" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nFooting récup : 30min allure 7'30-8'00/km très décontracté\nHIIT Complet (15min) :\n4 tours de :\n• Pompes (30s)\n• Fentes alternées (30s)\n• Planche (30s)\n• Squats (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "Récupération vraiment facile après le fartlek d'hier. Le HIIT reste modéré avec exercices de base pour ne pas fatiguer les jambes." },
            { title: "Pourquoi cette séance ?", content: "Récupération active + renforcement complet après l'effort varié d'hier + activation métabolique." }
        ]
    },
    // JEUDI 14 AOÛT - JOUR 15
    {
        date: "2025-08-14",
        title: "Séance Seuil",
        semi: true,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Développer l'endurance à allure seuil et la résistance" },
            { title: "Résumé", content: "2 x 3km à allure seuil" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 15min footing facile + accélérations progressives\nCorps : 2 x 3km allure 5'40-5'55/km (récupération 3min footing lent entre les 2)\nRetour au calme : 10min footing facile + étirements 10min" },
            { title: "Conseil", content: "Les 3km doivent être soutenus et réguliers. C'est plus rapide que l'allure semi mais tu dois pouvoir tenir sur la distance." },
            { title: "Pourquoi cette séance ?", content: "Développer l'allure seuil anaérobie, améliorer la capacité à soutenir un effort intense, préparation spécifique semi-marathon." }
        ]
    },
    // VENDREDI 15 AOÛT - JOUR 16
    {
        date: "2025-08-15",
        title: "Récupération + HIIT Complet",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération active après la séance seuil + renforcement" },
            { title: "Résumé", content: "30min footing récup + 15min HIIT" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nFooting récup : 30min allure 7'30-8'00/km très décontracté\nHIIT Complet (15min) :\n4 tours de :\n• Burpees (30s)\n• Wall sit (30s)\n• Planche (30s)\n• Fentes sautées (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "Récupération vraiment facile après la séance seuil intensive d'hier. Le HIIT est un peu plus intense avec burpees et fentes sautées." },
            { title: "Pourquoi cette séance ?", content: "Récupération active + renforcement complet après l'effort intense d'hier + activation métabolique." }
        ]
    },
    // SAMEDI 16 AOÛT - JOUR 17
    {
        date: "2025-08-16",
        title: "Sortie Longue Progressive",
        semi: true,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Développer l'endurance avec finish progressif" },
            { title: "Résumé", content: "15km avec progression sur les derniers kilomètres" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix (1h avant la sortie)\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 10min progression douce\nCorps : 11km allure 6'15-6'30/km + 4km progression (6'00 → 5'45 → 5'30 → 5'15/km)\nRetour au calme : 5min marche + étirements 15min" },
            { title: "Conseil", content: "Les 11 premiers km restent confortables. La progression sur les 4 derniers km doit être contrôlée, pas un sprint. Hydratation régulière." },
            { title: "Pourquoi cette séance ?", content: "Habituer le corps à accélérer en fin d'effort long, simulation des conditions de course, développement de l'endurance spécifique." }
        ]
    },
    // DIMANCHE 17 AOÛT - JOUR 18
    {
        date: "2025-08-17",
        title: "HIIT Complet Intense",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Renforcement complet + activation métabolique maximale" },
            { title: "Résumé", content: "15min HIIT corps entier intensif" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nHIIT Complet (15min) :\n5 tours de :\n• Burpees (30s)\n• Mountain climbers (30s)\n• Squats sautés (30s)\n• Pompes (30s)\n• Planche (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "HIIT intense du dimanche ! Donne tout sur chaque exercice. C'est plus intense que les HIIT de mercredi/vendredi. Récupère bien entre les tours." },
            { title: "Pourquoi cette séance ?", content: "Activation métabolique maximale, renforcement complet corps entier, développement de la puissance et de l'explosivité." }
        ]
    },
    // LUNDI 18 AOÛT - JOUR 19 (SEMAINE 3 PRÉPARATION MARATHON)
    {
        date: "2025-08-18",
        title: "Endurance Fondamentale",
        semi: true,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Développer la base aérobie - Montée en charge" },
            { title: "Résumé", content: "14km allure conversationnelle" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 10min progression douce\nCorps : 14km allure 6'30-6'45/km (tu dois pouvoir tenir une conversation)\nRetour au calme : 5min marche + étirements 10min" },
            { title: "Conseil", content: "On continue de monter en volume ! 14km cette semaine. Reste dans ta zone de confort, on construit progressivement." },
            { title: "Pourquoi cette séance ?", content: "Montée progressive en volume, développement de la capacité aérobie, préparation physique et mentale aux longues distances." }
        ]
    },
    // MARDI 19 AOÛT - JOUR 20
    {
        date: "2025-08-19",
        title: "VMA Semi-Marathon",
        semi: true,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Développer la vitesse spécifique semi" },
            { title: "Résumé", content: "5 x 1000m à allure 10km" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 15min footing facile + 4 x 100m progressifs\nCorps : 5 x 1000m allure 5'00-5'10/km (récupération 2min footing lent entre chaque)\nRetour au calme : 10min footing facile + étirements 10min" },
            { title: "Conseil", content: "Plus long que les 400m ! Sur 1000m c'est gérable. Vise la régularité entre les répétitions. On se prépare spécifiquement pour le semi." },
            { title: "Pourquoi cette séance ?", content: "Développer la VMA spécifique semi-marathon, habituer le corps aux allures rapides sur distance intermédiaire." }
        ]
    },
    // MERCREDI 20 AOÛT - JOUR 21
    {
        date: "2025-08-20",
        title: "Récupération + HIIT Complet",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération active après la VMA + renforcement" },
            { title: "Résumé", content: "30min footing récup + 15min HIIT" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nFooting récup : 30min allure 7'30-8'00/km très décontracté\nHIIT Complet (15min) :\n4 tours de :\n• Pompes (30s)\n• Squats (30s)\n• Planche (30s)\n• Fentes alternées (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "Récupération vraiment facile après la VMA intensive d'hier. Le HIIT reste modéré avec exercices de base pour ne pas fatiguer les jambes." },
            { title: "Pourquoi cette séance ?", content: "Récupération active + renforcement complet après l'effort VMA + activation métabolique." }
        ]
    },
    // JEUDI 21 AOÛT - JOUR 22
    {
        date: "2025-08-21",
        title: "Allure Semi-Marathon",
        semi: true,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Développer l'endurance à allure objectif semi" },
            { title: "Résumé", content: "10km avec 6km à allure semi-marathon" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 15min footing facile progressif\nCorps : 2km facile + 6km allure 5'30-5'45/km (allure semi-marathon) + 2km facile\nRetour au calme : 5min marche + étirements 10min" },
            { title: "Conseil", content: "Les 6km au milieu sont cruciaux - test de ton allure semi. Tu dois pouvoir dire quelques mots mais pas converser longuement." },
            { title: "Pourquoi cette séance ?", content: "Habituer le corps à soutenir l'allure semi sur une distance significative, test de l'allure cible pour le semi d'Auray-Vannes." }
        ]
    },
    // VENDREDI 22 AOÛT - JOUR 23
    {
        date: "2025-08-22",
        title: "Récupération + HIIT Complet",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération active après l'allure semi + renforcement" },
            { title: "Résumé", content: "30min footing récup + 15min HIIT" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nFooting récup : 30min allure 7'30-8'00/km très décontracté\nHIIT Complet (15min) :\n4 tours de :\n• Burpees (30s)\n• Wall sit (30s)\n• Planche (30s)\n• Squats sautés (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "Récupération vraiment facile après la séance allure semi d'hier. Le HIIT est un peu plus intense avec burpees et squats sautés." },
            { title: "Pourquoi cette séance ?", content: "Récupération active + renforcement complet après l'effort spécifique d'hier + activation métabolique." }
        ]
    },
    // SAMEDI 23 AOÛT - JOUR 24
    {
        date: "2025-08-23",
        title: "Sortie Longue Semi",
        semi: true,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Sortie longue avec simulation allure semi" },
            { title: "Résumé", content: "18km avec variations d'allure semi" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix (1h avant la sortie)\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 10min progression douce\nCorps : 8km allure 6'15-6'30/km + 6km allure 5'30-5'45/km (allure semi) + 4km retour au calme 6'30/km\nRetour au calme : 5min marche + étirements 15min" },
            { title: "Conseil", content: "Les 6km au milieu sont un vrai test de ton allure semi. Hydratation régulière. Si c'est trop dur, ralentis légèrement." },
            { title: "Pourquoi cette séance ?", content: "Test en conditions réelles de l'allure semi sur distance significative, développement de l'endurance spécifique, préparation mentale." }
        ]
    },
    // DIMANCHE 24 AOÛT - JOUR 25
    {
        date: "2025-08-24",
        title: "HIIT Complet Intense",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Renforcement complet + activation métabolique maximale" },
            { title: "Résumé", content: "15min HIIT corps entier intensif" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nHIIT Complet (15min) :\n5 tours de :\n• Burpees (30s)\n• Mountain climbers (30s)\n• Squats sautés (30s)\n• Pompes (30s)\n• Planche (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "HIIT intense du dimanche ! Donne tout sur chaque exercice. C'est plus intense que les HIIT de mercredi/vendredi. Récupère bien entre les tours." },
            { title: "Pourquoi cette séance ?", content: "Activation métabolique maximale, renforcement complet corps entier, développement de la puissance et de l'explosivité." }
        ]
    },
    // LUNDI 25 AOÛT - JOUR 26 (SEMAINE 4 - PHASE FINALE SEMI)
    {
        date: "2025-08-25",
        title: "Endurance Fondamentale",
        semi: true,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Développer la base aérobie - Intensification pré-semi" },
            { title: "Résumé", content: "12km allure conversationnelle" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 10min progression douce\nCorps : 12km allure 6'30-6'45/km (tu dois pouvoir tenir une conversation)\nRetour au calme : 5min marche + étirements 10min" },
            { title: "Conseil", content: "Phase finale semi ! Plus que 3 semaines avant Auray-Vannes. On maintient le volume mais on va intensifier les séances spécifiques." },
            { title: "Pourquoi cette séance ?", content: "Maintien de la base aérobie en phase finale semi, préparation pour les 3 dernières semaines cruciales." }
        ]
    },
    // MARDI 26 AOÛT - JOUR 27
    {
        date: "2025-08-26",
        title: "Fractionné Court Intensif",
        semi: true,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Développer la vitesse pure et la puissance pour le semi" },
            { title: "Résumé", content: "8 x 300m à allure 5km" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 15min footing facile + 4 x 100m progressifs\nCorps : 8 x 300m allure 4'50-5'00/km (récupération 1min30 footing lent entre chaque)\nRetour au calme : 10min footing facile + étirements 10min" },
            { title: "Conseil", content: "C'est rapide ! Focus sur la régularité plutôt que d'exploser sur les premières. Les 300m sont courtes mais intenses." },
            { title: "Pourquoi cette séance ?", content: "Développer la vitesse pure et la puissance anaérobie, améliorer l'efficacité neuromusculaire pour le finish du semi." }
        ]
    },
    // MERCREDI 27 AOÛT - JOUR 28
    {
        date: "2025-08-27",
        title: "Récupération + HIIT Complet",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération active après le fractionné intensif + renforcement" },
            { title: "Résumé", content: "30min footing récup + 15min HIIT" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nFooting récup : 30min allure 7'30-8'00/km très décontracté\nHIIT Complet (15min) :\n4 tours de :\n• Pompes (30s)\n• Fentes alternées (30s)\n• Planche (30s)\n• Squats (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "Récupération vraiment facile après la séance intensive d'hier. Le HIIT reste modéré avec exercices de base pour ne pas fatiguer les jambes." },
            { title: "Pourquoi cette séance ?", content: "Récupération active + renforcement complet après l'effort VMA + activation métabolique." }
        ]
    },
    // JEUDI 28 AOÛT - JOUR 29
    {
        date: "2025-08-28",
        title: "Test Semi-Marathon 15km",
        semi: true,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Test en conditions réelles d'allure semi sur longue distance" },
            { title: "Résumé", content: "15km avec 10km à allure semi-marathon" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 15min footing facile progressif\nCorps : 2,5km facile + 10km allure 5'30-5'45/km (allure objectif semi) + 2,5km facile\nRetour au calme : 5min marche + étirements 15min" },
            { title: "Conseil", content: "C'est LE test ! 10km à allure semi, c'est presque la moitié de la distance de course. Si tu tiens bien, tu es prêt pour Auray-Vannes !" },
            { title: "Pourquoi cette séance ?", content: "Test décisif de l'allure semi sur distance longue, validation de la forme et de l'allure objectif à 2 semaines et demie du semi." }
        ]
    },
    // VENDREDI 29 AOÛT - JOUR 30
    {
        date: "2025-08-29",
        title: "Récupération + HIIT Complet",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération active après le test 15km + renforcement" },
            { title: "Résumé", content: "30min footing récup + 15min HIIT" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nFooting récup : 30min allure 7'30-8'00/km très décontracté\nHIIT Complet (15min) :\n4 tours de :\n• Burpees (30s)\n• Wall sit (30s)\n• Planche (30s)\n• Fentes sautées (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "Récupération vraiment facile après le gros test d'hier. Comment s'est passé le test 15km ? Le HIIT est un peu plus intense avec burpees et fentes sautées." },
            { title: "Pourquoi cette séance ?", content: "Récupération active + renforcement complet après l'effort test majeur d'hier." }
        ]
    },
    // SAMEDI 30 AOÛT - JOUR 31
    {
        date: "2025-08-30",
        title: "Sortie Longue Pré-Semi",
        semi: true,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Dernière grosse sortie avant la phase d'affûtage semi" },
            { title: "Résumé", content: "20km avec simulation tactique semi" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix (1h avant la sortie)\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 10min progression douce\nCorps : 10km allure 6'15-6'30/km + 5km allure 5'45-6'00/km + 5km allure 5'30-5'45/km (simulation tactique)\nRetour au calme : 5min marche + étirements 15min" },
            { title: "Conseil", content: "Simulation de course ! Départ tranquille, puis accélération progressive comme tu feras au semi. Hydratation et nutrition à tester. Dernière grosse sortie !" },
            { title: "Pourquoi cette séance ?", content: "Dernière grosse sortie avant l'affûtage, simulation tactique du semi, test final des sensations et de la nutrition." }
        ]
    },
    // DIMANCHE 31 AOÛT - JOUR 32
    {
        date: "2025-08-31",
        title: "HIIT Complet Intense",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Renforcement complet + activation métabolique maximale" },
            { title: "Résumé", content: "15min HIIT corps entier intensif" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nHIIT Complet (15min) :\n5 tours de :\n• Burpees (30s)\n• Mountain climbers (30s)\n• Squats sautés (30s)\n• Pompes (30s)\n• Planche (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "HIIT intense du dimanche ! Donne tout sur chaque exercice. Dernière grosse séance HIIT avant l'affûtage semi qui commence la semaine prochaine." },
            { title: "Pourquoi cette séance ?", content: "Activation métabolique maximale, renforcement complet corps entier avant la phase d'affûtage semi." }
        ]
    },
    // LUNDI 1ER SEPTEMBRE - JOUR 33 (SEMAINE 5 - AFFÛTAGE SEMI)
    {
        date: "2025-09-01",
        title: "Endurance Fondamentale Affûtage",
        semi: true,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Affûtage semi - Maintien de la forme sans fatigue" },
            { title: "Résumé", content: "10km allure conversationnelle" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 10min progression douce\nCorps : 10km allure 6'30-6'45/km (tu dois pouvoir tenir une conversation)\nRetour au calme : 5min marche + étirements 10min" },
            { title: "Conseil", content: "AFFÛTAGE SEMI ! On diminue progressivement la charge pour arriver frais au semi. Plus que 13 jours ! Qualité avant quantité maintenant." },
            { title: "Pourquoi cette séance ?", content: "Début de l'affûtage semi + maintien de la forme sans fatigue excessive." }
        ]
    },
    // MARDI 2 SEPTEMBRE - JOUR 34
    {
        date: "2025-09-02",
        title: "Fractionné Court Affûtage",
        semi: true,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Maintenir la vitesse sans fatigue - Affûtage semi" },
            { title: "Résumé", content: "6 x 200m à allure 5km" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 15min footing facile + 3 x 100m progressifs\nCorps : 6 x 200m allure 4'50-5'00/km (récupération 1min30 footing lent entre chaque)\nRetour au calme : 10min footing facile + étirements 10min" },
            { title: "Conseil", content: "Plus court qu'avant ! L'objectif est de maintenir la vitesse et les sensations sans se fatiguer. Les jambes doivent rester fraîches." },
            { title: "Pourquoi cette séance ?", content: "Maintien de la vitesse en phase d'affûtage, activation neuromusculaire sans fatigue excessive, préparation optimale." }
        ]
    },
    // MERCREDI 3 SEPTEMBRE - JOUR 35
    {
        date: "2025-09-03",
        title: "Récupération + HIIT Complet Léger",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération active en affûtage semi + renforcement modéré" },
            { title: "Résumé", content: "30min footing récup + 12min HIIT léger" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nFooting récup : 30min allure 7'30-8'00/km très décontracté\nHIIT Complet Léger (12min) :\n3 tours de :\n• Pompes (20s)\n• Squats (20s)\n• Planche (20s)\n• Fentes alternées (20s)\n• Repos (1min20)" },
            { title: "Conseil", content: "On réduit l'intensité du HIIT en affûtage ! Plus que 11 jours avant le semi. Récupération très facile, HIIT modéré." },
            { title: "Pourquoi cette séance ?", content: "Récupération active en affûtage + maintien du tonus musculaire sans surcharge." }
        ]
    },
    // JEUDI 4 SEPTEMBRE - JOUR 36
    {
        date: "2025-09-04",
        title: "Test Final Semi",
        semi: true,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Dernier test allure semi avant la course" },
            { title: "Résumé", content: "8km avec 4km à allure semi-marathon" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 15min footing facile progressif\nCorps : 2km facile + 4km allure 5'30-5'45/km (allure objectif semi) + 2km facile\nRetour au calme : 5min marche + étirements 10min" },
            { title: "Conseil", content: "DERNIER TEST ! Les 4km doivent être fluides et naturels. Si ça passe bien, tu es prêt pour dimanche prochain ! Plus que 10 jours !" },
            { title: "Pourquoi cette séance ?", content: "Test final de validation de l'allure semi, dernière vérification des sensations avant la course." }
        ]
    },
    // VENDREDI 5 SEPTEMBRE - JOUR 37
    {
        date: "2025-09-05",
        title: "Récupération + HIIT Complet Léger",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération légère - Phase finale affûtage semi" },
            { title: "Résumé", content: "30min footing récup + 12min HIIT léger" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nFooting récup : 30min allure 7'30-8'00/km très décontracté\nHIIT Complet Léger (12min) :\n3 tours de :\n• Pompes (20s)\n• Wall sit (20s)\n• Planche (20s)\n• Squats (20s)\n• Repos (1min20)" },
            { title: "Conseil", content: "Récupération très facile ! Plus que 9 jours avant le semi. Les jambes doivent être fraîches. HIIT très modéré." },
            { title: "Pourquoi cette séance ?", content: "Récupération active en phase finale + maintien très léger du tonus avant la semaine de course." }
        ]
    },
    // SAMEDI 6 SEPTEMBRE - JOUR 38
    {
        date: "2025-09-06",
        title: "Dernière Sortie Pré-Semi",
        semi: true,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Activation douce avant semaine de course semi" },
            { title: "Résumé", content: "8km facile avec 3 accélérations courtes" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix (1h avant la sortie)\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 10min progression très douce\nCorps : 5km allure 6'30-6'45/km + 3 x 200m allure 5'30/km (récup 200m marche) + 2km retour au calme\nRetour au calme : 5min marche + étirements 15min" },
            { title: "Conseil", content: "Dernière sortie ! Les 200m sont juste pour activer, pas pour forcer. Plus que 8 jours avant le semi ! Tu dois te sentir léger." },
            { title: "Pourquoi cette séance ?", content: "Dernière activation avant la semaine de course, maintien des sensations sans fatigue." }
        ]
    },
    // DIMANCHE 7 SEPTEMBRE - JOUR 39 (HIIT LÉGER)
    {
        date: "2025-09-07",
        title: "HIIT Complet Léger",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Renforcement léger + activation métabolique modérée" },
            { title: "Résumé", content: "12min HIIT corps entier léger" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nHIIT Complet Léger (12min) :\n3 tours de :\n• Pompes (20s)\n• Squats (20s)\n• Planche (20s)\n• Mountain climbers (20s)\n• Repos (1min20)" },
            { title: "Conseil", content: "HIIT léger avant la semaine du semi ! Plus que 7 jours ! On réduit l'intensité pour arriver frais à Auray-Vannes." },
            { title: "Pourquoi cette séance ?", content: "Activation métabolique modérée, renforcement léger avant la semaine cruciale du semi." }
        ]
    },
    // LUNDI 8 SEPTEMBRE - JOUR 40 (SEMAINE DU SEMI !)
    {
        date: "2025-09-08",
        title: "Endurance Fondamentale Ultra-Légère",
        semi: true,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Affûtage ultra-final - Semaine de course semi" },
            { title: "Résumé", content: "8km facile" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 10min progression très douce\nCorps : 8km allure 6'45-7'00/km (ultra-décontracté)\nRetour au calme : 5min marche + étirements 10min" },
            { title: "Conseil", content: "SEMAINE DU SEMI ! Tout ultra-léger maintenant. Plus que 6 jours ! Les jambes doivent être des ressorts prêts à exploser dimanche." },
            { title: "Pourquoi cette séance ?", content: "Affûtage ultra-final + maintien minimal de la forme en semaine de course semi." }
        ]
    },
    // MARDI 9 SEPTEMBRE - JOUR 41
    {
        date: "2025-09-09",
        title: "Activation Ultra-Légère",
        semi: true,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Activation douce - 5 jours avant le semi" },
            { title: "Résumé", content: "Footing court + quelques foulées" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 10min footing très facile + étirements dynamiques\nCorps : 4 x 50m foulées allure 5'30/km (récupération 1min marche complète)\nRetour au calme : 10min footing très facile + étirements 10min" },
            { title: "Conseil", content: "Ultra-court ! Les foulées servent juste à maintenir les sensations. Plus que 5 jours ! Les jambes doivent être ultra-fraîches." },
            { title: "Pourquoi cette séance ?", content: "Activation neuromusculaire minimale, maintien des sensations sans aucune fatigue à J-5." }
        ]
    },
    // MERCREDI 10 SEPTEMBRE - JOUR 42
    {
        date: "2025-09-10",
        title: "Récupération + HIIT Complet MINIMAL",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Maintien minimal - 4 jours avant le semi" },
            { title: "Résumé", content: "30min footing récup + 8min HIIT minimal" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nFooting récup : 30min allure 7'30-8'00/km ultra-décontracté\nHIIT Complet MINIMAL (8min) :\n2 tours de :\n• Pompes (15s)\n• Squats (15s)\n• Planche (15s)\n• Repos (2min15)" },
            { title: "Conseil", content: "MINIMAL ! Plus que 4 jours ! Tout doit être ultra-facile. Les jambes doivent être comme des ressorts prêts à exploser dimanche !" },
            { title: "Pourquoi cette séance ?", content: "Maintien minimal du tonus à J-4, éviter la rouille sans aucune fatigue." }
        ]
    },
    // JEUDI 11 SEPTEMBRE - JOUR 43
    {
        date: "2025-09-11",
        title: "Dernière Activation Pré-Semi",
        semi: true,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Activation finale - 3 jours avant le semi" },
            { title: "Résumé", content: "Footing court + dernières foulées" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 8min footing très facile + étirements dynamiques\nCorps : 3 x 30m foulées allure 5'30/km (récupération 2min marche complète)\nRetour au calme : 8min footing très facile + étirements 10min" },
            { title: "Conseil", content: "DERNIÈRE ACTIVATION ! Plus que 3 jours ! Les foulées sont juste pour vérifier que tout va bien. Tu dois te sentir léger et prêt !" },
            { title: "Pourquoi cette séance ?", content: "Dernière activation neuromusculaire avant le semi, vérification finale des sensations à J-3." }
        ]
    },
    // VENDREDI 12 SEPTEMBRE - JOUR 44
    {
        date: "2025-09-12",
        title: "Récupération + HIIT Complet ULTRA-MINIMAL",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Maintien ultra-minimal - 2 jours avant le semi" },
            { title: "Résumé", content: "30min footing récup + 6min HIIT ultra-minimal" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nFooting récup : 30min allure 7'30-8'00/km ultra-décontracté\nHIIT Complet ULTRA-MINIMAL (6min) :\n2 tours de :\n• Pompes (10s)\n• Planche (10s)\n• Repos (2min40)" },
            { title: "Conseil", content: "ULTRA-MINIMAL ! Plus que 2 jours ! Juste pour éviter la rouille. Les jambes doivent être des ressorts prêts à exploser dimanche !" },
            { title: "Pourquoi cette séance ?", content: "Maintien ultra-minimal du tonus à J-2, éviter totalement la fatigue avant le jour J." }
        ]
    },
    // SAMEDI 13 SEPTEMBRE - JOUR 45 (VEILLE DE COURSE)
    {
        date: "2025-09-13",
        title: "Repos + Préparation Mentale",
        semi: true,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Repos total - Préparation jour J" },
            { title: "Résumé", content: "Repos ou marche très légère + préparation matérielle" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + 1 glucide complet (pour faire le plein de glycogène)" },
            { title: "Détail", content: "PRÉPARATION JOUR J :\nRepos complet ou marche très légère 15min max\nPréparation matérielle : tenue, chaussures, dossard, nutrition course\nHydratation optimale toute la journée\nCoucher tôt (22h max)\nVisualisation positive de la course" },
            { title: "Conseil", content: "VEILLE DE COURSE ! Repos total, prépare tout ton matériel, hydrate-toi bien, couche-tôt. DEMAIN C'EST LE JOUR J DU SEMI !" },
            { title: "Pourquoi cette séance ?", content: "Repos total avant le semi d'Auray-Vannes, préparation optimale pour être au top demain." }
        ]
    },
    // DIMANCHE 14 SEPTEMBRE - JOUR 46 🏃‍♂️ JOUR J DU SEMI !
    {
        date: "2025-09-14",
        title: "🎯 SEMI-MARATHON D'AURAY-VANNES 🎯",
        semi: true,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Se faire plaisir + préparation marathon" },
            { title: "Résumé", content: "JOUR J DU SEMI-MARATHON !" },
            { title: "Nutrition", content: "MATIN (2-3h avant le départ) : 1 des 3 petits déjeuners au choix + banane + eau\nÉvite : nouveautés, fibres, trop de liquide\n1h avant le départ : Petite collation si besoin (banane, barre énergétique)\nHydratation légère" },
            { title: "Détail", content: "PROGRAMME JOUR J :\n2-3h avant : Réveil, petit-déjeuner, préparation tranquille\n1h avant : Arrivée sur site, retrait dossard si besoin, échauffement\n30min avant :\n• Échauffement : 10-15min footing très facile\n• Activation : 3-4 accélérations de 30m\n• Étirements dynamiques : 5min\n\nPENDANT LA COURSE :\n• Km 1-5 : Départ tranquille, trouve ton rythme\n• Km 6-15 : Allure confortable, écoute tes sensations\n• Km 16-21 : Donne ce que tu peux, prends du plaisir !\n\nAPRÈS LA COURSE :\n• Récupération : 15min marche + étirements\n• Hydratation et nutrition de récupération" },
            { title: "Conseil", content: "🎉 C'EST LE JOUR J DU SEMI ! 🎉 Fais-toi plaisir et cours selon tes sensations ! C'est une étape vers ton objectif marathon ! 💪" },
            { title: "Pourquoi cette séance ?", content: "JOUR J du semi-marathon d'Auray-Vannes ! Test grandeur nature et étape cruciale vers l'objectif marathon du 26 octobre." }
        ]
    },
    // LUNDI 15 SEPTEMBRE - JOUR 47 (RÉCUPÉRATION POST-SEMI)
    {
        date: "2025-09-15",
        title: "Récupération Active Post-Semi",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération douce après le semi d'hier" },
            { title: "Résumé", content: "30min récupération très facile + étirements" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nRécupération : 30min allure 8'00-8'30/km ultra-décontracté (marche-course si besoin)\nPas de HIIT : Juste étirements 20min et récupération\nHydratation maximale" },
            { title: "Conseil", content: "Récupération douce après le semi. Écoute tes sensations, les jambes peuvent être lourdes, c'est normal ! Si c'est trop dur, remplace par de la marche." },
            { title: "Pourquoi cette séance ?", content: "Favoriser la récupération post-course, réactiver la circulation sans stress." }
        ]
    },
    // MARDI 16 SEPTEMBRE - JOUR 48
    {
        date: "2025-09-16",
        title: "Endurance Fondamentale",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Reprise progressive après récupération post-semi" },
            { title: "Résumé", content: "10km allure conversationnelle" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 10min progression douce\nCorps : 10km allure 6'30-6'45/km (tu dois pouvoir parler facilement)\nRetour au calme : 5min marche + étirements 10min" },
            { title: "Conseil", content: "Reprise progressive. Si les jambes sont encore lourdes du semi, raccourci à 8km. On démarre la phase marathon en douceur." },
            { title: "Pourquoi cette séance ?", content: "Reprise progressive vers l'entraînement marathon, évaluation des sensations post-semi." }
        ]
    },
    // MERCREDI 17 SEPTEMBRE - JOUR 49
    {
        date: "2025-09-17",
        title: "Récupération + HIIT Complet",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération active après la reprise d'hier + renforcement" },
            { title: "Résumé", content: "30min footing récup + 15min HIIT" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nFooting récup : 30min allure 7'30-8'00/km très décontracté\nHIIT Complet (15min) :\n4 tours de :\n• Pompes (30s)\n• Squats (30s)\n• Planche (30s)\n• Fentes alternées (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "On reprend les HIIT ! Récupération vraiment facile après la reprise d'hier. On commence à construire vers le marathon." },
            { title: "Pourquoi cette séance ?", content: "Reprise du renforcement + récupération active pour la transition vers la préparation marathon intensive." }
        ]
    },
    // JEUDI 18 SEPTEMBRE - JOUR 50
    {
        date: "2025-09-18",
        title: "Tempo Run Marathon",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Développer l'allure seuil pour la préparation marathon" },
            { title: "Résumé", content: "10km avec 6km à allure marathon +15s/km" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 15min footing facile progressif\nCorps : 2km facile + 6km allure 5'55-6'10/km (allure marathon +15s) + 2km facile\nRetour au calme : 5min marche + étirements 10min" },
            { title: "Conseil", content: "Les 6km au milieu sont légèrement plus rapides que ton allure marathon objectif (5'40/km pour sub-4h). Tu dois pouvoir dire quelques mots." },
            { title: "Pourquoi cette séance ?", content: "Développer l'endurance à allure soutenue pour le marathon, habituer le corps aux allures proches de l'objectif sub-4h." }
        ]
    },
    // VENDREDI 19 SEPTEMBRE - JOUR 51
    {
        date: "2025-09-19",
        title: "Récupération + HIIT Complet",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération active après le tempo d'hier + renforcement" },
            { title: "Résumé", content: "30min footing récup + 15min HIIT" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nFooting récup : 30min allure 7'30-8'00/km très décontracté\nHIIT Complet (15min) :\n4 tours de :\n• Burpees (30s)\n• Wall sit (30s)\n• Planche (30s)\n• Fentes sautées (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "Récupération facile après le tempo d'hier. Le HIIT est un peu plus intense avec burpees et fentes sautées." },
            { title: "Pourquoi cette séance ?", content: "Récupération active + renforcement complet après l'effort soutenu d'hier + activation métabolique." }
        ]
    },
    // SAMEDI 20 SEPTEMBRE - JOUR 52
    {
        date: "2025-09-20",
        title: "Sortie Longue Marathon",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Première grosse sortie longue en préparation marathon intensive" },
            { title: "Résumé", content: "16km avec progression finale" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix (1h avant la sortie)\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 10min progression douce\nCorps : 12km allure 6'15-6'30/km + 4km progression (6'00 → 5'45 → 5'30 → 5'15/km)\nRetour au calme : 5min marche + étirements 15min" },
            { title: "Conseil", content: "Les 12 premiers km restent confortables. La progression sur les 4 derniers km simule un finish de course. Hydratation régulière." },
            { title: "Pourquoi cette séance ?", content: "Développer l'endurance de base pour le marathon, habituer le corps à accélérer en fin d'effort long." }
        ]
    },
    // DIMANCHE 21 SEPTEMBRE - JOUR 53
    {
        date: "2025-09-21",
        title: "HIIT Complet Intense",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Renforcement complet + activation métabolique maximale" },
            { title: "Résumé", content: "15min HIIT corps entier intensif" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nHIIT Complet (15min) :\n5 tours de :\n• Burpees (30s)\n• Mountain climbers (30s)\n• Squats sautés (30s)\n• Pompes (30s)\n• Planche (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "HIIT intense du dimanche ! Donne tout sur chaque exercice. On reprend l'intensité maximale pour la phase marathon." },
            { title: "Pourquoi cette séance ?", content: "Activation métabolique maximale, renforcement complet corps entier, développement de la puissance pour le marathon." }
        ]
    },
    // LUNDI 22 SEPTEMBRE - JOUR 54 (SEMAINE 7 - PHASE INTENSIVE MARATHON)
    {
        date: "2025-09-22",
        title: "Endurance Fondamentale",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Développer la base aérobie - Montée en charge intensive" },
            { title: "Résumé", content: "16km allure conversationnelle" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 10min progression douce\nCorps : 16km allure 6'30-6'45/km (tu dois pouvoir tenir une conversation)\nRetour au calme : 5min marche + étirements 10min" },
            { title: "Conseil", content: "PHASE INTENSIVE MARATHON ! On monte sérieusement en volume. 16km cette semaine. Reste dans ta zone de confort aérobie." },
            { title: "Pourquoi cette séance ?", content: "Montée intensive en volume, développement de la capacité aérobie maximale, préparation physique et mentale pour le marathon." }
        ]
    },
    // MARDI 23 SEPTEMBRE - JOUR 55
    {
        date: "2025-09-23",
        title: "VMA Marathon",
        semi: false,
        mar: true,
        done: false,
        sections: [
            { title: "Objectif", content: "Développer la vitesse marathon et l'efficacité" },
            { title: "Résumé", content: "5 x 800m à allure 10km" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nÉchauffement : 15min footing facile + 4 x 100m progressifs\nCorps : 5 x 800m allure 5'10-5'20/km (récupération 2min footing lent entre chaque)\nRetour au calme : 10min footing facile + étirements 10min" },
            { title: "Conseil", content: "800m en phase intensive ! Vise la régularité. Ces 800m développent ta capacité à tenir des allures soutenues pour faciliter ton allure marathon." },
            { title: "Pourquoi cette séance ?", content: "Développer la VMA spécifique marathon, améliorer l'efficacité à allure rapide pour que ton objectif 3h45-4h paraisse plus facile." }
        ]
    },
    // MERCREDI 24 SEPTEMBRE - JOUR 56
    {
        date: "2025-09-24",
        title: "Récupération + HIIT Complet",
        semi: false,
        mar: false,
        done: false,
        sections: [
            { title: "Objectif", content: "Récupération active après la VMA + renforcement intensif" },
            { title: "Résumé", content: "30min footing récup + 15min HIIT" },
            { title: "Nutrition", content: "MATIN : 1 des 3 petits déjeuners au choix\nMIDI : 1 protéine + 1 glucide + légumes (300g) + 1 lipide\nSOIR : 1 protéine + légumes (300g) + 1 lipide + petit glucide (optionnel)" },
            { title: "Détail", content: "SÉANCE D'ENTRAÎNEMENT :\nFooting récup : 30min allure 7'30-8'00/km très décontracté\nHIIT Complet (15min) :\n4 tours de :\n• Pompes (30s)\n• Squats (30s)\n• Planche (30s)\n• Fentes alternées (30s)\n• Repos (1min)" },
            { title: "Conseil", content: "Récupération vraiment facile après la VMA intensive d'hier. Phase intensive oblige, on maintient un HIIT complet pour le renforcement." },
            { title: "Pourquoi cette séance ?", content: "Récupération active + renforcement complet après l'effort VMA + activation métabolique en phase intensive." }
        ]
    }
];