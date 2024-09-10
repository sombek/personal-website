import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import { AiOutlineMail } from 'react-icons/ai'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="mr-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'عني',
  description:
    'انا عبدالله هاشم، مهندس برمجيات مهتم ببناء المنتجات التقنية وتطوير الويب',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        {/*<div className="lg:pr-20">*/}
        {/*  <div className="max-w-xs px-2.5 lg:max-w-none">*/}
        {/*    <Image*/}
        {/*      src={portraitImage}*/}
        {/*      alt=""*/}
        {/*      sizes="(min-width: 1024px) 32rem, 20rem"*/}
        {/*      className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            مرحباً، أنا عبدالله اهلاً بك في مدونتي 💬
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              {' '}
              يمكن أقول لكم، إني من يوم كنت صغير وأنا مهووس بالتكنولوجيا. أول
              مشروع حقيقي لي كان وقت ما واجهتني مشكلة وأنا أحاول أحصل على بيانات
              غياباتي من موقع الجامعة. تخيلوا كل مرة أدخل الموقع وأحاول أفهم إيش
              صار في كل مادة؟ قلت: ليش ما أسوي تطبيق يحل هالمشكلة؟ وبالفعل، صنعت
              تطبيق يسحب البيانات ويحولها إلى JSON، وعرضتها في صفحة ويب. تجربة
              مو بس كانت ممتعة لي، حتى زملائي استفادوا منها.{' '}
            </p>{' '}
            <p>
              {' '}
              أنا من جيل التسعينات، يعني عشنا في فترة كانت فيها التكنولوجيا
              محدودة. كلنا نعرف كيف الإنترنت وقتها كانت زي الشيء العجيب اللي
              انفتح قدامنا فجأة. الفضول اللي جواتي خلاني أدخل عالم البرمجة
              والتكنولوجيا وأتعلم كل شيء ممكن.{' '}
            </p>{' '}
            <p>
              {' '}
              أول جهاز إلكتروني اقتنيته كان كمبيوتر شخصي. هنا كانت البداية
              الحقيقية لعالمي مع البرمجة. كنت أجلس بالساعات أشتغل على تصميمات
              Cinema 4D. كنت مغرم بالنمذجة ثلاثية الأبعاد، وكل ما أصمم شيء، أحس
              بمتعة غريبة.{' '}
            </p>{' '}
            <p>
              {' '}
              دايماً كان الكمبيوتر والبرمجة هو الشيء اللي يشدني من صغري. كيف
              الأشياء اللي حولنا تعمل؟ وكيف ممكن نطوّرها؟ كنت دايماً أفكر كيف
              نقدر نخلي العالم التقني أفضل وأسهل.{' '}
            </p>{' '}
            <p>
              {' '}
              أكبر تحدي واجهته في مسيرتي كان كيف أقدر أكون مميز في مجالي. دايماً
              كان يجي هاجس "كيف أكون أفضل؟". لكن مع الوقت تعلمت إني ما أقارن
              نفسي بغيري، وأركز على تطوير نفسي وتعلم شيء جديد كل يوم. زي ما قال
              غازي القصيبي: "آمنت بأن القمة تتسع للجميع، فلم أحسد أحدًا."{' '}
            </p>{' '}
            <p>
              {' '}
              حالياً دايماً تجيني أفكار مشاريع جديدة. المشكلة؟ الوقت! أحياناً
              أشعر إن اليوم ينتهي وأنا ما خلصت شيء. بس صرت أكتب كل فكرة تجيني في
              ملاحظاتي في تطبيق "اوبسيديان"، ووقت ما ألاقي فرصة أبدأ أشتغل
              عليها.{' '}
            </p>{' '}
            <p>
              {' '}
              بالنسبة للمستقبل؟ حالياً أفكر كيف أقدر أدخل الذكاء الاصطناعي
              والتعلم الآلي في مشاريعي. ممكن أفكار اليوم تصير مشاريع بكرة اللي
              بتغير العالم، مين يدري؟{' '}
            </p>
          </div>
        </div>
        <div className="lg:pr-20">
          <ul role="list">
            <SocialLink href="#" icon={XIcon}>
              تابعني على X
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              تابعني على Instagram
            </SocialLink>
            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              تابعني على GitHub
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              تابعني على LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:abdullah-hashim@outlook.com"
              icon={AiOutlineMail}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              abdullah-hashim@outlook.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
