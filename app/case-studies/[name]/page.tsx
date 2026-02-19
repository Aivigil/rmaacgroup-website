import Navbar from "@/components/ui/Navbar";
import { notFound } from "next/navigation";
import Image from "next/image";
import AboutProjectSection from "@/components/case-study/AboutProjectSection";
import VisionSection from "@/components/case-study/VisionSection";
import BrandingSection from "@/components/case-study/BrandingSection";
import WebsiteSection from "@/components/case-study/WebsiteSection";
import ChallengesSection from "@/components/case-study/ChallengesSection";
import ConclusionSection from "@/components/case-study/ConclusionSection";
import MoreWorkSection from "@/components/case-study/MoreWorkSection";
import { caseStudies } from "@/util/caseStudiesData";

interface CaseStudyPageProps {
  params: Promise<{
    name: string;
  }>;
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  // Await the params as required by Next.js 15
  const resolvedParams = await params;

  // Find the case study based on the URL parameter
  const caseStudy = caseStudies.find(
    (study) => study.id === resolvedParams.name
  );

  // If case study not found, show 404
  if (!caseStudy) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0f1114]">
      <Navbar />
      {/* Header Section */}
      <section className="bg-[#0f1114] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Main Content - Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-32 items-start">
            {/* Left Column - Large Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-normal text-white">
                {caseStudy.title}
              </h1>
            </div>

            {/* Right Column - Description */}
            <div className="flex justify-start lg:justify-end">
              <div className="max-w-sm sm:max-w-md lg:max-w-lg">
                <p className="text-gray-300 text-sm sm:text-base">
                  {caseStudy.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Main Image Section */}
      <section className="bg-[#0f1114] px-4 sm:px-6 lg:px-20 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] rounded-lg overflow-hidden">
            <Image
              src={caseStudy.images[0]}
              alt={`${caseStudy.title} main image`}
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
          </div>
        </div>
      </section>

      {/* Dynamic Sections */}
      {caseStudy.sections?.aboutProject && (
        <AboutProjectSection
          title={caseStudy.sections.aboutProject.title}
          content={caseStudy.sections.aboutProject.content}
          scope={caseStudy.sections.aboutProject.scope}
          rightTitle={caseStudy.sections.aboutProject.rightTitle}
          rightContent={caseStudy.sections.aboutProject.rightContent}
          focus={caseStudy.sections.aboutProject.focus}
          challenges={caseStudy.sections.aboutProject.challenges}
          roles={caseStudy.sections.aboutProject.roles}
          technical={caseStudy.sections.aboutProject.technical}
        />
      )}

      {caseStudy.sections?.vision && (
        <VisionSection
          title={caseStudy.sections.vision.title}
          content={caseStudy.sections.vision.content}
          points={caseStudy.sections.vision.points}
        />
      )}

      {caseStudy.sections?.branding && (
        <BrandingSection
          title={caseStudy.sections.branding.title}
          content={caseStudy.sections.branding.content}
          points={caseStudy.sections.branding.points}
          cta={caseStudy.sections.branding.cta}
          image={caseStudy.sections.branding.image}
        />
      )}

      {caseStudy.sections?.website && (
        <WebsiteSection
          title={caseStudy.sections.website.title}
          content={caseStudy.sections.website.content}
          features={caseStudy.sections.website.features}
          image={caseStudy.sections.website.image}
        />
      )}

      {caseStudy.sections?.challenges && (
        <ChallengesSection
          title={caseStudy.sections.challenges.title}
          content={caseStudy.sections.challenges.content}
          cta={caseStudy.sections.challenges.cta}
          improvements={caseStudy.sections.challenges.improvements}
          marketing={caseStudy.sections.challenges.marketing}
        />
      )}

      {caseStudy.sections?.conclusion && (
        <ConclusionSection
          title={caseStudy.sections.conclusion.title}
          content={caseStudy.sections.conclusion.content}
        />
      )}

      <MoreWorkSection />
    </main>
  );
}
