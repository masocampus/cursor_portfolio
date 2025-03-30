import React from 'react';
import Image from 'next/image';

interface ProfileProps {
  name: string;
  role: string;
  description: string;
  imageUrl?: string;
}

const Profile: React.FC<ProfileProps> = ({ name, role, description, imageUrl }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl font-bold mb-4">
          안녕하세요, <br />저는 <span className="text-blue-500">{name}</span>입니다
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">{role}</p>
        <p className="text-base mb-6">{description}</p>
        <a href="#contact">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors">
            연락하기
          </button>
        </a>
      </div>
      <div className="flex justify-center">
        <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-800">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={`${name}의 프로필 이미지`}
              fill
              sizes="256px"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
              프로필 이미지
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile; 