import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  font-family: "Sawarabi Gothic", sans-serif;
  align-items: center;
  width: 400px;
  margin-bottom: 40px;
  background-color: #fff;
  padding: 40px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  border-radius: 10px;
  header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 16px;
    div :hover {
      color: #f6cca2;
    }
    button {
      border: none;
      background-color: transparent;
      outline: none;
    }
  }
  table {
    border-collapse: separate;
    border-spacing: 0 8px;
    width: 100%;
    th {
      border: none;
      padding: 8px;
      text-align: center;
    }
    td {
      border: none;
      padding: 8px 0;
      width: calc(100% / 7);
      text-align: center;
      cursor: pointer;
      :hover {
        color: #f6cca2;
      }
    }
    .event {
      color: #fff;
      background-color: #da8e41;
      border-radius: 10px;
    }
  }
`;

export const Icon = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0;
  :hover {
    color: #f6cca2;
  }
`;
export const Dialog = styled.div`
  position: absolute;
  top: 40%;
  left: 40%;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  transform: translate(-50%, -50%);
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
    :hover {
      background-color: #da8e41;
      color: #fff;
      border-radius: 8px;
    }
  }
`;

export const TitleHeader = styled.button`
  font-size: 24px;
  margin-right: 16px;
  margin-left: 16px;
  font-weight: bold;
`;
export const Month = styled(TitleHeader)`
  cursor: pointer;
`;

export const Year = styled(TitleHeader)`
  pointer-events: none;
`;
