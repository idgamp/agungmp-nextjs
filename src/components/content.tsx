import Link from "next/link";

export const Content = () => {
  return (
    <main className="border-2 border-white w-screen max-h-[100svh] overflow-y-scroll">
      <div className="container mx-auto px-4 lg:px-6 py-20 lg:py-0">
        <div className="flex items-center w-full min-h-[calc(100svh-4px)]">
          <div className="md:max-w-[45rem] mx-auto space-y-8">
            <div className="title">
              <h1 className="font-heading text-5xl font-bold">
                {`Looking for a web developer?`}
              </h1>
            </div>
            <div className="content space-y-5">
              <h2 className="text-4xl font-semibold">{`Hi There!`}</h2>
              <div className="space-y-4 text-xl">
                <p>
                  {`I’m Agung, a web developer based in Bali. By Day, I code
                cool stuff at Kesato, turning ideas into websites that
                work great and look good too. I’m all about clean code, and making things easy for users. 
                `}
                </p>
                <p>
                  {`Living and working in Bali, I get to enjoy a little island inspiration while building
                digital solutions that actually make a difference.`}
                </p>
                <p>
                  {`Let’s grab a
                coffee and chat about how I can help with
                your next project!`}
                </p>
              </div>
            </div>
            <div className="stacks space-y-5">
              <h2 className="text-4xl font-semibold">These are my skills:</h2>

              <div className="grid grid-cols-2 md:grid-cols-3 *:underline">
                <Link href="https://payloadcms.com/" target="_blank">
                  <span className="text-xl">PayloadCMS</span>
                </Link>
                <Link href="https://payloadcms.com/" target="_blank">
                  <span className="text-xl">Shopify</span>
                </Link>
                <Link href="https://wordpress.org/" target="_blank">
                  <span className="text-xl">WordPress</span>
                </Link>
                <Link href="https://nextjs.org/" target="_blank">
                  <span className="text-xl">Next.js</span>
                </Link>
                <Link href="https://www.typescriptlang.org/" target="_blank">
                  <span className="text-xl">TypeScript</span>
                </Link>
                <Link href="https://www.javascript.com/" target="_blank">
                  <span className="text-xl">JavaScript</span>
                </Link>
                <Link href="https://tailwindcss.com/" target="_blank">
                  <span className="text-xl">TailwindCss</span>
                </Link>
                <Link href="https://ui.shadcn.com/" target="_blank">
                  <span className="text-xl">Shadcn</span>
                </Link>
              </div>
            </div>

            <div className="contact space-y-5">
              <h2 className="text-4xl font-semibold">Reach me:</h2>
              <div className="grid grid-cols-3 *:underline">
                <Link href="https://github.com/idgamp" target="_blank">
                  <span className="text-xl">Github</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/idgamp/"
                  target="_blank"
                >
                  <span className="text-xl">LinkedIn</span>
                </Link>
                <Link href="https://wa.me/6281237418775" target="_blank">
                  <span className="text-xl">Whatsapp</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
