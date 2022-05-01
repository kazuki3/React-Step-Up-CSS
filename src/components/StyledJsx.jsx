export const StyledJsx = () => {
  return (
    <>
      <div class="container">
        <p class="title">- Styled Jsx -</p>
        <button class="button">Fight!</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px #392eff;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        .title {
          margin: 0;
          color: #3d84e8;
        }

        .button {
          background-color: #abedd8;
          border: none;
          padding: 8px;
          border-radius: 8px;
          &:hover {
            background-color: #46cddf;
            color: #ffffff;
            cursor: pointer;
          }
        }
      `}</style>
    </>
  );
};
