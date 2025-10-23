import type { CaseStudyMetadata } from "@/types";

const CaseStudiesHeader = ({
  timeline,
  role,
  sector,
  for: forCompany,
  platform,
  techStack,
  stage,
}: CaseStudyMetadata) => {
  return (
    <div className="mb-10 grid grid-cols-2 gap-x-20 gap-y-4 md:grid-cols-3">
      <div>
        <p className="text-muted-foreground/80">When</p>
        <p>{timeline}</p>
      </div>
      <div>
        <p className="text-muted-foreground/80">Sector</p>
        <p>{sector}</p>
      </div>
      <div>
        <p className="text-muted-foreground/80">Role</p>
        <p>{role}</p>
      </div>
      <div>
        <p className="text-muted-foreground/80">For</p>
        <a
          className="text-primary underline underline-offset-4"
          href={forCompany.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          {forCompany.name}
        </a>
      </div>
      <div>
        <p className="text-muted-foreground/80">Stage</p>
        <p>{stage}</p>
      </div>
      <div>
        <p className="text-muted-foreground/80">Plaform</p>
        <p>{platform}</p>
      </div>
      <div className="col-span-2 md:col-span-1">
        <p className="text-muted-foreground/80">Tech stack</p>
        <p>{techStack}</p>
      </div>
    </div>
  );
};

export default CaseStudiesHeader;
