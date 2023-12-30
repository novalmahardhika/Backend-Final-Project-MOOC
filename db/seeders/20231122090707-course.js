'use strict'
const { Op } = require("sequelize");


const datas = [
  {
    id: "0c06de8f-ea83-49d6-9447-a4247e5cd4ec",
    title: "Learn Basic Javascript",
    category: "Web Development",
    type: "free",
    description: "Mulailah perjalanan Anda dalam dunia pengembangan web dengan kursus ini yang gratis. Dimulai dari konsep dasar hingga sintaksis, kursus ini dirancang untuk membantu pemula memahami prinsip dasar JavaScript yang penting untuk membangun dasar yang kuat dalam pengembangan web.",
    image: "https://res.cloudinary.com/djsjnrfv0/image/upload/v1703906995/juanjo-jaramillo-mZnx9429i94-unsplash_fcx0gz.jpg"
  },
  {
    id: "746112de-b9c0-464b-bc8e-74e524ec1408",
    title: "Learn React Expert",
    category: "Web Development",
    type: "free",
    description: "Jelajahi konsep React.js yang lebih mendalam dengan kursus gratis ini. Cocok untuk pengembang yang sudah familiar dengan dasar-dasar React, kursus ini menggali manajemen state, hooks, dan fitur-fitur canggih lainnya untuk meningkatkan keterampilan React Anda.",
    image: "https://res.cloudinary.com/djsjnrfv0/image/upload/v1703907215/lautaro-andreani-UYsBCu9RP3Y-unsplash_xf8jhp.jpg"
  },
  {
    id: "7b20fea8-cccf-4673-b818-2826ca149f5f",
    title: "From Zero to Hero Kotlin",
    category: "Android Development",
    type: "premium",
    description: "Tingkatkan keterampilan pengembangan Android Anda dengan kursus berbayar ini. Dimulai dari dasar-dasar pemrograman Kotlin, kursus ini melangkah ke topik-topik tingkat lanjut, memberdayakan Anda untuk membangun aplikasi Android yang kuat dan efisien.",
    image: "https://res.cloudinary.com/djsjnrfv0/image/upload/v1703907881/pexels-markus-spiske-4439901_mmwdhz.jpg"
  },
  {
    id: "b5d70188-6b85-4d98-a975-509a80710671",
    title: "Fullstack Next JS",
    category: "Web Development",
    type: "premium",
    description: "Kuasai full stack dengan Next.js dalam kursus berbayar ini. Dari pengembangan front-end menggunakan React hingga rendering server-side dan integrasi API, kursus ini membekali Anda dengan keterampilan untuk membuat aplikasi web modern dan dinamis.",
    image: "https://res.cloudinary.com/djsjnrfv0/image/upload/v1703908191/mohammad-rahmani-oXlXu2qukGE-unsplash_w9mjnt.jpg"
  },
  {
    id: "e5103ac5-7f43-4fb0-920b-44be6f7c9ef1",
    title: "Data Science Fundamentals",
    category: "Data Science",
    type: "premium",
    description: "Menyelami konsep inti ilmu data dengan kursus berbayar ini. Mulai dari analisis statistik, dasar machine learning, hingga visualisasi data, kursus ini sangat penting bagi mereka yang bercita-cita memasuki bidang ilmu data.",
    image: "https://res.cloudinary.com/djsjnrfv0/image/upload/v1703908264/carlos-muza-hpjSkU2UYSU-unsplash_lotuq9.jpg"
  },
  {
    id: "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
    title: "UI/UX Design Principles",
    category: "UI/UX Design",
    type: "free",
    description: "Pelajari prinsip-prinsip dasar desain UI/UX dalam kursus gratis ini. Mulai dari riset pengguna hingga prototyping, kursus ini memberikan wawasan dalam menciptakan desain yang berfokus pada pengguna dan estetis.",
    image: "https://res.cloudinary.com/djsjnrfv0/image/upload/v1701248815/BINAR/nwnt4ty0nxgrx1hyh8ce.jpg"
  },
  {
    id: "baec4b8d-0ae7-4fd9-a52e-70015463b12d",
    title: "Product Management Basics",
    category: "Product Management",
    type: "free",
    description: "Mulailah dengan dasar-dasar manajemen produk dalam kursus gratis ini. Menyajikan ide produk, analisis pasar, dan manajemen proyek, kursus ini sempurna bagi mereka yang bercita-cita menjadi manajer produk yang efektif.",
    image: "https://res.cloudinary.com/djsjnrfv0/image/upload/v1703908395/jason-goodman-Oalh2MojUuk-unsplash_kptmj1.jpg"
  },
  {
    id: "4961290d-9f7e-438d-8f41-dcdd2f799bb3",
    title: "Advanced Android Development",
    category: "Android Development",
    type: "free",
    description: "Tingkatkan keterampilan pengembangan Android Anda dengan kursus gratis tingkat lanjut ini. Menyajikan topik seperti tampilan kustom, pemrosesan latar belakang, dan optimisasi kinerja, kursus ini dirancang untuk pengembang Android berpengalaman.",
    image: "https://res.cloudinary.com/djsjnrfv0/image/upload/v1703908612/1-4_cmuqy2.jpg"
  },
  {
    id: "87cb85b4-f316-44e8-bd7a-85da3ba64c13",
    title: "IOS Development Masterclass",
    category: "IOS Development",
    type: "premium",
    description: "Kuasai seni pengembangan aplikasi iOS dengan kursus berbayar ini. Mulai dari pemrograman Swift hingga fitur iOS tingkat lanjut, kursus ini memberikan wawasan menyeluruh untuk membangun aplikasi iOS berkualitas tinggi.",
    image: "https://res.cloudinary.com/djsjnrfv0/image/upload/v1703908696/john-ron-9X1oB2l6CH8-unsplash_qxi3iw.jpg"
  },
  {
    id: "69052af0-a3f9-4f33-a0d0-b6e40e78c919",
    title: "Advanced Data Science Techniques",
    category: "Data Science",
    type: "premium",
    description: "Jelajahi teknik-teknik ilmu data tingkat lanjut dalam kursus berbayar ini. Dari pemodelan prediktif hingga deep learning, kursus ini memberdayakan ilmuwan data dengan alat dan pengetahuan untuk mengatasi tantangan data yang kompleks.",
    image: "https://res.cloudinary.com/djsjnrfv0/image/upload/v1703908771/myriam-jessier-eveI7MOcSmw-unsplash_yiuq0h.jpg"
  },
  {
    id: "1f2a0062-c061-43e9-817b-1b427d8eca41",
    title: "Advanced Web Design",
    category: "UI/UX Design",
    type: "premium",
    description: "Tingkatkan keterampilan desain web Anda dengan kursus berbayar ini. Menyajikan prinsip desain tingkat lanjut, desain web responsif, dan tren terkini, kursus ini sempurna untuk desainer UI/UX yang mengincar keunggulan.",
    image: "https://res.cloudinary.com/djsjnrfv0/image/upload/v1703909065/pexels-picjumbocom-196644_zjydal.jpg"
  },
  {
    id: "02b948cb-f34d-4e93-b21b-3aed09a61ed0",
    title: "Product Management Strategies",
    category: "Product Management",
    type: "premium",
    description: "Pelajari strategi dan taktik lanjut dalam manajemen produk dengan kursus berbayar ini. Mulai dari peta jalan produk hingga metodologi agile, kursus ini membekali manajer produk dengan keterampilan untuk menyukseskan peluncuran produk.",
    image: "https://res.cloudinary.com/djsjnrfv0/image/upload/v1703909138/jason-goodman-vbxyFxlgpjM-unsplash_q4lugn.jpg"
  },
  {
    id: "98fbfb03-5c4a-40fb-9a86-c31f6f62028f",
    title: "Golang Fundamental",
    category: "Web Development",
    type: "premium",
    description: "Kuasai dasar-dasar bahasa pemrograman Go dengan kursus berbayar ini. Dari dasar sintaksis hingga pemrograman konkuren, kursus ini ideal untuk pengembang yang ingin memperluas keahlian mereka dalam pengembangan sisi server.",
    image: "https://res.cloudinary.com/djsjnrfv0/image/upload/v1703909219/pexels-kevin-ku-577585_ysxupy.jpg"
  },
  {
    id: "05e3a2b8-9764-4d20-aad0-d565237b4da6",
    title: "Advanced IOS Development",
    category: "IOS Development",
    type: "free",
    description: "Tingkatkan keterampilan pengembangan iOS Anda dengan kursus gratis tingkat lanjut ini. Menyajikan topik seperti Core Data, animasi, dan komponen UI tingkat lanjut, kursus ini dirancang untuk pengembang iOS berpengalaman.",
    image: "https://res.cloudinary.com/djsjnrfv0/image/upload/v1703909342/64710dae7283cc0c87d9ee47_iphone-app-development_u5ampe.jpg"
  },
  {
    id: "ad738f74-ca56-460a-8900-3ad5328d4d05",
    title: "Product Management Workshop",
    category: "Product Management",
    type: "free",
    description: "Ikuti lokakarya praktis dan latihan dalam kursus manajemen produk gratis ini. Cocok untuk mereka yang mencari pengalaman langsung, kursus ini mencakup perencanaan produk kolaboratif, umpan balik pengguna, dan strategi iterasi.",
    image: "https://res.cloudinary.com/djsjnrfv0/image/upload/v1703909430/daria-nepriakhina-zoCDWPuiRuA-unsplash_tpwuzy.jpg"
  },
  {
    id: "a20d6bfd-2b68-4ae9-8cdd-8e99cf7d2fba",
    title: "Mobile App UI/UX Design",
    category: "UI/UX Design",
    type: "free",
    description: "Jelajahi prinsip-prinsip desain aplikasi mobile yang ramah pengguna dalam kursus gratis ini. Menyajikan desain antarmuka mobile, pertimbangan kegunaan, dan prototyping, kursus ini sangat penting bagi desainer UI/UX mobile.",
    image: "https://res.cloudinary.com/djsjnrfv0/image/upload/v1703909490/tran-mau-tri-tam-g-pKprPg5yw-unsplash_kfhppd.jpg"
  },
  {
    id: "61f88815-909d-4098-8c70-e6f848501d0b",
    title: "Data Science for Business",
    category: "Data Science",
    type: "free",
    description: "Jembatani kesenjangan antara ilmu data dan bisnis dalam kursus gratis ini. Menyajikan pengambilan keputusan berbasis data, analisis bisnis, dan studi kasus, kursus ini dirancang untuk para profesional yang ingin memanfaatkan data untuk kesuksesan bisnis.",
    image: "https://res.cloudinary.com/djsjnrfv0/image/upload/v1703909621/What-the-Difference-Between-Data-Analytics-and-Data-Analysis_w9xw7l.png"
  },
  {
    id: "fbc0f659-cd49-4320-b164-118e285fe1ea",
    title: "Fullstack Web Development",
    category: "Web Development",
    type: "premium",
    description: "Menjadi pengembang web full stack dengan kursus berbayar ini. Menyajikan pengembangan front-end dan back-end menggunakan framework populer, kursus ini memberdayakan Anda untuk membangun aplikasi web yang skalabel dan kaya fitur.",
    image: "https://res.cloudinary.com/djsjnrfv0/image/upload/v1703909720/Full-Stack-Developer-980x462-1_cn1mzn.png"
  },
  {
    id: "dd86c454-e9e5-40e7-94ac-de8638abaa0c",
    title: "Integrating Firebase for Android Development",
    category: "Android Development",
    type: "premium",
    description: "Pelajari cara mengintegrasikan layanan Firebase dengan lancar ke dalam aplikasi Android Anda dengan kursus berbayar ini. Menyajikan otentikasi, database real-time, dan fungsi cloud, kursus ini meningkatkan toolkit pengembangan Android Anda.",
    image: "https://res.cloudinary.com/djsjnrfv0/image/upload/v1703909838/firebase_lhu2dh.png"
  },
  {
    id: "04288b41-479c-4479-9afe-61bd4a4db5fd",
    title: "Fundamentals of Kotlin for Android",
    category: "Android Development",
    type: "premium",
    description: "Kuasai dasar-dasar pemrograman Kotlin khusus untuk pengembangan Android dalam kursus berbayar ini. Menyajikan praktik terbaik dan fitur Kotlin tingkat lanjut, kursus ini dirancang untuk pengembang Android yang mengincar efisiensi dan keberlanjutan.",
    image: "https://res.cloudinary.com/djsjnrfv0/image/upload/v1703909965/maxresdefault_m5vouq.jpg"
  },
];

