export const profile = {
  name: 'Mehmet Çobanoğlu',
  title: 'Software Developer',
  roles: ['Flutter Developer', 'Mobile Application Developer', 'Software Developer'],
  location: 'Konya, Türkiye',
  email: 'mehmett_ceng@hotmail.com',
  phone: '+90 544 380 0148',
  github: 'https://github.com/MEHMETCOBANOGLU',
  githubUser: 'MEHMETCOBANOGLU',
  linkedin: 'https://www.linkedin.com/in/-mehmet-cobanoglu/',
  cv: '/Mehmet_Cobanoglu_CV.pdf',
  about: [
    'Bilgisayar Mühendisliği mezunu, 1 yılı aşkın profesyonel deneyime sahip bir yazılım geliştiriciyim. Mobil ve web teknolojileri üzerine projeler geliştiriyor; ağırlıklı olarak Flutter ve Dart ile çapraz platform mobil uygulamalar, ayrıca React tabanlı web uygulamaları geliştiriyorum.',
    'Veritabanı teknolojileri, RESTful API entegrasyonu ve modern yazılım geliştirme prensipleriyle çalışarak ölçeklenebilir ve sürdürülebilir çözümler üretiyorum. Kod kalitesini, performansı ve kullanıcı deneyimini ön planda tutuyor; temiz, okunabilir ve bakımı kolay yazılımlar geliştirmeye odaklanıyorum.',
  ],
}

export const stats = [
  { value: '1+', label: 'Yıl profesyonel deneyim' },
  { value: '3', label: 'Şirket deneyimi' },
  { value: '6+', label: 'Mobil & web proje' },
  { value: '2', label: 'Platform: iOS & Android' },
]

export const experience = [
  {
    role: 'Flutter Developer',
    company: 'Sezin Tıbbi Görüntüleme ve Kalp Merkezi',
    date: 'Eylül 2025 – Günümüz',
    location: 'Konya, Türkiye',
    current: true,
    points: [
      'Flutter, Dart, BLoC ve modüler mimari prensipleriyle kurumsal ölçekli Sezin Smart mobil uygulamasının analiz, geliştirme ve bakım süreçlerinde aktif rol aldım.',
      'Android ve iOS için telefon ve tablet uyumlu, yüksek performanslı ve kullanıcı odaklı arayüzler geliştirdim.',
      'Dio ile RESTful API entegrasyonları; kimlik doğrulama, token yönetimi, hata yönetimi ve veri serileştirme süreçlerini güvenli bir yapıda kurguladım.',
      'İnsan Kaynakları, Stok Yönetimi, Akademi, Personel Yönetimi, Puantaj, İzin Yönetimi ve Bildirimler gibi modüllerin tasarım ve geliştirmesinde görev aldım.',
      'Yeniden kullanılabilir UI bileşenleri, ortak servis yapıları ve modüler mimari bileşenleri geliştirdim.',
      'Mevcut modülleri geliştirmeye ve yeni özellikler eklemeye devam ediyorum.',
      'React ile geliştirilen web arayüzünün geliştirilmesine destek vererek mobil ve web ekipleri arasında iş birliği sağladım.',
      'Trion uygulamasında güvenlik, arayüz (UI/UX) ve Firebase push bildirimlerini geliştiriyorum.',
      'Trion’un App Store ve Google Play yayın süreçlerini yönetiyorum.',
    ],
    tags: ['Flutter', 'Dart', 'BLoC', 'Dio', 'REST API', 'Firebase', 'React'],
  },
  {
    role: 'Flutter Developer – Stajyer',
    company: 'Dev Secure Bilişim Teknolojileri',
    date: 'Eylül 2024 – Ekim 2024',
    location: 'İstanbul, Türkiye · Uzaktan',
    points: [
      'Veri yönetimi için akıllı bir mimari sunan Tablify mobil uygulamasını geliştirdim: düzenlenebilir tablolar, çoklu sekme desteği, içe/dışa aktarma ve YAML toplu kopyalama.',
    ],
    tags: ['Flutter', 'Dart', 'Hive', 'Firebase'],
  },
  {
    role: 'Flutter Developer – Stajyer',
    company: 'Enelsis Endüstriyel Elektronik Sistemler',
    date: 'Ağustos 2023 – Eylül 2023',
    location: 'Konya, Türkiye',
    points: [
      'Çalışanların izin süreçlerini kolaylaştıran, yöneticilere izin yönetimi ve uygulama içi mesajlaşma imkânı sunan bir mobil uygulama geliştirdim.',
    ],
    tags: ['Flutter', 'Firebase Auth', 'Cloud Firestore', 'Push Notifications'],
  },
]

