'use client';

import { siteConfig } from '@/app/siteConfig';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
// import { RRSSLink } from '@/components/rrss-link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib';

const NavLinks = ({ className, isMobile }: { className?: string; isMobile?: boolean }) => {
  return (
    <nav className={cn('relative flex items-center justify-center gap-x-2', className)}>
      {siteConfig.baseLinks.map(link => {
        const isComingSoon = 'isComingSoon' in link && link.isComingSoon;
        if (!link.isVisible) return null;
        if (isMobile && isComingSoon) return null;
        return (
          <NavLink key={link.url} href={link.url} isComingSoon={isComingSoon} isMobile={isMobile}>
            {link.label}
          </NavLink>
        );
      })}
    </nav>
  );
};

const NavLink = ({
  href,
  isComingSoon,
  isMobile,
  children,
}: {
  href: string;
  isComingSoon?: boolean;
  children: React.ReactNode;
  isMobile?: boolean;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href || (pathname.startsWith(href) && href !== '/');

  return (
    <Link
      href={isComingSoon ? '#' : href}
      onClick={e => {
        if (isComingSoon) {
          e.preventDefault();
        }
      }}
      className={cn(
        'group flex items-center gap-x-2 rounded-sm px-2 py-1 transition-all duration-300',
        isMobile && 'px-2 py-3 first:pl-6 last:pr-6',
        isActive && !isMobile
          ? 'text-black dark:text-white'
          : 'text-neutral-500 dark:text-neutral-500',
        isActive && isMobile && 'text-black dark:text-black',
        'hover:bg-neutral-200 hover:text-black dark:hover:bg-neutral-600 dark:hover:text-white',
        isComingSoon &&
          'hover:text-muted-foreground dark:hover:text-muted-foreground cursor-auto opacity-50 hover:bg-transparent hover:opacity-50 dark:hover:bg-transparent'
      )}
      /* style={{
        transition: 'all .2s cubic-bezier(.075,.82,.165,1)',
      }} */
    >
      {children}
      {/* {isComingSoon && (
        <span className="rounded bg-neutral-200 px-1 text-xs font-semibold text-neutral-400 dark:text-neutral-600">
          Soon
        </span>
      )} */}
    </Link>
  );
};

const Header = () => {
  return (
    <>
      <header className="relative hidden flex-col items-end justify-end gap-x-4 px-6 py-4.5 md:flex md:flex-row md:items-center md:justify-between">
        <div className="flex w-full items-center justify-between gap-x-2 md:w-fit md:justify-start">
          <Link href="/">
            <motion.div
              id="logo"
              className="w-full"
              initial={{ opacity: 0 }}
              animate={{ rotate: 360, opacity: 1 }}
              transition={{
                opacity: {
                  duration: 0.5,
                  ease: 'easeInOut',
                },
                rotate: {
                  delay: 0.5,
                  duration: 60,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }}
            >
              <Image
                src="/images/logo.png"
                alt="logo"
                width={40}
                height={40}
                className="size-10 invert md:size-10 dark:invert-0"
              />
            </motion.div>
          </Link>
          <NavLinks />
        </div>
      </header>

      <div className="fixed bottom-0 left-1/2 z-[999] flex h-auto w-full translate-x-[-50%] items-center justify-between overflow-hidden px-8 py-4">
        <Wrapper className="self-start">
          <Link href="/">
            <Image
              src="/images/home/image.webp"
              alt="logo"
              width={40}
              height={40}
              className="m-[5px] size-10 rounded-full md:size-10"
            />
          </Link>
        </Wrapper>
        <Wrapper className="col-span-2">
          <NavLinks isMobile />
        </Wrapper>
      </div>
    </>
  );
};

export default Header;

const Wrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        type: 'spring',
        duration: 0.95,
        bounce: 0.3,
        ease: 'easeInOut',
        delay: 0.2,
      }}
      className={cn(
        'inset-shadow-accent cursor-pointer overflow-hidden rounded-full bg-[rgba(243,243,243,0.7)] shadow-2xl backdrop-blur-sm md:hidden',
        className
      )}
      style={{
        boxShadow: 'inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff',
        border: '2px solid rgb(206, 206, 206)',
      }}
    >
      {children}
    </motion.div>
  );
};
