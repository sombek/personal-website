import { type Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: 'لعبة إنسان حيوان جماد - لعبة عربية تعليمية ممتعة',
  description:
    'لعبة إنسان حيوان جماد اونلاين مجانية تساعد على تطوير الذاكرة والمفردات العربية. العب مع الأصدقاء في الوقت الحقيقي مع نظام نقاط وتحديات زمنية.',
  keywords:
    'لعبة إنسان حيوان جماد, لعبة عربية, لعبة تعليمية, تطوير الذاكرة, مفردات عربية, لعب جماعي',
  openGraph: {
    title: 'لعبة إنسان حيوان جماد - لعبة عربية تعليمية ممتعة',
    description:
      'لعبة إنسان حيوان جماد اونلاين مجانية تساعد على تطوير الذاكرة والمفردات العربية',
    url: 'https://insan-jamad.com',
    siteName: 'لعبة إنسان حيوان جماد',
    images: [
      {
        url: '/projects/insan-jamad/game-preview.png',
        width: 1200,
        height: 630,
        alt: 'لعبة إنسان حيوان جماد',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'لعبة إنسان حيوان جماد - لعبة عربية تعليمية ممتعة',
    description:
      'لعبة إنسان حيوان جماد اونلاين مجانية تساعد على تطوير الذاكرة والمفردات العربية',
    images: ['/projects/insan-jamad/game-preview.png'],
  },
}

const features = [
  {
    title: 'تطوير الذاكرة',
    description:
      'تساعدك اللعبة على تقوية الذاكرة وتحسين قدراتك على التذكر السريع والتفكير النقدي',
    icon: '🧠',
  },
  {
    title: 'لعب جماعي ممتع',
    description:
      'العب مع أصدقائك في الوقت الحقيقي وشارك اللحظات الممتعة والتحديات المثيرة',
    icon: '👥',
  },
  {
    title: 'تحديات زمنية',
    description:
      'اختبر سرعتك في التفكير مع التحديات الزمنية التي تزيد من إثارة اللعبة',
    icon: '⏱️',
  },
  {
    title: 'خانات متنوعة',
    description:
      'خمس خانات مختلفة: إنسان، حيوان، جماد، نبات، بلاد لتحدي شامل لمعرفتك',
    icon: '📝',
  },
  {
    title: 'نظام النقاط',
    description:
      'احصل على نقاط لكل إجابة صحيحة وتنافس مع الأصدقاء للحصول على أعلى النتائج',
    icon: '🏆',
  },
  {
    title: 'تحقق ذكي من الإجابات',
    description:
      'نظام ذكي يتحقق من صحة إجاباتك باستخدام تقنيات الذكاء الاصطناعي المتطورة',
    icon: '🤖',
  },
]

const howToPlay = [
  {
    step: '01',
    title: 'اختر الحرف',
    description:
      'اختر حرفاً من الأبجدية أو دع النظام يختار حرفاً عشوائياً لك لبدء التحدي',
  },
  {
    step: '02',
    title: 'أكمل الخانات',
    description:
      'املأ خانات إنسان، حيوان، جماد، نبات، وبلاد بكلمات تبدأ بالحرف المختار',
  },
  {
    step: '03',
    title: 'تنافس!',
    description:
      'قارن إجاباتك مع الأصدقاء، احصل على النقاط، وتحدى نفسك في جولات جديدة',
  },
]

const testimonials = [
  {
    name: 'أحمد محمد',
    role: 'لاعب محترف',
    content: 'لعبة رائعة وممتعة جداً، استمتعنا بها كثيراً',
    rating: 5,
  },
  {
    name: 'فاطمة علي',
    role: 'مدربة ألعاب تعليمية',
    content: 'تجربة فريدة ومميزة، أنصح الجميع بتجربتها',
    rating: 5,
  },
  {
    name: 'خالد عبدالله',
    role: 'معلم في مدرسة ابتدائية',
    content: 'أفضل لعبة عربية تعليمية جربتها',
    rating: 5,
  },
]

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

export default function InsanJamadProject() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'لعبة إنسان حيوان جماد',
    description:
      'لعبة عربية تعليمية ممتعة تساعد على تطوير الذاكرة والمفردات. اللعبة تتضمن خمس خانات: إنسان، حيوان، جماد، نبات، وبلاد.',
    url: 'https://insan-jamad.com',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '10',
    },
    author: {
      '@type': 'Person',
      name: 'Abdullah Hashim',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Abdullah Hashim',
    },
  }

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="mt-16 flex items-center justify-center sm:mt-20">
        <div className="flex max-w-3xl flex-col space-y-16">
          {/* Hero Section */}
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <div className="flex h-12 w-12 items-center justify-center text-4xl">
                  🎮
                </div>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              لعبة إنسان حيوان جماد
            </h1>
            <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
              اللعبة المحبوبة الآن على الإنترنت! طور مهاراتك العقلية واستمتع مع
              الأصدقاء.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <a
                href="https://insan-jamad.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-teal-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:outline-none"
              >
                ابدأ اللعب الآن
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center rounded-lg border border-zinc-300 bg-white px-6 py-3 text-base font-medium text-zinc-700 shadow-sm hover:bg-zinc-50 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:outline-none dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
              >
                العودة للمشاريع
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <section>
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              مميزات لعبة إنسان حيوان جماد
            </h2>
            <p className="mb-12 text-zinc-600 dark:text-zinc-400">
              مميزات رائعة تجعل تجربة اللعب ممتعة ومثيرة لجميع الأعمار.
            </p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <Card key={feature.title} as="div">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <div className="flex h-8 w-8 items-center justify-center text-2xl">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          {/* How to Play Section */}
          <section>
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              كيف تلعب في 3 خطوات بسيطة
            </h2>
            <p className="mb-12 text-zinc-600 dark:text-zinc-400">
              ابدأ اللعب خلال ثوانٍ واستمتع بتجربة ممتعة مع الأصدقاء.
            </p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {howToPlay.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/20">
                      <span className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                        {step.step}
                      </span>
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                    {step.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              جاهز لتحدي ذاكرتك؟
            </h2>
            <p className="mb-8 text-zinc-600 dark:text-zinc-400">
              انضم إلى آلاف اللاعبين واستمتع بأجمل أوقات التسلية والتعلم مع لعبة
              إنسان حيوان جماد.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://insan-jamad.com"
                target="_blank"
                className="inline-flex items-center rounded-lg bg-teal-600 px-8 py-4 text-lg font-medium text-white shadow-sm hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:outline-none"
              >
                ابدأ اللعب الآن
              </a>
            </div>
            <div className="mt-4 flex justify-center space-x-6 space-x-reverse text-sm text-zinc-600 dark:text-zinc-400">
              <span>✓ مجاني بالكامل</span>
              <span>✓ بدون تسجيل</span>
              <span>✓ لعب فوري</span>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
