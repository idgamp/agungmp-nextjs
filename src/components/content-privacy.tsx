export const ContentPrivacy = () => {
  return (
    <main className="border-2 border-white w-screen max-h-[100svh] overflow-y-scroll">
      <div className="container mx-auto px-4 lg:px-6 py-20">
        <div className="flex items-center w-full min-h-[calc(100svh-4px)]">
          <div className="md:max-w-[45rem] mx-auto space-y-8">
            <div className="title">
              <h1 className="font-heading text-5xl font-bold">
                {`Privacy Policy`}
              </h1>
            </div>
            <div className="content space-y-5">
              {/* 1. Introduction */}
              <div className="space-y-4 text-xl">
                <p
                  dangerouslySetInnerHTML={{
                    __html: `<strong>Last updated:</strong> 14 December 2025`,
                  }}
                ></p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: `This Privacy Policy explains how agungmp.com ("I," "me," or "my") collects, uses, and protects your information when you visit my personal portfolio website at <a href="https://agungmp.com">https://agungmp.com</a> (the "Site").`,
                  }}
                ></p>
              </div>
              {/* 1. Information I Collect */}
              <h2 className="text-4xl font-semibold">{`1. Information I Collect`}</h2>
              <div className="space-y-4 text-xl">
                <p>
                  {`When you visit the Site, I may collect the following information:`}
                </p>
                <ul>
                  <li
                    dangerouslySetInnerHTML={{
                      __html: `<strong>Personal Information:</strong> If you choose to contact me through a form or email, I may collect your name, email address, and any message content you provide.`,
                    }}
                  ></li>
                  <li
                    dangerouslySetInnerHTML={{
                      __html: `<strong>Usage Data:</strong> I may collect information about how you use the Site, such as your IP address, browser type, operating system, and the pages you visit.`,
                    }}
                  ></li>
                  <li
                    dangerouslySetInnerHTML={{
                      __html: `<strong>Cookies:</strong> The Site may use cookies or similar tracking technologies to improve your browsing experience and analyze traffic.`,
                    }}
                  ></li>
                </ul>
              </div>
              {/* 2. How I Use Your Information */}
              <h2 className="text-4xl font-semibold">{`2. How I Use Your Information`}</h2>
              <div className="space-y-4 text-xl">
                <p
                  dangerouslySetInnerHTML={{
                    __html: `I use the collected information solely to:`,
                  }}
                ></p>
                <ul>
                  <li>{`Respond to your inquiries or messages.`}</li>
                  <li>
                    {`Understand how visitors interact with my portfolio to improve the Site’s design and usability.`}
                  </li>
                  <li>
                    {`Maintain and enhance the functionality of the Site.`}
                  </li>
                  <li>{`Comply with legal obligations, if required.`}</li>
                </ul>
              </div>
              {/* 3. Sharing of Information */}
              <h2 className="text-4xl font-semibold">{`3. Sharing of Information`}</h2>
              <div className="space-y-4 text-xl">
                <p>
                  {`I do not sell, trade, or rent your personal information to third parties. The only limited sharing that may occur is:`}
                </p>
                <ul>
                  <li>
                    {`With trusted analytics or hosting providers (e.g., Vercel, Netlify, or Google Analytics) to help run and monitor the Site.`}
                  </li>
                  <li>
                    {`If required by law or to protect my rights, safety, or property.`}
                  </li>
                </ul>
              </div>
              {/* 4. Data Security */}
              <h2 className="text-4xl font-semibold">{`4. Data Security`}</h2>
              <div className="space-y-4 text-xl">
                <p>
                  {`I take reasonable steps to protect your personal information. However, please note that no method of internet transmission is completely secure, and I cannot guarantee absolute security.`}
                </p>
              </div>
              {/* 5. Your Rights */}
              <h2 className="text-4xl font-semibold">{`5. Your Rights`}</h2>
              <div className="space-y-4 text-xl">
                <p>
                  {`Depending on your location (e.g., if you’re in the EU or California), you may have the right to:`}
                </p>
                <ul>
                  <li>
                    {`Access, correct, or request deletion of your personal data.`}
                  </li>
                  <li>{`Object to or restrict certain data processing.`}</li>
                  <li>{`Withdraw consent (if previously given).`}</li>
                  <li>{`Request a copy of your data.`}</li>
                </ul>
                <p>
                  {`To exercise any of these rights, please contact me at dev.agungmp@gmail.com.`}
                </p>
              </div>
              {/* 6. Third-Party Links */}
              <h2 className="text-4xl font-semibold">{`6. Third-Party Links`}</h2>
              <div className="space-y-4 text-xl">
                <p>
                  {`My portfolio may include links to third-party websites (e.g., GitHub, LinkedIn, or project demos). I am not responsible for their privacy practices, so please review their policies separately.`}
                </p>
              </div>
              {/* 7. Updates to This Policy */}
              <h2 className="text-4xl font-semibold">{`7. Updates to This Policy`}</h2>
              <div className="space-y-4 text-xl">
                <p>
                  {`I may update this Privacy Policy occasionally. Any changes will be posted on this page with a new “Last updated” date.`}
                </p>
              </div>
              {/* 8. Contact Me */}
              <h2 className="text-4xl font-semibold">{`8. Contact Me`}</h2>
              <div className="space-y-4 text-xl">
                <p>
                  {`If you have any questions about this Privacy Policy or how I handle your data, feel free to reach out:`}
                </p>
                <ul>
                  <li
                    dangerouslySetInnerHTML={{
                      __html: `<strong>Email:</strong> <a href="mailto:dev.agungmp@gmail.com">dev.agungmp@gmail.com</a>`,
                    }}
                  ></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
