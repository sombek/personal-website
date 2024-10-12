import { type Metadata } from 'next'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import { AiOutlineMail } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'

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
            أهلًا، أنا عبدالله 🌟
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              سعيد جدًا بزيارتك لموقعي الشخصي! اشتغل مهندس برمجيات، اعيش في
              الرياض متزوج احسن دكتورة في العالم 👩‍⚕️ وأب للشيخ فارس 👶
            </p>
            <p>
              من يومي وأنا مهتم بالتقنية وأجهزة الكمبيوتر، وهذا اللي خلاني أدرس
              علوم الحاسب وأشتغل في مجال تطوير البرمجيات. بحيث اقدر اساعد الناس
              في تحقيق أهدافهم وتطوير حياتهم و اصنع منتجات تقنية تسهل حياتهم
            </p>
            <p>
              اللي يحفزني في عملي هو تطوير حلول تقنية تحل مشاكل حقيقية وتترك أثر
              إيجابي على حياة الناس 🌍
            </p>

            <hr />

            <p>برا العمل، أستمتع بهواياتي المفضلة: الطبخ 🍳 ولعب التنس 🎾</p>
            <p>
              اكتشفت إن الأنشطة دي تساعدني أحقق توازن مثالي بين حياتي المهنية
              والشخصية و تفتح لي مساحات جديدة للإبداع والتفكير المنطقي 🧠
            </p>
            <p>
              احب اطبخ و اجرب وصفات جديدة، بالمناسبة تقدر تزور صفحة الوصفات اللي
              عملتها
              <Link
                href="https://h-recipes.vercel.app/"
                target={'_blank'}
                className={
                  'cursor-pointer px-1 font-bold text-teal-500 hover:text-teal-400 hover:underline dark:text-teal-100'
                }
              >
                هنا
                <BiLinkExternal className="mr-1 inline-block h-4 w-4" />
              </Link>
            </p>

            <p>
              أؤمن بأهمية التعلم المستمر والتطور، سواءً في البرمجة أو في مجالات
              ثانية. أواجه التحديات بروح منفتحة، وأعتبرها فرص للنمو والتعلم
            </p>
            <p>
              عشان كده عملت المدونة هذه حتى اقدر اشارك كل حاجة جديدة اتعلمها
              واكتشفها، وأفيد الناس اللي بيدوروا على معلومات تقنية ومحتوى
            </p>

            <p>أشكرك على زيارتك، وأتمنى تلقى في موقعي ما يلهمك ويفيدك.</p>
            <p>لو عندك اي سؤال او استشارة استفسار، اي حاجة خلينا نتواصل!</p>
          </div>
        </div>

        <div className="lg:pr-20">
          <ul role="list">
            <SocialLink href="https://x.com/abdullahjsx" icon={XIcon}>
              تابعني على X
            </SocialLink>
            <SocialLink
              href="https://instagram.com/sombek"
              icon={InstagramIcon}
              className="mt-4"
            >
              تابعني على Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/sombek"
              icon={GitHubIcon}
              className="mt-4"
            >
              تابعني على GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/abdullah-hashim/"
              icon={LinkedInIcon}
              className="mt-4"
            >
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
