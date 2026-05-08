export const priceConfig = {
    currency: "€",
    products: [ // category | name | price? | details? | description? | gender?
        {
            category: "Cura mani e piedi",
            name: "Smalto normale piedi",
            price: 10
        },
        {
            category: "Cura mani e piedi",
            name: "Taglio e limatura unghie piedi",
            price: 7
        },
        {
            category: "Cura mani e piedi",
            name: "Pedicure",
            price: 25
        },
        {
            category: "Cura mani e piedi",
            name: "Pedicure - con smalto semipermanente",
            price: [38, 43]
        },
        {
            category: "Cura mani e piedi",
            name: "Trattamento Paraffina mani-piedi",
            price: 10
        },
        {
            category: "Cura mani e piedi",
            name: "WET Manicure - semplice",
            price: 10
        },
        {
            category: "Cura mani e piedi",
            name: "WET Manicure - con smalto",
            price: 14
        },
        {
            category: "Cura mani e piedi",
            name: "Semipermanente rinforzato",
            price: 20
        },
        {
            category: "Cura mani e piedi",
            name: "Copertura in gel",
            price: 35
        },
        {
            category: "Cura mani e piedi",
            name: "Copertura in acrylgel",
            price: 35
        },
        {
            category: "Cura mani e piedi",
            name: "Ricostruzione unghie",
            price: 60,
            details: "Il prezzo può variare in base alla lunghezza richiesta"
        },
        {
            category: "Epilazione",
            name: "Sopracciglia",
            price: 10
        },
        {
            category: "Epilazione",
            name: "Baffetti",
            price: 3
        },
        {
            category: "Epilazione",
            name: "Ascelle",
            price: 7
        },
        {
            category: "Epilazione",
            name: "Braccia",
            price: 9
        },
        {
            category: "Epilazione",
            name: "Coscia",
            price: 9
        },
        {
            category: "Epilazione",
            name: "Gambaletto",
            price: 9
        },
        {
            category: "Epilazione",
            name: "Inguine parziale donna",
            price: 9,
            gender: "D"
        },
        {
            category: "Epilazione",
            name: "Inguine totale donna",
            price: 12,
            gender: "D"
        },
        {
            category: "Epilazione",
            name: "Schiena uomo",
            price: 18,
            gender: "U"
        },
        {
            category: "Epilazione",
            name: "Addome uomo",
            price: 18,
            gender: "U"
        },
        {
            category: "Epilazione",
            name: "Cera Brasiliana Soft Skin",
            description: "Una carezza per la pelle: più comfort e meno arrossamenti. Perfetta per chi desidera una depilazione efficace ma delicata. Solo +2€ a zona rispetto alla cera tradizionale."
        },
        {
            category: "Cura del viso",
            name: "Laminazione ciglia più tinta",
            price: 50
        },
        {
            category: "Cura del viso",
            name: "Laminazione sopracciglia più tinta",
            price: 25
        },
        {
            category: "Cura del viso",
            name: "Laminazione ciglia e sopracciglia più tinta",
            price: 70
        },
        {
            category: "Cura del viso",
            name: "Pulizia del viso base",
            price: 35
        },
        {
            category: "Cura del viso",
            name: "Pulizia del viso profonda - con trattamento specifico",
            price: 50,
            details: "a partire da"
        },
        {
            category: "Cura del viso",
            name: "Trucco in salone",
            price: 40
        },
        {
            category: "Cura del viso",
            name: "Trucco domiciliare",
            price: 50
        },
        {
            category: "Cura del viso",
            name: "Applicazione ciglia finte",
            price: 10
        },
        {
            category: "Cura del viso",
            name: "Prova trucco sposa",
            price: 50
        },
        {
            category: "Cura del viso",
            name: "Bridal Experience",
            price: 250
        },
        {
            category: "Cura del corpo",
            name: "Massaggio relax - 30 minuti",
            price: 50
        },
        {
            category: "Cura del corpo",
            name: "Massaggio relax - Total body",
            price: 80
        },
        {
            category: "Cura del corpo",
            name: "Blu Rose Experience",
            details: "scrub corpo + massaggio relax",
            price: 100
        },
        {
            category: "Cura del corpo",
            name: "Seduta di pressoterapia da 45 minuti",
            price: 25,
            details: [
                {
                    sedute: 10,
                    price: 200
                }
            ]
        },
        {
            category: "Cura del corpo",
            name: "Seduta di pressoterapia da 45 minuti + trattamento specifico",
            description: "Solo pacchetti da 5/10 sedute",
            details: [
                {
                    sedute: 5,
                    price: 200,
                    details: "Una seduta omaggio"
                },
                {
                    sedute: 10,
                    price: 400,
                    details: "Due sedute omaggio"
                }
            ]

        }
    ]
} as const;