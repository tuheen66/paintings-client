import { Typewriter } from "react-simple-typewriter";

const TypeWriter = () => {
  const handleType = (count, number) => {
    // access word count number
    console.log(count, number);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <div className="App text-center mt-12">
      <h1
        className="py-6 my-auto text-4xl font-bold"
        // style={{ paddingTop: "5rem", margin: "auto 0", fontWeight: "normal" }}
      >
        Sub-Categories -{" "}
        <span className="text-4xl font-bold text-red-500">
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[
              "Oil Painting",
              "Portrait Drawing",
              "Watercolor Painting",
              "Landscape Painting",
              "Charcoal Sketching",
              "Cartoon Drawing",
            ]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </h1>
    </div>
  );
};

export default TypeWriter;
