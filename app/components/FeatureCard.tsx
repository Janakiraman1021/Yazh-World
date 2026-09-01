import type { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  badge?: string;
};

export function FeatureCard({ icon, title, description, badge = "FEATURE" }: FeatureCardProps) {
  return (
    <article className="living-card p-7 group">
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-5 border-b border-[rgba(238,243,231,0.08)] pb-4">
          <div className="grid size-13 place-items-center rounded-xl bg-[rgba(168,224,99,0.12)] text-[#a8e063] border border-[#a8e063]/25 transition-all group-hover:bg-[#a8e063] group-hover:text-[#23261f] group-hover:scale-105">
            {icon}
          </div>
          <span className="living-badge text-[10px]">
            {badge}
          </span>
        </div>

        <h3 className="text-xl font-medium text-white group-hover:text-[#c6f19d] transition-colors">
          {title}
        </h3>
        
        <p className="mt-3 text-sm leading-relaxed text-[#a4aaa0] font-normal">
          {description}
        </p>
      </div>
    </article>
  );
}