const type = [
  "premium",
  "free"
]

const level = [
  "beginner",
  "intermediate",
  "advance"
]

const categories = [
  "UI/UX Design",
  "Product Management",
  "Web Development",
  "Android Development",
  "IOS Development",
  "Data Science",
]

const creator = [
  "John Doe", 
  "Jane Doe", 
  "Alex Smith", 
  "Emily Johnson"
]

function getRandomInt(length){
  const index = Math.floor(Math.random() * length)
  return index
}


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const timestamp = new Date();

    const courses = datas.map((data) => ({
      id: data.id,
      title: data.title,
      category: data.category,
      type: data.type,
      level: data.type === "free" ? "beginner" : getRandomLevel(),
      price: data.type === "free" ? 0 : Math.random() * 200000 + 50000,
      image: data.image,
      description: data.category,
      telegram: 'https://web.telegram.org/',
      creator: creator[getRandomInt(creator.length)],
      rating: (4 + Math.random()).toFixed(1),
      createdAt: new Date(),
      updatedAt: new Date(),
    }))

    function getRandomLevel() {
      const index = getRandomInt(level.length);
      return level[index];
    }
    

    await queryInterface.bulkInsert('Courses', courses)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    // await queryInterface.bulkDelete('Courses', { title: { [Op.in]: title } });
  },
}
