import React from 'react';

interface Skill {
  name: string;
  level?: number; // 1-100 사이의 숫자 (선택 사항)
  icon?: React.ReactNode;
}

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-10 text-center">기술 스택</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg text-center hover:shadow-md transition-shadow"
          >
            {skill.icon && <div className="mb-3 flex justify-center">{skill.icon}</div>}
            <div className="text-lg font-medium mb-2">{skill.name}</div>
            {skill.level && (
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-blue-500 h-2.5 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills; 