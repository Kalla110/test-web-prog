const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getExampleData = async () => {
    await sleep(2000);

    return [
        {
            "id": "1328267089170337792",
            "text": "RT @dansiela_b: Gut leben, weniger Natur zerstören: Wie deutsche Kommunen versuchen den Flächenfrass zu reduzieren https://t.co/ErAJByrq5A…"
        },
        {
            "id": "1328265569561309184"
            , "text": "POL-FL: Kreis Schleswig-Flensburg: Verkehrskontrollen im Kreisgebiet https://t.co/80Q1pldvyV #ots #polizei #news"
        },
        {
            "id": "1328260215951806468"
            , "text": "Flens­burg ist ein gefähr­li­cher Ort –Den­ken erwünscht – der Kelle-Blog Quelle: Flensburg ist ein gefährlicher Ort –Denken erwünscht – der Kelle-Blog https://t.co/wHOJNBIubr"
        },
        {
            "id": "2345678987652432435",
            "text": "Moin",
            "image": {
                "uri": "https://upload.wikimedia.org/wikipedia/commons/8/84/Example.svg"
            }
        },
        {
            "id": "1328256631944196096",
            "text": "RT @dansiela_b: Gut leben, weniger Natur zerstören: Wie deutsche Kommunen versuchen den Flächenfrass zu reduzieren https://t.co/ErAJByrq5A…"
        },
        {
            "id": "1328256446207832066",
            "text": "RT @riffklima: Gut leben, weniger Natur zerstören: Wie deutsche Kommunen versuchen den Flächenfraß zu reduzieren von @amprek https://t.co/R…"
        },
        {
            "id": "1328254007694028800",
            "text": "RT @FFriesecke: Kampf gegen Flächenfraß in Städten\nWeniger ist schwer! #Flensburg #Ulm #Flächenverbrauch #Siedlungsfläche  https://t.co/EFm…"
        },
        {
            "id": "2345678987652237435",
            "text": "Hier könnte zusätzlich noch ein langer Text stehen",
            "image": {
                "uri": "https://www.br.de/puls/musik/aktuell/drake-meme-102~_v-img__16__9__l_-1dc0e8f74459dd04c91a0d45af4972b9069f1135.jpg?version=4f94b"
            }
        },
        {
            "id": "1328253740961452035", "text": "Wie angekündigt startet am Donnerstag, den 19.11., unsere Serie #digitaler Infoverstaltungen. Den Anfang macht #Flensburg für interessierte #Schüler/innen aus der Stadt und dem Umland. Schon angemeldet? https://t.co/FYQKEAKfQr https://t.co/ilR5bd0iqh"
        },
        {
            "id": "1328253636238069760",
            "text": "#Re7 #RegioSH #HVV #RE21112 #Hamburg Hbf (10:43) - #Kiel Hbf (11:57) Reisende nutzen bitte RE7 Richtung #Flensburg. In #Neumünster ist ein außerplanmäßiger Umstieg Richtung #Kiel Hbf erforderlich. Zug fährt abweichend mit nur einem Zugteil."
        },
        {
            "id": "1328252874732806145", "text": "#RE7 #RegioSH #HVV #RE21062 #Hamburg Hbf (10:43) - #Flensburg (12:42) Reisende nutzen bitte RE7 Richtung #Flensburg. In #Neumünster ist ein außerplanmäßiger Umstieg Richtung #Kiel Hbf erforderlich. Zug fährt abweichend mit nur einem Zugteil."
        },
        {
            "id": "1328250964990586882",
            "text": "Die Infoladen Crew hat einen Bericht über den Laternenumzug der Virusleugner:innen und Verschwörungsgläubigen in Flensburg verfasst: https://t.co/ls5eCNArYU\n#StMartin #querfront #COVID19"
        }
    ];
};