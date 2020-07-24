import React from 'react'
import * as SC from './style'

export default function StoryCard() {
  const [story, setStory] = React.useState('')
  const [staging, setStaging] = React.useState({})
  // const [stagingIndex, setStagingIndex]
  const [userInput, setUserInput] = React.useState('')

  React.useEffect(() => {})

  const index = Object.keys(staging).length % 4

  return (
    <SC.Main>
      <SC.MainStory>{story}</SC.MainStory>
      <SC.stagedStoriesContainer>
        {Object.entries(staging).map(([key, value]) => (
          <SC.stagedSentence
            onClick={() => {
              let storyIndex = Object.keys(story).length + 1
              return setStory(
                Object.assign({ [storyIndex]: story + ' ' + value }),
              )
            }}
          >
            {value}
          </SC.stagedSentence>
        ))}
      </SC.stagedStoriesContainer>
      <SC.formInput onChange={(e) => setUserInput(e.target.value)} />
      <SC.formButton
        value={userInput}
        onClick={() => {
          if (userInput) {
            const obj = { [index]: userInput }
            setStaging(Object.assign(staging, obj))
            setUserInput('')
          }
        }}
      />
    </SC.Main>
  )
}
