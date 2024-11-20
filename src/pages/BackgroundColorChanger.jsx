import UseAppContext from "../hook/UseAppContext";

export default function BackgroundColorChanger() {
  const { backgroundColor, setBackgroundColor } = UseAppContext();

  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBackgroundColor(randomColor);
  };
  return (
    <div className="p-6 rounded-lg" style={{ backgroundColor: backgroundColor, minHeight: "200px" }}>
      <button onClick={generateRandomColor} className="bg-blue-500 hover:bg-blue5700 text-white font-bold py-2 px-4 rounded hover:bg-blue-800">
        Change Color{" "}
      </button>
    </div>
  );
}
