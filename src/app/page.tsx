"use client";

import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { MenuAccordion } from "@/components/ui/menu-accordion";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";
import { EventGallery } from "@/components/ui/event-gallery";
import Image from "next/image";

const menuAA = [
  "8位起",
  "厚肉元貝",
  "游水大海虾",
  "10頭大連鲍魚",
  "本地大蜆",
  "蜜汁雞中亦",
  "蒜蓉有骨豬扒",
  "孜然雞肉串8串装",
  "黑椒西冷薄牛扒",
  "咖哩尤魚翼",
  "泰式豬頸肉",
  "廚C腸仔",
  "墨魚丸",
  "貢丸",
  "芝士丸",
  "和牛牛丸",
  "玉米",
  "金菇",
  "鮮冬菇",
  "生菜(包食物用)",
  "蒜蓉醬",
  "蜜糖",
  "錫紙",
  "抹手紙",
  "碟",
  "筷子",
  "BBQ夾"
];

const menuBB = [
  "8位起",
  "游水大海虾",
  "聖子皇",
  "10頭大連鲍魚",
  "本地大蜆",
  "土匪雞中亦",
  "蒜香雞扒",
  "馬來沙嗲豬肉串8串装",
  "韓式燒汁牛柳條",
  "咖哩尤魚翼",
  "香草蜜糖金沙骨",
  "廚C腸仔",
  "墨魚丸",
  "龍虾丸",
  "芝士丸",
  "和牛牛丸",
  "玉米",
  "金菇",
  "蕃薯",
  "生菜(包食物用)",
  "蒜蓉醬",
  "蜜糖",
  "錫紙",
  "抹手紙",
  "碟",
  "筷子",
  "BBQ夾"
];

const menuA = [
  "8位起",
  "厚肉元貝",
  "北寄貝",
  "游水大海虾",
  "10頭大連鲍魚",
  "本地大蜆",
  "蒜蓉雞中亦",
  "土匪雞中亦",
  "黑椒有骨豬扒",
  "蜜汁雞扒",
  "孜然雞肉串8串装",
  "馬來沙嗲豬肉串8串装",
  "黑椒牛仔骨",
  "咖哩尤魚翼",
  "香草蜜糖金沙骨",
  "粗红腸",
  "廚C腸仔",
  "墨魚丸",
  "炸魚旦",
  "芝士丸",
  "和牛牛丸",
  "玉米",
  "金菇",
  "茄子",
  "鮮冬菇",
  "生菜(包食物用)",
  "蒜蓉醬",
  "蜜糖",
  "錫紙",
  "抹手紙",
  "碟",
  "筷子",
  "BBQ夾"
];

const testimonialImages = [
  "/images/Testimonials/1.jpg",
  "/images/Testimonials/2.jpg",
  "/images/Testimonials/3.jpg",
  "/images/Testimonials/4.jpg",
  "/images/Testimonials/5.jpg",
  "/images/Testimonials/6.jpg",
  "/images/Testimonials/7.jpg",
  "/images/Testimonials/8.jpg",
  "/images/Testimonials/9.jpg",
  "/images/Testimonials/10.jpg",
];

