import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import style from "./privacy.module.css";
import { useTranslation } from "react-i18next";
const Privacy = () => {
  const { data } = useGlobalContext();
  const formattedContent = data?.terms_and_conditions;
  const { t, i18n } = useTranslation();
  return (
    <>
      {i18n.language === "en" ? (
        <div className="py-5 container mx-auto px-8">
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-center mb-4 font-bold">
            {t("Privacy Policy for Alternative")}
          </p>
          <p className="text-base md:text-md lg:text-lg xl:text-xl  mb-4 font-bold">
            {t("Privacy Policy")}
          </p>
          <div className="flex items-center justify-end text-[#717573] mb-3">
            <p>{t("Last updated: November 13, 2023")}</p>
          </div>
          <p className="mb-2 text-[#717573]">
            {t(
              "This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the service and tells You about Your privacy rights and how the law protects You."
            )}
          </p>
          <p className="text-[#717573] inline mx-1 mb-4">
            {t(
              "We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the"
            )}
          </p>{" "}
          <a
            href="https://www.freeprivacypolicy.com/free-privacy-policy-generator/"
            target="_blank"
            rel="noreferrer"
            className=" duration-300 text-green-400 hover:text-blue-500"
          >
            {t("Free Privacy Policy Generator.")}
          </a>
          <p className="text-md md:text-lg lg:text-xl xl:text-2xl font-extrabold text-center my-5">
            {t("Interpretation and Definitions")}
          </p>
          <p className="text-base md:text-md lg:text-lg mb-2 font-bold">
            {t("Interpretation")}
          </p>
          <p className="text-[#717573] mb-5">
            {t(
              "The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural."
            )}
          </p>
          <p className="text-base md:text-md lg:text-lg mb-2 font-bold">
            {t("Definitions")}
          </p>
          <p className="text-[#717573] mb-4">
            {t("For the purposes of this Privacy Policy:")}
          </p>
          <ul
            className="text-[#717573] mb-8 lg:mb-12"
            style={{
              listStyleType: "disc",
            }}
          >
            <li className="mb-5">
              <span className="font-bold">Account</span> means a unique account
              created for You to access our Service or parts of our Service.
            </li>
            <li className="mb-5">
              <span className="font-bold">Affiliate</span> means an entity that
              controls, is controlled by or is under common control with a
              party, where "control" means ownership of 50% or more of the
              shares, equity interest or other securities entitled to vote for
              election of directors or other managing authority.
            </li>
            <li className="mb-5">
              <span className="font-bold">Application</span> refers to
              Alternative, the software program provided by the Company.
            </li>
            <li className="mb-5">
              <span className="font-bold">Company</span> (referred to as either
              "the Company", "We", "Us" or "Our" in this Agreement) refers to
              Alternative.
            </li>
            <li className="mb-5">
              <span className="font-bold">Country</span> refers to: Egypt
            </li>
            <li className="mb-5">
              <span className="font-bold">Device</span> means any device that
              can access the Service such as a computer, a cellphone or a
              digital tablet.
            </li>
            <li className="mb-5">
              <span className="font-bold"> Personal Data</span> is any
              information that relates to an identified or identifiable
              individual.
            </li>
            <li className="mb-5">
              <span className="font-bold">Service</span> refers to the
              Application.
            </li>
            <li className="mb-5">
              <span className="font-bold">Service Provider</span> means any
              natural or legal person who processes the data on behalf of the
              Company. It refers to third-party companies or individuals
              employed by the Company to facilitate the Service, to provide the
              Service on behalf of the Company, to perform services related to
              the Service or to assist the Company in analyzing how the Service
              is used.
            </li>
            <li className="mb-5">
              <span className="font-bold">Usage Data</span> refers to data
              collected automatically, either generated by the use of the
              Service or from the Service infrastructure itself (for example,
              the duration of a page visit).
            </li>
            <li className="mb-5">
              <span className="font-bold">You</span> means the individual
              accessing or using the Service, or the company, or other legal
              entity on behalf of which such individual is accessing or using
              the Service, as applicable.
            </li>
          </ul>
          <p className="text-base md:text-md lg:text-lg font-bold text-[#717573] mb-3">
            {t(
              "Collecting and Using Your Personal Data Types of Data Collected Personal Data"
            )}
          </p>
          <p className="text-[#717573] mb-5">
            {t(
              "While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:"
            )}
          </p>
          <ul
            className="text-[#717573] mb-6 md:mb-8"
            style={{
              listStyleType: "disc",
            }}
          >
            <li className="mb-5">Email address</li>
            <li className="mb-5">First name and last name</li>
            <li className="mb-5">Usage Data</li>
          </ul>
          <p className="text-base md:text-md lg:text-lg mb-3 font-bold">
            {t("Usage Data")}
          </p>
          <p className="mb-5">
            Usage Data is collected automatically when using the Service.
          </p>
          <p className="text-[#717573] mb-5">
            Usage Data may include information such as Your Device's Internet
            Protocol address (e.g. IP address), browser type, browser version,
            the pages of our Service that You visit, the time and date of Your
            visit, the time spent on those pages, unique device identifiers and
            other diagnostic data.
          </p>
          <p className="text-[#717573] mb-5">
            When You access the Service by or through a mobile device, We may
            collect certain information automatically, including, but not
            limited to, the type of mobile device You use, Your mobile device
            unique ID, the IP address of Your mobile device, Your mobile
            operating system, the type of mobile Internet browser You use,
            unique device identifiers and other diagnostic data.
          </p>
          <p className="text-[#717573] mb-5">
            We may also collect information that Your browser sends whenever You
            visit our Service or when You access the Service by or through a
            mobile device.
          </p>
          <p className="text-base md:text-md lg:text-lg mb-3 font-bold">
            {t("Information Collected while Using the Application")}
          </p>
          <p className="text-[#717573] mb-5">
            While using Our Application, in order to provide features of Our
            Application, We may collect, with Your prior permission:
          </p>
          <ul
            className="text-[#717573] mb-6 md:mb-8"
            style={{
              listStyleType: "disc",
            }}
          >
            <li className="mb-5">
              Pictures and other information from your Device's camera and photo
              library
            </li>
          </ul>
          <p className="text-[#717573] mb-5">
            We use this information to provide features of Our Service, to
            improve and customize Our Service. The information may be uploaded
            to the Company's servers and/or a Service Provider's server or it
            may be simply stored on Your device.
          </p>
          <p className="text-[#717573] mb-5">
            You can enable or disable access to this information at any time,
            through Your Device settings
          </p>
          <p className="text-base md:text-md lg:text-lg mb-3 font-bold">
            {t("Use of Your Personal Data")}
          </p>
          <p className="text-[#717573] mb-5">
            The Company may use Personal Data for the following purposes:
          </p>
          <ul
            className="text-[#717573] mb-8 lg:mb-12"
            style={{
              listStyleType: "disc",
            }}
          >
            <li className="mb-5">
              <span className="font-bold">to provide</span> and maintain our
              Service, including to monitor the usage of our Service.
            </li>
            <li className="mb-5">
              <span className="font-bold">To manage Your Account:</span> to
              manage Your registration as a user of the Service. The Personal
              Data You provide can give You access to different functionalities
              of the Service that are available to You as a registered user.
            </li>
            <li className="mb-5">
              <span className="font-bold">
                For the performance of a contract:
              </span>{" "}
              the development, compliance and undertaking of the purchase
              contract for the products, items or services You have purchased or
              of any other contract with Us through the Service.{" "}
            </li>
            <li className="mb-5">
              <span className="font-bold">To contact You:</span> To contact You
              by email, telephone calls, SMS, or other equivalent forms of
              electronic communication, such as a mobile application's push
              notifications regarding updates or informative communications
              related to the functionalities, products or contracted services,
              including the security updates, when necessary or reasonable for
              their implementation.
            </li>
            <li className="mb-5">
              <span className="font-bold">To provide You </span> with news,
              special offers and general information about other goods, services
              and events which we offer that are similar to those that you have
              already purchased or enquired about unless You have opted not to
              receive such information.
            </li>
            <li className="mb-5">
              <span className="font-bold">To manage Your requests: </span> To
              attend and manage Your requests to Us.
            </li>
            <li className="mb-5">
              <span className="font-bold">For business transfers: </span> We may
              use Your information to evaluate or conduct a merger, divestiture,
              restructuring, reorganization, dissolution, or other sale or
              transfer of some or all of Our assets, whether as a going concern
              or as part of bankruptcy, liquidation, or similar proceeding, in
              which Personal Data held by Us about our Service users is among
              the assets transferred.
            </li>
            <li className="mb-5">
              <span className="font-bold">For other purposes:</span> We may use
              Your information for other purposes, such as data analysis,
              identifying usage trends, determining the effectiveness of our
              promotional campaigns and to evaluate and improve our Service,
              products, services, marketing and your experience.
            </li>
          </ul>
          <p className="text-[#717573] mb-5">
            We may share Your personal information in the following situations:
          </p>
          <ul
            className="text-[#717573] mb-8 lg:mb-12"
            style={{
              listStyleType: "disc",
            }}
          >
            <li className="mb-5">
              <span className="font-bold">With Service Providers:</span> We may
              share Your personal information with Service Providers to monitor
              and analyze the use of our Service, to contact You.
            </li>
            <li className="mb-5">
              <span className="font-bold">For business transfers:</span> We may
              share or transfer Your personal information in connection with, or
              during negotiations of, any merger, sale of Company assets,
              financing, or acquisition of all or a portion of Our business to
              another company.
            </li>
            <li className="mb-5">
              <span className="font-bold">With Affiliates: </span> We may share
              Your information with Our affiliates, in which case we will
              require those affiliates to honor this Privacy Policy. Affiliates
              include Our parent company and any other subsidiaries, joint
              venture partners or other companies that We control or that are
              under common control with Us.
            </li>
            <li className="mb-5">
              <span className="font-bold">With business partners: </span> We may
              share Your information with Our business partners to offer You
              certain products, services or promotions.
            </li>
            <li className="mb-5">
              <span className="font-bold">With other users: </span> when You
              share personal information or otherwise interact in the public
              areas with other users, such information may be viewed by all
              users and may be publicly distributed outside.
            </li>
            <li className="mb-5">
              <span className="font-bold">With Your consent: </span> We may
              disclose Your personal information for any other purpose with Your
              consent.
            </li>
          </ul>
          <p className="text-base md:text-md lg:text-lg mb-3 font-bold">
            {t("Retention of Your Personal Data")}
          </p>
          <p className="text-[#717573] mb-5">
            The Company will retain Your Personal Data only for as long as is
            necessary for the purposes set out in this Privacy Policy. We will
            retain and use Your Personal Data to the extent necessary to comply
            with our legal obligations (for example, if we are required to
            retain your data to comply with applicable laws), resolve disputes,
            and enforce our legal agreements and policies.
          </p>
          <p className="text-[#717573] mb-5">
            The Company will also retain Usage Data for internal analysis
            purposes. Usage Data is generally retained for a shorter period of
            time, except when this data is used to strengthen the security or to
            improve the functionality of Our Service, or We are legally
            obligated to retain this data for longer time periods.
          </p>
          <p className="text-base md:text-md lg:text-lg mb-3 font-bold text-[#717573]">
            {t("Transfer of Your Personal Data")}
          </p>
          <p className="text-[#717573] mb-5">
            Your information, including Personal Data, is processed at the
            Company's operating offices and in any other places where the
            parties involved in the processing are located. It means that this
            information may be transferred to — and maintained on — computers
            located outside of Your state, province, country or other
            governmental jurisdiction where the data protection laws may differ
            than those from Your jurisdiction.
          </p>
          <p className="text-[#717573] mb-5">
            Your consent to this Privacy Policy followed by Your submission of
            such information represents Your agreement to that transfer.
          </p>
          <p className="text-[#717573] mb-5">
            The Company will take all steps reasonably necessary to ensure that
            Your data is treated securely and in accordance with this Privacy
            Policy and no transfer of Your Personal Data will take place to an
            organization or a country unless there are adequate controls in
            place including the security of Your data and other personal
            information.
          </p>
          <p className="text-base md:text-md lg:text-lg mb-3 font-bold text-[#717573]">
            {t("Delete Your Personal Data")}
          </p>
          <p className="text-[#717573] mb-5">
            You have the right to delete or request that We assist in deleting
            the Personal Data that We have collected about You.
          </p>
          <p className="text-[#717573] mb-5">
            Our Service may give You the ability to delete certain information
            about You from within the Service.
          </p>
          <p className="text-[#717573] mb-5">
            You may update, amend, or delete Your information at any time by
            signing in to Your Account, if you have one, and visiting the
            account settings section that allows you to manage Your personal
            information. You may also contact Us to request access to, correct,
            or delete any personal information that You have provided to Us.
          </p>
          <p className="text-[#717573] mb-5">
            Please note, however, that We may need to retain certain information
            when we have a legal obligation or lawful basis to do so.
          </p>
          <p className="text-base md:text-md lg:text-lg mb-3 font-bold text-[#717573]">
            {t("Disclosure of Your Personal Data Business Transactions")}
          </p>
          <p className="text-[#717573] mb-5">
            If the Company is involved in a merger, acquisition or asset sale,
            Your Personal Data may be transferred. We will provide notice before
            Your Personal Data is transferred and becomes subject to a different
            Privacy Policy.
          </p>
          <p className="text-base md:text-md lg:text-lg mb-3 font-bold text-[#717573]">
            {t("Law enforcement")}
          </p>
          <p className="text-[#717573] mb-5">
            Under certain circumstances, the Company may be required to disclose
            Your Personal Data if required to do so by law or in response to
            valid requests by public authorities (e.g. a court or a government
            agency).
          </p>
          <p className="text-base md:text-md lg:text-lg mb-3 font-bold text-[#717573]">
            {t("Other legal requirements")}
          </p>
          <p className="text-[#717573] mb-5">
            The Company may disclose Your Personal Data in the good faith belief
            that such action is necessary to:
          </p>
          <ul
            className="text-[#717573] mb-5"
            style={{
              listStyleType: "disc",
            }}
          >
            <li className="mb-5">Comply with a legal obligation</li>
            <li className="mb-5">
              Protect and defend the rights or property of the Company
            </li>
            <li className="mb-5">
              Prevent or investigate possible wrongdoing in connection with the
              Service
            </li>
            <li className="mb-5">
              Protect the personal safety of Users of the Service or the public
            </li>
            <li className="mb-5">Protect against legal liability</li>
          </ul>
          <p className="text-base md:text-md lg:text-lg mb-3 font-bold text-[#717573]">
            {t("Security of Your Personal Data")}
          </p>
          <p className="text-[#717573] mb-5">
            The security of Your Personal Data is important to Us, but remember
            that no method of transmission over the Internet, or method of
            electronic storage is 100% secure. While We strive to use
            commercially acceptable means to protect Your Personal Data, We
            cannot guarantee its absolute security.
          </p>
          <p className="text-base md:text-md lg:text-lg mb-3 font-bold text-[#717573]">
            {t("Children's Privacy")}
          </p>
          <p className="text-[#717573] mb-5">
            Our Service does not address anyone under the age of 13. We do not
            knowingly collect personally identifiable information from anyone
            under the age of 13. If You are a parent or guardian and You are
            aware that Your child has provided Us with Personal Data, please
            contact Us. If We become aware that We have collected Personal Data
            from anyone under the age of 13 without verification of parental
            consent, We take steps to remove that information from Our servers.
          </p>
          <p className="text-[#717573] mb-5">
            If We need to rely on consent as a legal basis for processing Your
            information and Your country requires consent from a parent, We may
            require Your parent's consent before We collect and use that
            information.
          </p>
          <p className="text-base md:text-md lg:text-lg mb-3 font-bold text-[#717573]">
            {t("Links to Other Websites")}
          </p>
          <p className="text-[#717573] mb-5">
            Our Service may contain links to other websites that are not
            operated by Us. If You click on a third party link, You will be
            directed to that third party's site. We strongly advise You to
            review the Privacy Policy of every site You visit.
          </p>
          <p className="text-[#717573] mb-5">
            We have no control over and assume no responsibility for the
            content, privacy policies or practices of any third party sites or
            services.
          </p>
          <p className="text-base md:text-md lg:text-lg mb-3 font-bold text-[#717573]">
            {t("Changes to this Privacy Policy")}
          </p>
          <p className="text-[#717573] mb-5">
            We may update Our Privacy Policy from time to time. We will notify
            You of any changes by posting the new Privacy Policy on this page.
          </p>
          <p className="text-[#717573] mb-5">
            We will let You know via email and/or a prominent notice on Our
            Service, prior to the change becoming effective and update the "Last
            updated" date at the top of this Privacy Policy.
          </p>
          <p className="text-[#717573] mb-5">
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </p>
          <p className="text-base md:text-md lg:text-lg mb-3 font-bold text-[#717573]">
            {t("contact us")}
          </p>
          <p className="text-[#717573] mb-5">
            If you have any questions about this Privacy Policy, You can contact
            us:
          </p>
          <ul
            className="text-[#717573] mb-5"
            style={{
              listStyleType: "disc",
            }}
          >
            <li>By email: sahlsupply85@gmail.com</li>
          </ul>
          <p className="text-[#717573]">
            Generated using{" "}
            <a
              href="https://www.freeprivacypolicy.com/free-privacy-policy-generator/"
              target="_blank"
              rel="noreferrer"
              className=" duration-300 text-green-400 hover:text-blue-500"
            >
              {t("Free Privacy Policy Generator.")}
            </a>
          </p>
        </div>
      ) : i18n.language === "ar" ? (
        <div className="py-5 container mx-auto px-8">
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-center mb-4 font-bold">
            سياسة الخصوصية لـ Alternative
          </p>
          <p className="text-base md:text-md lg:text-lg xl:text-xl mb-4 font-bold">
            سياسة الخصوصية
          </p>
          <div className="flex items-center justify-end text-[#717573] mb-3">
            <p>آخر تحديث: 13 نوفمبر 2023</p>
          </div>
          <p className="mb-2 text-[#717573]">
            تصف سياسة الخصوصية هذه سياساتنا وإجراءاتنا بخصوص جمع واستخدام والكشف
            عن معلوماتك عند استخدامك للخدمة وتخبرك عن حقوق الخصوصية الخاصة بك
            وكيف يحميك القانون.
          </p>
          <p className="text-[#717573] inline mx-1 mb-4">
            نستخدم بياناتك الشخصية لتقديم وتحسين الخدمة. باستخدامك للخدمة، توافق
            على جمع واستخدام المعلومات وفقاً لسياسة الخصوصية هذه. تم إنشاء سياسة
            الخصوصية هذه بمساعدة
          </p>{" "}
          <a
            href="https://www.freeprivacypolicy.com/free-privacy-policy-generator/"
            target="_blank"
            rel="noreferrer"
            className="duration-300 text-green-400 hover:text-blue-500"
          >
            مُنشئ سياسة الخصوصية المجاني.
          </a>
          <p className="text-md md:text-lg lg:text-xl xl:text-2xl font-extrabold text-center my-5">
            التفسير والتعريفات
          </p>
          <p className="text-base md:text-md lg:text-lg mb-2 font-bold">
            التفسير
          </p>
          <p className="text-[#717573] mb-5">
            الكلمات التي تبدأ بحروف كبيرة لها معاني محددة في ظل الشروط التالية.
            سيكون للتعاريف التالية نفس المعنى سواء ظهرت بصيغة المفرد أو الجمع.
          </p>
          <p className="text-base md:text-md lg:text-lg mb-2 font-bold">
            التعريفات
          </p>
          <p className="text-[#717573] mb-4">لأغراض سياسة الخصوصية هذه:</p>
          <ul
            className="text-[#717573] mb-8 lg:mb-12"
            style={{
              listStyleType: "disc",
            }}
          >
            <li className="mb-5">
              <span className="font-bold">الحساب:</span> يعني حسابًا فريدًا تم
              إنشاؤه لك للوصول إلى خدمتنا أو أجزاء منها.
            </li>
            <li className="mb-5">
              <span className="font-bold">التابع:</span> يعني كيانًا يسيطر عليه
              أو يخضع لسيطرة مشتركة مع أحد الأطراف.
            </li>
            <li className="mb-5">
              <span className="font-bold">التطبيق:</span> يشير إلى Alternative،
              وهو برنامج مقدم من الشركة.
            </li>
            <li className="mb-5">
              <span className="font-bold">الشركة:</span> تشير إلى Alternative،
              المعروفة أيضًا بـ "نحن" أو "لنا" في هذه الاتفاقية.
            </li>
            <li className="mb-5">
              <span className="font-bold">البلد:</span> يشير إلى مصر.
            </li>
            <li className="mb-5">
              <span className="font-bold">الجهاز:</span> يعني أي جهاز يمكنه
              الوصول إلى الخدمة مثل الكمبيوتر أو الهاتف المحمول.
            </li>
            <li className="mb-5">
              <span className="font-bold">البيانات الشخصية:</span> هي أي معلومات
              تتعلق بشخص يمكن تحديد هويته.
            </li>
            <li className="mb-5">
              <span className="font-bold">الخدمة:</span> تشير إلى التطبيق.
            </li>
            <li className="mb-5">
              <span className="font-bold">مزود الخدمة:</span> يعني أي شخص أو جهة
              تقوم بمعالجة البيانات نيابة عن الشركة.
            </li>
            <li className="mb-5">
              <span className="font-bold">بيانات الاستخدام:</span> تشير إلى
              البيانات التي يتم جمعها تلقائيًا عند استخدام الخدمة.
            </li>
            <li className="mb-5">
              <span className="font-bold">أنت:</span> تعني الفرد الذي يستخدم
              الخدمة، أو الشركة أو الجهة القانونية التي يمثلها الفرد.
            </li>
          </ul>
          <p className="text-base md:text-md lg:text-lg font-bold text-[#717573] mb-3">
            جمع واستخدام بياناتك الشخصية
          </p>
          <p className="text-[#717573] mb-5">
            أثناء استخدامنا لخدمتنا، قد نطلب منك تقديم بعض المعلومات الشخصية
            التي يمكن استخدامها للتواصل معك أو التعرف عليك.
          </p>
          <ul
            className="text-[#717573] mb-6 md:mb-8"
            style={{
              listStyleType: "disc",
            }}
          >
            <li className="mb-5">البريد الإلكتروني</li>
            <li className="mb-5">الاسم الأول واسم العائلة</li>
            <li className="mb-5">بيانات الاستخدام</li>
          </ul>
          <p className="text-base md:text-md lg:text-lg mb-3 font-bold">
            بيانات الاستخدام
          </p>
          <p className="mb-5">
            يتم جمع بيانات الاستخدام تلقائيًا عند استخدام الخدمة.
          </p>
        </div>
      ) : (
        <div className="py-5 container mx-auto px-8">
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-center mb-4 font-bold">
            Alternative için Gizlilik Politikası
          </p>
          <p className="text-base md:text-md lg:text-lg xl:text-xl mb-4 font-bold">
            Gizlilik Politikası
          </p>
          <div className="flex items-center justify-end text-[#717573] mb-3">
            <p>Son güncelleme: 13 Kasım 2023</p>
          </div>
          <p className="mb-2 text-[#717573]">
            Bu Gizlilik Politikası, hizmeti kullandığınızda bilgilerinizi
            toplama, kullanma ve ifşa etme ile ilgili politikalarımızı ve
            prosedürlerimizi açıklar ve gizlilik haklarınızı ve yasanın sizi
            nasıl koruduğunu anlatır.
          </p>
          <p className="text-[#717573] inline mx-1 mb-4">
            Kişisel verilerinizi hizmeti sağlamak ve iyileştirmek için
            kullanıyoruz. Hizmeti kullanarak, bu Gizlilik Politikası'na uygun
            olarak bilgilerin toplanmasını ve kullanılmasını kabul edersiniz. Bu
            Gizlilik Politikası, şu yardımıyla oluşturulmuştur:
          </p>{" "}
          <a
            href="https://www.freeprivacypolicy.com/free-privacy-policy-generator/"
            target="_blank"
            rel="noreferrer"
            className="duration-300 text-green-400 hover:text-blue-500"
          >
            Ücretsiz Gizlilik Politikası Oluşturucu.
          </a>
          <p className="text-md md:text-lg lg:text-xl xl:text-2xl font-extrabold text-center my-5">
            Yorum ve Tanımlar
          </p>
          <p className="text-base md:text-md lg:text-lg mb-2 font-bold">
            Yorum
          </p>
          <p className="text-[#717573] mb-5">
            Baş harfi büyük olan kelimelerin aşağıdaki koşullarda tanımlanmış
            anlamları vardır. Aşağıdaki tanımlar, tekil veya çoğul olmalarına
            bakılmaksızın aynı anlama sahip olacaktır.
          </p>
          <p className="text-base md:text-md lg:text-lg mb-2 font-bold">
            Tanımlar
          </p>
          <p className="text-[#717573] mb-4">
            Bu Gizlilik Politikası'nın amaçları doğrultusunda:
          </p>
          <ul
            className="text-[#717573] mb-8 lg:mb-12"
            style={{
              listStyleType: "disc",
            }}
          >
            <li className="mb-5">
              <span className="font-bold">Hesap:</span> Hizmetimize veya
              hizmetimizin bir kısmına erişmek için oluşturulmuş benzersiz bir
              hesap anlamına gelir.
            </li>
            <li className="mb-5">
              <span className="font-bold">Bağlı Kuruluş:</span> Bir tarafla
              ortak kontrol altında olan bir kuruluş anlamına gelir.
            </li>
            <li className="mb-5">
              <span className="font-bold">Uygulama:</span> Şirket tarafından
              sağlanan yazılım programı olan Alternative anlamına gelir.
            </li>
            <li className="mb-5">
              <span className="font-bold">Şirket:</span> Alternative, bu
              sözleşmede "Şirket", "Biz", "Bizim" veya "Bizim Tarafımızdan"
              olarak anılmaktadır.
            </li>
            <li className="mb-5">
              <span className="font-bold">Ülke:</span> Mısır anlamına gelir.
            </li>
            <li className="mb-5">
              <span className="font-bold">Cihaz:</span> Hizmete erişim
              sağlayabilen bilgisayar veya cep telefonu gibi herhangi bir cihaz
              anlamına gelir.
            </li>
            <li className="mb-5">
              <span className="font-bold">Kişisel Veriler:</span> Kimliği
              belirlenebilir bir kişiye ilişkin herhangi bir bilgi anlamına
              gelir.
            </li>
            <li className="mb-5">
              <span className="font-bold">Hizmet:</span> Uygulama anlamına
              gelir.
            </li>
            <li className="mb-5">
              <span className="font-bold">Hizmet Sağlayıcı:</span> Şirket adına
              veri işleyen herhangi bir kişi veya kuruluş anlamına gelir.
            </li>
            <li className="mb-5">
              <span className="font-bold">Kullanım Verileri:</span> Hizmeti
              kullandığınızda otomatik olarak toplanan veriler anlamına gelir.
            </li>
            <li className="mb-5">
              <span className="font-bold">Siz:</span> Hizmeti kullanan birey
              veya bireyin adına hareket ettiği şirket veya tüzel kişilik
              anlamına gelir.
            </li>
          </ul>
          <p className="text-base md:text-md lg:text-lg font-bold text-[#717573] mb-3">
            Kişisel Verilerinizin Toplanması ve Kullanımı
          </p>
          <p className="text-[#717573] mb-5">
            Hizmetimizi kullanırken, sizinle iletişime geçmek veya sizi
            tanımlamak için kullanılabilecek belirli kişisel bilgileri
            sağlamanızı isteyebiliriz.
          </p>
          <ul
            className="text-[#717573] mb-6 md:mb-8"
            style={{
              listStyleType: "disc",
            }}
          >
            <li className="mb-5">E-posta adresi</li>
            <li className="mb-5">Ad ve Soyad</li>
            <li className="mb-5">Kullanım Verileri</li>
          </ul>
          <p className="text-base md:text-md lg:text-lg mb-3 font-bold">
            Kullanım Verileri
          </p>
          <p className="mb-5">
            Kullanım verileri, hizmeti kullandığınızda otomatik olarak toplanır.
          </p>
        </div>
      )}
    </>
  );
};

export default Privacy;
