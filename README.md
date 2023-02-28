demo oldal:   https://eenijsarray.netlify.app/

# js_tomb_feladat
Javascript feladat -  tömbök


Feladat: Tesztelés nyilvántartás

Fejlesztőcégünknél a különböző teszt-scenariók végigtesztelését szeretnénk felosztani a csapatunkban lévő tesztelők között.
Minden scenario esetén tudjuk, hogy tipikus végigfuttatása hány percig tart; és minden tesztelőről tudjuk a tipikus sebességét 
(vagyis százalékban azt, hogy egy tipikusan 100 perces scenario végigtesztelése neki mennyi ideig tart).

Ehhez az alábbi webes frontendet szeretnénk felhasználni:

1. lépés: kérjük be, hogy hány tesztelő és hány scenario az, amit kezelni akarunk.
2. lépés: kérjünk be mindegyik tesztelőhöz egy nevet és egy sebesség-százalékot.
3. lépés: kérjünk be mindegyik tesztesethez egy nevet és egy futtatási időt (percben).
4. lépés: jelenítsük meg egy táblázatban/listában az összes tesztelőnket, mindenkit a hozzá rendelt scenariókkal:
A tesztelők neve alatt legyen egy űrlap: jelenítsük meg a scenariokat egy legördülő listában, és a tesztelőket egy másik 
legördülő listában; a két legördülő lista mellett legyen egy gomb. A gombra rákattintva a kiválasztott tesztelőhöz hozzárendeljük 
a kiválasztott scenariót (egy tesztelő több scenario-t is kaphat; egy scenario több tesztelőhöz is rendelhető).
Ekkor frissüljön a tesztelőket tartalmazó lista/táblázat: mindegyik tesztelőhöz mutassuk meg a hozzá kiosztott 
scenario-kat, és azt a becsült időt, amennyire a tesztelőnek az összes scenario végigteszteléséhez előreláthatólag szüksége lesz.
