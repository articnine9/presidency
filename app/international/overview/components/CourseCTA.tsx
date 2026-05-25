"use client";

import { motion } from "framer-motion";

import CommonHeader from "@/app/components/CommonHeader";

import {
  Database,
  Settings,
  Film,
  ArrowRight,
  Flower2,
  Briefcase,
} from "lucide-react";

export default function ShortCoursesSection({ data }: any) {
  const shortCourses = data?.shortCourses;

  // ICONS
  const icons: any = {
    bigdata: Database,
    drone: Flower2,
    administration: Settings,
    film: Film,
  };

  return (
    <section
      className="
        overflow-hidden
        bg-[#f8f8f8]
        py-20
        md:py-28
        max-md:py-14
      "
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 max-md:px-4">
        {/* HEADER */}
        <CommonHeader
          tag={shortCourses?.tag}
          title={shortCourses?.title}
          highlight={shortCourses?.highlight}
          description={shortCourses?.description}
          align="center"
          primaryColor="#0A8F96"
        />

        {/* DESKTOP COURSE LIST */}
        <div className="mt-14 hidden space-y-5 md:block">
          {shortCourses?.courses?.map((item: any, index: number) => {
            const Icon = icons[item.icon as keyof typeof icons] || Database;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                viewport={{
                  once: true,
                }}
                className="
                    group
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    border
                    border-[#d7ecee]
                    bg-white
                    px-6
                    py-5
                    transition-all
                    duration-300
                    hover:shadow-lg
                  "
              >
                {/* LEFT */}
                <div className="flex items-center gap-4">
                  {/* ICON */}
                  <div
                    className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#e8f7f8]
                      "
                  >
                    <Icon
                      className="
                          h-6
                          w-6
                          text-[#0A8F96]
                        "
                    />
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                        text-sm
                        font-semibold
                        leading-snug
                        text-[#183153]
                        md:text-lg
                      "
                  >
                    {item.title}
                  </h3>
                </div>

                {/* BADGE */}
                <span
                  className="
                      rounded-full
                      bg-[#e8f7f8]
                      px-4
                      py-2
                      text-xs
                      text-[#0A8F96]
                      md:text-sm
                    "
                >
                  Short Course
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* MOBILE VIEW */}
        <div className="mt-8 space-y-3 md:hidden">
          {shortCourses?.courses?.map((item: any, index: number) => {
            const Icon = icons[item.icon as keyof typeof icons] || Database;

            return (
              <div
                key={index}
                className="
                    rounded-2xl
                    border
                    border-[#f0ddd2]
                    bg-[#fbfbfa]
                    px-4
                    py-4
                    shadow-sm
                  "
              >
                <div className="flex items-start justify-between gap-3">
                  {/* LEFT */}
                  <div className="flex items-start gap-3">
                    {/* ICON */}
                    <div
                      className="
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          bg-[#fff4ed]
                          text-[#ff7a2f]
                        "
                    >
                      <Icon className="h-4 w-4" />
                    </div>

                    {/* TITLE */}
                    <h3
                      className="
                          text-[13px]
                          leading-6
                          text-[#1E3557]
                        "
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* BADGE */}
                  <span
                    className="
                        shrink-0
                        rounded-full
                        bg-[#fff4ed]
                        px-2
                        py-1
                        text-[9px]
                        text-[#ff7a2f]
                      "
                  >
                    Short Course
                  </span>
                </div>
              </div>
            );
          })}

          {/* INFO BOX 1 */}
          <div
            className="
              rounded-2xl
              border
              border-[#f0ddd2]
              bg-white
              px-4
              py-4
            "
          >
            <p
              className="
                text-[11px]
                leading-6
                text-[#1E3557]
              "
            >
              {shortCourses?.note}
            </p>
          </div>

          {/* INFO BOX 2 */}
          <div
            className="
              rounded-2xl
              border
              border-[#f0ddd2]
              bg-white
              px-4
              py-4
            "
          >
            <p
              className="
                text-[11px]
                leading-6
                text-[#1E3557]
              "
            >
              {shortCourses?.arts?.join(", ")} are also offered through the
              School of Liberal Arts and Sciences.
            </p>
          </div>

          {/* MOBILE CTA */}
          <div
            className="
              rounded-2xl
              bg-[#183B6B]
              px-5
              py-5
              text-white
              shadow-lg
            "
          >
            <h3
              className="
                text-[24px]
                leading-tight
                text-white
              "
            >
              Ready to Start Your{" "}
              <span
                className="
                  italic
                  text-[#0A8F96]
                "
              >
                Journey?
              </span>
            </h3>

            <p
              className="
                mt-3
                text-[11px]
                leading-6
                text-white/80
              "
            >
              Apply now and take the first step toward studying at Presidency
              University. Our admissions team is here to support you at every
              stage.
            </p>

            {/* CONTACT */}
            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-3">
                <Briefcase
                  className="
                    h-4
                    w-4
                    text-[#0A8F96]
                  "
                />

                <span
                  className="
                    text-[10px]
                    text-white/90
                  "
                >
                  admissions@presidencyuniversity.in
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Briefcase
                  className="
                    h-4
                    w-4
                    text-[#0A8F96]
                  "
                />

                <span
                  className="
                    text-[10px]
                    text-white/90
                  "
                >
                  +91 9029022222
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Briefcase
                  className="
                    h-4
                    w-4
                    text-[#0A8F96]
                  "
                />

                <span
                  className="
                    text-[10px]
                    text-white/90
                  "
                >
                  apply.presidencyuniversity.in
                </span>
              </div>
            </div>

            {/* BUTTON */}
            <a
              href="/apply"
              className="
                mt-6
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#0A8F96]
                px-5
                py-3
                text-[11px]
                tracking-wide
                text-white
                transition-all
                duration-300
                hover:bg-[#0c7f85]
              "
            >
              APPLY NOW
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* DESKTOP INFO BOXES */}
        <div className="mt-10 hidden gap-6 md:grid md:grid-cols-2">
          {/* BOX 1 */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-[#d7ecee]
              bg-white
              p-6
            "
          >
            <div
              className="
                absolute
                left-0
                top-0
                h-full
                w-[4px]
                bg-[#0A8F96]
              "
            />

            <div className="flex items-start gap-4">
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#e8f7f8]
                "
              >
                <Briefcase
                  className="
                    h-5
                    w-5
                    text-[#0A8F96]
                  "
                />
              </div>

              <div>
                <h3
                  className="
                    text-lg
                    font-semibold
                    text-[#183153]
                  "
                >
                  Industry-Aligned Learning
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-relaxed
                    text-[#5b6475]
                  "
                >
                  {shortCourses?.note}
                </p>
              </div>
            </div>
          </motion.div>

          {/* BOX 2 */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{ once: true }}
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-[#d7ecee]
              bg-white
              p-6
            "
          >
            <div
              className="
                absolute
                left-0
                top-0
                h-full
                w-[4px]
                bg-[#0A8F96]
              "
            />

            <div className="flex items-start gap-4">
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#e8f7f8]
                "
              >
                <Flower2
                  className="
                    h-5
                    w-5
                    text-[#0A8F96]
                  "
                />
              </div>

              <div>
                <h3
                  className="
                    text-lg
                    font-semibold
                    text-[#183153]
                  "
                >
                  Indian Classical Arts
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-relaxed
                    text-[#5b6475]
                  "
                >
                  {shortCourses?.arts?.join(", ")} are also offered through the
                  School of Liberal Arts and Sciences.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* DESKTOP CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{ once: true }}
          className="
            mt-10
            hidden
            flex-col
            items-center
            justify-between
            gap-8
            rounded-2xl
            bg-[#12345b]
            px-8
            py-10
            md:flex
            md:flex-row
            md:px-12
          "
        >
          {/* LEFT */}
          <div>
            <h2
              className="
                text-3xl
                font-bold
                text-white
                md:text-4xl
              "
            >
              Your Next Move{" "}
              <span
                className="
                  italic
                  text-[#0A8F96]
                "
              >
                Awaits
              </span>
            </h2>

            <p
              className="
                mt-4
                text-sm
                text-white/70
                md:text-base
              "
            >
              Start your global academic journey with Presidency University
            </p>
          </div>

          {/* BUTTON */}
          <a
            href="/apply"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-[#0A8F96]
              px-8
              py-4
              text-white
              transition-all
              duration-300
              hover:bg-[#0c7f85]
            "
          >
            APPLY NOW
            <ArrowRight
              className="
                h-5
                w-5
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
