import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import { getUsername } from "../features/user/userSlice";
import Button from "./Button";

function Home() {
  const username = useSelector(getUsername);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8  text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-amber-700">
          Crafting memories, One slice of crust at a time
        </span>
      </h1>

      {username === "" ? (
        <CreateUser />
      ) : (
        <Button type="primary" to="/menu">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
