# 📇 Dijital Kartvizit — Kullanım Kılavuzu

> Modern, mobil uyumlu bir dijital kartvizit sitesi.  
> React + TypeScript + Vite ile geliştirilmiştir. Vercel'e tek tıkla yayınlanabilir.

---

## 📁 Klasör Yapısı

```
kartvizit/
├── public/
│   ├── favicon.svg          ← Sekme ikonu (isteğe bağlı değiştirin)
│   └── logo.png             ← LOGONUZU BURAYA KOYUN
├── src/
│   ├── components/
│   │   ├── BusinessCard.tsx        ← Ana kartvizit bileşeni
│   │   └── BusinessCard.module.css ← Stil dosyası
│   ├── App.tsx
│   ├── config.ts            ← ⭐ TÜM BİLGİLERİ BURADAN DÜZENLEYİN
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vercel.json
└── vite.config.ts
```

---

## ⚙️ Kurulum ve Çalıştırma

### Gereksinimler
- Node.js 18 veya üzeri → [nodejs.org](https://nodejs.org)
- npm (Node ile birlikte gelir)

### Adımlar

```bash
# 1. Kartvizit klasörüne girin
cd ~/Desktop/claude/kartvizit

# 2. Bağımlılıkları yükleyin
npm install

# 3. Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcınızda `http://localhost:5173` adresine gidin — sitenizi canlı göreceksiniz.

---

## ✏️ Bilgileri Güncelleme

`src/config.ts` dosyasını bir metin editörü (VS Code, Cursor vb.) ile açın ve alanları doldurun:

```ts
export const config = {
  name: 'Adınız Soyadınız',
  title: 'Yazılımcı / Tasarımcı / vb.',
  company: 'Şirket Adı',          // boş bırakabilirsiniz: ''
  website: 'https://www.siteniz.com',
  phone: '+90 555 123 45 67',
  phoneRaw: '905551234567',        // başında + olmadan sadece rakam
  whatsappMessage: 'Merhaba, bilgi almak istiyorum.',
  instagram: 'kullanici_adiniz',   // @ işareti YOK
  email: 'email@siteniz.com',      // boş bırakabilirsiniz: ''
  address: 'Mahalle, İlçe, Şehir',
  mapsUrl: '',                     // Google Maps linki — boşsa adres pasif görünür
  logoSrc: '/logo.png',
  showLogo: true,
}
```

### Google Maps Linki Nasıl Alınır?
1. [maps.google.com](https://maps.google.com) adresinde yerinizi bulun
2. Sağ tık → **"Buraya yol tarifi al"** veya **"Paylaş"** → linki kopyalayın
3. `mapsUrl` alanına yapıştırın

---

## 🖼️ Logo Ekleme

### Dosya Adı ve Konumu
`public/logo.png` olarak kaydedin. Başka bir ad kullanıyorsanız `config.ts` içindeki `logoSrc` alanını güncelleyin.

### Önerilen Logo Özellikleri

| Özellik | Değer |
|---------|-------|
| **Format** | PNG (şeffaf arka plan önerilir) veya SVG |
| **Boyut** | **400 × 400 piksel** |
| **Oran** | 1:1 (kare) |
| **Dosya boyutu** | 200 KB altında |
| **Arka plan** | Şeffaf (transparent) |

> ⚠️ Dikkat: Logo kareye sığdırılarak (`object-fit: contain`) gösterilir, bu nedenle bozulma olmaz. Ancak çok ince veya geniş logolar kenarlarda boşluk bırakabilir.

---

## 🚀 Vercel'e Yayınlama

### Yöntem 1 — Vercel CLI (Terminal ile)

```bash
# 1. Vercel CLI'yi global yükleyin (bir kez yapılır)
npm install -g vercel

# 2. Kartvizit klasörüne gidin
cd ~/Desktop/claude/kartvizit

# 3. Build alın (hata olup olmadığını kontrol etmek için)
npm run build

# 4. Vercel'e yükleyin
vercel

# → İlk kez yüklerken Vercel hesabınıza giriş yapmanız istenir
# → "Set up and deploy?" sorusuna Y (yes) deyin
# → Proje ayarlarını onaylayın (Enter'a basın)
# → Birkaç saniye içinde link alırsınız: https://kartvizit-xxx.vercel.app
```

**Güncellemeler için:**
```bash
vercel --prod
```

---

### Yöntem 2 — GitHub üzerinden (Önerilen)

1. [github.com](https://github.com) adresinde yeni bir **private** repo oluşturun (örn. `kartvizit`)
2. Terminal'de:
   ```bash
   cd ~/Desktop/claude/kartvizit
   git init
   git add .
   git commit -m "ilk yükleme"
   git remote add origin https://github.com/KULLANICI_ADINIZ/kartvizit.git
   git push -u origin main
   ```
3. [vercel.com](https://vercel.com) → **New Project** → GitHub reponuzu seçin
4. Framework: **Vite** otomatik algılanır
5. **Deploy** butonuna tıklayın

✅ Bundan sonra her `git push` yaptığınızda Vercel otomatik olarak günceller.

---

### Yöntem 3 — Vercel Web Arayüzü (Kod bilgisi gerekmez)

1. `npm run build` komutuyla `dist/` klasörünü oluşturun
2. [vercel.com/new](https://vercel.com/new) → **"Deploy without Git"**
3. `dist/` klasörünü sürükleyip bırakın
4. Deploy!

> Bu yöntemde her güncelleme için adımları tekrarlamanız gerekir.

---

## 🌐 Özel Domain Bağlama (İsteğe Bağlı)

1. Vercel dashboard'unuzda projeyi açın
2. **Settings** → **Domains**
3. `www.siteniz.com` yazın → **Add**
4. Domain sağlayıcınızda (GoDaddy, Natro vb.) DNS ayarlarına gidin:
   - **CNAME** kaydı: `www` → `cname.vercel-dns.com`
   - veya **A** kaydı: `@` → `76.76.21.21`
5. DNS yayılması 5–60 dakika sürebilir

---

## 🎨 Renk ve Stil Değişikliği

Renkleri değiştirmek için `src/index.css` dosyasındaki `:root` değişkenlerini düzenleyin:

```css
:root {
  --c-bg: #0e0e0f;          /* Arka plan rengi */
  --c-card: #1c1c1f;        /* Kart rengi */
  --c-accent: #c9a96e;      /* Vurgu rengi (altın) */
  --c-text-primary: #f0ede8; /* Ana metin */
  --c-text-secondary: #8a8680; /* İkincil metin */
}
```

---

## ❓ Sık Sorulan Sorular

**Logo görünmüyor?**  
→ Dosyanın adının tam olarak `logo.png` olduğunu ve `public/` klasöründe olduğunu kontrol edin. `npm run dev` ile test edin.

**WhatsApp açılmıyor?**  
→ `phoneRaw` alanında sadece rakam olduğundan ve başında `90` ile başladığından emin olun. Örnek: `905551234567`

**Adres butonu tıklanmıyor?**  
→ `config.ts` içinde `mapsUrl` alanı boş olduğunda buton pasif görünür. Google Maps linkinizi ekleyin.

**Instagram uygulaması açılmıyor?**  
→ Telefonda Instagram kurulu olmalı. Kurulu değilse otomatik olarak web versiyonu açılır.

**Vercel'de build hatası alıyorum?**  
→ Önce `npm run build` komutunu lokalda çalıştırın. Hata mesajını okuyun. Genellikle TypeScript tipi hatasıdır.

---

## 📦 Kullanılan Teknolojiler

| Teknoloji | Versiyon | Açıklama |
|-----------|----------|----------|
| React | 18 | UI framework |
| TypeScript | 5 | Tip güvenliği |
| Vite | 5 | Hızlı build tool |
| CSS Modules | — | Stil izolasyonu |
| Google Fonts | — | Cormorant Garamond + DM Sans |

---

*Bu proje Claude (Anthropic) tarafından oluşturulmuştur.*
