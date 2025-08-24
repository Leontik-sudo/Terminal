import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="text-center py-20 px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Запусти онлайн-бизнес за 24 часа
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Готовые автоворонки + AI-шаблоны + мини-курс = твоя система заработка, 
          которая работает бесконечно.
        </p>
        <Button size="lg" className="rounded-2xl px-8 py-6 text-lg shadow-xl">
          Получить доступ — 3 990 ₽
        </Button>
      </section>

      {/* What’s Inside */}
      <section className="py-16 px-6 bg-gray-800/50">
        <h2 className="text-3xl font-bold text-center mb-12">Что внутри</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Готовые автоворонки (лендинги + боты)",
            "100+ AI-промптов для рекламы и продаж",
            "Мини-курс по запуску и масштабированию",
            "500+ шаблонов для Canva и MidJourney",
            "Закрытый чат поддержки и комьюнити",
            "Бонус: инструкция по рекламе в TikTok/Telegram"
          ].map((item, idx) => (
            <Card key={idx} className="bg-gray-900 border-gray-700">
              <CardContent className="p-6 flex items-start space-x-4">
                <CheckCircle className="text-green-400 w-6 h-6" />
                <p>{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* For Whom */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Для кого продукт</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Новички, которые хотят заработать онлайн",
            "Владельцы малого бизнеса",
            "Фрилансеры и SMM-специалисты"
          ].map((aud, idx) => (
            <Card key={idx} className="bg-gray-900 border-gray-700">
              <CardContent className="p-6 text-center text-lg">{aud}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-indigo-600 to-purple-700">
        <h2 className="text-4xl font-bold mb-6">Начни сегодня</h2>
        <p className="text-lg text-gray-200 mb-8">
          Получи полный комплект "AI Money Systems" и запусти систему заработка уже завтра.
        </p>
        <Button size="lg" variant="secondary" className="rounded-2xl px-10 py-6 text-lg shadow-xl">
          Забрать доступ — 3 990 ₽
        </Button>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm bg-black">
        © 2025 AI Money Systems. Все права защищены.
      </footer>
    </div>
  );
}
