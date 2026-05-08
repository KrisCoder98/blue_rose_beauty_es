export const siteConfig = {
    name: "Blu Rose Beauty",
    shortDescription: "Dove la tua bellezza trova spazio",
    partitaIVA: "IT XXXXXXXXXXX",
    address: {
        city: "Formia",
        province: "Latina (LT)",
        cap: "04023",
        street: "Via degli Archi 40",
        country: "Italia"
    },
    contacts: {
        instagram: "blurosebeauty_es",
        email: "blurosebeauty.es@gmail.com",
        phone: "+393807504388",
    }
} as const;

export const linkConfig = {
    whatsapp: `https://wa.me/${siteConfig.contacts.phone.replace("+", "")}?text=${encodeURIComponent("Ciao! Vorrei prenotare un appuntamento.")}`,
    sendEmail: `mailto:${siteConfig.contacts.email}`,
    instagram: `https://www.instagram.com/${siteConfig.contacts.instagram}/`
}