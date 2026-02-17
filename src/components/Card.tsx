import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  onClick?: () => void;
}

export default function Card({ title, description, imageUrl, tags, onClick }: CardProps) {
  return (
    <div
      className="transform cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
      onClick={onClick}
    >
      <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
        <Image src={imageUrl} alt={title} fill className="object-contain p-4" />
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>

        <p className="mb-4 line-clamp-3 text-gray-600 dark:text-gray-300">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
