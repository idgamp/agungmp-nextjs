import Link from "next/link";

export const Content = () => {
  return (
    <main className="border-2 border-white w-screen h-screen overflow-y-scroll py-20 lg:py-0">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center w-full min-h-screen">
          <div className="md:max-w-[45rem] mx-auto space-y-8">
            <div className="title">
              <h1 className="font-heading text-5xl font-bold">
                {`Are you looking for a web dev?`}
              </h1>
            </div>
            <div className="content space-y-5">
              <h2 className="text-3xl font-semibold">{`Hi There!,`}</h2>
              <p>
                {`I’m Agung MP, a web developer based in Bali. By Day, I code
                cool stuff at Kesato, turning ideas into websites that
                work great and look good too. I’m all about clean code, and making things easy for users. 
                `}
              </p>
              <p>
                {`Living and working in Bali, I get to enjoy a little island inspiration while building
                digital solutions that actually make a difference. Let’s grab a
                coffee (or a virtual one) and chat about how I can help with
                your next project!`}
              </p>
            </div>
            <div className="stacks space-y-5">
              <h2 className="text-3xl font-semibold">These are my skills:</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 *:underline">
                <Link href="https://payloadcms.com/" target="_blank">
                  <span>PayloadCMS</span>
                </Link>
                <Link href="https://payloadcms.com/" target="_blank">
                  <span>Shopify</span>
                </Link>
                <Link href="https://wordpress.org/" target="_blank">
                  <span>WordPress</span>
                </Link>
                <Link href="https://nextjs.org/" target="_blank">
                  <span>Next.js</span>
                </Link>
                <Link href="https://www.typescriptlang.org/" target="_blank">
                  <span>TypeScript</span>
                </Link>
                <Link href="https://www.javascript.com/" target="_blank">
                  <span>JavaScript</span>
                </Link>
                <Link href="https://tailwindcss.com/" target="_blank">
                  <span>TailwindCss</span>
                </Link>
                <Link href="https://ui.shadcn.com/" target="_blank">
                  <span>Shadcn</span>
                </Link>
              </div>
            </div>

            <div className="contact space-y-5">
              <h2 className="text-3xl font-semibold">Reach me:</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 *:underline">
                <Link href="https://github.com/idgamp" target="_blank">
                  <span>Github</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/idgamp/"
                  target="_blank"
                >
                  <span>LinkedIn</span>
                </Link>
                <Link href="https://wa.me/6281237418775" target="_blank">
                  <span>Whatsapp</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