const allEventImages = Array.from({ length: 33 }, (_, i) => `/images/Event/${i + 1}.jpg`);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
        <Image
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
            alt="BBQ背景"
            fill
            className="object-cover brightness-50"
          priority
        />
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
            香港優質海鮮BBQ到會
          </h1>
          <h2 className="mb-6 text-2xl font-semibold text-yellow-400 md:text-3xl">
            服務全港大型企業及私人派對，提供專業可靠的到會服務
          </h2>
          <p className="mb-8 text-xl text-white md:text-2xl">
            8位起｜專業BBQ師傅上門服務（另洽）
          </p>
          <div className="flex gap-4">
            <WhatsAppButton
              phoneNumber="85259727945"
              message="你好，我想查詢BBQ到會服務詳情"
              className="text-lg font-semibold"
            >
              立即WhatsApp查詢
            </WhatsAppButton>
            <WhatsAppButton
              phoneNumber="85259727945"
              message="你好，我想了解BBQ師傅到會服務"
              className="text-lg font-semibold"
            >
              查詢師傅到會
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            為何選擇我們？
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="overflow-hidden rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 shadow-lg">
              <div className="relative h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="新鮮海鮮"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-4 text-xl font-semibold text-orange-600">
                  優質海鮮食材
                </h3>
                <p className="text-gray-700">
                  嚴選優質元貝、鮑魚、大蝦，品質保證！
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 shadow-lg">
              <div className="relative h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1542528180-a1208c5169a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="BBQ工具"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-4 text-xl font-semibold text-orange-600">
                  懶人至尊享受
                </h3>
                <p className="text-gray-700">
                  由食材、醬料到餐具，我們一手包辦，連蜜糖都幫你準備好！
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 shadow-lg">
              <div className="relative h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="專業廚師"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-4 text-xl font-semibold text-orange-600">
                  師傅上門代烤服務(跟公司套餐)
                </h3>
                <p className="text-gray-700">
                  星级BBQ烤肉達人上門，您只需坐定定等食
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 shadow-lg">
              <div className="relative h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="客戶評價"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-4 text-xl font-semibold text-orange-600">
                  專業信譽
                </h3>
                <p className="text-gray-700">
                  全港多間知名企業，團體及私人派對指定之選，深受他們的支持及信任
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            入門精選套餐
          </h2>
          <p className="mb-12 text-center text-xl text-orange-600">
            限時優惠送贈品
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="overflow-hidden rounded-xl bg-white shadow-xl">
              <div className="relative h-56 w-full">
                <Image
                  src="/images/emerson-vieira-Mq1LDuswX2o-unsplash.jpg"
                  alt="海鮮BBQ餐AA"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 rounded-lg bg-orange-100 px-4 py-2 text-orange-600">
                  人氣No.1
                </div>
                <h3 className="mb-2 text-2xl font-bold">海鮮BBQ餐 AA (8位起)</h3>
                <p className="mb-4 text-3xl font-bold text-orange-600">$288/位</p>
                <ul className="mb-6 space-y-2">
                  <li>✨ 厚肉元貝</li>
                  <li>✨ 游水大蝦</li>
                  <li>✨ 10頭鮑魚</li>
                  <li>✨ 黑椒西冷牛扒</li>
                  <li>✨ 共27款食材及用具</li>
                </ul>
                <MenuAccordion items={menuAA} className="mb-4" />
                <p className="mb-4 text-sm text-gray-600">
                  8位價＝$2,304｜豐富海鮮配料，超值享受！
                </p>
                <WhatsAppButton
                  phoneNumber="85259727945"
                  message="你好，我想訂購海鮮BBQ餐AA（$288/位）"
                  className="w-full"
                >
                  立即WhatsApp查詢
                </WhatsAppButton>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl bg-white shadow-xl">
              <div className="relative h-56 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="海鮮BBQ餐BB"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 rounded-lg bg-orange-100 px-4 py-2 text-orange-600">
                  東南亞風味
                </div>
                <h3 className="mb-2 text-2xl font-bold">海鮮BBQ餐 BB (8位起)</h3>
                <p className="mb-4 text-3xl font-bold text-orange-600">$288/位</p>
                <ul className="mb-6 space-y-2">
                  <li>💥 聖子皇</li>
                  <li>💥 韓式牛柳條</li>
                  <li>💥 金沙骨</li>
                  <li>💥 馬來沙嗲串</li>
                  <li>💥 共27款食材及用具</li>
                </ul>
                <MenuAccordion items={menuBB} className="mb-4" />
                <p className="mb-4 text-sm text-gray-600">
                  8位價＝$2,304｜歡迎查詢專業師傅到會服務！
                </p>
                <WhatsAppButton
                  phoneNumber="85259727945"
                  message="你好，我想訂購海鮮BBQ餐BB（$288/位）"
                  className="w-full"
                >
                  立即WhatsApp查詢
                </WhatsAppButton>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl bg-white shadow-xl">
              <div className="relative h-56 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="海鮮BBQ餐A"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 rounded-lg bg-orange-100 px-4 py-2 text-orange-600">
                  頂配之選
                </div>
                <h3 className="mb-2 text-2xl font-bold">海鮮BBQ餐 A (8位起)</h3>
                <p className="mb-4 text-3xl font-bold text-orange-600">$315/位</p>
                <ul className="mb-6 space-y-2">
                  <li>🌟 北寄貝</li>
                  <li>🌟 雙味雞翼</li>
                  <li>🌟 牛仔骨</li>
                  <li>🌟 32款食材及用具</li>
                  <li>🌟 贈送秘製蒜蓉醬</li>
                </ul>
                <MenuAccordion items={menuA} className="mb-4" />
                <p className="mb-4 text-sm text-gray-600">
                  8位價＝$2,520｜宴客體面之選！
                </p>
                <WhatsAppButton
                  phoneNumber="85259727945"
                  message="你好，我想訂購海鮮BBQ餐A（$315/位）"
                  className="w-full"
                >
                  立即WhatsApp查詢
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons to Order Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            立即下單3大理由
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="overflow-hidden rounded-lg bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-lg">
              <div className="relative h-40 w-full">
                <Image
                  src="/images/3reasons/emerson-vieira-3wzps8KbdCQ-unsplash.jpg"
                  alt="限時優惠 - 豐富烤海鮮"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="mb-4 text-2xl font-bold text-yellow-600">
                  限時優惠
                </h3>
                <p>
                  贈品5選2：長法包/菠蘿/泰式海鮮汁/香茅雞翼(試)/棉花糖
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-lg">
              <div className="relative h-40 w-full">
                <Image
                  src="/images/3reasons/james-kern-bnLqotJKxn4-unsplash.jpg"
                  alt="專業服務 - 廚師專注代烤"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="mb-4 text-2xl font-bold text-yellow-600">
                  專業服務
                </h3>
                <p>一般私人派對必須最遲提前兩天預訂，確保為客人提供最佳服務質素</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-lg">
              <div className="relative h-40 w-full">
                <Image
                  src="/images/3reasons/z-grills-australia-n0zK35d967w-unsplash.jpg"
                  alt="信譽保證 - 品質食材與服務"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="mb-4 text-2xl font-bold text-yellow-600">
                  信譽保證
                </h3>
                <p>商務或員工聚餐首選，我們公司更成為大型企業或團體的長期指定合作夥伴</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - 改用輪播 */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            客戶真實評價
          </h2>
          <TestimonialCarousel imagePaths={testimonialImages} options={{ loop: true }} />
        </div>
      </section>

      {/* Event Photos Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-orange-600 md:text-4xl">
            🔥 精彩活動瞬間回顧 🔥
          </h2>
          <EventGallery imagePaths={allEventImages} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-orange-500 to-red-600 py-16 text-white md:py-24">
        <div className="absolute inset-0">
            <Image
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
            alt="BBQ背景"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">
            立即行動！3步極速下單
          </h2>
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-2xl font-bold">1. 選擇套餐</h3>
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-bold">2. 告訴我們您的需求</h3>
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-bold">3. 坐等美食送上門！</h3>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-xl">
              💬 WhatsApp落單：點擊下方按鈕，專人即時回覆！
            </p>
          </div>
          <div className="mt-8">
            <WhatsAppButton
              phoneNumber="85259727945"
              message="你好，我想訂購BBQ到會"
              className="text-lg font-semibold shadow-xl"
            >
              立即WhatsApp查詢
            </WhatsAppButton>
          </div>
          <p className="mt-8 text-sm">
            ⚠️ 注意：請提前至少兩天預訂，以確保食材新鮮度及服務質素
          </p>
        </div>
      </section>

      {/* More Options Section */}
      <section className="bg-gray-100 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">
            需要更多選擇或大型宴會方案？
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            瀏覽我們的官方網站，探索更多套餐選項、自選食材以及為大型企業和團體量身定制的專業到會服務。
          </p>
          <a
            href="https://tmrseafoodbbq.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-orange-500 px-8 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            瀏覽官方網站
          </a>
        </div>
      </section>

      </main>
  );
}
