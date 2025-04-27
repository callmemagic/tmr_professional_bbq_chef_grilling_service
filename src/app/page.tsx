"use client";

import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { MenuAccordion } from "@/components/ui/menu-accordion";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";
import { EventGallery } from "@/components/ui/event-gallery";
import { CountdownTimer } from "@/components/ui/countdown-timer";
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

const menuC = [
  "8位起",
  "厚肉元貝 8只",
  "北寄貝 8只",
  "游水大海虾 8只",
  "聖子皇 8只",
  "10頭大連鲍魚 8只",
  "本地大蜆 1斤",
  "土匪雞中亦 1磅",
  "蜜汁雞中亦 1磅",
  "香茅有骨豬扒 1磅",
  "蒜香雞扒 1磅",
  "馬來沙嗲豬肉串8串装 1磅",
  "韓式燒汁牛柳條 1磅",
  "咖哩尤魚翼 1磅",
  "泰式豬頸肉 1磅",
  "粗红腸 1條",
  "廚C腸仔 2包",
  "墨魚丸 0.5磅",
  "炸魚旦 0.5磅",
  "芝士丸 0.5磅",
  "和牛牛丸 0.5磅",
  "玉米 3支",
  "金菇 2包",
  "茄子 2條",
  "鮮冬菇 2份",
  "生菜(包食物用) 1斤",
  "蒜蓉醬 1",
  "蜜糖 1",
  "錫紙 1",
  "抹手紙 1",
  "碟 16只",
  "筷子 16對",
  "BBQ夾 2支"
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
      {/* Countdown Timer */}
      <CountdownTimer />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full pt-16">
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
            專業燒烤師傅 · 全程代烤服務
          </h1>
          <h2 className="mb-6 text-2xl font-semibold text-yellow-400 md:text-3xl">
            坐定定享受五星級烤海鮮盛宴 · 無須動手
          </h2>
          <p className="mb-4 text-xl text-white md:text-2xl">
            資深BBQ師傅到場烹調｜新鮮海鮮｜無味精
          </p>
          <p className="mb-4 text-xl text-white md:text-2xl">
            8位套餐 HKD 4,480｜<span className="text-yellow-400 font-semibold">即日登記減$100！</span>
          </p>
          <p className="mb-8 text-xl font-bold text-red-400 bg-black bg-opacity-50 px-4 py-2 rounded-full md:text-2xl">
            ⚠️ 每日限兩個名額 ⚠️
          </p>
          <div className="flex gap-4">
            <WhatsAppButton
              phoneNumber="85259727945"
              message="你好，我想了解專業燒烤師傅全程代烤套餐（8位｜HKD 4,480），想確認今日是否還有名額"
              className="text-lg font-semibold"
            >
              立即查詢代烤服務
            </WhatsAppButton>
            <WhatsAppButton
              phoneNumber="85259727945"
              message="你好，我想了解BBQ師傅到會服務的可用日期，每日限兩個名額是否已滿？"
              className="text-lg font-semibold"
            >
              查詢可用日期
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Pain Points Section - 現在放在前面 */}
      <section className="bg-gradient-to-r from-orange-50 to-yellow-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-6 text-center text-3xl font-bold text-orange-700 md:text-4xl">
            告別自己動手的燒烤煩惱，享受專業師傅代烤服務
          </h2>
          <p className="mb-12 text-center text-lg text-orange-600 md:text-xl">
            讓專業BBQ師傅處理所有燒烤工作，您只需與親友輕鬆享用美食！
          </p>
          
          <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-12">
            {/* 痛點1 */}
            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">約齊人搞BBQ好頭痛，一個人買嘢更加辛苦</h3>
                <p className="text-gray-600">搞BBQ要約齊人已經好難，仲要一個人周圍去街市買海鮮、超市買肉類、雜貨舖買工具，又要自己準備醬料同餐具，一個人根本拎唔哂咁多嘢！我們一站式送齊晒所有食材餐具，等你專心約人就得！</p>
              </div>
            </div>
            
            {/* 痛點2 */}
            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">海鮮處理好麻煩，買返嚟仲要自己洗過</h3>
                <p className="text-gray-600">買海鮮最煩就係要處理內臟，有時買返嚟發現未洗乾淨，又要自己花時間重新洗過，好嘥時間。我哋嘅海鮮全部經過專業處理，乾淨衛生，拎到即刻可以用，完全唔使煩惱！</p>
              </div>
            </div>
            
            {/* 痛點3 */}
            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">想做VIP賓客？BBQ師傅為你效勞</h3>
                <p className="text-gray-600">搞BBQ唔一定要自己成身汗周圍走，等我哋專業師傅上門服務，為你打理一切燒烤工作，等你可以好似VIP咁專心同親朋好友傾偈、影相、玩遊戲！等我哋為你打造一個難忘嘅派對體驗！</p>
              </div>
            </div>
            
            {/* 痛點4 */}
            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">成本計算難，預算經常超支</h3>
                <p className="text-gray-600">自己搞 BBQ 好難計算實際花費，材料買太多會浪費，買太少又唔夠食，最後往往超支。我們套餐價格清晰透明，按人頭收費，無隱藏收費，讓你精準控制預算！</p>
              </div>
            </div>
            
            {/* 行動呼籲 */}
            <div className="md:col-span-2 mt-8 text-center">
              <p className="mb-6 text-lg font-semibold text-orange-700">唔使再煩惱！立即預訂我們的 BBQ 到會，一站式解決所有問題！</p>
              <p className="mb-6 text-lg font-semibold text-orange-700">重新找回與親友相聚的歡樂時光，做真正的主人，暢享無憂的派對時刻！</p>
              <WhatsAppButton
                phoneNumber="85259727945"
                message="你好，我想了解BBQ到會服務，如何解決我搞BBQ嘅煩惱"
                className="inline-block text-lg font-semibold shadow-xl"
              >
                即刻解決我嘅 BBQ 煩惱
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - 現在放在第二位 */}
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

      {/* Service Process Section */}
      <section className="bg-orange-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-4 text-center text-3xl font-bold text-orange-700 md:text-4xl">
            一站式 BBQ 到會體驗，全程無憂
          </h2>
          <p className="mb-16 text-center text-lg text-orange-600 md:text-xl">
            從落單到善後，我們全方位服務，讓您只需享受美食和歡樂時光
          </p>

          <div className="relative">
            {/* 時間軸 */}
            <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-orange-200 md:block"></div>

            {/* 步驟1 */}
            <div className="mb-16 md:mb-24">
              <div className="relative flex flex-col items-center">
                <div className="absolute left-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-orange-500 text-2xl font-bold text-white shadow-lg">
                  1
                </div>
                <div className="mt-8 grid w-full grid-cols-1 gap-12 md:grid-cols-2">
                  <div className="order-2 md:order-1 md:text-right">
                    <h3 className="mb-3 text-2xl font-bold text-orange-600">輕鬆預訂 - 最少30秒快速下單</h3>
                    <p className="text-lg text-gray-600">只需透過 WhatsApp 聯絡我們，專人即刻回覆，根據人數及預算提供建議。最遲提前兩天預訂，特殊日子建議提早一週以確保妥善安排。</p>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="overflow-hidden rounded-lg shadow-lg h-48">
                      <Image
                        src="/images/step-by-step/輕鬆預訂-30秒快速下單.jpg"
                        alt="在手機上預訂BBQ到會"
                        width={400}
                        height={240}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 步驟2 */}
            <div className="mb-16 md:mb-24">
              <div className="relative flex flex-col items-center">
                <div className="absolute left-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-orange-500 text-2xl font-bold text-white shadow-lg">
                  2
                </div>
                <div className="mt-8 grid w-full grid-cols-1 gap-12 md:grid-cols-2">
                  <div className="md:text-left">
                    <div className="overflow-hidden rounded-lg shadow-lg h-48">
                      <Image
                        src="/images/step-by-step/準時送達-一次性送齊全部所需.jpg"
                        alt="新鮮食材配送"
                        width={400}
                        height={240}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-3 text-2xl font-bold text-orange-600">準時送達 - 一次性送齊全部所需</h3>
                    <p className="text-lg text-gray-600">我們會於活動當日指定時間前30-60分鐘將所有食材及用具送抵指定地點，只要係車輛可以到達嘅地方都能送達，無論離島、郊區都覆蓋。所有海鮮食材均經過嚴格保鮮處理，確保新鮮度。一次性送齊所有物資，避免您東奔西跑。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 步驟3 */}
            <div className="mb-16 md:mb-24">
              <div className="relative flex flex-col items-center">
                <div className="absolute left-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-orange-500 text-2xl font-bold text-white shadow-lg">
                  3
                </div>
                <div className="mt-8 grid w-full grid-cols-1 gap-12 md:grid-cols-2">
                  <div className="order-2 md:order-1 md:text-right">
                    <h3 className="mb-3 text-2xl font-bold text-orange-600">專業師傅服務 - 全程代勞燒烤工作（另洽）</h3>
                    <p className="text-lg text-gray-600">可額外選擇專業師傅上門服務（需另洽收費），負責處理所有燒烤工作，讓您和客人無需動手，完全專注於享受美食與派對樂趣。師傅會根據食材特性調整火候及烹調時間，確保每款食物都能完美呈現。</p>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="overflow-hidden rounded-lg shadow-lg h-48">
                      <Image
                        src="/images/step-by-step/專業師傅服務-全程代勞燒烤工作-另洽.jpg"
                        alt="專業師傅燒烤服務"
                        width={400}
                        height={240}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 步驟4 */}
            <div>
              <div className="relative flex flex-col items-center">
                <div className="absolute left-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-orange-500 text-2xl font-bold text-white shadow-lg">
                  4
                </div>
                <div className="mt-8 grid w-full grid-cols-1 gap-12 md:grid-cols-2">
                  <div className="md:text-left">
                    <div className="overflow-hidden rounded-lg shadow-lg h-48">
                      <Image
                        src="/images/step-by-step/售後服務-貼心回訪.jpg"
                        alt="售後服務及優惠"
                        width={400}
                        height={240}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-3 text-2xl font-bold text-orange-600">售後服務 - 貼心回訪</h3>
                    <p className="text-lg text-gray-600">活動後我們會主動聯繫您，了解活動體驗及意見反饋。針對任何問題提供即時跟進及解決方案。長期客戶更可享有特別優惠及提前預訂權益，確保節日期間仍能安排到優質服務。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 行動呼籲 */}
          <div className="mt-16 text-center">
            <p className="mb-6 text-xl font-semibold text-orange-700">香港最無憂嘅BBQ到會體驗，全程專人跟進！</p>
            <WhatsAppButton
              phoneNumber="85259727945"
              message="你好，我想了解貴公司的BBQ到會完整服務流程"
              className="inline-block text-lg font-semibold shadow-xl"
            >
              立即了解完整服務詳情
            </WhatsAppButton>
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
          
          {/* 新套餐特別花框 - 使用highlight提高視覺效果 */}
          <div className="mb-10 rounded-xl border-4 border-dashed border-orange-500 bg-gradient-to-r from-orange-50 to-yellow-50 p-6 md:p-8">
            <div className="mb-4 text-center">
              <span className="inline-block rounded-full bg-orange-500 px-6 py-2 text-lg font-bold text-white">📢【新套餐登場！】專業燒烤師傅全程代烤 🔥🍢</span>
            </div>
            <div className="md:flex md:gap-6">
              <div className="mb-6 md:mb-0 md:w-1/3">
                <div className="overflow-hidden rounded-xl aspect-square md:aspect-auto">
                  <Image
                    src="/images/daniel-l_IQP3BLFF0-unsplash.jpg"
                    alt="專業燒烤師傅"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="mb-3 text-2xl font-bold text-orange-600">🎉 全新推出：海鮮BBQ餐A (8位｜HKD 4,480)</h3>
                <ul className="mb-4 space-y-2 text-lg">
                  <li className="flex items-start">
                    <span className="mr-2 text-green-600">✅</span>
                    <span><strong>專業BBQ師傅上門代烤</strong>｜輕鬆享受無憂派對</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-600">✅</span>
                    <span><strong>新鮮海鮮 無味精</strong>｜品質保證</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-600">✅</span>
                    <span><strong>市區零運費</strong>（有電梯）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">🎁</span>
                    <span><strong>額外贈送：</strong>長法包＋春雞半隻</span>
                  </li>
                </ul>
                <div className="mb-4 rounded-md bg-red-50 p-3 text-center">
                  <p className="text-lg font-bold text-red-600">💰 即日登記減$100！</p>
                </div>
                <div className="mb-4 rounded-md bg-yellow-50 p-3 text-center border-2 border-yellow-500 border-dashed">
                  <p className="text-lg font-bold text-yellow-700">⚠️ 每日限兩個名額 ⚠️</p>
                </div>
                <p className="mb-3 text-lg">✨ 一站式服務，讓您專注與親友歡聚！</p>
                <p className="mb-4 text-lg">不用自己動手燒，師傅專業處理燒烤火候<br/>讓每一道食物都完美呈現，VIP級別享受！</p>
                <p className="font-medium text-orange-600">📅 優惠期：5月1日至5月31日</p>
                <div className="mt-4">
                <WhatsAppButton
                  phoneNumber="85259727945"
                    message="你好，我想了解專業燒烤師傅全程代烤套餐（8位｜HKD 4,480），想確認今日是否還有名額"
                  className="w-full"
                >
                    立即了解專業代烤套餐
                </WhatsAppButton>
                </div>
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
                <p className="mt-3 font-semibold text-red-600">
                  ⏰ 優惠至本月底！年度盛事日期已90%爆滿，即刻預訂鎖定心水日子
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
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            客戶真實評價
          </h2>
          <p className="mb-8 text-center text-lg text-gray-600 md:text-xl">
            我們引以為傲的不止是美食，還有每位顧客的笑容和肯定。以下是真實客人透過WhatsApp分享的評價和反饋。
          </p>
          <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex items-center">
                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  <span className="text-lg font-bold">A</span>
                </div>
                <h3 className="font-semibold">企業聚會客戶</h3>
              </div>
              <p className="italic text-gray-600">「海鮮超級新鮮，同事都讚不絕口！尤其是元貝同鮑魚，完全唔似平時自己買嘅質素，絕對超值，下次繼續預訂！」</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex items-center">
                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  <span className="text-lg font-bold">C</span>
                </div>
                <h3 className="font-semibold">家庭派對客戶</h3>
              </div>
              <p className="italic text-gray-600">「師傅服務一流，全程負責燒嘢，我哋一家人都可以放鬆享受派對。食材新鮮度完全超乎預期，會推薦比朋友！」</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex items-center">
                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  <span className="text-lg font-bold">L</span>
                </div>
                <h3 className="font-semibold">生日派對客戶</h3>
              </div>
              <p className="italic text-gray-600">「準時送達，一次過送晒所有嘢，無需再操心任何事！份量足，款式多，價錢合理，係我搞過最輕鬆嘅BBQ！」</p>
            </div>
          </div>
          <p className="mb-8 text-center text-base text-gray-500">
            滑動查看更多來自顧客的WhatsApp真實評價 👇
          </p>
          <TestimonialCarousel imagePaths={testimonialImages} options={{ loop: true }} />
        </div>
      </section>

      {/* Event Photos Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-4 text-center text-3xl font-bold text-orange-600 md:text-4xl">
            🔥 精彩活動瞬間回顧 🔥
          </h2>
          <p className="mb-8 text-center text-lg text-gray-600 md:text-xl">
            每場活動都是獨一無二的回憶。從企業年會到家庭慶典，從沙灘派對到屋頂BBQ，我們的服務足跡遍布香港各區。以下是客人分享的實際活動照片，見證我們如何將平凡的聚會變成難忘的盛宴。
          </p>
          <p className="mb-10 text-center text-base text-gray-500">
            <span className="inline-block rounded-full bg-yellow-100 px-3 py-1 font-medium text-yellow-800">點擊或觸摸照片可放大</span> • <span className="font-semibold text-orange-600">已獲客戶授權展示</span>
          </p>
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
            立即行動！3步享受專業燒烤師傅服務
          </h2>
          <p className="mb-6 text-xl font-semibold">
            讓專業師傅處理所有燒烤工作，您只需享受美食與歡聚時光
          </p>
          <div className="mb-6 inline-block rounded-lg bg-yellow-400 px-6 py-3 text-xl font-bold text-red-700">
            ⚠️ 每日僅限兩個預約名額 ⚠️
          </div>
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-2xl font-bold">1. 預約專業師傅</h3>
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-bold">2. 確認您的活動日期</h3>
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-bold">3. 坐等師傅到場服務！</h3>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-xl">
              💬 WhatsApp落單：點擊下方按鈕，專人即時回覆！
            </p>
            <p className="text-lg font-semibold text-yellow-300">
              ⚠️ 優惠期有限（5月1日至5月31日）登記即減$100！立即鎖定日期！
            </p>
          </div>
          <div className="mt-8">
            <WhatsAppButton
              phoneNumber="85259727945"
              message="你好，我想了解專業燒烤師傅全程代烤套餐（8位｜HKD 4,480），想確認今日是否還有名額"
              className="text-lg font-semibold shadow-xl"
            >
              立即預約BBQ師傅
            </WhatsAppButton>
          </div>
          <p className="mt-8 text-sm">
            ⚠️ 注意：請提前至少一週預訂，以確保燒烤師傅檔期，特別日子建議提早兩週預約，避免向隅！每日僅限兩個師傅服務名額！
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
