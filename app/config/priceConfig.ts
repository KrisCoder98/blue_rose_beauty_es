export const priceConfig = {
    currency: "€",
    categorie: [
        {
            name: "💅 Cura mani e piedi",
            prodotti: [
                {
                    name: "Smalto normale piedi",
                    price: 10
                },
                {
                    name: "Taglio e limatura unghie piedi",
                    price: 7
                },
                {
                    name: "Pedicure",
                    price: 25
                },
                {
                    name: "Pedicure - con smalto semipermanente",
                    price: { min: 38, max: 43 }
                },
                {
                    name: "Trattamento Paraffina mani-piedi",
                    price: 10
                },
                {
                    name: "WET Manicure - semplice",
                    price: 10
                },
                {
                    name: "WET Manicure - con smalto",
                    price: 14
                },
                {
                    name: "Semipermanente rinforzato",
                    price: 20
                },
                {
                    name: "Copertura in gel",
                    price: 35
                },
                {
                    name: "Copertura in acrylgel",
                    price: 35
                },
                {
                    name: "Ricostruzione unghie",
                    price: 60,
                    details: "Il prezzo può variare in base alla lunghezza richiesta"
                }
            ]
        },
        {
            name: "Epilazione",
            prodotti: [
                {
                    name: "Sopracciglia",
                    price: 10
                },
                {
                    name: "Baffetti",
                    price: 3
                },
                {
                    name: "Ascelle",
                    price: 7
                },
                {
                    name: "Braccia",
                    price: 9
                },
                {
                    name: "Coscia",
                    price: 9
                },
                {
                    name: "Gambaletto",
                    price: 9
                },
                {
                    name: "Inguine parziale donna",
                    price: 9,
                    gender: "D"
                },
                {
                    name: "Inguine totale donna",
                    price: 12,
                    gender: "D"
                },
                {
                    name: "Schiena uomo",
                    price: 18,
                    gender: "U"
                },
                {
                    name: "Addome uomo",
                    price: 18,
                    gender: "U"
                },
                {
                    name: "Cera Brasiliana Soft Skin",
                    description: "Una carezza per la pelle: più comfort e meno arrossamenti. Perfetta per chi desidera una depilazione efficace ma delicata. Solo +2€ a zona rispetto alla cera tradizionale."
                },
            ]
        },
        {
            name: "Cura del viso",
            prodotti: [
                {
                    name: "Laminazione ciglia più tinta",
                    price: 50
                },
                {
                    name: "Laminazione sopracciglia più tinta",
                    price: 25
                },
                {
                    name: "Laminazione ciglia e sopracciglia più tinta",
                    price: 70
                },
                {
                    name: "Pulizia del viso base",
                    price: 35
                },
                {
                    name: "Pulizia del viso profonda - con trattamento specifico",
                    price: 50,
                    details: "A partire da"
                },
                {
                    name: "Trucco in salone",
                    price: 40
                },
                {
                    name: "Trucco domiciliare",
                    price: 50
                },
                {
                    name: "Applicazione ciglia finte",
                    price: 10
                },
                {
                    name: "Prova trucco sposa",
                    price: 50
                },
                {
                    name: "Bridal Experience",
                    price: 250
                }
            ]
        },
        {
            name: "Cura del corpo",
            prodotti: [
                {
                    name: "Massaggio relax - 30 minuti",
                    price: 50
                },
                {
                    name: "Massaggio relax - Total body",
                    price: 80
                },
                {
                    name: "Blu Rose Experience",
                    details: "scrub corpo + massaggio relax",
                    price: 100
                },
                {
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
        }
    ]
} as const;