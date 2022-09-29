import React from "react";

const Questions = () => {
  return (
    <div className="mt-16 w-[90%] mx-auto">
      <h1 className="text-4xl font-bold text-center">React Basic Concepts</h1>

{/* Question 1 */}

      <div className="mt-8">
        <h3 className="text-3xl  font-semibold">
          1. How Does React Works ??{" "}
        </h3>

        <p className="mt-4 text-lg">
          React implements a virtual DOM that is basically a DOM tree
          representation in JavaScript. So when it needs to read or write to the
          DOM, it will use the virtual representation of it. Then the virtual
          DOM will try to find the most efficient way to update the browser’s
          DOM. Unlike browser DOM elements, React elements are plain objects and
          are cheap to create. React DOM takes care of updating the DOM to match
          the React elements. The reason for this is that JavaScript is very
          fast and it’s worth keeping a DOM tree in it to speed up its
          manipulation.
        </p>
      </div>


{/* Question 2 */}

<div className="mt-8">
    <h3 className="text-3xl font-semibold">2. What is the Difference Between Props and State ?? </h3>

    <div>
        <h6 className="text-lg font-semibold mt-3">The Difference Between Props and State Are Described Below :</h6>

        <div className="mt-8 flex justify-around text-center">
            <div>
            <h4 className="text-2xl font-bold">Props</h4>
            <ul className="text-lg font-semibold">
                <li>THis is the dummy text i am setting temporarily</li>
                <li>THis is the dummy text i am setting temporarily</li>
                <li>THis is the dummy text i am setting temporarily</li>
                <li>THis is the dummy text i am setting temporarily</li>
            </ul>
            </div>
            <div>
            <h4 className="text-2xl font-bold">State</h4>
            <ul  className="text-lg font-semibold">
                <li>THis is the dummy text i am setting temporarily</li>
                <li>THis is the dummy text i am setting temporarily</li>
                <li>THis is the dummy text i am setting temporarily</li>
                <li>THis is the dummy text i am setting temporarily</li>
            </ul>
            </div>
            
        </div>



    </div>
    
</div>

{/* Question 3 */}
 <div className="mt-10">
    <h3 className="text-3xl font-semibold">3. What Is The Use of useEffect Except Fetching Data From API ?? </h3>

    <div className="mt-2">
    <p className="text-lg font-semibold mb-5">The useEffect Hook allows  us to perform side effects in our components. useEffect Can be used in the following cases : </p>
     <ul className="text-lg mb-6">
        <li>1. Running on state change : Validating input field</li>
        <li>2. Running on state change : Live filtering</li>
        <li>3. Running on state change : Trigger animation on new array value</li>
        <li>4. Running on props change : Updating fetched API data to get updated price</li>
     </ul>
     




    </div>
 </div>


    </div>
  );
};

export default Questions;
