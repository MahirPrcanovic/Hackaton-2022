# HackatHome 2022 - BEST Mostar

HackAtHome 2022


Naša ideja?


Ideja ovog projekta jeste smart Apoteka.Smart apoteka je vrsta sistema koja bi se sastojala iz dva dijela.Prvi dio sistema jeste korisničko pretraživanje dostupnih lijekova u obližnjim apotekama pomoću web app-a za koji smo predstavili dizajn.Drugi dio sistema bi predstavljao admin panel koji bi se koristio isključivo od strane apotekara koji radi u apoteci.Taj sistem je za razliku od prvog dijela dosta kompliciraniji.Znamo da većina starijih ljudi koristi često neke vrste tableta koje se ne mogu svakodnevno pronaći u apoteci u obližnjem kraju.Ovaj drugi dio aplikacije bi korisnicima obezbjedio dolazak notifikacija pomoću sms/e-maila(sms za starije ljude,e-mail za ostale) kada određeni lijek dođe u inventar.Prilikom dolaska tog lijeka, sistem šalje notifikacije svim osobama sa sistema koji taj lijek imaju u svom "profilu".Ukoliko osoba ne želi više dobijati notifikacije, jednostavnim klikom na email dio unsubscribe bi ih izbrisao iz baze podataka za taj lijek.Naravno ako lijek nije dostupan a korisnik ne može čekati dolazak tog lijeka na stanje, opet može koristiti našu aplikaciju za pronalazak apoteka koje taj lijek imaju.

Koji problem mi rješavamo?

1.	Real-time provjera dostupnih lijekova u apotekama koje su unesene u naš sistem tj. koriste naš sistem
2.	Notifikacija pacijenata o dostupnosti lijekova . Ako pacijent u apoteku dodje i lijek u tom trenutku nije dostupan taj pacijent se unosi u sistem koji vodi evidenciju o inventaru lijekova. Kada lijek bude ponovo dostupan u toj apoteci pacijent će se obavijestiti da je lijek ponovo dostupan. U slučaju da pacijent nije u mogućnosti dignuti lijek u skorije vrijeme on i dalje ostaje u sistemu koji će slati notifikacije o dostupnosti kada on bude dostupan. Pacijent u emailu će imati opciju za unsubscribe koji će ga uklonuti iz sistema(u slučaju da je lijek podignut od strane pacijenta ili više nema potrebu za tim lijekom).



Od čega se naše rješenje sastoji

Naša aplikacija/website bi se sastojala iz dva dijela. Admin panela koji bi se koristio u apotekama te korisničkog dijela koji bi bio dostupan pacijentima/korisnicima apoteke.

Admin panel-u bi se pristupalo tako što bi svaka apoteka unosila svoje login podatke (ovaj dio bi samo apotekari imali pristup i nitko više.
Nakon pristupa sistemu u njemu bi se nalazila lista svih pacijenata koji očekuju notifikacije nakon što lijek ponovo bude dostupan. Naravno  apotekari imaju opciju dodati pacijenta što znači uzeti osnovne lične podatke potrebne da se realizuje slanje notifikacije putem SMS poruke ili email adrese. Također nakon unosa pacijenta naknadno se za istog pacijenta može dodavati x lijekova za koje je potrebno poslati notifikacije tom dotičnom pacijentu. Kao što smo napomenuli iznad apotekar će biti u mogućnosti da ukloni pacijente iz sistema ali to ne bi bio čest slučaj jer je zamisljeno da se sam korisnik odjavi sa sistema koristeći opciju unsubscribe koju bi dobio zajedno sa notifikacijom da li u slučaju nakon podizanja lijeka ili ipak u slučaju da mu taj lijek više nije potreban. Također naš admin panel bi imao drugu sekciju koja bi bila inventar lijekove te apoteke koja je prijavljena(svaka apoteka unesena u naš sistem bi imala odvojen inventar). Taj inventar bi se popunjavao na dva načina. Prvenstveno bi sistem automatski povlačio podatke iz već postojeće baze podataka apoteke koja sadrži sve dostupne lijekove. Osim toga također postoji i opcija manuelnog dodavanja lijekova što bi čak omogućilo da se ovaj sistem koristi kao inventar.

Korisnički dio aplikacije bi služio korisnicima/pacijentima lagan način provjere dostupnosti lijekova u njihovom gradu ili šire. Pretraga lijekova bi bila moguća jer naš sistem bi imao informacije o inventaru svake apoteke koje koriste naš sistem. Pretraga bi se vršila na nekoliko načina. Pretraga lijeka po gradu, pretraga lijekova po apotekama, ili jednostavno unosom imena lijeka te bi sistem izlistao obližnje apoteke koje imaju taj lijek na stanju. Ovo bi omogućilo da pacijenti koji ne žele koristiti notifikacijski dio naše aplikacije tj. Da ako nemaju vremena da čekaju na određeni lijek, iskoriste korisnički dio da pronađu u kojoj apoteci mogu pronaći taj lijek da li bilo u istom gradu ili možda u nekom drugom gradu Bosne i Hercegovine.

Link do dizajna sistema: https://xd.adobe.com/view/6a49e956-6286-4489-a630-e17de930b8a9-3f1a/?fullscreen [pristupano 10.04.2022].

For starting this code live up on your machine, after installation this code in code editor just simply write:

`
  npm install
  npm start
`

