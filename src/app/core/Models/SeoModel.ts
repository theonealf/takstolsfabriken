import {Injectable } from "@angular/core";

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class seoPageDescriptionHandler {    

    getMetaDesc(pageTitle:string){              
               
        return this.pageDescription().find(i => i.type === pageTitle);      

    }

    pageDescription(){
        return [
            {
                type: "/",
                metadesc:"Vi är ett företag som specialiserat oss på att tillverka takstolar för den svenska marknaden. Vi strävar efter att vara bäst i allt, från konstruktion och tekniska lösningar på komplicerade tak till att leverera rätt saker i rätt tid. Vi tar ett helhetsansvar för ert tak, balkar, avväxlingar, kortlingar och givetvis att alla takstolar är med i leveransen och inget skall justerkapas på plats. Takstolar CE-märkta enligt EN14250 Certifikatnummer SC 0212-10"
            },
            {
                type: "/hem",
                metadesc:"Vi är ett företag som specialiserat oss på att tillverka takstolar för den svenska marknaden. Vi strävar efter att vara bäst i allt, från konstruktion och tekniska lösningar på komplicerade tak till att leverera rätt saker i rätt tid. Vi tar ett helhetsansvar för ert tak, balkar, avväxlingar, kortlingar och givetvis att alla takstolar är med i leveransen och inget skall justerkapas på plats. Takstolar CE-märkta enligt EN14250 Certifikatnummer SC 0212-10"
            },
            {
                type: "/tillverkning",
                metadesc: 'Våra produkter och tillverkning. ' + this.defaultText(),
                linktext:"Läs mer om kakor",
            },
            {
                type: "/produkter",
                metadesc: 'Våra produkter och tillverkning. ' + this.defaultText(),
                linktext:"Läs mer om kakor",
            },
            {
                type: "/frakt",
                metadesc: 'Frakt och Lyftkrokar. ' + this.defaultText(),
                linktext:"Przeczytaj więcej o plikach cookie",
            },
            {
                type: "/omoss",
                metadesc: 'Företaget och om oss. ' + this.defaultText(),
                linktext:"Lesen Sie mehr über Cookies und browserstorage",
            },
            {
                type: "/foretaget",
                metadesc: 'Företaget och om oss. ' + this.defaultText(),
                linktext:"En savoir plus sur les cookies et stockage du navigateur",
            },
            {
                type: "/kontakt",
                metadesc: 'Kontakta oss på Timmele takstolsfabrik. Telefon: 0321-53 02 80, Öppet: MÅNDAG-TORDAG KL 07:30- 16:00, FREDAG KL 07:30- 15:00, E-post: info@timmele.se',
                linktext:"Leer más sobre cookies y almacenamiento del navegador",
            },
        ]
    }

    defaultText(){
        return "Vi är ett företag som specialiserat oss på att tillverka takstolar för den svenska marknaden. Vi strävar efter att vara bäst i allt, från konstruktion och tekniska lösningar på komplicerade tak till att leverera rätt saker i rätt tid. Vi tar ett helhetsansvar för ert tak, balkar, avväxlingar, kortlingar och givetvis att alla takstolar är med i leveransen och inget skall justerkapas på plats. Takstolar CE-märkta enligt EN14250 Certifikatnummer SC 0212-10"            
    }
}