import Link from "next/link";
import { FaHandPointRight, FaRegCircle } from "react-icons/fa";

export default function TermsAndConditions() {
  return (
    <section className="bg-slate-900  ">
      {/* black screen for background */}
      <div className="z-1 absolute inset-0 h-40 bg-black md:h-60"></div>
      {/* White screen for content */}
      <div className="container relative px-10 lg:px-40">
        <h1 className="relative z-10 mb-6 pb-10 pt-28 text-2xl font-bold text-iceblue md:py-28 md:text-4xl">
          Terms & Conditions
        </h1>

        <p className=" lg:text-md mb-4 text-justify text-xs font-light md:text-sm">
          At ROI Innovators, accessible from www.roi innovators.com, one of our
          main priorities is the privacy of our visitors. This Privacy Policy
          document contains types of information that is collected and recorded
          by Surge Global and how we use it. If you have additional questions or
          require more information about our Privacy Policy, do not hesitate to
          contact us at support@roi innovators.com This Privacy Policy explains
          in detail the types of personal data we may collect about you when you
          interact with us on any website where this Privacy Policy appears. ROI
          Innovators Pvt Ltd is the data controller of any personal data you
          provide to us, including in relation to this website.
        </p>

        <h2 className="mb-5 mt-20 text-xl font-semibold md:text-3xl">
          Information we collect
        </h2>
        <p className=" lg:text-md mb-4 text-justify text-xs font-light md:text-sm">
          The personal information that you are asked to provide, and the
          reasons why you are asked to provide it, will be made clear to you at
          the point we ask you to provide your personal information.
        </p>

        <h2 className="mb-5 mt-20 text-xl font-semibold md:text-3xl">
          Information relating to your use of our websites, services and/or
          products
        </h2>
        <p className=" lg:text-md mb-4 text-justify text-xs font-light md:text-sm">
          We and our third-party service providers use cookies and other
          tracking tools to automatically collect information about how you use
          our websites, services and/or products. This includes information
          relating to the pages you visit on our website, the services or
          information you search for and the links and content you choose to
          access on our websites, services and products. We may use this
          information to provide you with relevant content and to inform our
          marketing strategy.
        </p>

        <h2 className="mb-5 mt-20 text-xl font-semibold md:text-3xl">
          Consent
        </h2>
        <p className=" lg:text-md mb-4 text-justify text-xs font-light md:text-sm">
          By using our website, services or applications, you hereby consent to
          our Privacy Policy and agree to its terms.
        </p>

        <h2 className="mb-5 mt-20 text-xl font-semibold md:text-3xl">
          Technical data
        </h2>
        <p className=" lg:text-md mb-4 text-justify text-xs font-light md:text-sm">
          We and our third-party service providers automatically collect
          information about the device(s) you use to access our website. This
          includes collecting information about the type of device you are
          using, as well as unique mobile device ID or the internet protocol
          (IP) address online identifiers, which are numbers that can uniquely
          identify a specific computer or other network device on the internet.
          This information is linked to a cookie ID, which we receive and
          process.
        </p>
        <p className=" lg:text-md mb-4 text-justify text-xs font-light md:text-sm">
          You may find more information on the cookies we use and the purposes
          for which we use them on our Cookie policy below. We also collect
          information about your internet service provider and domain name and
          the type of browser and operating system you are using.
        </p>

        <h2 className="mb-5 mt-20 text-xl font-semibold md:text-3xl">
          Contact data
        </h2>
        <p className="lg:text-md mb-4 text-justify text-xs font-light md:text-sm">
          We collect contact details directly from you when you sign-up to
          receive a service, receive email alerts, utilize.
        </p>

        <p className="lg:text-md mb-4 text-justify text-xs font-light md:text-sm">
          our products, attend one of our events, download our content,
          subscribe to our newsletters or where you ask us to respond to a query
          you have. The personal data we collect may include, but not limited
          to, your name, email address, employer and job title, and location.
        </p>

        <h2 className="mb-5 mt-20 text-xl md:text-3xl font-semibold">
          How we use your information
        </h2>
        <p className=" lg:text-md mb-4 text-xs md:text-sm">
          We use the information we collect in various ways, including to :
        </p>

        <dl className="lg:text-md pl-8 text-xs md:text-sm">
          <div className="mb-2 flex">
            <dt className="mr-3">
              <FaHandPointRight />
            </dt>
            <dd>
              Provide, operate, and maintain our websites, products and/or
              services
            </dd>
          </div>
          <div className="mb-2 flex">
            <dt className="mr-3">
              <FaHandPointRight />
            </dt>
            <dd>
              Improve, personalize, and expand our websites, products and/or
              services
            </dd>
          </div>
          <div className="mb-2 flex">
            <dt className="mr-3">
              <FaHandPointRight />
            </dt>
            <dd>
              Understand and analyze how you use our website, products and/or
              services
            </dd>
          </div>
          <div className="mb-2 flex">
            <dt className="mr-3">
              <FaHandPointRight />
            </dt>
            <dd>Develop new products, services, features, and functionality</dd>
          </div>
          <div className="mb-2 flex">
            <dt className="mr-3">
              <FaHandPointRight />
            </dt>
            <dd>
              Communicate with you, either directly or through one of our
              partners, including for customer service, to provide you with
              updates and other information relating to the website, and for
              marketing and promotional purposes
            </dd>
          </div>
          <div className="mb-2 flex">
            <dt className="mr-3">
              <FaHandPointRight />
            </dt>
            <dd>Send you emails/notifications</dd>
          </div>
          <div className="mb-2 flex">
            <dt className="mr-3">
              <FaHandPointRight />
            </dt>
            <dd>Find and prevent fraud</dd>
          </div>
          <div className="mb-2 flex">
            <dt className="mr-3">
              <FaHandPointRight />
            </dt>
            <dd>
              We use your information to provide any information and services
              that you have requested or any products that you have utilized:
            </dd>
          </div>
          <dl className="list-[lower-roman] pl-8">
            <div className="mb-2 flex">
              <dt className="mr-3 mt-[2px]">
                <FaRegCircle />
              </dt>
              <dd>to allow us to create an account for you</dd>
            </div>
            <div className="mb-2 flex">
              <dt className="mr-3 mt-[2px]">
                <FaRegCircle />
              </dt>
              <dd>
                to allow us to receive payment for products and services
                provided
              </dd>
            </div>
            <div className="mb-2 flex">
              <dt className="mr-3 mt-[2px]">
                <FaRegCircle />
              </dt>
              <dd>to allow us to respond to communications from you</dd>
            </div>
            <div className="mb-2 flex">
              <dt className="mr-3 mt-[2px]">
                <FaRegCircle />
              </dt>
              <dd>to allow us to respond to support requests</dd>
            </div>
            <div className="mb-2 flex">
              <dt className="mr-3 mt-[2px]">
                <FaRegCircle />
              </dt>
              <dd> to allow us to verify legitimate use of our products and tools </dd>
            </div>
            <div className="mb-2 flex">
              <dt className="mr-3 mt-[2px]">
                <FaRegCircle />
              </dt>
              <dd> to notify you of product updates and fixes </dd>
            </div>
          </dl>
        </dl>
        <p className="lg:text-md mb-4 text-justify text-xs font-light md:text-sm mt-4">
          Personal information is processed only in accordance with our
          legitimate interest in providing products and services to you and
          monitoring and improving the use and satisfaction of our website,
          services and products. We will never sell your information to third
          parties. We will disclose your information if we are required to by
          law. We may disclose your information to enforcement authorities if
          they ask us to, or to a third party in the context of actual or
          threatened legal proceedings, provided we can do so without breaching
          data protection laws.
        </p>

        <h2 className="mb-5 mt-20 text-xl font-semibold md:text-3xl">
          Cookies and web beacons
        </h2>
        <p className="lg:text-md mb-4 text-justify text-xs font-light md:text-sm">
          ROI Innovators uses ‘cookies’. These cookies are used to store
          information including visitors’ preferences, and the pages on the
          website the visitor accessed or visited. The information is used to
          optimize the users’ experience by customizing our content based on
          visitors’ browser type and/or other information.
        </p>

        <h2 className="mb-5 mt-20 text-xl font-semibold md:text-3xl">
          Advertising partners privacy policy
        </h2>
        <p className="lg:text-md mb-4 text-justify text-xs font-light md:text-sm">
          Third-party ad servers or ad networks use technologies like cookies,
          JavaScript, or Web Beacons that are used in their respective
          advertisements and links that appear on Surge Global, which are sent
          directly to users’ browser and/or application. They automatically
          receive your IP address when this occurs. These technologies are used
          to measure the effectiveness of their advertising campaigns and/or to
          personalize the advertising content that you see on websites that you
          visit.
        </p>

        <p className="lg:text-md mb-4 text-justify text-xs font-light md:text-sm">
          ROI Innovators has no access to or control over these cookies that are
          used by third-party advertisers.
        </p>

        <h2 className="mb-5 mt-20 text-xl font-semibold md:text-3xl">
          Third party privacy policy
        </h2>
        <p className="lg:text-md mb-4 text-justify text-xs font-light md:text-sm">
          ROI Innovator's Privacy Policy does not apply to other advertisers or
          websites. Thus, we are advising you to consult the respective Privacy
          Policies of these third-party ad servers for more detailed
          information. It may include their practices and instructions about how
          to opt-out of certain options
        </p>

        <p className="lg:text-md mb-4 text-justify text-xs font-light md:text-sm">
          You can choose to disable cookies through your individual browser
          options.
        </p>

        <h2 className="mb-5 mt-20 text-xl font-semibold md:text-3xl">
          Other sites
        </h2>
        <p className="lg:text-md mb-4 text-justify text-xs font-light md:text-sm">
          If you follow a link from our website, product or service to another
          site or service, this policy will no longer apply. We are not
          responsible for the information handling practices of third party
          sites or services and we encourage you to read the privacy policies
          appearing on those sites or services.
        </p>

        <h2 className="mb-5 mt-20 text-xl font-semibold md:text-3xl">
          GDPR data protection rights
        </h2>
        <p className="lg:text-md mb-4 text-justify text-xs font-light md:text-sm">
          If you follow a link from our website, product or service to another
          site or service, this policy will no longer apply. We are not
          responsible for the information handling practices of third party
          sites or services and we encourage you to read the privacy policies
          appearing on those sites or services.
        </p>

        <h2 className="mb-5 mt-20 text-xl font-semibold md:text-3xl">
          Transfers outside Europe
        </h2>
        <p className="lg:text-md mb-4 text-justify text-xs font-light md:text-sm">
          Personal data in the European Union is protected by data protection
          laws but other countries do not necessarily protect your personal data
          in the same way. Our website and some of our products or services or
          parts of them may be hosted in the United States and this means that
          we may transfer any information which is submitted by you through the
          website, product or service outside the European Economic Area (which
          means all the EU countries plus Norway, Iceland and Liechtenstein)
          (“EEA”) to the United States
        </p>
        <p className="lg:text-md mb-4 text-justify text-xs font-light md:text-sm">
          When you send an email to us, this may also be stored on email servers
          which are hosted in the United States or outside the EU. We have taken
          steps to ensure that our hosting provider uses the necessary level of
          protection for your information but if you do not want your
          information to be transferred outside the EEA you should not use our
          website, product or service or contact us via email.
        </p>

        <h2 className="mb-5 mt-20 text-xl font-semibold md:text-3xl">
          Children’s information
        </h2>
        <p className="lg:text-md mb-4 text-justify text-xs font-light md:text-sm">
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity. Surge
          Global does not knowingly collect any Personal Identifiable
          Information from children under the age of 13. If you think that your
          child provided this kind of information on our website, we strongly
          encourage you to contact us immediately and we will do our best
          efforts to promptly remove such information from our records.
        </p>

        <h2 className="mb-5 mt-20 text-xl font-semibold md:text-3xl">
          Changes to our privacy policy
        </h2>
        <p className="lg:text-md mb-4 text-justify text-xs font-light md:text-sm">
          ROI Innovators keeps its privacy policy under regular review and
          places any updates on this web page. This privacy policy was last
          updated on 03 January 2025.
        </p>
        <p className="lg:text-md mb-4 text-justify text-xs font-light md:text-sm">
          If you have any questions about Surge Global’s privacy policy, the
          data we hold on you, or you would like to exercise one of your data
          protection rights, please do not hesitate to contact us.
        </p>

        <p className="lg:text-md mb-4 text-justify text-xs font-light md:text-sm">
          <Link
            href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRrmRNQTHmRKMDCzlXkDXFXGQBRmRGCncfzQscQbqSxQMKmLxzCmbCCbhXQfDzvKBhpZqXG"
            target="_blank"
          >
            {" "}
            Email us at: <u> support@ROIInnovators.com </u>{" "}
          </Link>
        </p>
      </div>
    </section>
  );
}
