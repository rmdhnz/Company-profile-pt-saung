import type { CapabilityCardData, ContentCard, Item } from '../types/content';

export const address: string =
  'Jl. Perum Bumi Marina Emas Timur Tahap I Blok C VII No. 29, Kel. Keputih, Kec. Sukolilo, Surabaya, Jawa Timur, Indonesia';

export const marineItems = [
  'Pembangunan kapal',
  'Kapal fiberglass',
  'Kapal aluminium',
  'Modifikasi kapal',
  'Perbaikan kapal',
  'Struktur maritim',
];
export const industrialItems = [
  'Pompa dan sistem pemompaan',
  'Permesinan kapal',
  'Permesinan industri',
  'Valve dan komponen piping',
  'Peralatan kelistrikan',
  'Spare parts dan marine equipment',
  'Pengadaan',
];
export const safetyItems = [
  'Dry Chemical Powder',
  'Sistem pemadam CO₂',
  'Foam / AFFF',
  'Sistem thermatic / semi-otomatis',
  'Peralatan keselamatan maritim',
  'Peralatan keselamatan industri',
];

export const email = {
  yuvico: 'yuvico@ptsaung.com',
  wahyu: 'wahyu@ptsaung.com',
  sales: 'sales@ptsaung.com',
};

export const experienceList: Item[] = [
  { label: 'Kapal patroli', value: 'Patrol vessels' },
  { label: 'Kapal penumpang', value: 'Passenger vessels' },
  { label: 'Kapal kerja', value: 'Mooring boats' },
  { label: 'Kapal penyelamat', value: 'Rescue boats' },
  { label: 'Kapal tunda', value: 'Tugboats' },
  { label: 'Perbaikan & modifikasi', value: 'Repair & modification' },
];

export const projectSpecs: Item[] = [
  { label: 'Kategori', value: 'Marine vessel' },
  { label: 'Panjang', value: '14.00 m' },
  { label: 'Lebar', value: '4.00 m' },
  { label: 'Tinggi', value: '1.90 m' },
];

export const corporateData: Item[] = [
  { label: 'Badan usaha', value: 'PT Sinar Anugerah Anagata' },
  { label: 'Merek', value: 'PT SAUNG' },
  { label: 'Tahun pendirian', value: '2025' },
  { label: 'Kantor pusat', value: 'Surabaya, Jawa Timur, Indonesia' },
];

export const capabilityCards: CapabilityCardData[] = [
  {
    division: 'marine',
    title: 'Rekayasa Maritim',
    description:
      'Pembangunan, modifikasi, dan perbaikan kapal untuk berbagai kebutuhan operasional.',
    items: marineItems,
  },
  {
    division: 'industrial',
    title: 'Sistem Industri',
    description:
      'Penyediaan mesin, komponen, dan equipment untuk mendukung operasi kapal maupun fasilitas industri.',
    items: industrialItems,
  },
  {
    division: 'safety',
    title: 'Keselamatan & Proteksi Kebakaran',
    description:
      'Peralatan dan sistem keselamatan untuk membantu melindungi manusia, aset, dan operasi dari risiko kebakaran.',
    items: safetyItems,
  },
];

export const workflowItems = [
  [
    '01',
    'Pemahaman Teknis',
    'Kami memulai dari kebutuhan operasional dan spesifikasi teknis, bukan dari produk yang ingin dijual.',
  ],
  [
    '02',
    'Kapabilitas Terintegrasi',
    'Marine engineering, industrial equipment, dan safety berada dalam satu jaringan solusi yang saling mendukung.',
  ],
  [
    '03',
    'Penyediaan yang Fleksibel',
    'Kami melayani kebutuhan equipment maupun pekerjaan berbasis proyek sesuai ruang lingkup yang dibutuhkan.',
  ],
  [
    '04',
    'Keandalan Jangka Panjang',
    'Kami memilih solusi berdasarkan kemampuan untuk menjalankan fungsi yang dibutuhkan secara konsisten, bukan sekadar memenuhi daftar spesifikasi.',
  ],
] as const;

export const sectorItems: ContentCard[] = [
  [
    'Maritim & Pelayaran',
    'Kapal, mesin, komponen, perbaikan, dan peralatan pendukung.',
  ],
  [
    'Pemerintahan & Sektor Publik',
    'Kebutuhan maritim dan industri untuk operasi sektor publik.',
  ],
  [
    'Fasilitas Industri',
    'Mesin, sistem pemompaan, equipment, komponen, dan solusi keselamatan.',
  ],
  [
    'Operator Komersial',
    'Solusi bagi organisasi yang bergantung pada aset maritim dan industri yang andal.',
  ],
];
