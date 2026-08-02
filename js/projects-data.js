/* =========================================================
   DATA -- PROJECT TRACK RECORD (Halaman Portfolio)
   =========================================================
   Diambil dari file Excel pengalaman proyek perusahaan.
   Setiap proyek = satu objek dengan 6 kolom:
     category  -> kategori tab filter (Power Plant / Power T&D / Amdal / Telco / Other)
     sector    -> sub-sektor spesifik (ditampilkan sebagai label kecil)
     project   -> nama proyek
     client    -> nama klien
     year      -> tahun/periode proyek
     location  -> lokasi proyek
     scope     -> lingkup pekerjaan

   CARA MENAMBAH PROYEK BARU:
   Tambahkan satu blok { ... } baru di dalam array TRICON_PROJECTS di bawah,
   ikuti format yang sama persis (jangan lupa koma di akhir baris sebelumnya).
   Tidak perlu edit HTML/CSS/JS lain -- tabel & filter di halaman Portfolio
   otomatis menyesuaikan.
   ========================================================= */

window.TRICON_PROJECTS = [
  {
    "category": "Power Plant",
    "sector": "Power Plant",
    "project": "Civil Balance of Plant Design PLTB 150MW-250MW",
    "client": "PT Sukabumi Bayu Energi (Barito Renewables & ACEN)",
    "year": "2025",
    "location": "Central Java",
    "scope": "Civil Balance of Plant Design PLTB 150MW-250MW"
  },
  {
    "category": "Power Plant",
    "sector": "Power Plant",
    "project": "Civil Balance of Plant Design PLTB 150MW-250MW",
    "client": "PT Sukabumi Bayu Energi (Barito Renewables & ACEN)",
    "year": "2025",
    "location": "Central Java",
    "scope": "Detail Design Work Of Bridge Ciletuh – Sukabumi"
  },
  {
    "category": "Power Plant",
    "sector": "Power Plant",
    "project": "BRB Wind Power Plant",
    "client": "WPD Group",
    "year": "2025",
    "location": "Central Java BREBERS",
    "scope": "Preliminary Design and Engineering"
  },
  {
    "category": "Power Plant",
    "sector": "Power Plant",
    "project": "PNR Wind Power Plant",
    "client": "WPD GROUP",
    "year": "2025",
    "location": "South Sulawesi PINRANG",
    "scope": "Preliminary Design and Engineering"
  },
  {
    "category": "Power Plant",
    "sector": "Power Plant",
    "project": "Transmission & GI 110 kV & 220 kV",
    "client": "PT. PERMATA PRIMA ENJINIRING ELECTRIKA",
    "year": "2025",
    "location": "Republic Rwanda, South Africa",
    "scope": "Detail design engineering and contruction, transmission, ME 110 kV & 220 kV"
  },
  {
    "category": "Power Plant",
    "sector": "Power Plant",
    "project": "Civil Balance of Plant Design PLTB 70 MW",
    "client": "UPC Renewables Indonesia",
    "year": "2025",
    "location": "South Sulawesi JENEPONTO",
    "scope": "Civil Balance of Plant Design PLTB 70 MW"
  },
  {
    "category": "Power Plant",
    "sector": "Power Plant",
    "project": "Civil Balance of Plant Design PLTB 60 MW",
    "client": "UPC Renewables Indonesia",
    "year": "2025",
    "location": "South Sulawesi JENEPONTO",
    "scope": "Civil Balance of Plant Design PLTB 60 MW"
  },
  {
    "category": "Power Plant",
    "sector": "Power Plant",
    "project": "Civil Balance of Plant Design PLTB 22 MW",
    "client": "UPC Renewables Indonesia",
    "year": "2025",
    "location": "NTT PANAF",
    "scope": "Civil Balance of Plant Design PLTB 22 MW"
  },
  {
    "category": "Power Plant",
    "sector": "Power Plant",
    "project": "140 M Guyed Mast Tower Structure Design and Analysis",
    "client": "UPC Renewables Indonesia",
    "year": "2024",
    "location": "Jakarta",
    "scope": "Design Structural"
  },
  {
    "category": "Power Plant",
    "sector": "Power T&D",
    "project": "Detail Design Engineering Main Shaft Storage Building",
    "client": "PT. SBE (Barito Wind Energy)",
    "year": "2024",
    "location": "South Sulawesi",
    "scope": "Detail Design Engineering Main Shaft Storage Building"
  },
  {
    "category": "Power Plant",
    "sector": "Power Plant",
    "project": "Detail Design Engineering work for Mainsaft Storage Building O&M Facility",
    "client": "UPC SIDRAP BAYU ENERGY",
    "year": "2024",
    "location": "SIDRAP",
    "scope": "Detail Design Drawing incl The Foundations Concrete Floor & Bearing Pad detail design Drawing"
  },
  {
    "category": "Power Plant",
    "sector": "Power Plant",
    "project": "Mat Mast Tower Detai Design IEC 2017",
    "client": "UPC Renewables Indonesia",
    "year": "2024",
    "location": "South Sulawesi",
    "scope": "Detail Design Engineering"
  },
  {
    "category": "Power Plant",
    "sector": "Power Plant",
    "project": "BRB Wind Power Plant",
    "client": "WPD Group",
    "year": "2020",
    "location": "Central Java",
    "scope": "Conceptual and Master Plan"
  },
  {
    "category": "Power Plant",
    "sector": "Power Plant",
    "project": "PNR Wind Power Plant",
    "client": "WPD GROUP",
    "year": "2019",
    "location": "South Sulawesi",
    "scope": "Detail Design Engineering"
  },
  {
    "category": "Power Plant",
    "sector": "Power Plant",
    "project": "Oel Bubuk",
    "client": "Siemens Gamesa",
    "year": "2018",
    "location": "NTT",
    "scope": "Detail Desain"
  },
  {
    "category": "Power T&D",
    "sector": "Power T&D",
    "project": "Transmission and Distribution 20 kV",
    "client": "PT. AWAK MAS ( MASMINDO GROUP)",
    "year": "2025",
    "location": "Sulawesi",
    "scope": "Design Transmission line distribution 20 kV"
  },
  {
    "category": "Power T&D",
    "sector": "Power T&D",
    "project": "GIS 150kV STT IRIS 2 - CIVIL CONSULTANT",
    "client": "PT Elsewedy Electric Indonesia",
    "year": "2025",
    "location": "Cikarang",
    "scope": "Detail design Engineering Data Center and utility building structure"
  },
  {
    "category": "Power T&D",
    "sector": "Power T&D",
    "project": "GIS 150kV STT IRIS 1 - CIVIL CONSULTANT",
    "client": "PT Elsewedy Electric Indonesia",
    "year": "2024",
    "location": "Cikarang",
    "scope": "Detail design Engineering Data Center and utility building structure"
  },
  {
    "category": "Power T&D",
    "sector": "Power T&D",
    "project": "Design for 220 k V and 110 k V Substation in Rwanda.",
    "client": "PT. Permata Prima Enjiniring Elektrika",
    "year": "2025",
    "location": "RWANDA AFRICA",
    "scope": "001/PPEE-TRICON/202504/EL - Design for 220 k V and 110 k V Substation in Rwanda."
  },
  {
    "category": "Power T&D",
    "sector": "Power T&D",
    "project": "Detail Design Engineering Main Shaft Storage Building",
    "client": "PT. SBE (Barito Wind Energy)",
    "year": "2024",
    "location": "South Sulawesi",
    "scope": "Detail Design Engineering Main Shaft Storage Building"
  },
  {
    "category": "Power T&D",
    "sector": "Power T&D",
    "project": "Re-Route 150 kV Transmission Line",
    "client": "PT. KE/PEC",
    "year": "2024",
    "location": "Cilegon",
    "scope": "Detail Design Engineering"
  },
  {
    "category": "Power T&D",
    "sector": "Power T&D",
    "project": "150 kV Substation Sambutan",
    "client": "PT. PLN/PEC",
    "year": "2024",
    "location": "NTB",
    "scope": "Detail Design Engineering"
  },
  {
    "category": "Power T&D",
    "sector": "Power T&D",
    "project": "150 kV Substation Maloy",
    "client": "PT. PLN/PEC",
    "year": "2024",
    "location": "NTB",
    "scope": "Detail Design Engineering"
  },
  {
    "category": "Power T&D",
    "sector": "Power T&D",
    "project": "150 kV Transmission Line Study for Transmission Line Re-Routing",
    "client": "PT. Waskita Karya (PLN Persero)",
    "year": "2024",
    "location": "Kalimantan",
    "scope": "Visibility Study for Transmission Line Re-Routing"
  },
  {
    "category": "Power T&D",
    "sector": "Power T&D",
    "project": "150 kV Transmission Line Study (Re-Routing)",
    "client": "PT. PLN Sariksa",
    "year": "2024",
    "location": "Lampung",
    "scope": "Engineering Study"
  },
  {
    "category": "Power T&D",
    "sector": "Power T&D",
    "project": "Design Engineering Work for Main Shaft Storage Building for O&M Facility",
    "client": "UPC Sidrap Bayu Energy",
    "year": "2024",
    "location": "Sidrap/Sulawesi",
    "scope": "Detail Design Engineering Main Shaft Storage Building"
  },
  {
    "category": "Power T&D",
    "sector": "Power T&D",
    "project": "Design Warehouse and Mechanical, Civil, and Electrical",
    "client": "UPC Sidrap Bayu Energy",
    "year": "2024",
    "location": "Sidrap/Sulawesi",
    "scope": "Design Warehouse and Mechanical, Civil, and Electrical"
  },
  {
    "category": "Power T&D",
    "sector": "Power T&D",
    "project": "Electrical 150 kV Substation",
    "client": "PT. MMP",
    "year": "2023",
    "location": "Balikpapan east Kalimantan",
    "scope": "Design & engineering site supervision and SLO"
  },
  {
    "category": "Power T&D",
    "sector": "Power T&D",
    "project": "Transmission 20 kV Sulawesi Selatan",
    "client": "PT. REKADAYA ELECTRIKA CONSULTAN (REC)",
    "year": "2022",
    "location": "Site belopo luwu selatan",
    "scope": "Measurement and Soil Testing Work for 20 kV Transmission in South Sulawesi"
  },
  {
    "category": "Power T&D",
    "sector": "Power T&D",
    "project": "Transmission Line Study Angle Direction",
    "client": "PT. Truba Bara Banyu Enim",
    "year": "2023",
    "location": "East Sumatra",
    "scope": "Detail Design Engineering"
  },
  {
    "category": "Power T&D",
    "sector": "Power T&D",
    "project": "Suply Battery Rectifier",
    "client": "UPC SBE",
    "year": "2023",
    "location": "South Sulawesi",
    "scope": "Material Supply"
  },
  {
    "category": "Power T&D",
    "sector": "Power T&D",
    "project": "Inventarisasi PLN",
    "client": "PT. REKADAYA ELECTRIKA CONSULTAN (REC)",
    "year": "2022",
    "location": "Province Banten & Jawa Timur",
    "scope": "Survey and sosialication and execution land acquisition"
  },
  {
    "category": "Power T&D",
    "sector": "Power T&D",
    "project": "20 kV Distribution Line Luwuk-Belopa",
    "client": "Reconsult/Masmindo",
    "year": "2022",
    "location": "Luwuk, Sulawesi",
    "scope": "Survey, Soil Investigation, DED"
  },
  {
    "category": "Power T&D",
    "sector": "Power T&D",
    "project": "150 kV Transmission Line Study for Transmission Line Re-Routing",
    "client": "PT. TBBE (PLN PERSERO)",
    "year": "2022",
    "location": "Sumatra",
    "scope": "Visibility Study for Transmission Line Re-Routing"
  },
  {
    "category": "Power T&D",
    "sector": "Power T&D",
    "project": "150 kV Substation Kairatu, Namlea, Mataram Construction Project",
    "client": "Indokomas BP (Omexom)",
    "year": "2018",
    "location": "Kairatu, Namlea, Mataram",
    "scope": "Civil/Structure Detail Design"
  },
  {
    "category": "Power T&D",
    "sector": "Power T&D",
    "project": "IBRD Power Transformer Bay Construction",
    "client": "CG Power",
    "year": "2018",
    "location": "All Around Indonesia",
    "scope": "Civil/Structure Detail Design"
  },
  {
    "category": "Power T&D",
    "sector": "Power T&D",
    "project": "150 Kv Transmission Line Cibatu-THK",
    "client": "PT. PLN/QDC Tech",
    "year": "2018",
    "location": "West Java",
    "scope": "Detail Design Engineering"
  },
  {
    "category": "Power T&D",
    "sector": "Power T&D",
    "project": "150 kV Balingasag Substation",
    "client": "CG Power/Toshiba",
    "year": "2016",
    "location": "Philippines",
    "scope": "Detail Design Engineering"
  },
  {
    "category": "Power T&D",
    "sector": "Power T&D",
    "project": "500 kV Substation Bandung Selatan",
    "client": "PT. PLN/Multifab",
    "year": "2015",
    "location": "West Java",
    "scope": "Detail Design Engineering"
  },
  {
    "category": "Amdal",
    "sector": "AMDAL (ESIA), LARAP",
    "project": "Saguling Floating Solar Pv Park 60 , Land Acquisition Services",
    "client": "PT Indo ACWA Tenaga Saguling (ACWA POWER & PLN)",
    "year": "Oct 2025 - Present",
    "location": "Saguling, Indonesia",
    "scope": "AMDAL (ESIA), LARAP"
  },
  {
    "category": "Amdal",
    "sector": "AMDAL (ESIA), LARAP",
    "project": "Engineering Services for Peusangan 1 & 2 Hydroelectric Power Plant Construction Project",
    "client": "PT. Perusahaan Listrik Negara (PLN) Persero",
    "year": "Aug 2012 - July 2018",
    "location": "Aceh, Indonesia",
    "scope": "AMDAL (ESIA), LARAP"
  },
  {
    "category": "Amdal",
    "sector": "UKL/UPL (EIA)",
    "project": "Feasibility Study, Basic Design and Detail Design Nua MHPP (2x4.4 MW)",
    "client": "PT. Perusahaan Listrik Negara (PLN) Persero",
    "year": "Aug 2011 – Sept 2012",
    "location": "Central Maluku, Indonesia",
    "scope": "UKL/UPL (EIA)"
  },
  {
    "category": "Amdal",
    "sector": "AMDAL (ESIA), LARAP",
    "project": "Engineering Services and Contruction Supervision for Asahan 3 Hydroelectric Power Plant Construction Project (84 MW)",
    "client": "PT. Perusahaan Listrik Negara (PLN) Persero",
    "year": "Aug 2010 – July 2011",
    "location": "North Sumatera, Indonesia",
    "scope": "AMDAL (ESIA), LARAP"
  },
  {
    "category": "Amdal",
    "sector": "AMDAL (ESIA), LARAP",
    "project": "Engineering Procurement Construction Supervision of Balla Mini Hydroelectric Power Plant Project (2x 500 kW) Mamasa District, West Sulawesi.",
    "client": "PT. Perusahaan Listrik Negara (PLN) Persero",
    "year": "Jan. 2010 – July 2010",
    "location": "West Sulawesi, Indonesia",
    "scope": "AMDAL (ESIA), LARAP"
  },
  {
    "category": "Amdal",
    "sector": "AMDAL (ESIA), LARAP",
    "project": "Engineering Procurement Construction Supervision of Kalukku Mini Hydroelectric Power Plant Project (2x1000 kW) Mamuju District, West Sulawesi",
    "client": "PT. Perusahaan Listrik Negara (PLN) Persero",
    "year": "Jan. 2009 – Dec. 2009",
    "location": "West Sulawesi, Indonesia",
    "scope": "AMDAL (ESIA), LARAP"
  },
  {
    "category": "Amdal",
    "sector": "AMDAL (ESIA), LARAP",
    "project": "Engineering Procurement Construction Supervision of Budong-Budong Mini Hydroelectric Power Plant Project (2x2000 kW) Mamasa District, West Sulawesi.",
    "client": "PT. Perusahaan Listrik Negara (PLN) Persero",
    "year": "Jan. 2007– Nov. 2007",
    "location": "West Sulawesi, Indonesia",
    "scope": "AMDAL (ESIA), LARAP"
  },
  {
    "category": "Amdal",
    "sector": "AMDAL (ESIA), LARAP",
    "project": "Engineering Services and Detailed Engineering Design for Mongango, Lobong, Genyem, and Prafi Mini Hydroelectric Power Plant.",
    "client": "PT. Perusahaan Listrik Negara (PLN) Persero",
    "year": "July 2006 – Dec. 2006",
    "location": "North Sulawesi, Indonesia",
    "scope": "AMDAL (ESIA), LARAP"
  },
  {
    "category": "Amdal",
    "sector": "AMDAL (ESIA), LARAP",
    "project": "Engineering Services and Construction Supervision of Jatigede Multi Purpose Dam and Hydropower Project (150 MW), West Java).",
    "client": "PT. Perusahaan Listrik Negara (PLN) Persero",
    "year": "Jan. 2006 – June 2006",
    "location": "West Java, Indonesia",
    "scope": "AMDAL (ESIA), LARAP"
  },
  {
    "category": "Amdal",
    "sector": "AMDAL (ESIA), LARAP",
    "project": "Engineering Procurement Construction Supervision of PB Sudirman (2x61,5 MW) HEPP Large Dam in Banjarnegara District, Central Java.",
    "client": "PT. Perusahaan Listrik Negara (PLN) Persero",
    "year": "April 2005 – Dec. 2005",
    "location": "Central Java, Indonesia",
    "scope": "AMDAL (ESIA), LARAP"
  },
  {
    "category": "Amdal",
    "sector": "UKL/UPL (EIA)",
    "project": "Design Detailed Stage of Dam, Sabo Dam and Rivers under Water Resources Existing Facilities Rehabilitation and Capacity Improvement Project, Surabaya – East Java, JBIC Loan IP-510",
    "client": "PT. Perusahaan Listrik Negara (PLN) Persero",
    "year": "Dec. 2004 – March 2005",
    "location": "East Java, Indonesia",
    "scope": "UKL/UPL (EIA)"
  },
  {
    "category": "Amdal",
    "sector": "UKL/UPL (EIA)",
    "project": "Environmental Impact Assessment for Rajamandala HEPP (47 MW), West Java",
    "client": "PT. Perusahaan Listrik Negara (PLN) Persero",
    "year": "July 2003 – Sept. 2004",
    "location": "West Java, Indonesia",
    "scope": "UKL/UPL (EIA)"
  },
  {
    "category": "Amdal",
    "sector": "UKL/UPL (EIA)",
    "project": "Engineering Services for Detailed Engineering Design Services and Engineering Design & Construction Supervision of Bili-Bili Hydroelectric Power Plant (17,7 MW), South Sulawesi.",
    "client": "PT. Perusahaan Listrik Negara (PLN) Persero",
    "year": "Jan. 2002 – June 2003",
    "location": "South Sulawesi, Indonesia",
    "scope": "UKL/UPL (EIA)"
  },
  {
    "category": "Amdal",
    "sector": "Environmental Survey",
    "project": "Topographic Survey, Geological Investigation, Hydrological and Environmental Survey and Hydro Inventory and Pre-Feasibility Studies for Masang-3 HEPP (2x90 MW), West Sumatera.",
    "client": "PT. Perusahaan Listrik Negara (PLN) Persero",
    "year": "Jan. 2000 – Dec. 2000",
    "location": "West Sumatera, Indonesia",
    "scope": "Environmental Survey"
  },
  {
    "category": "Telco",
    "sector": "Telecomunication",
    "project": "Detail Design Engineering Data Center and Utility Building Structure",
    "client": "PT. Transelar Intimitra (Telkom)",
    "year": "2024",
    "location": "Manado",
    "scope": "Detail Design Engineering data center and utility building structure"
  },
  {
    "category": "Telco",
    "sector": "Telecomunication",
    "project": "Detail Design Engineering Data Center and Utility Building Structure",
    "client": "PT. Transelar Intimitra (Telkom)",
    "year": "2024",
    "location": "Pugeran, Yogyakarta",
    "scope": "Detail Design Engineering data center and utility building structure for data center building extension"
  },
  {
    "category": "Telco",
    "sector": "Telecomunication",
    "project": "Detail Design Engineering Data Center and Utility Building Structure",
    "client": "PT. Transelar Intimitra (Telkom)",
    "year": "2024",
    "location": "Malang",
    "scope": "Detail Design Engineering data center and utility building structure for data center building extension"
  },
  {
    "category": "Telco",
    "sector": "Telecomunication",
    "project": "Detail Design Engineering Data Center and Utility Building Structure",
    "client": "PT. Transelar Intimitra (Telkom)",
    "year": "2024",
    "location": "Batu Ampar",
    "scope": "Detail Design Engineering data center and utility building structure for data center building extension"
  },
  {
    "category": "Telco",
    "sector": "Telecomunication",
    "project": "Roof Top Telecommunication Tower Survey and Design Assessment (DKI Jakarta)",
    "client": "Cura/DSS",
    "year": "2022",
    "location": "DKI Jakarta",
    "scope": "Detail Survey & Design Assessment"
  },
  {
    "category": "Telco",
    "sector": "Telecomunication",
    "project": "Green Field Telecommunication Tower Survey and Design Assessment (Jakarta and West Java Area)",
    "client": "Tritech/Telkomsel",
    "year": "2016",
    "location": "West Java",
    "scope": "Survey & Design Assessment"
  },
  {
    "category": "Telco",
    "sector": "Telecomunication",
    "project": "OSP and ISP Network System for MSC",
    "client": "Bakri Telkom",
    "year": "2010",
    "location": "Manado",
    "scope": "Engineering"
  },
  {
    "category": "Other",
    "sector": "POWER PLANT (PLTB)",
    "project": "ASSESSMENT PROTECTIONS STRUCTURE FOUNDATION WIND TURBINE",
    "client": "SIDRAP BAYU ENERGY",
    "year": "2026",
    "location": "2PG6+P4V, Mattirotasi, Watang Pulu, Sidenreng Rappang Regency, South Sulawesi 91661",
    "scope": "Maintenance of Steel and Concrete Structures for Wind Turbine Infrastructure at PLTB Sidrap – Sidrap Bayu Energy"
  },
  {
    "category": "Other",
    "sector": "POWER PLANT (PLTB)",
    "project": "ASSESEMENT AND MAINTENANCE BATTERY",
    "client": "UPC SIDRAP BAYU ENERGY",
    "year": "2025",
    "location": "2PG6+P4V, Mattirotasi, Watang Pulu, Sidenreng Rappang Regency, South Sulawesi 91661",
    "scope": "ASSESEMENT AND MAINTENANCE BATTERY"
  },
  {
    "category": "Other",
    "sector": "POWER PLANT (PLTB)",
    "project": "Warehouse Facility for Wind Turbine Blade Maintenance and Storage",
    "client": "UPC SIDRAP BAYU ENERGY",
    "year": "2025",
    "location": "2PG6+P4V, Mattirotasi, Watang Pulu, Sidenreng Rappang Regency, South Sulawesi 91661",
    "scope": "Detail Design And Contructions"
  },
  {
    "category": "Other",
    "sector": "POWER PLANT (PLTB)",
    "project": "MAINTENANCE WIND TURBINE",
    "client": "SIDRAP BAYU ENERGY",
    "year": "2024",
    "location": "2PG6+P4V, Mattirotasi, Watang Pulu, Sidenreng Rappang Regency, South Sulawesi 91661",
    "scope": "NGR Maintenance Services for Wind Turbine Facilities at Sidrap Bayu Energy Wind Farm (PLTB Sidrap)"
  },
  {
    "category": "Other",
    "sector": "POWER PLANT (PLTB)",
    "project": "MAINTENANCE WIND TURBINE",
    "client": "SIDRAP BAYU ENERGY",
    "year": "2024",
    "location": "2PG6+P4V, Mattirotasi, Watang Pulu, Sidenreng Rappang Regency, South Sulawesi 91661",
    "scope": "SPARE PART COVER BRUSH FOR LIGHTING HAMMER PROTECTIONS"
  },
  {
    "category": "Other",
    "sector": "Ministry of Transportation Republic of Indonesia.",
    "project": "Operating & Maintenance ELECTRICAL",
    "client": "MINISTRY OF TRANSPORTATION REPUBLIC Of INDONESIA",
    "year": "2024",
    "location": "Jl. Raya Setu No.Km 3, RW.5, Cibuntu, Kec. Cibitung, Kabupaten Bekasi, Jawa Barat 17520",
    "scope": "Jasa Konsultan, PAKET PEKERJAAN : Pengadaan Review DED Revitalisasi Sistem Kelistrikan BPLJKSB"
  },
  {
    "category": "Other",
    "sector": "PORT",
    "project": "MAINTENANCE PROTECTIONS PORT",
    "client": "PT PORT ENGINEERING CSCEC INDONESIA",
    "year": "2024 - 2025",
    "location": "PT. LOTTE Chemical Titan Nusantara. Jl. Raya Merak Km. 116 Desa Rawa Arum, Pulomerak, Gerem, Cilegon, Kota Cilegon, Banten 42436",
    "scope": "MAINTENANCE PROTECTIONS PORT"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "ASSESSMENT SOLAR VP",
    "client": "PUPR",
    "year": "2025",
    "location": "Jl. Pattimura No.35 2, Kota Jakarta Selatan",
    "scope": "Structur Building Assesment"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "ASSESSMENT SOLAR VP",
    "client": "KEHUTANAN",
    "year": "2025",
    "location": "Jl. Pejompongan Raya Jakarta Pusat",
    "scope": "Structur Building Assesment"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Perkuatan Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. CS2 Pola Sehat",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2024",
    "location": "Maros, South Sulawesi",
    "scope": "PT. CS2 Pola Sehat"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Perkuatan Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Bungasari",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2024",
    "location": "Makassar, South Sulawesi",
    "scope": "PT. Bungasari"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Perkuatan Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Samator Indo Gas",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2024",
    "location": "Batang, Central Java",
    "scope": "PT. SIG"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Perkuatan Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Bakrie Pipe Industries - II",
    "client": "PT. Bakrie Power",
    "year": "2024",
    "location": "Bekasi, West Java",
    "scope": "PT. Bakrie Pipe Industries"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Perkuatan Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Indoceria Plastic & Printing",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2024",
    "location": "Sidoarjo, East Java",
    "scope": "PT. PT. Indoceria Plastic & Printing"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Perkuatan Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Kencar Sukses Investama",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2024",
    "location": "Sidoarjo, East Java",
    "scope": "PT. Kencar Sukses Investama"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Perkuatan Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Sumber Makmur Anugrah",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2024",
    "location": "Temanggung, Central Java",
    "scope": "PT. Sumber Makmur Anugrah"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Perkuatan Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Nusa Prima Logistik",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2024",
    "location": "Surabaya, East Java",
    "scope": "PT. Nusa Prima Logistik"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Perkuatan Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Gajah Angkasa Perkasa",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2023",
    "location": "Bandung, West Java",
    "scope": "PT. Gajah Angkasa Perkasa"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Panverta",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2023",
    "location": "Pandaan, East Java",
    "scope": "PT. Panverta"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Diansari Puri Plastindo",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2023",
    "location": "Sidoarjo, East Java",
    "scope": "PT. Diansari Puri Plastindo"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Gajah Angkasa Perkasa",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2023",
    "location": "Bandung, West Java",
    "scope": "PT. Gajah Angkasa Perkasa"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Gajah Angkasa Perkasa",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2023",
    "location": "Bandung, West Java",
    "scope": "PT. Gajah Angkasa Perkasa"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Arwana Citramulia",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2023",
    "location": "Palembang, South Sumatra",
    "scope": "PT. Arwana Citramulia"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. MC PET",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2023",
    "location": "Banten",
    "scope": "PT. MC PET"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Arwana Citramulia",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2023",
    "location": "Gresik, East Java",
    "scope": "PT. Arwana Citramulia"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Arwana Citramulia",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2023",
    "location": "Tangerang, Banten",
    "scope": "PT. Arwana Citramulia"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Guna Kemas Indah",
    "client": "PT. Utomo Juragan Atap Surya Indonesia",
    "year": "2023",
    "location": "Tangerang, Banten",
    "scope": "PT. Guna Kemas Indah"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Cahaya Putra Asa Ceramics",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2023",
    "location": "Karawang, West Java",
    "scope": "PT. Cahaya Putra Asa Ceramics"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Eratex Djadja",
    "client": "PT. Utomo Deck Metal Works",
    "year": "2023",
    "location": "Probolinggo, East Java",
    "scope": "PT. Eratex Djadja"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Platinum Ceramics Industry",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2023",
    "location": "Bekasi, West Java",
    "scope": "PT. Platinum Ceramics Industry"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Platinum Ceramics Industry",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2023",
    "location": "Karangpilang, East Java",
    "scope": "PT. Platinum Ceramics Industry"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Bhineka Tatamulya",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2023",
    "location": "Pati, Central Java",
    "scope": "PT. DPUM"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Mitra Mulia Makmur",
    "client": "PT. Xurya DayaIndonesia",
    "year": "2023",
    "location": "Nganjuk, East Java",
    "scope": "PT. Mitra Mulia Makmur"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Bina Niaga Multiusaha",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2021",
    "location": "Bekasi, West Java",
    "scope": "PT. Bina Niaga Multiusaha"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Ocean Asia Indonesia",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2021",
    "location": "Banten, West Java",
    "scope": "PT. Ocean Asia Indonesia"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Trigunung Padutama",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2021",
    "location": "Lampung",
    "scope": "PT. Trigunung Padutama"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - Heinze ABC",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2021",
    "location": "Karawang, West Java",
    "scope": "PT. Heinze ABC"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Bhineka Tatamulya Industri",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2023",
    "location": "Bekasi, West Java",
    "scope": "PT. Bhineka Tatamulya Industri"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - Plaza Indonesia",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2022",
    "location": "Jakarta",
    "scope": "Plaza Indonesia"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Jaya Abadi Corak Biskuit",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2022",
    "location": "Surabaya, East Java",
    "scope": "PT. Jaya Abadi Corak Biskuit"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Tata Metal Lestari",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2022",
    "location": "Sadang, West Java",
    "scope": "PT. Tata Metal Lestari"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Serena Indopangan Industri",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2022",
    "location": "Bogor, West Java",
    "scope": "PT. Serena Indopangan Industri"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Kabel Metal Industri",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2022",
    "location": "Jakarta",
    "scope": "PT. Kabel Metal Industri"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Quty Karunia",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2022",
    "location": "Purwakarta, West Java",
    "scope": "PT. Quty Karunia"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Bakrie Pipe Industries",
    "client": "PT. Helio Synar Energi",
    "year": "2022",
    "location": "Bekasi, West Java",
    "scope": "PT. Bakrie Pipe Industries"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Plasindo Lestari",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2022",
    "location": "Jakarta",
    "scope": "PT. Plasindo Lestari"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Pacific Paint",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2022",
    "location": "Tangerang, Banten",
    "scope": "PT. Pacific Paint"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Platinum Ceramics Industry",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2022",
    "location": "Gresik, East Java",
    "scope": "PT. Platinum Ceramics Industry"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - UNICHARM",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2022",
    "location": "Karawang, West Java",
    "scope": "PT. UNICHARM Indonesia"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - Plaza Kenari Mas",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2022",
    "location": "Jakarta",
    "scope": "Plaza Kenari Mas"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - Cleo (AMDK) (8 Lokasi)",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2022",
    "location": "Pulau Jawa",
    "scope": "PT. Sariguna Primatirta"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Gajah Tunggal (Staad Pro)",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2022",
    "location": "Tangerang, Banten",
    "scope": "PT. Gajah Tunggal,Tbk."
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Bumi Mulia Indah Lestari",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2022",
    "location": "Gresik, East Java",
    "scope": "PT. Bumi Mulia Indah Lestari"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - UNICHARM",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2022",
    "location": "Ngoro, East Java",
    "scope": "PT. UNICHARM Indonesia"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - UNICHARM Non Woven",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2022",
    "location": "Ngoro, East Java",
    "scope": "PT. UNICHARM Indonesia Non Woven"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Bumi Mulia Indah Lestari",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2022",
    "location": "Marunda, West Java",
    "scope": "PT. Bumi Mulia Indah Lestari"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Mukti Panel Industri",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2022",
    "location": "Lampung",
    "scope": "PT. Mukti Panel Industri"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - Hotel Santika Banyuwangi",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2022",
    "location": "Banyuwangi",
    "scope": "Hotel Santika"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Braja Mukti Cakra",
    "client": "PT. Bakrie Power",
    "year": "2022",
    "location": "Bekasi, West Java",
    "scope": "PT. Braja Mukti Cakra Citramulia"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Karuniatama Polypack",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2022",
    "location": "Bogor, West Java",
    "scope": "PT. Karuniatama Polypack"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - Aneka Jaya Kendal",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2022",
    "location": "Kendal, Central Java",
    "scope": "Aneka Jaya"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Kobin Keramik Industri",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2022",
    "location": "Ngoro, East Java",
    "scope": "PT. Kobin Keramik Industri"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - RSI Jemursari",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2022",
    "location": "Surabaya, East Java",
    "scope": "RSI Jemursari"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Arwana Citramulia",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2022",
    "location": "Cikande, Banten",
    "scope": "PT. Arwana Citramulia"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Sariguna Primatirta",
    "client": "PT. Utomo Juragan Atap Surya Indonesia",
    "year": "2022",
    "location": "Bojonegoro, Jawa Timur",
    "scope": "PT. Sariguna Primatirta"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Alkindo Mitraraya",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2022",
    "location": "Tangerang, Banten",
    "scope": "PT. Alkindo Mitraraya"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Gajah Tunggal",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2022",
    "location": "Tangerang, Banten",
    "scope": "PT. Gajah Tunggal,Tbk."
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - SANQUA",
    "client": "PT. Solarion",
    "year": "2022",
    "location": "West Java",
    "scope": "PT. Sanqua Multi Internasional"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Beton Elemen Persada",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2021",
    "location": "Bandung, West Java",
    "scope": "PT. Beton Elemen Persada"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. SIMNU",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2021",
    "location": "Bandung, West Java",
    "scope": "PT. SIMNU"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Prima Sejati Sejahtera",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2021",
    "location": "Boyolali, Central Java",
    "scope": "PT. Prima Sejati Sejahtera"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "ASSESEMENT SOLAR VP",
    "client": "HOTEL HERITAGE",
    "year": "2024",
    "location": "Jl. Letjen Suprapto No.1, Jakarta Pusat",
    "scope": "Structur Building Assesment"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "ASSESEMENT SOLAR VP",
    "client": "MALL JAYAPURA",
    "year": "2024",
    "location": "APO, Jl. Samratulangi,, Kota Jayapura, Papua",
    "scope": "Structur Building Assesment"
  },
  {
    "category": "Other",
    "sector": "General Building",
    "project": "Assessment Struktur Bangunan Eksisting untuk Instalasi PV Rooftop - PT. Arwana Citramulia",
    "client": "PT. Xurya Daya Indonesia",
    "year": "2021",
    "location": "Mojokerto, East Java",
    "scope": "PT. Arwana Citramulia"
  },
  {
    "category": "Other",
    "sector": "MEP",
    "project": "EPC Mechancal electrical Plumbing",
    "client": "PT. CANSPORT INDONESIA",
    "year": "2025",
    "location": "Majalengka Jawa Barat",
    "scope": "EPC MEP"
  },
  {
    "category": "Other",
    "sector": "MEP",
    "project": "Revitalization of Electrical System",
    "client": "BPLJSKB",
    "year": "2024",
    "location": "Bekasi/Jawa Barat",
    "scope": "Supervision Electrical (Construction)"
  },
  {
    "category": "Other",
    "sector": "EPC",
    "project": "Lotte Chemical",
    "client": "PT. PRORT ENGINEERING SCCMS",
    "year": "2024",
    "location": "Cilegon Banten Province 2024-2025",
    "scope": "Services protection pipe for jetty"
  },
  {
    "category": "Other",
    "sector": "SUPPLY",
    "project": "Supply of Emergency Tent 6x12x3.75 (BNPB)",
    "client": "BNPB",
    "year": "2023",
    "location": "Jakarta",
    "scope": "Supply"
  },
  {
    "category": "Other",
    "sector": "Fire Protection",
    "project": "Revitalization of Fire Protection System",
    "client": "PT. PLN",
    "year": "2020",
    "location": "Gandul/Jakarta",
    "scope": "Supply and Install (Construction)"
  },
  {
    "category": "Other",
    "sector": "IT",
    "project": "Thermal Camera and Lightning Protection System",
    "client": "Kemenhut",
    "year": "2020",
    "location": "Kalimantan",
    "scope": "Supply and Install"
  },
  {
    "category": "Other",
    "sector": "Industry Manufacture",
    "project": "Cargill Tuna Plant Manufacture",
    "client": "AGB/Cargill",
    "year": "2019",
    "location": "Manado",
    "scope": "Detail Design Engineering"
  },
  {
    "category": "Other",
    "sector": "Industry Manufacture",
    "project": "Coca-Cola Routine Racking Assessment and Safety Certification",
    "client": "TUV/Coca-Cola",
    "year": "2008",
    "location": "Bogor",
    "scope": "Assessment"
  },
  {
    "category": "Other",
    "sector": "Industry Manufacture",
    "project": "Mercedes IMS Booth Safety Assessment",
    "client": "TUV/Mercedes",
    "year": "2007",
    "location": "Jakarta",
    "scope": "Assessment"
  }
];
