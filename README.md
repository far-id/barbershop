
# Barbershop

Website booking barbershop untuk tugas mata kuliah Pemrograman Web

##### Desktop View
![desktop](https://github.com/far-id/barbershop/assets/60763063/55126fe1-183c-471b-8732-6359f2f5e009)
##### Mobile View
![mobile](https://github.com/far-id/barbershop/assets/60763063/87a26b6b-2faf-40fb-8dd0-c4ffe68ea35a)

## Installation

Installation & Configuration

buka `cmd` lalu masukkan perintah dibawah satu persatu
```bash
  git clone https://github.com/far-id/barbershop.git
  cd barbershop
  composer Install
```
Copy file `.env.example` lalu rubah namanya menjadi `.env`
Kemudian ketikkan kembali perintah dibawah ke dalam `cmd`
```bash
  php artisan key:generate
  php artisan migrate --seed
  npm install
```
Untuk menjalankan development server bisa dengan menjalankan 2 baris perintah di 2 terminal berbeda
```
  php artisan serve
  npm run dev
```
