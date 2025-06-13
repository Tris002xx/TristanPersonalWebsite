interface SkillProps {
  title: string;
  tools: { icon: React.ReactNode; toolName: string }[];
}

const Skill = ({ title, tools }: SkillProps) => {
  return (
    <section className="flex flex-col md:p-2 md:gap-2">
      <h1 className="space-grotesk-h1 text-xl p-2 md:text-6xl">{title}</h1>
      <div className="grid grid-cols-4 p-2 md:grid-cols-8 md:gap-20">
        {tools.map((tool, idx) => (
          <div
            key={idx}
            className="flex flex-col w-15 text-center md:w-25 hover:animate-pulse"
          >
            {tool.icon}
            <p className="space-grotesk-p text-xs md:text-xl">
              {tool.toolName}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