export const projects = [
  {
    name: 'Sezin Smart',
    subtitle: 'Kurumsal Mobil Uygulama',
    description:
      'Sezin Tıbbi Görüntüleme ve Kalp Merkezi için geliştirilen; İK, stok, akademi, puantaj, izin ve bildirim modüllerini barındıran kurumsal ölçekli mobil uygulama.',
    tags: ['Flutter', 'BLoC', 'Dio', 'REST API'],
    featured: true,
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/us/app/sezin-smart/id6757295771', type: 'apple' },
      { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.sezin.smartmobile', type: 'play' },
    ],
  },
  {
    name: 'Trion',
    subtitle: 'Kurumsal İş Süreçleri Platformu',
    description:
      'İhale, envanter ve bakım, akademi, insan kaynakları ve bildirimleri telefon ile tablette bir araya getiren kurumsal mobil platform. Güvenlik, arayüz ve Firebase bildirimlerini geliştiriyor; mağaza yayınlarını yönetiyorum.',
    tags: ['Flutter', 'Dart', 'Firebase', 'iOS & Android'],
    featured: true,
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/tr/app/trion/id6802638289?l=tr', type: 'apple' },
      { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.sezintip.trion', type: 'play' },
    ],
  },
  {
    name: 'MerinoÇizgi',
    subtitle: 'Çizgi Roman Platformu · Geliştirme aşamasında',
    description:
      'Sanatçıların eserlerini yayınlayabildiği bir CMS ve okuyucular için vitrin. Responsive UI/UX, rol bazlı yetkilendirme (Admin/Yazar) ve sunucu tarafı otomasyonlar.',
    tags: ['Flutter Web', 'Riverpod', 'GoRouter', 'Firestore', 'Cloud Functions'],
    links: [{ label: 'GitHub', href: 'https://github.com/MEHMETCOBANOGLU/MerinoCizgi', type: 'github' }],
  },
  {
    name: 'Smart360',
    subtitle: 'Akıllı Ev / Araba Entegrasyonu',
    description:
      'Kullanıcıların evlerini, arabalarını ve taşınabilir akıllı sistemlerini mobil uygulama üzerinden uzaktan kontrol edebilmesini sağlayan IoT çözümü.',
    tags: ['Flutter', 'Firebase', 'MQTT', 'IoT', 'REST API'],
    links: [{ label: 'GitHub', href: 'https://github.com/MEHMETCOBANOGLU/smart-home-app-master', type: 'github' }],
  },
  {
    name: 'Tablify',
    subtitle: 'Veri Yönetimi Uygulaması',
    description:
      'Düzenlenebilir tablolar, çoklu sekme, içe/dışa aktarma araçları ve YAML toplu kopyalama sunan akıllı veri yönetimi uygulaması.',
    tags: ['Flutter', 'Hive', 'Firebase', 'Custom UI'],
    links: [],
  },
  {
    name: 'Leave Request App',
    subtitle: 'İzin Yönetimi Uygulaması',
    description:
      'Çalışanların izin taleplerini kolaylaştıran, yöneticilere onay akışı ve uygulama içi mesajlaşma sunan mobil uygulama.',
    tags: ['Flutter', 'Firebase Auth', 'Firestore', 'FCM'],
    links: [{ label: 'GitHub', href: 'https://github.com/MEHMETCOBANOGLU/leaveRequestApp', type: 'github' }],
  },
]

export const skills = [
  { title: 'Front-End', items: ['Flutter', 'React', 'HTML / CSS'] },
  { title: 'Back-End & API', items: ['RESTful API', 'Dio', 'Dart'] },
  { title: 'Veritabanı', items: ['Firebase', 'SQL / MySQL', 'SQLite', 'Hive'] },
  { title: 'Diller & Araçlar', items: ['Dart', 'JavaScript', 'TypeScript', 'Git / GitHub', 'Postman', 'Cursor'] },
]

export const education = {
  school: 'Karadeniz Teknik Üniversitesi',
  degree: 'Bilgisayar Mühendisliği (%30 İngilizce)',
  date: '2020 – 2024',
}

export const languages = [
  { name: 'Türkçe', level: 'Ana dil', percent: 100 },
  { name: 'İngilizce', level: 'B1', percent: 55 },
]
