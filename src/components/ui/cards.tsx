interface CardProps {
  image?: string;
  title: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Card({image, title, children, onClick}: CardProps) {
  return (
    <div onClick={onClick} className="flex cursor-pointer flex-col gap-[1rem] justify-start items-center text-center p-[2rem] rounded-lg border-[1px] border-border bg-[#fff] shadow-md w-full h-full transition-all ease-linear hover:scale-105">
      {
        image && (
          <img src={image} alt={title} className="w-full h-auto" />
        )
      }
      <p className="font-medium text-regular uppercase">{title}</p>
      <p>{children}</p>
    </div>
  );
}
