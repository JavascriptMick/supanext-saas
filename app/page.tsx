import Link from "next/link";
import Image from "next/image";
import ClientIcon from "./components/ClientIcon";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto m-5">
        {/*  Hero section */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="m-5">
                <h1 className="text-5xl font-bold mb-4">
                  Build Your Next SaaS Faster
                </h1>
                <p className="text-gray-700 text-lg mb-8">
                  With SupaNext SaaS, you can easily get started building your
                  next web application. Our pre-configured tech stack and
                  industry leading features make it easy to get up and running
                  in no time. Look! this guy is working so fast, his hands are
                  just a blur.. you could be this fast.
                </p>
                <Link
                  href="/signup"
                  className="inline-block py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Get Started
                </Link>
              </div>
              <div>
                <Image
                  src="/images/supanuxt_logo_200.png"
                  alt="SupaNext SaaS Logo"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mb-8">
              <h2 className="text-3xl font-bold mb-4 md:mb-0">Tech Stack</h2>
            </div>
            <div className="flex flex-col md:flex-row items-center mb-16">
              <div className="md:w-full">
                <ul className="grid grid-cols-3 gap-10 list-none">
                  <li>
                    <ClientIcon icon="cib:next-js" className="h-12 w-12 mb-2" />
                    <h3 className="text-xl font-medium text-gray-900">Next</h3>
                    <p className="mt-2 text-base text-gray-500">
                      The React Framework for the Web
                    </p>
                  </li>
                  <li>
                    <ClientIcon
                      icon="skill-icons:supabase-dark"
                      className="h-12 w-12 mb-2"
                    />
                    <h3 className="text-xl font-medium text-gray-900">
                      Supabase
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      Auth including OAuth + Postgresql instance
                    </p>
                  </li>
                  <li>
                    <ClientIcon
                      icon="skill-icons:postgresql-dark"
                      className="h-12 w-12 mb-2"
                    />
                    <h3 className="text-xl font-medium text-gray-900">
                      PostgreSQL
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      Relational Database
                    </p>
                  </li>
                  <li>
                    <ClientIcon
                      icon="logos:prisma"
                      className="h-12 w-12 mb-2"
                    />
                    <h3 className="text-xl font-medium text-gray-900">
                      Prisma
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      Schema management + Strongly typed client
                    </p>
                  </li>
                  <li>
                    <ClientIcon
                      icon="simple-icons:trpc"
                      className="h-12 w-12 mb-2"
                    />
                    <h3 className="text-xl font-medium text-gray-900">TRPC</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Server/Client communication with Strong types, SSR
                      compatible
                    </p>
                  </li>
                  <li>
                    <Image
                      src="/images/zustand_logo.png"
                      alt="Zustand Logo"
                      width={48}
                      height={48}
                    />
                    <h3 className="text-xl font-medium text-gray-900">
                      Zustand
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      A small, fast and scalable bearbones state-management
                      solution using simplified flux principles
                    </p>
                  </li>
                  <li>
                    <ClientIcon
                      icon="logos:stripe"
                      className="h-12 w-12 mb-2"
                    />
                    <h3 className="text-xl font-medium text-gray-900">
                      Stripe
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      Payments including Webhook integration
                    </p>
                  </li>
                  <li>
                    <ClientIcon
                      icon="skill-icons:tailwindcss-dark"
                      className="h-12 w-12 mb-2"
                    />
                    <h3 className="text-xl font-medium text-gray-900">
                      Tailwind
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      A utility-first CSS framework
                    </p>
                  </li>
                  <li>
                    <ClientIcon icon="logos:react" className="h-12 w-12 mb-2" />
                    <h3 className="text-xl font-medium text-gray-900">React</h3>
                    <p className="mt-2 text-base text-gray-500">
                      The library for web and native user interfaces
                    </p>
                  </li>
                  <li>
                    <ClientIcon
                      icon="logos:openai-icon"
                      className="h-12 w-12 mb-2"
                    />
                    <h3 className="text-xl font-medium text-gray-900">
                      OpenAI
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      AI Completions including Note generation from prompt
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mb-8">
              <h2 className="text-3xl font-bold mb-4 md:mb-0">Features</h2>
            </div>
            {/*  User Management (text left) */}
            <div className="flex flex-col md:flex-row-reverse items-center mb-16">
              <div className="md:w-1/2 md:ml-8 mb-8 md:mb-0">
                <Image
                  src="/images/landing_user_management.jpeg"
                  alt="User Management"
                  className="w-full rounded-lg shadow-lg mb-4 md:mb-0 md:ml-4"
                  width={736}
                  height={736}
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-4">User Management</h3>
                <p className="mb-4">
                  SupaNext SaaS includes robust user management features,
                  including authentication with social login (oauth) or
                  email/password, management of user roles and permissions, and
                  multi-user/team accounts that permit multiple users to share
                  plan features including a team administration facility and
                  user roles within team. This is a great feature for businesses
                  or community groups who want to share the cost of the plan.
                </p>
              </div>
            </div>
            {/* DB Schema (text right) */}
            <div className="flex flex-col md:flex-row items-center mb-16">
              <div className="md:w-1/2 md:mr-8 mb-8 md:mb-0">
                <Image
                  src="/images/landing_db_schema_management.jpeg"
                  alt="DB Schema Management"
                  className="w-full rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4"
                  width={736}
                  height={736}
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-4">DB Schema Management</h3>
                <p className="mb-4">
                  We use Prisma for schema management to make sure you can
                  easily manage and keep track of your database schema. We also
                  utilise Prisma based strong types which, with some help from
                  TRPC, penetrate the entire stack all the way to the web front
                  end. This ensures that you can move fast with your feature
                  development, alter schema and have those type changes
                  instantly available and validated everywhere.
                </p>
              </div>
            </div>
            {/* Config (text left) */}
            <div className="flex flex-col md:flex-row-reverse items-center mb-16">
              <div className="md:w-1/2 md:ml-8 mb-8 md:mb-0">
                <Image
                  src="/images/landing_config_environment.jpeg"
                  alt="Config and Environment"
                  className="w-full rounded-lg shadow-lg mb-4 md:mb-0 md:ml-4"
                  width={736}
                  height={736}
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-4">
                  Config and Environment
                </h3>
                <p className="mb-4">
                  SupaNext SaaS includes an approach to config and environment
                  management that enables customisation and management of api
                  keys.
                </p>
              </div>
            </div>
            {/* State Management (text right) */}
            <div className="flex flex-col md:flex-row items-center mb-16">
              <div className="md:w-1/2 md:mr-8 mb-8 md:mb-0">
                <Image
                  src="/images/landing_state_management.jpeg"
                  alt="State Management"
                  className="w-full rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4"
                  width={736}
                  height={736}
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-4">State Management</h3>
                <p className="mb-4">
                  SupaNext SaaS includes multi modal state management that
                  supports both Single Page Application (SPA) pages such as
                  dashboards and Server Side Rendered (SSR) style pages for
                  public content that are crawlable by Search engines like
                  google and facilitate excellent Search Engine Optimisation
                  (SEO).
                </p>
              </div>
            </div>
            {/* Stripe (text left) */}
            <div className="flex flex-col md:flex-row-reverse items-center mb-16">
              <div className="md:w-1/2 md:ml-8 mb-8 md:mb-0">
                <Image
                  src="/images/landing_stripe_integration.jpeg"
                  alt="Stripe Integration"
                  className="w-full rounded-lg shadow-lg mb-4 md:mb-0 md:ml-4"
                  width={736}
                  height={736}
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-4">Stripe Integration</h3>
                <p className="mb-4">
                  SupaNext SaaS includes Stripe integration for subscription
                  payments including Subscription based support for multi
                  pricing and multiple plans.
                </p>
              </div>
            </div>
            {/* Tailwind (text right) */}
            <div className="flex flex-col md:flex-row items-center mb-16">
              <div className="md:w-1/2 md:mr-8 mb-8 md:mb-0">
                <Image
                  src="/images/landing_style_system.jpeg"
                  alt="Style System"
                  className="w-full rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4"
                  width={736}
                  height={736}
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-4">Style System</h3>
                <p className="mb-4">
                  SupaNext SaaS includes Tailwind integration for site styling
                  including a themable UI components with daisyUI
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
