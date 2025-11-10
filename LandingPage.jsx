import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, CheckCircle, User, BookOpen, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function LandingPage() {
  const year = new Date().getFullYear();
  return (
    <div dir="rtl" className="bg-gradient-to-b from-indigo-50 to-white min-h-screen">
      {/* قسم بطولي */}
      <section className="container mx-auto px-4 py-16 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-5xl font-extrabold text-gray-900 mb-4">
          كيف تسأل سؤال المليون دولار
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-xl text-gray-600 max-w-2xl mx-auto">
          اكتشف قوة السؤال الصحيح وغيّر حياتك المهنية والمالية من خلال كتاب يجمع العلم والتجربة.
        </motion.p>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="mt-8 flex justify-center">
          <Button className="px-8 py-3 text-lg">احصل على نسختك الآن</Button>
        </motion.div>
      </section>

      {/* لماذا هذا الكتاب؟ */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">لماذا هذا الكتاب؟</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="shadow-md">
            <CardHeader className="flex items-center justify-between">
              <Lightbulb className="w-8 h-8 text-indigo-600" />
              <CardTitle className="text-lg font-semibold">إلهام جديد</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600">
              يزودك هذا الكتاب بأفكار وأساليب جديدة لرؤية الفرص حولك عبر قوة السؤال.
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardHeader className="flex items-center justify-between">
              <CheckCircle className="w-8 h-8 text-indigo-600" />
              <CardTitle className="text-lg font-semibold">خطوات عملية</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600">
              يقدم لك إطاراً عملياً لصياغة الأسئلة وتحويلها إلى خطط قابلة للتنفيذ.
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardHeader className="flex items-center justify-between">
              <BookOpen className="w-8 h-8 text-indigo-600" />
              <CardTitle className="text-lg font-semibold">أمثلة حقيقية</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600">
              يحتوي على قصص لأشخاص استخدموا هذه الأسئلة لتحقيق نتائج مذهلة.
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardHeader className="flex items-center justify-between">
              <User className="w-8 h-8 text-indigo-600" />
              <CardTitle className="text-lg font-semibold">لجميع الفئات</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600">
              سواء كنت رائد أعمال أو موظف أو طالب، ستجد في هذا الكتاب ما يساعدك.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ما ستتعلمه */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">ما الذي ستتعلمه؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4 rtl:space-x-reverse">
              <CheckCircle className="w-6 h-6 mt-1 text-indigo-600" />
              <p className="text-gray-600 text-lg">اختيار الأسئلة التي تكشف فرصاً مخفية.</p>
            </div>
            <div className="flex items-start space-x-4 rtl:space-x-reverse">
              <CheckCircle className="w-6 h-6 mt-1 text-indigo-600" />
              <p className="text-gray-600 text-lg">التغلب على الخوف من طرح الأسئلة الكبيرة.</p>
            </div>
            <div className="flex items-start space-x-4 rtl:space-x-reverse">
              <CheckCircle className="w-6 h-6 mt-1 text-indigo-600" />
              <p className="text-gray-600 text-lg">تحويل الأسئلة إلى أفكار قابلة للتنفيذ.</p>
            </div>
            <div className="flex items-start space-x-4 rtl:space-x-reverse">
              <CheckCircle className="w-6 h-6 mt-1 text-indigo-600" />
              <p className="text-gray-600 text-lg">أمثلة واقعية لأسئلة حققت نتائج مذهلة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* آراء القراء */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">آراء القراء</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-md">
            <CardContent>
              <p className="text-gray-600">“لم أكن أتصور أن سؤالًا واحدًا يمكن أن يغيّر مساري! ساعدني الكتاب على التفكير بعمق واتخاذ قرارات أفضل.”</p>
              <div className="mt-4 flex items-center space-x-3 rtl:space-x-reverse">
                <Star className="w-5 h-5 text-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-700 ml-2 rtl:ml-0 rtl:mr-2">سلمى – رائدة أعمال</span>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent>
              <p className="text-gray-600">“كتاب يمنحك منظوراً جديداً حول التفكير والأسئلة. أعاد تشكيل طريقة طرحي للأسئلة في العمل والحياة.”</p>
              <div className="mt-4 flex items-center space-x-3 rtl:space-x-reverse">
                <Star className="w-5 h-5 text-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500" />
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-700 ml-2 rtl:ml-0 rtl:mr-2">أحمد – مدرب أعمال</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* دعوة للشراء */}
      <section className="bg-indigo-600 py-12">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">احجز نسختك الآن</h2>
          <p className="text-lg mb-6">انضم إلى آلاف القراء الذين غيّروا حياتهم من خلال قوة السؤال.</p>
          <Button variant="secondary" className="px-10 py-3 text-lg bg-white text-indigo-600 hover:bg-gray-100">اشترِ الكتاب اليوم</Button>
          <p className="text-sm mt-4">ضمان استعادة الأموال خلال 7 أيام إذا لم تكن راضياً</p>
        </div>
      </section>

      {/* تذييل */}
      <footer className="container mx-auto px-4 py-8 text-center">
        <p className="text-gray-500 text-sm">© {year} جميع الحقوق محفوظة - كيف تسأل سؤال المليون دولار</p>
      </footer>
    </div>
  );
}
