import React, { useEffect, useState } from 'react';

import './App.css';

function Tutorial() {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<number[] | null>(null);
  const [page, setPage] = useState<number>(1);

  function loadData() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (page === 1) {
        setData([1, 2, 3, 4, 5]);
      } else if (page === 2) {
        setData([6, 7, 8, 9, 10]);
      } else {
        setData(null);
      }
    }, 1000);
  }

  useEffect(loadData, [page]);

  function handleNext() {
    setPage((currentPage) => currentPage + 1);
  }

  function DropdownMenu() {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleClick = () => {
      setIsOpen((currentIsOpen) => !currentIsOpen);
    };

    // Function Component Example (using hooks)
    // let menu;
    // if (isOpen) {
    //   menu = (
    //     <ul>
    //       <li>Edit</li>
    //       <li>Remove</li>
    //       <li>Archive</li>
    //     </ul>
    //   );
    // }

    // return (
    //   <div>
    //     <button onClick={handleClick}>Actions</button>
    //     {menu}
    //   </div>
    // );

    // Conditional Operator ? true : false
    // return (
    //   <div>
    //     <button onClick={handleClick}>Actions</button>
    //     {isOpen ? (
    //       <ul>
    //         <li>Edit</li>
    //         <li>Remove</li>
    //         <li>Archive</li>
    //       </ul>
    //     ) : null}
    //   </div>
    // );

    // Logical && Operator
    return (
      <div>
        <button onClick={handleClick}>Actions</button>
        {isOpen && (
          <ul>
            <li>Edit</li>
            <li>Remove</li>
            <li>Archive</li>
          </ul>
        )}
      </div>
    );
  }

  function addMinutes(date: any, minutes: any) {
    return new Date(date.getTime() + minutes * 60000);
  }

  function Clock() {
    const [time, setTime] = React.useState(new Date());

    const handleClick1 = () => {
      setTime(addMinutes(time, 10));
      setTime(addMinutes(time, 10));
    };

    const handleClick2 = () => {
      setTime((previousTime) => addMinutes(previousTime, 10));
      setTime((previousTime) => addMinutes(previousTime, 10));
    };

    return (
      <div>
        <p>{time.toLocaleTimeString()}</p>
        <button onClick={handleClick1}>+ 10 Minutes</button>
        <button onClick={handleClick2}>+ 10 Minutes</button>
      </div>
    );
  }

  function Parent() {
    const handleRequest = (request: any) => {
      if (request.includes('car')) {
        alert('No');
      }
    };

    return (
      <div>
        <h1>Parent</h1>
        <Child onRequest={handleRequest} />
      </div>
    );
  }

  function Child(props: any) {
    const handleClick = () => {
      props.onRequest('Can I have the car?');
    };

    return (
      <div>
        <h2>Child</h2>
        <button onClick={handleClick}>Ask for the car</button>
      </div>
    );
  }

  return (
    <div className="container">
      {/* <div>
        <button onClick={handleClick}>Actions</button>
        {menu}
      </div> */}

      {/* <div>
        <button onClick={handleClick}>Actions</button>
        {isOpen ? (
          <ul>
            <li>Edit</li>
            <li>Remove</li>
            <li>Archive</li>
          </ul>
        ) : null}
      </div> */}

      <DropdownMenu />

      <Clock />

      {loading && <p>Loading...</p>}
      {data && <pre>{JSON.stringify(data, null, 1)}</pre>}
      <span>Current Page: {page}</span>
      <button onClick={handleNext}>Next</button>

      <Parent />
    </div>
  );
}

export default Tutorial;
