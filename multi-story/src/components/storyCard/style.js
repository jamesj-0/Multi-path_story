import styled from 'styled-components'
import * as vars from '../../styles/variables'

export const Main = styled.main`
  width: ${vars.cardWidth};
  height ${vars.cardHeight};
  display: flex;
  flex-direction: column;
  background: ${vars.offWhite};
  margin: 0 auto;
  padding: 4rem 0;
`

export const MainStory = styled.section`
  background: ${vars.storyBlue};
  padding: 0.6rem;
  border-radius: 15px;
  height: auto;
  width: auto;
  color: white;
`

export const stagedStoriesContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

export const BackButton = styled.section`
  width: 7rem;
  background-color: grey;
  color: ${vars.offWhite};
  border-style: none;
  border-radius: 15px;
  margin: 0.5rem;
  cursor: pointer;
  padding: 1rem;

  transition: all 0.3s;

  &:hover {
    background: #78788c;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    position: relative;
    top: -2px;
    left: -2px;
  }
`

export const stagedSentence = styled.button`
  background-color: grey;
  color: ${vars.offWhite};
  border-style: none;
  border-radius: 15px;
  margin: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0.6rem;

  transition: all 0.3s;

  &:hover {
    background: #78788c;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    position: relative;
    top: -2px;
    left: -2px;
  }
`
export const styledForm = styled.form`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 8px;
`
export const formInput = styled.input`
  box-sizing: border-box;
  margin-top: 1rem;
  background: none;
  outline: none;
  width: 95%;
  align-self: center;
  resize: none;
  border: 0;
  transition: all 0.3s;
  border-bottom: 2px solid #bebed2;

  &:focus {
    border-bottom: 2px solid black;
  }
`

export const formButton = styled.button`
  margin: 1rem;
  height: 2rem;
  border-radius: 6px;
  border: 1px solid #ccc5c9;
`
