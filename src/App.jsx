function AlertBtn({ message, children }) {
  return (
    <button
      onClick={() => alert(message)}
      className="ms-20 mt-20 text-xl font-bold border rounded-md py-2 px-8 bg-gray-300"
    >
      {children}
    </button>
  );
}

const ditails = "Masud Valo houe jaw";

export default function Batton() {
  return (
    <div>
      <AlertBtn message="Please Puse the movie">Playing Movie</AlertBtn>
      <AlertBtn message={ditails}>Masud Vai</AlertBtn>
    </div>
  );
}
