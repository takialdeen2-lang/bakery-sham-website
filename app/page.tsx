'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { ShoppingCart, MapPin, Clock, Phone, Instagram, Facebook, UtensilsCrossed, Wheat, Flame } from "lucide-react";
import { cn } from "@/lib/utils";
import dynamic from 'next/dynamic';
import FloatingItem from "@/components/ui/FloatingItem";

// Dynamically import Scene to avoid SSR issues with Three.js
const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false });

const products = [
  {
    id: 1,
    name: "كعك بالسمسم",
    nameEn: "Sesame Ka'ak",
    description: "كعك مقرمش مغطى بالسمسم المحمص، مثالي مع الشاي.",
    price: "15.00",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "معمول بالفستق",
    nameEn: "Pistachio Maamoul",
    description: "عجينة هشة محشوة بأجود أنواع الفستق الحلبي.",
    price: "25.00",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "خبز التنور",
    nameEn: "Tannour Bread",
    description: "خبز سوري تقليدي يخبز في فرن التنور الحجري.",
    price: "5.00",
    image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "المعمول بالتمر",
    nameEn: "Date Maamoul",
    description: "حلوى تقليدية محشوة بالتمر الطبيعي الفاخر.",
    price: "20.00",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "خبز الصاج",
    nameEn: "Saj Bread",
    description: "خبز رقيق جداً يخبز على الصاج الساخن.",
    price: "6.00",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "فطاير الجبن",
    nameEn: "Cheese Fatayer",
    description: "معجنات محشوة بمزيج من الأجبان السورية والأعشاب.",
    price: "12.00",
    image: "https://images.unsplash.com/photo-1541773311-11600f8b17a4?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div className="min-h-screen font-sans selection:bg-bakery-gold selection:text-white">
      {/* 3D Scene Background */}
      <Scene />

      {/* Floating Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        <FloatingItem className="absolute top-[20%] left-[10%] text-bakery-gold/20" delay={0}>
          <Wheat size={120} />
        </FloatingItem>
        <FloatingItem className="absolute top-[60%] right-[5%] text-bakery-brown/10" delay={1} duration={5}>
          <UtensilsCrossed size={80} />
        </FloatingItem>
        <FloatingItem className="absolute bottom-[10%] left-[15%] text-bakery-olive/10" delay={2} duration={6}>
          <Flame size={100} />
        </FloatingItem>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-bakery-warm/80 backdrop-blur-md border-b border-bakery-brown/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold font-arabic text-bakery-brown">مخبز الشام</div>
          <div className="hidden md:flex items-center gap-8 font-arabic">
            <a href="#hero" className="hover:text-bakery-gold transition-colors">الرئيسية</a>
            <a href="#products" className="hover:text-bakery-gold transition-colors">منتجاتنا</a>
            <a href="#story" className="hover:text-bakery-gold transition-colors">قصتنا</a>
            <a href="#order" className="hover:text-bakery-gold transition-colors">اطلب الآن</a>
          </div>
          <button className="p-2 hover:bg-bakery-brown/5 rounded-full transition-colors relative">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute top-0 right-0 bg-bakery-gold text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
          </button>
        </div>
      </nav>

    <section id="hero" className="relative h-[200vh] flex items-start justify-center overflow-hidden pt-40">
  <div className="absolute inset-0 z-0">
    <Scene />

    {/* Radial Spotlight */}
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
      <div className="w-[60%] h-[60%] bg-gradient-radial from-black/40 via-black/10 to-transparent rounded-full pointer-events-none" />
    </div>
  </div>

  {/* Headline and content */}
  <motion.div 
    style={{ opacity, scale }}
    className="sticky top-40 z-10 text-center px-6 max-w-4xl"
  >
    <motion.h1 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-6xl md:text-9xl font-bold font-arabic mb-8 text-white tracking-tight"
    >
      طعم الشام الأصيل
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      className="text-xl md:text-3xl mb-12 text-white/90 leading-relaxed font-arabic"
    >
      نقدم لكم أشهى المخبوزات السورية التقليدية، محضرة يومياً بأجود المكونات وبوصفات توارثتها الأجيال.
    </motion.p>
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <button className="bg-bakery-brown text-bakery-cream px-12 py-5 rounded-full text-2xl font-arabic hover:bg-bakery-olive transition-all transform hover:scale-105 shadow-2xl hover:shadow-bakery-brown/20">
        اطلب الآن
      </button>
    </motion.div>
  </motion.div>
</section>
      {/* Products Section */}
      <section id="products" className="py-32 px-6 bg-white relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold font-arabic mb-6">منتجاتنا المختارة</h2>
            <div className="w-32 h-1.5 bg-bakery-gold mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -15 }}
                className="group bg-bakery-warm rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-bakery-brown/5"
              >
                <div className="h-72 overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-6 right-6 bg-bakery-gold text-white px-4 py-2 rounded-full text-lg font-bold shadow-lg">
                    {product.price} ل.س
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-3xl font-bold font-arabic mb-3 group-hover:text-bakery-gold transition-colors">{product.name}</h3>
                  <p className="text-bakery-brown/60 mb-8 line-clamp-2 text-lg leading-relaxed">{product.description}</p>
                  <button className="w-full flex items-center justify-center gap-3 bg-white group-hover:bg-bakery-brown group-hover:text-white py-4 rounded-2xl transition-all duration-300 font-arabic text-lg font-bold border border-bakery-brown/10 shadow-sm">
                    <ShoppingCart className="w-6 h-6" />
                    إضافة للسلة
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-32 px-6 bg-bakery-beige/30 relative overflow-hidden z-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop" 
                alt="Bakery Story"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-10 -left-10 bg-bakery-gold p-10 rounded-[2rem] shadow-2xl hidden lg:block"
            >
              <p className="text-white font-arabic text-3xl font-bold">منذ عام ١٩٨٠</p>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold font-arabic mb-10 leading-tight">حكاية عشق للخبز</h2>
            <p className="text-xl text-bakery-brown/80 leading-relaxed mb-8 font-arabic">
              بدأت قصتنا في أزقة دمشق القديمة، حيث كانت رائحة الخبز الطازج تملأ المكان مع كل صباح. نحن عائلة توارثت سر العجينة المثالية جيلاً بعد جيل.
            </p>
            <p className="text-xl text-bakery-brown/80 leading-relaxed mb-12 font-arabic">
              اليوم، ننقل لكم هذه التجربة بكل حب، مستخدمين نفس الطرق التقليدية والمكونات الطبيعية لنضمن لكم طعماً يأخذكم في رحلة إلى قلب الشام.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: Clock, title: "طازج يومياً", desc: "يخبز كل صباح" },
                { icon: MapPin, title: "مكونات طبيعية", desc: "بدون مواد حافظة" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-5 bg-white/50 p-6 rounded-2xl backdrop-blur-sm"
                >
                  <div className="w-16 h-16 bg-bakery-gold/20 rounded-2xl flex items-center justify-center text-bakery-gold">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="font-bold text-xl">{item.title}</p>
                    <p className="text-bakery-brown/60">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Order Form Section */}
      <section id="order" className="py-32 px-6 bg-white relative z-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-bakery-warm p-12 md:p-20 rounded-[4rem] shadow-2xl border border-bakery-brown/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-bakery-gold/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-bakery-olive/5 rounded-full -ml-32 -mb-32 blur-3xl" />
          
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold font-arabic mb-6">اطلب الآن</h2>
              <p className="text-xl text-bakery-brown/60">سنقوم بتوصيل طلبك طازجاً إلى باب منزلك</p>
            </div>
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="block font-arabic mr-4 text-lg font-bold">الاسم الكامل</label>
                  <input type="text" className="w-full px-8 py-5 rounded-2xl bg-white border border-bakery-brown/10 focus:outline-none focus:ring-4 focus:ring-bakery-gold/20 transition-all text-lg" placeholder="أدخل اسمك" />
                </div>
                <div className="space-y-3">
                  <label className="block font-arabic mr-4 text-lg font-bold">رقم الهاتف</label>
                  <input type="tel" className="w-full px-8 py-5 rounded-2xl bg-white border border-bakery-brown/10 focus:outline-none focus:ring-4 focus:ring-bakery-gold/20 transition-all text-lg" placeholder="05xxxxxxxx" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="block font-arabic mr-4 text-lg font-bold">العنوان</label>
                <textarea className="w-full px-8 py-5 rounded-2xl bg-white border border-bakery-brown/10 focus:outline-none focus:ring-4 focus:ring-bakery-gold/20 transition-all h-40 text-lg" placeholder="أدخل عنوان التوصيل بالتفصيل"></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-bakery-brown text-bakery-cream py-6 rounded-2xl text-2xl font-arabic hover:bg-bakery-olive transition-all shadow-2xl shadow-bakery-brown/20"
              >
                تأكيد الطلب
              </motion.button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-bakery-brown text-bakery-cream py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold font-arabic mb-6">مخبز الشام</h3>
            <p className="text-bakery-cream/70 max-w-md leading-relaxed mb-8">
              نحن فخورون بتقديم أفضل المخبوزات السورية في المنطقة، مع الحفاظ على الأصالة والجودة في كل قطعة نخبزها.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-bakery-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-bakery-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-bakery-gold transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold font-arabic mb-6">روابط سريعة</h4>
            <ul className="space-y-4 text-bakery-cream/70">
              <li><a href="#hero" className="hover:text-bakery-gold transition-colors">الرئيسية</a></li>
              <li><a href="#products" className="hover:text-bakery-gold transition-colors">منتجاتنا</a></li>
              <li><a href="#story" className="hover:text-bakery-gold transition-colors">قصتنا</a></li>
              <li><a href="#order" className="hover:text-bakery-gold transition-colors">اطلب الآن</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold font-arabic mb-6">ساعات العمل</h4>
            <ul className="space-y-4 text-bakery-cream/70">
              <li className="flex justify-between"><span>السبت - الخميس:</span> <span>٦ ص - ١٠ م</span></li>
              <li className="flex justify-between"><span>الجمعة:</span> <span>١ م - ١٠ م</span></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-bakery-cream/50 text-sm">
          <p>© ٢٠٢٤ مخبز الشام. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
}
