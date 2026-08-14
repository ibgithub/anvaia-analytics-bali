# CPI Analytics Web App

Portal analitik perbankan berbasis Machine Learning & AI untuk segmentasi nasabah, prediksi churn, estimasi profitabilitas, dan kampanye retensi personal.

## 📌 Gambaran Proyek

Pipeline analitik CPI terdiri atas 8 proses utama:
- **P1: Churn Prediction** — Prediksi risiko keluar nasabah (skor Churn Index 0–100: Lo / Med / Hi).
- **P2: Customer Profitability** — Estimasi kontribusi finansial 6 bulan ke depan (Lo / Med / Hi).
- **P3: Customer Segmentation** — Pengelompokan demografi & perilaku (K-Means / DBSCAN).
- **P4: CPI Matrix (3×3)** — Penggabungan Churn × Profitability menjadi 9 cluster prioritas.
- **P5: Cluster Prioritization** — Penentuan fokus utama pada **C3 HOT TARGET** (Profit Hi × Churn Hi).
- **P6: Segment Deep-Dive** — Analisis komposisi persona di kuadran prioritas.
- **P7: Segment-Specific Business Strategy** — Strategi Type A (*Non-Product / RM-driven*) & Type B (*Product Offering*).
- **P8: Personalized Recommendation** — Rekomendasi produk berbasis Association Rule Mining (Apriori/FP-Growth/Eclat) & GenAI / LLM.

## 📂 Struktur Repositori

```
CPI/
├── 2. CPI_DSI_Board_Presentation 11 bahasa - UI.pdf  # Paparan slide arsitektur solusi 8 proses (P1-P8)
├── CPI_WebApp_Tahap-01_Spec.md                       # Dokumen spesifikasi fungsional Tahap-01
├── CPI_WebApp_Sitemap.html                           # Sitemap & diagram alur navigasi aplikasi
├── CPI_WebApp_Mockup.html                            # Mockup UI interaktif aplikasi CPI
└── cpi-src/                                          # Source code aplikasi
    ├── backend/
    │   ├── auth-service/                             # Service autentikasi, RBAC & manajemen user
    │   │   └── sql/                                  # Skrip migrasi database SQL (001 - 008)
    │   └── executive-service/                        # Service analitik & executive portfolio
    └── frontend/                                     # Web client (React + Vite + TypeScript + Tailwind)
```

## ⚙️ Persyaratan Sistem

- **Java**: OpenJDK 21
- **Node.js**: v18+ (disarankan v20+)
- **Database**: PostgreSQL 14+ (Nama DB: `cpi`)
- **Build Tools**: Maven 3.9+

## 🚀 Memulai Development

### 1. Setup Database
Buat database `cpi` di PostgreSQL dan jalankan skrip migrasi SQL yang berada di `cpi-src/backend/auth-service/sql/` secara berurutan (`001` s/d `008`).

### 2. Menjalankan Backend Services
* **Auth Service**:
  ```bash
  cd cpi-src/backend/auth-service
  ./mvnw spring-boot:run
  ```
  *(Port: `8081`)*

* **Executive Service**:
  ```bash
  cd cpi-src/backend/executive-service
  ./mvnw spring-boot:run
  ```
  *(Port: `8082`)*

### 3. Menjalankan Frontend
```bash
cd cpi-src/frontend
npm install
npm run dev
```
*(Akses web browser di `http://localhost:5173`)*
