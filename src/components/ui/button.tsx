interface ButtonProps {
  children: React.ReactNode;
  type: "red" | "blue" | "regular";
  onClick?: () => void;
}

const typeToBgColor = {
  red: "bg-red",
  blue: "bg-blue",
  regular: "bg-regular",
};

export default function Button({ children, type, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`py-[0.5rem] px-[2rem] ${typeToBgColor[type]} flex justify-center items-center text-[#fff] w-fit hover:scale-105 transition-all ease-linear shadow-md`}
    >
      <p>{children}</p>
    </button>
  );
}
