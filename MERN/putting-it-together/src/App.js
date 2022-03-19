import logo from "./logo.svg"
import "./App.css";
import PersonCard from "./components/PersonCard";

const peopleArr = [
  {
    firstName: "John",
    lastName: "Smith",
    age: 30,
    hairColor: "black",
  },
  {
    firstName: "Matt",
    lastName: "Kim",
    age: 38,
    hairColor: "black",
  },
  {
    firstName: "Eunice",
    lastName: "Kim",
    age: 38,
    hairColor: "blonde",
  },
  {
    firstName: "Roy",
    lastName: "Kim",
    age: 48,
    hairColor: "black",
  },
];

function App() {
  return (
    <div className="App">
      {peopleArr.map((profile, index) => (
        <PersonCard
        // key={index}
        firstName={profile.firstName}
        lastName={profile.lastName}
        age={profile.age}
        hairColor={profile.hairColor}
        />
      ))}
      {/* <PersonCard
        firstName= {peopleArr[0].firstName}
        lastName={peopleArr[0].lastName}
        age={peopleArr[0].hairColor}
        />
      <PersonCard
        firstName= {peopleArr[1].firstName}
        lastName={peopleArr[1].lastName}
        age={peopleArr[1].hairColor}
        />
      <PersonCard
        firstName= {peopleArr[2].firstName}
        lastName={peopleArr[2].lastName}
        age={peopleArr[2].hairColor}
        />
      <PersonCard
        firstName= {peopleArr[3].firstName}
        lastName={peopleArr[3].lastName}
        age={peopleArr[3].hairColor}
        /> */}
      
      
    </div>
  );
  }

export default App;
