import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import ActionAreaCard from "./components/AdCard";
function App() {
  return (
    <>
      <PrimarySearchAppBar />
      <div className="flex flex-wrap gap-4 justify-center mt-4">
        <ActionAreaCard
          title="Card 1"
          description="This is the first card"
          image="https://media.wired.com/photos/63b8d0a771c6b526845f15a6/3:2/w_2400,h_1600,c_limit/CES-2023-PEUGEOT_INCEPTION_CONCEPT_2301CN202.jpg"
          price={100}
        />
        <ActionAreaCard
          title="Card 2"
          description="This is the second card"
          image="https://media.wired.com/photos/63b8d0a771c6b526845f15a6/3:2/w_2400,h_1600,c_limit/CES-2023-PEUGEOT_INCEPTION_CONCEPT_2301CN202.jpg"
          price={200}
        />
        <ActionAreaCard
          title="Card 3"
          description="This is the third card"
          image="https://media.wired.com/photos/63b8d0a771c6b526845f15a6/3:2/w_2400,h_1600,c_limit/CES-2023-PEUGEOT_INCEPTION_CONCEPT_2301CN202.jpg"
          price={300}
        />
        <ActionAreaCard
          title="Card 4"
          description="This is the fourth card"
          image="https://media.wired.com/photos/63b8d0a771c6b526845f15a6/3:2/w_2400,h_1600,c_limit/CES-2023-PEUGEOT_INCEPTION_CONCEPT_2301CN202.jpg"
          price={400}
        />
        <ActionAreaCard
          title="Card 5"
          description="This is the fifth card"
          image="https://media.wired.com/photos/63b8d0a771c6b526845f15a6/3:2/w_2400,h_1600,c_limit/CES-2023-PEUGEOT_INCEPTION_CONCEPT_2301CN202.jpg"
          price={500}
        />
        <ActionAreaCard
          title="Card 6"
          description="This is the sixth card"
          image="https://media.wired.com/photos/63b8d0a771c6b526845f15a6/3:2/w_2400,h_1600,c_limit/CES-2023-PEUGEOT_INCEPTION_CONCEPT_2301CN202.jpg"
          price={600}
        />
        <ActionAreaCard
          title="Card 7"
          description="This is the seventh card"
          image="https://media.wired.com/photos/63b8d0a771c6b526845f15a6/3:2/w_2400,h_1600,c_limit/CES-2023-PEUGEOT_INCEPTION_CONCEPT_2301CN202.jpg"
          price={700}
        />
        <ActionAreaCard
          title="Card 8"
          description="This is the eighth card"
          image="https://media.wired.com/photos/63b8d0a771c6b526845f15a6/3:2/w_2400,h_1600,c_limit/CES-2023-PEUGEOT_INCEPTION_CONCEPT_2301CN202.jpg"
          price={800}
        />
      </div>
    </>
  );
}

export default App;
