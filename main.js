// Fungsi untuk mengatur slide aktif
const slideNavigator = (name) => {
    console.log(`Navigating to: ${name}`);
    let slides = document.querySelectorAll('.bg-slide'); // Memilih semua elemen dengan class 'bg-slide'
    slides.forEach((slide) => {
        slide.classList.remove('active'); // Menghapus class 'active' dari semua elemen
        if (slide.classList.contains(name)) { // Menambahkan class 'active' jika class sesuai dengan 'name'
            slide.classList.add('active');
        }
    });
};

// Event listener untuk mengatur tombol dan pergantian slide
window.addEventListener('load', () => {
    const slideBtnList = document.querySelectorAll('.slide-btn'); // Memilih semua tombol navigasi

    slideBtnList.forEach((btn) => {
        btn.addEventListener('click', function (e) {
            e.preventDefault(); // Mencegah aksi default link
            console.log(`Clicked button: ${this.getAttribute('data-target')}`);
            // Menghapus class 'active' dari semua tombol
            slideBtnList.forEach((el) => {
                el.classList.remove('active');
            });

            // Menambahkan class 'active' pada tombol yang diklik
            this.classList.add('active');

            // Mengaktifkan slide yang sesuai berdasarkan atribut data-target
            slideNavigator(this.getAttribute('data-target'));
        });
    });
});

// activate sections
const sectionNavigator = (name) => {
    let sections = document.querySelectorAll('section');
    let header = document.querySelector('header');
    sections.forEach(section => {
        section.classList.remove('section-show');
        if (section.classList.contains(name)){
            section.classList.add('section-show');
            header.classList.add('active');
        }
    });
};

// navigation to sections
window.addEventListener('load', () => {
    const navList = document.querySelectorAll('.nav-btn');
    navList.forEach(nav => {
        nav.addEventListener('click', function (e) {
            e.preventDefault();
            navList.forEach(el => {
                el.classList.remove('active');
            });
            this.classList.add('active');
            sectionNavigator(this.getAttribute('data-target'));
            screen.width < 768 && toggleMenu();
        });
    });
});

// reset header to initial state
const resetHeader = () => {
    let header = document.querySelector('header');
    header.classList.remove('active');
};

// initial navigation
const initNavigation = () => {
    const navList = document.querySelectorAll('.nav-btn');
    navList.forEach(el => {
        el.classList.remove('active');
        if (el.getAttribute('data-target')=== 'about'){
            el.classList.add('active');
        }
    });
    sectionNavigator('about');
};

// toggle menu
// Fungsi untuk toggle menu
const toggleMenu = (event) => {
    if (event) {
        event.preventDefault(); // Cegah tindakan default hanya untuk klik tombol menu
    }
    const menu = document.querySelector('.menu');
    const navMobile = document.querySelector('.nav-mobile');
    menu.classList.toggle('active');
    navMobile.classList.toggle('active');
};

// Tambahkan event listener untuk tautan navigasi
document.querySelectorAll('.nav-mobile a').forEach(link => {
    link.addEventListener('click', () => {
        const navMobile = document.querySelector('.nav-mobile');
        const menu = document.querySelector('.menu');

        // Tutup menu setelah klik pada tautan
        menu.classList.remove('active');
        navMobile.classList.remove('active');
    });
});



