
const events = [
    {
      date: '11.12.2021',
      title: 'Tutaj Karcia & Kubcia begin',
      imageUrl: require('../../assets/img/1.PNG'),
    },
    {
        date: '13.01.2022',
        title: 'Moja studniówka + melanż w limuzynie + wiadomo co było potem 🙌',
        imageUrl: require('../../assets/img/2.JPG'),
    },
    {
        date: '14.02.2022',
        title: 'Nasze pierwsze walentynki❤️',
        imageUrl: require('../../assets/img/3.JPG'),
    },
    {
        date: '18.03.2022',
        title: 'Pierwsze wyjście do Hany Bany i chyba pierwsze poznanie moich znajomych',
        imageUrl: require('../../assets/img/4.JPG'),
    },
    {
        date: '28.04.2022',
        title: 'Chinol na polach w doborowym towarzystwie Harnaś Lodoherbata',
        imageUrl: require('../../assets/img/5.JPG'),
    },
    {
        date: '05.05.2022',
        title: 'Pierwsze i ostatnie wyjście na naleśniczki 😭',
        imageUrl: require('../../assets/img/6.JPG'),
    },
    {
        date: '15.06.2022',
        title: 'Spanko... dużo spanka',
        imageUrl: require('../../assets/img/7.JPG'),
    },
    {
        date: '16.07.2022',
        title: 'Comeback na dancefloor🕺',
        imageUrl: require('../../assets/img/8.JPG'),
    },
    {
        date: '24.08.2022',
        title: 'Piękni i młodzi na wakajkach w Albanii',
        imageUrl: require('../../assets/img/9.JPG'),
    },
    {
        date: '20.09.2022',
        title: 'Wyjście na kawusię i mały chit-chat',
        imageUrl: require('../../assets/img/10.JPG'),
    },
    {
        date: '31.10.2022',
        title: 'Pierwsze halloween i nasz najlepszy outfit ever!!',
        imageUrl: require('../../assets/img/11.JPG'),
    },
    {
        date: '24.11.2022',
        title: 'Nasz pierwszy drwal mmmmmmmm',
        imageUrl: require('../../assets/img/11-2.JPG'),
    },
    {
        date: '11.12.2022',
        title: 'Nasza I rocznica w towarzystwie włoskiego winka',
        imageUrl: require('../../assets/img/12.JPG'),
    },
    {
        date: '29.01.2023',
        title: 'A tutaj tym razem twoja studniówka (piękni jesteśmy)',
        imageUrl: require('../../assets/img/13.JPG'),
    },
    {
        date: '28.02.2023',
        title: 'Wyjście z Alexem do galerii a potem szamka',
        imageUrl: require('../../assets/img/14.JPG'),
    },
    {
        date: '02.03.2023',
        title: 'Pracuś w lesie spotted',
        imageUrl: require('../../assets/img/15.JPG'),
    },
    {
        date: '22.04.2023',
        title: 'Ja w drodze, żeby dać ci kwiatki na 19 uro!!!!',
        imageUrl: require('../../assets/img/16.JPG'),
    },
    {
        date: '04.05.2023',
        title: 'Nasz meeega fajny trip do Łodzi',
        imageUrl: require('../../assets/img/17.JPG'),
    },
    {
        date: '29.06.2023',
        title: 'Wyjazd do Gdańska na Openera (a bardziej Kendricka)',
        imageUrl: require('../../assets/img/18.JPG'),
    },
    {
        date: '20.07.2023',
        title: 'Nasz pierwszy wspólny wyjazd do Firleja & rodzice Oli incydent',
        imageUrl: require('../../assets/img/19.JPG'),
    },
    {
        date: '30.08.2023',
        title: 'Pływanie i sauna z golasami💪💪💪',
        imageUrl: require('../../assets/img/20.JPG'),
    },
    {
        date: '11.09.2023',
        title: 'Macaroni mmm (dużo było macaroni przez te 3 lata)',
        imageUrl: require('../../assets/img/21.JPG'),
    },
    {
        date: '21.10.2023',
        title: 'Cozy październik 2023 i nasze dzieło sztuki w postaci pizzy',
        imageUrl: require('../../assets/img/22.JPG'),
    },
    {
        date: '17.11.2023',
        title: 'Czy jest lepsze połączenie niż my + drwal + Bolek i Lolek?',
        imageUrl: require('../../assets/img/23.JPG'),
    },
    {
        date: '10.12.2023',
        title: 'Nasza druga rocznica na hot pocie (gdzie później prawie się zrzygaliśmy)',
        imageUrl: require('../../assets/img/24.JPG'),
    },
    {
        date: '06.01.2024',
        title: 'Zimowe randewu w towarzystwie grzańca',
        imageUrl: require('../../assets/img/25.JPG'),
    },
    {
        date: '14.02.2024',
        title: 'Valentinos w jazz barze z drineczkami',
        imageUrl: require('../../assets/img/26.JPG'),
    },
    {
        date: '23.03.2024',
        title: 'Karcia w oknie (zmierzam do niej)',
        imageUrl: require('../../assets/img/27.JPG'),
    },
    {
        date: '13.04.2024',
        title: 'Urocza Partnerka Jakuba',
        imageUrl: require('../../assets/img/28.JPG'),
    },
    {
        date: '30.05.2024',
        title: 'Trip do Firleja z Alekszem (tęsknię za tymi lodami)',
        imageUrl: require('../../assets/img/29.JPG'),
    },
    {
        date: '21.06.2024',
        title: 'Kibicowanie z bejbikiem (nawet to nie pomogło piłkarzom)',
        imageUrl: require('../../assets/img/30.JPG'),
    },
    {
        date: '07.07.2024',
        title: 'Wypad do Oli do Gdańska ale też i na Chałupy',
        imageUrl: require('../../assets/img/31.JPG'),
    },
    {
        date: '22.08.2024',
        title: 'Sycylia - piękny to był wyjazd, nie zapomnę go nigdy',
        imageUrl: require('../../assets/img/32.JPG'),
    },
    {
        date: '27.09.2024',
        title: 'Karma incydent - o tym nie mówimy (ale fotka super)',
        imageUrl: require('../../assets/img/33.jpg'),
    },
    {
        date: '31.10.2024',
        title: 'Piękni i młodzi na halloween - ja piękny, ty młoda',
        imageUrl: require('../../assets/img/34.jpg'),
    },
];

export default events;