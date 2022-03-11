import { useRef } from "react";
import styled from "styled-components";

const listOfItems = [
  {
    name: "tranmautritam",
    description: "design",
  },
  {
    name: "loisvb",
    description: "art",
  },
  {
    name: "uixninja",
    description: "design",
  },
  {
    name: "itslopez",
    description: "art",
  },
  {
    name: "ui8net",
    description: "design",
  },
  {
    name: "_picolo",
    description: "art",
  },
];

const StackedMenu = () => {
  const itemRef = useRef([]);
  const stackRef = useRef(null);
  const baseScaleChange = 0.033333333;
  const baseTranslateChange = 0.7;

  const handleStackClick = (e) => {
    if (stackRef.current.className === "open") {
      handleBgClick();
      return;
    }
    e.stopPropagation();
    stackRef.current.className = "open";
    itemRef.current.forEach((e, i) => {
      const reverseIndex = itemRef.current.length - 1 - i;
      e.style.transform = `rotate(${reverseIndex * 1.1}deg) translate(-${
        reverseIndex * 0.2
      }rem, -${reverseIndex * 4}rem)`;
    });
  };

  const handleBgClick = () => {
    if (stackRef.current.className === "closed") {
      return;
    }
    stackRef.current.className = "closed";
    itemRef.current.forEach((e, i) => {
      const reverseIndex = itemRef.current.length - 1 - i;
      e.style.transform = `scale(${
        1 - reverseIndex * baseScaleChange
      }) translateY(-${baseTranslateChange * reverseIndex}rem)`;
    });
  };

  return (
    <StackedMenuWrapper onClick={handleBgClick}>
      <h3>Click on the stack below :</h3>
      <div
        ref={stackRef}
        id="stack"
        className="closed"
        onClick={(e) => handleStackClick(e)}
      >
        {listOfItems.map((item, i) => {
          const reverseIndex = listOfItems.length - 1 - i;

          return (
            <div
              style={{
                transform: `scale(${1 - reverseIndex * baseScaleChange}) 
          translateY(-${baseTranslateChange * reverseIndex}rem)`,
              }}
              className="single-block"
              ref={(el) => (itemRef.current[i] = el)}
              key={i}
            >
              <div className="content">
                <i className="fab fa-instagram" />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </StackedMenuWrapper>
  );
};

export default StackedMenu;

const StackedMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  position: relative;
  background: #fff8f9;
  color: #fd4670;

  #stack {
    position: absolute;
    bottom: 30%;
    left: calc(50% - 175px);
    text-align: center;
    cursor: pointer;
  }

  h3 {
    font-weight: bolder;
  }

  .single-block {
    position: absolute;
    bottom: 0;
    background: #fff;
    box-shadow: 0 0 10px #ffe1e1;
    border-radius: 10px;
    transition: ease-in-out 0.2s;
    width: 350px;

    .content {
      display: flex;
      align-items: center;
      padding: 11px 20px 9px;

      i {
        font-size: 38px;
        margin-right: 5px;
      }

      h3 {
        margin: 0;
        font-size: 14px;
        font-weight: bolder;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #561919;
      }

      p {
        color: #f5b0b0;
        margin: 0;
        font-size: 12px;
      }

      > div {
        text-align: left;
        margin-left: 10px;
        width: 180px;
      }
    }
  }
`;
